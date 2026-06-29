"use client";

import { useEffect } from "react";

type MotionItem = {
  currentRotate: number;
  currentX: number;
  currentY: number;
  element: HTMLElement;
  rotate: number;
  x: number;
  y: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

const toNumber = (value: string | undefined, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const getMotionProfile = (element: HTMLElement) => {
  const movesFromLeft = element.classList.contains("slide-from-left");
  const movesFromRight = element.classList.contains("slide-from-right");
  const movesFromBottom = element.classList.contains("slide-from-bottom");
  const soft = element.classList.contains("slide-range-soft") ? 1.15 : 1;

  const inferredX = movesFromLeft ? -72 : movesFromRight ? 72 : 0;
  const inferredY = movesFromBottom || inferredX === 0 ? 58 : 30;
  const inferredRotate = inferredX === 0 ? 0 : inferredX / 18;

  return {
    rotate: toNumber(element.dataset.scrollRotate, inferredRotate) * soft,
    x: toNumber(element.dataset.scrollX, inferredX) * soft,
    y: toNumber(element.dataset.scrollY, inferredY) * soft
  };
};

export function ScrollMotionController() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;
    let items: MotionItem[] = [];

    const clearTransforms = () => {
      items.forEach(({ element }) => {
        element.style.removeProperty("--scroll-x");
        element.style.removeProperty("--scroll-y");
        element.style.removeProperty("--scroll-rotate");
      });
    };

    const collectItems = () => {
      items = Array.from(document.querySelectorAll<HTMLElement>(".slide-on-scroll")).map(
        (element) => {
          const profile = getMotionProfile(element);

          return {
            currentRotate: 0,
            currentX: 0,
            currentY: 0,
            element,
            ...profile
          };
        }
      );
    };

    const applyMotion = () => {
      frameId = 0;

      if (reducedMotion.matches) {
        clearTransforms();
        return;
      }

      const viewportHeight = window.innerHeight || 1;
      const horizontalScale = window.innerWidth < 768 ? 0 : 1;
      const rotationScale = window.innerWidth < 768 ? 0 : 1;
      let needsNextFrame = false;

      items.forEach((item) => {
        const rect = item.element.getBoundingClientRect();
        const entryStart = viewportHeight * 1.05;
        const entryStop = viewportHeight * 0.58;
        const entryProgress = clamp((entryStart - rect.top) / (entryStart - entryStop), 0, 1);
        const travel = 1 - easeOutCubic(entryProgress);

        const targetX = travel * item.x * horizontalScale;
        const targetY = travel * item.y;
        const targetRotate = travel * item.rotate * rotationScale;

        item.currentX += (targetX - item.currentX) * 0.18;
        item.currentY += (targetY - item.currentY) * 0.18;
        item.currentRotate += (targetRotate - item.currentRotate) * 0.18;

        if (
          Math.abs(targetX - item.currentX) > 0.08 ||
          Math.abs(targetY - item.currentY) > 0.08 ||
          Math.abs(targetRotate - item.currentRotate) > 0.01
        ) {
          needsNextFrame = true;
        }

        item.element.style.setProperty("--scroll-x", `${item.currentX.toFixed(2)}px`);
        item.element.style.setProperty("--scroll-y", `${item.currentY.toFixed(2)}px`);
        item.element.style.setProperty("--scroll-rotate", `${item.currentRotate.toFixed(3)}deg`);
      });

      if (needsNextFrame) {
        frameId = window.requestAnimationFrame(applyMotion);
      }
    };

    const scheduleMotion = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(applyMotion);
      }
    };

    const refreshItems = () => {
      collectItems();
      scheduleMotion();
    };

    refreshItems();

    window.addEventListener("scroll", scheduleMotion, { passive: true });
    window.addEventListener("resize", refreshItems);
    reducedMotion.addEventListener("change", refreshItems);

    return () => {
      window.removeEventListener("scroll", scheduleMotion);
      window.removeEventListener("resize", refreshItems);
      reducedMotion.removeEventListener("change", refreshItems);
      window.cancelAnimationFrame(frameId);
      clearTransforms();
    };
  }, []);

  return null;
}

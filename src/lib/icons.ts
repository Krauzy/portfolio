import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faChartLine,
  faCheck,
  faCloud,
  faCode,
  faDatabase,
  faDiagramProject,
  faEnvelope,
  faEye,
  faLayerGroup,
  faMicrochip,
  faNetworkWired,
  faRocket,
  faServer,
  faShieldHalved,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";
import {
  faAws,
  faDocker,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export const iconMap = {
  arrowRight: faArrowRight,
  aws: faAws,
  chart: faChartLine,
  check: faCheck,
  cloud: faCloud,
  code: faCode,
  database: faDatabase,
  diagram: faDiagramProject,
  docker: faDocker,
  email: faEnvelope,
  eye: faEye,
  github: faGithub,
  layer: faLayerGroup,
  linkedin: faLinkedin,
  microchip: faMicrochip,
  network: faNetworkWired,
  rocket: faRocket,
  server: faServer,
  shield: faShieldHalved,
  terminal: faTerminal
} satisfies Record<string, IconDefinition>;

export type IconKey = keyof typeof iconMap;

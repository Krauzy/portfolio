import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Motion } from "./styles";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

interface GhostMotionProperties {
  color: string;
}

export default function GhostMotion({ 
  color
}: GhostMotionProperties) {
  return (
    <Motion color={color}>
      <FontAwesomeIcon icon={faGhost} />
    </Motion>
  )
}

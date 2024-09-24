import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Motion } from "./styles";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

interface GhostMotionProperties {
  color: 'primary' | 'secondary'
}

export default function GhostMotion({ 
  color
}: GhostMotionProperties) {
  return (
    <Motion isPrimary={color === 'primary'}>
      <FontAwesomeIcon icon={faGhost} />
    </Motion>
  )
}

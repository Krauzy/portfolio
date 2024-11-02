import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingContainer } from "./styles";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <LoadingContainer>
      <FontAwesomeIcon icon={faGhost} />
    </LoadingContainer>
  )
}

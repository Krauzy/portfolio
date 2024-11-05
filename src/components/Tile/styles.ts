import styled from "styled-components"

export const TileContainer = styled.div<{ maxWidth: number }>`
  width: 100%;
  max-width: ${props => `${props.maxWidth}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.4em 2em;
`;

export const NotificationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 998;
  display: flex;
  flex-direction: column-reverse;
  align-items: end;
  padding: 5em;
`;

export const Notification = styled.div<{ type?: 'success' | 'error' | 'warning' | 'primary' }>`
  background-color: ${props => {
    switch(props.type) {
      case "success":
        return props.theme.color.success;

      case "error":
        return props.theme.color.error;

      case "warning":
        return props.theme.color.yellow;

      default:
        return props.theme.color.purple
    }
  }};

  height: fit-content;
  width: fit-content;
`;

export const NotificationTitle = styled.span`

`;

export const  NotificationDescription = styled.p`

`;

export const NotificationCloseButton = styled.button`

`;

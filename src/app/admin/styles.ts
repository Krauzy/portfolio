import styled from "styled-components";

export const AdminContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdminContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const AdminTitle = styled.span`
  font-family: ${props => props.theme.fonts.spaceMono};
  font-size: 5em;
  font-weight: 700;
  color: ${props => props.theme.color.purple};
  letter-spacing: 5px;
`;

export const AdminSubtitle = styled.p`
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.variation.secondary(.8)};
  text-align: center;
  letter-spacing: 1px;
  font-size: .8em;
`;

export const AdminValuedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  width: 100%;
  max-width: 30em;
  gap: .7em;
`;

export const AdminValuedRow = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
`;

export const LabelSide = styled.span`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: right;
  color: ${props => props.theme.color.secondary};
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 600;
  font-size: 1em;

  @media screen and (max-width: 1100px) {
    font-size: .8em;
  }
`;

export const ValueSide = styled.a`
  width: 50%;
  display: flex;
  color: ${props => props.theme.color.pink};
  font-family: ${props => props.theme.fonts.spaceMono};
  font-size: 1em;

  ${props => props.href && `text-decoration: underline`};

  @media screen and (max-width: 1100px) {
    font-size: .8em;
  }
`;

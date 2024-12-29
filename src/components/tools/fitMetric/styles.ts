import styled, { css } from "styled-components";

export const FitMetricContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    gap: 4em;
  }
`;

export const FitMetricInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  gap: 2.5em;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const FitMetricResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 49%;
  background-color: ${props => props.theme.color.variation.secondary(.1)};
  border-radius: 8px;
  gap: 1em;

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 3em 0;
  }
`;

export const FitMetricSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
`;

export const FitMetricSelectContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3em;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    gap: 1em;
  }
`;

export const FitMetricSelectTitle = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};

  @media screen and (max-width: 1100px) {
    font-size: 1em;
  }
`;

export const FitMetricSelect = styled.span<{ active?: boolean }>`
  border: 2px solid ${props => props.active ? props.theme.color.purple : props.theme.color.grey};
  padding: .5em 1em;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.active ? props.theme.color.variation.secondary(1) : props.theme.color.grey};
  cursor: pointer;
  transition: all .2s ease-in-out;

  ${props => props.active ? css`
    background-color: ${props.theme.color.purple};
  ` : css`
    &:hover {
      color: ${props.theme.color.purple};
      border-color: ${props.theme.color.purple};
    }
  `}

  @media screen and (max-width: 1100px) {
    text-align: center;
    font-size: .9em;
  }
`;

export const FitMetricRunContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FitMetricRunButton = styled.button`
  border-radius: 8px;
  background-color: ${props => props.theme.color.purple};
  width: 100%;
  height: 3em;
  font-weight: 600;
  font-size: 1em;
  color: ${props => props.theme.color.variation.secondary(1)};
  transition: all .2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.color.yellow};
    color: ${props => props.theme.color.variation.primary(1)};
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const FitMetricFeedbackBox = styled.div<{ min?: boolean }>`
  width: ${props => props.min ? '47%' : '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5em;
`;

export const FitMetricFeedbackValue = styled.span`
  color: ${props => props.theme.color.purple};
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 600;
`;

export const FitMetricFeedbackTitle = styled.span`
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 400;
  font-size: 1.1em;
  color: ${props => props.theme.color.variation.secondary(.8)};
`;

export const FitMetricIMCIndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 100%;
  margin-top: 3em;
`;

export const FitMetricIMCIndexTitle = styled.span`
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 400;
  font-size: 1.1em;
  color: ${props => props.theme.color.variation.secondary(.8)};
`;

export const FitMetricIMCIndexContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  align-items: center;
`;

export const FitMetricIMCIndex  = styled.span<{ active?: boolean, backgroundColor: string, color: string }>`
  width: 60%;
  background-color: ${props => props.active ? props.backgroundColor : 'transparent'};
  border: 1px solid ${props => props.backgroundColor};
  text-align: center;
  padding: .25em;
  border-radius: 8px;
  font-weight: 500;
  color: ${props => props.active ? props.color : props.backgroundColor};

  @media screen and (max-width: 1100px) {
    width: 80%;
    font-size: .9em;
  }
`;

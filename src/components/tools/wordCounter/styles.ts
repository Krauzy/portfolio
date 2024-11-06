import styled from "styled-components"

export const WordCounterContent = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color.variation.secondary(.1)};
  display: flex;
  padding: .2em;
  border-radius: 8px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const WordCounterEditor = styled.textarea`
  background-color: ${props => props.theme.color.primary};
  resize: none;
  outline: none;
  border-radius: 5px;
  width: 70%;
  padding: 1em;
  font-family: ${props => props.theme.fonts.spaceMono};
  letter-spacing: 1px;
  color: ${props => props.theme.color.secondary};
  font-size: .9em;
  height: 60vh;

  @media screen and (max-width: 1100px) {
    width: 100%
  }
`;

export const WordCounterFeedback = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 1em;
  gap: 4em;

  @media screen and (max-width: 1100px) {
    width: 100%
  }
`;

export const WordCounterFeedbackContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
`;

export const WordCounterFeedbackBox = styled.div<{ min?: boolean }>`
  width: ${props => props.min ? '47%' : '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5em;
`;

export const WordCounterFeedbackValue = styled.span`
  color: ${props => props.theme.color.purple};
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 600;
`;

export const WordCounterFeedbackTitle = styled.span`
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 400;
  font-size: 1.1em;
  color: ${props => props.theme.color.variation.secondary(.8)};
`;

export const WordCounterTopKeyWordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WordCounterTopKeyWordsTitle = styled.span`
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 400;
  font-size: 1.1em;
  color: ${props => props.theme.color.variation.secondary(.8)};
`;

export const WordCounterTopKeyWordsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2em;
  padding: 0 2em;
  gap: .5em;
`;

export const TopKeywordRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopKeywordText = styled.span`
  font-size: 1em;
  font-family: ${props => props.theme.fonts.spaceMono};
  text-overflow: ellipsis;
  font-weight: 600;
  color: ${props => props.theme.color.secondary};
`;

export const TopKeywordCount = styled.span`
  color: ${props => props.theme.color.purple};
  font-weight: 600;
  font-size: 1em;
`;

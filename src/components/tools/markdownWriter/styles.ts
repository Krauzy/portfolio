import styled from "styled-components"

export const MarkdownContent = styled.div`
  width: 100%;
  display: flex;
  border-radius: 12px;
  border: 2px solid ${props => props.theme.color.variation.secondary(.5)};
  height: 100vh;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const MarkdownWriterBox = styled.textarea`
  width: 50%;
  resize: none;
  outline: none;
  padding: 1em;
  font-family: ${props => props.theme.fonts.spaceMono};
  letter-spacing: 1px;
  background-color: ${props => props.theme.color.primary};
  border-right: 1px solid ${props => props.theme.color.variation.secondary(.2)};
  color: ${props => props.theme.color.secondary};

  @media screen and (max-width: 1100px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid ${props => props.theme.color.variation.secondary(.2)};
    height: 50%;
  }
`;

export const MarkdownShow = styled.div`
  width: 50%;
  padding: 1em;
  background-color: ${props => props.theme.color.primary};
  border-left: 1px solid ${props => props.theme.color.variation.secondary(.2)};
  color: ${props => props.theme.color.secondary};
  font-family: ${props => props.theme.fonts.spaceMono};

  h1 {
    font-size: 2em;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.color.variation.primary(.2)};
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.8em;
  }

  h4 {
    font-size: 1.5em;
  }

  h5 {
    font-size: 1.2em;
  }

  h6 {
    font-size: 1em;
  }

  a {
    color: ${props => props.theme.color.purple};
    text-decoration: underline;
  }

  ul {
    list-style-type: "•";
  }

  code {
    background-color: ${props => props.theme.color.variation.secondary(.2)};
    padding: .5em;
    border-radius: 6px;
  }

  blockquote {
    padding-left: 1em;
    color: ${props => props.theme.color.variation.secondary(.5)};
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    border-left: none;
    border-top: 1px solid ${props => props.theme.color.variation.secondary(.2)};
    height: 50%;
  }
`;


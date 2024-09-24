import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components"

export const HomeWelcomeContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10em;
  padding: 0 2em;
  margin-bottom: 8em;
`;

export const MessageWelcomeContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  gap: 1.5em;
`;

export const GhostAssetContainer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
`;

const randomTranslate = () => Math.floor(Math.random() * 21) - 10;

const translateMotion = keyframes`
  0% { transform: translate(${randomTranslate()}px, ${randomTranslate()}px); }
  10% { transform: translate(${randomTranslate()}px, ${randomTranslate()}px); }
  20% { transform: translate(${randomTranslate()}px, ${randomTranslate()}px); }
  30% { transform: translate(${randomTranslate()}px, ${randomTranslate()}px); }
  40% { transform: translate(${randomTranslate()}px, ${randomTranslate()}px); }
  50% { transform: translate(${randomTranslate()}px, ${randomTranslate()}px); }
  60% { transform: translate(${randomTranslate()}px, ${randomTranslate()}px); }
  70% { transform: translate(${randomTranslate()}px, ${randomTranslate()}px); }
  80% { transform: translate(${randomTranslate()}px, ${randomTranslate()}px); }
  90% { transform: translate(${randomTranslate()}px, ${randomTranslate()}px); }
  100% { transform: translate(${randomTranslate()}px, ${randomTranslate()}px); }
`

export const GhostAsset = styled.img`
  animation: ${translateMotion} 10s ease-in-out infinite;

  &:hover {
    animation: ${translateMotion} 1s ease-in-out infinite;
  }
`;

export const HelloContainer = styled(TooltipTrigger)`
  display: flex;
  gap: .7em;
  align-items: center;
  font-size: 2.5em;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.spaceMono};
  width: fit-content;
`;

export const HelloMessage = styled.span`
  color: ${props => props.theme.color.secondary};
`;

export const HelloSecondaryMessage = styled.span`
  color: ${props => props.theme.color.purple};
`;

export const OpeningMessage = styled.p`
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};
  letter-spacing: 1px;
  font-size: 1.3em;
  font-weight: 300;

  span {
    color: ${props => props.theme.color.purple};
    font-weight: 700;
    font-size: 1.3em;
  }
`;

export const ExplainingMessageBox = styled(TooltipContent)`
  border-radius: 8px;
  background-color: ${props => props.theme.color.purple};
  border-color: ${props => props.theme.color.purple};
  color: ${props => props.theme.color.secondary};
  font-family: ${props => props.theme.fonts.spaceMono};
`;

export const WarningMessage = styled.p`
  color: ${props => props.theme.color.error};
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 700;
  padding-top: 2em;
  letter-spacing: 1px;
`;

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.color.secondary};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2.5em;
  gap: 3em;
  border-radius: 1.5em;
`;

export const IntroHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2em;
`;

export const IntroTitle = styled.span`
  font-size: 1.8em;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.primary};
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2em;
  font-family: ${props => props.theme.fonts.spaceMono};
`;

export const IntroDescription = styled.p`
  font-size: 1.1em;
  color: ${props => props.theme.color.primary};
`;

export const DoneContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8em;
  gap: 4em;
`;

export const DoneHeader = styled.div`
  display: flex;
  gap: 1.2em;
  align-items: center;
`;

export const DoneTitle = styled.span`
  font-size: 1.8em;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};
`;

export const TechContainer = styled.div`
  display: flex;
  width: 85%;
  gap: 3em;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const TechWidget = styled.div<{ customColor: string }>`
  display: flex;
  flex-direction: column;
  gap: .5em;
  align-items: center;
  color: ${props => props.theme.color.grey};
  transition: all .2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${props => props.customColor};
  }
`;

export const TechIcon = styled(FontAwesomeIcon)`
  font-size: 2.5em;
`;

export const TechDescription = styled.span`
  font-size: .8em;
  font-family: ${props => props.theme.fonts.spaceMono};
`;

export const SkillContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin-top: 2em;
`;

export const SkillBarContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const SkillTitle = styled.span`
  width: 20%;
  color: ${props => props.theme.color.secondary};
  font-weight: 600;
  font-family: ${props => props.theme.fonts.spaceMono};
`;

const pickColor = (index: number, props: any) => {
  switch (index) {
    case 1:
      return props.theme.color.pink;
    
    case 2:
      return props.theme.color.purple;
    
    case 3:
      return props.theme.color.success;
    
    case 4:
      return props.theme.color.yellow;

    case 5:
      return props.theme.color.secondary;
  }
}

export const SkillBarBox = styled.div`
  width: 80%;
`;

export const SkillBar = styled.div<{ value: number, index: number }>`
  background-color: ${props => pickColor(props.index, props)};
  width: ${props => `${props.value}%`};
  height: 2em;
  border-radius: 6px;
`;

export const SkillWarningMessage = styled.small`
  width: 85%;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.error};
  font-size: .8em;
  font-weight: 300;
`;

export const ResumeContainer = styled.div`
  background-color: ${props => props.theme.color.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 0 6em 0;
  border-radius: 1.5em;
  margin-top: 8em;
  gap: 6em;
`;

export const ResumeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2em;
`;

export const ResumeTitle = styled.span`
  font-size: 1.8em;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.primary};
`;

export const ResumeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

export const ResumeSection = styled.div`
  display: flex;
  width: 80%;
`;

export const ResumeLogoBox = styled.div`
  width: 10%;
`;

export const ResumeLogo = styled.img`
  width: 5em;
  border-radius: 50%;
`;

export const ResumeMainContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: .2em;
`;

export const ResumeJobTitle = styled.span`
  font-weight: 800;
  font-family: ${props => props.theme.fonts.spaceMono};
  font-size: 1.2em;
  color: ${props => props.theme.color.primary};
`;

export const ResumeJobContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ResumeJobContentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResumeJobSubtitle = styled.span`
  font-weight: 800;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.primary};
`;

export const ResumeDate = styled.span`
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 500;
  color: ${props => props.theme.color.primary};
`;

export const ResumeDescriptionContainer = styled.div`
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  gap: .5em;
`;

export const ResumeDescription = styled.p`
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.primary};
  opacity: 50%;
  font-size: .9em;
  font-weight: 200;
  text-align: justify;
`;

export const RepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 8em;
`;

export const RepoHeader = styled.div`
  display: flex;
  gap: 1.2em;
  align-items: center;
`;

export const RepoTitle = styled.span`
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};
  font-weight: 700;
  font-size: 1.8em;
`;

export const RepoContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  align-items: center;
  justify-content: center;
  gap: 3em;
  margin-top: 5em;
`;

export const RepoWidget = styled.a<{ index: number }>`
  background-color: ${props => [0, 3].includes(props.index) ? props.theme.widget.pack1.background : [1, 4].includes(props.index) ? props.theme.widget.pack2.background : props.theme.widget.pack3.background};
  color: ${props => [0, 3].includes(props.index) ? props.theme.widget.pack1.color : [1, 4].includes(props.index) ? props.theme.widget.pack2.color : props.theme.widget.pack3.color};
  padding: 1.5em 2em;
  width: 35%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: .6em;
`;

export const RepoWidgetMark = styled(FontAwesomeIcon)`
  font-size: 1em;
`;

export const RepoWidgetTitle = styled.span`
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 600;
`;

export const RepoWidgetHeader = styled.div`
  display: flex;
  align-items: center;
  gap: .8em;
`;

export const RepoWidgetContent = styled.p`
  font-family: ${props => props.theme.fonts.spaceMono};
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: .8em;
`;

export const RepoWidgetFooter = styled.div`
  display: flex;
  gap: 1.6em;
`;

export const RepoLanguageColor = styled.span<{ customColor: string }>`
  display: flex;
  width: 8px;
  height: 8px;
  background-color: ${props => props.customColor};
  border-radius: 50%;
`;

export const RepoFooterIcon = styled(FontAwesomeIcon)`
  font-size: .8em;
`;

export const RepoFooterDescription = styled.span`
  font-size: .8em;
  font-family: ${props => props.theme.fonts.spaceMono};
`;

export const RepoWidgetFooterPack = styled.div`
  display: flex;
  align-items: center;
  gap: .5em;
`;

export const FooterContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color.purple};
  padding: 3em;
  display: flex;
  justify-content: space-between;
  margin-top: 8em;
  border-radius: 1.2em;
`;

export const FooterHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2em;
`;

export const FooterTitle = styled.span`
  font-size: 1.8em;
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 800;
  color: ${props => props.theme.color.secondary};
`;

export const FooterSideRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterSideLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const FooterPhoto = styled.img`
  width: 20em;
  border-radius: 50%;
  border: 5px solid ${props => props.theme.color.primary};
`;

export const FooterDescription = styled.span`
  color: ${props => props.theme.color.secondary};
  font-family: ${props => props.theme.fonts.spaceMono};
`;

export const FooterLocationContainer = styled.div`
  display: flex;
  color: ${props => props.theme.color.secondary};
  align-items: center;
  gap: .6em;
`;

export const FooterLocationIcon = styled(FontAwesomeIcon)`
  font-size: 1.3em;
`;

export const FooterLocationLabel = styled.span`
  font-size: .9em;
  font-family: ${props => props.theme.fonts.spaceMono};
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const FooterSocialLink = styled.a<{ customColor: string }>`
  font-size: 1.3em;
  background-color: ${props => props.customColor};
  color: ${props => props.theme.color.secondary};
  display: flex;
  width: 1.8em;
  height: 1.8em;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: .4em;
`;

export const Assignment = styled.span`
  font-family: ${props => props.theme.fonts.alexBrush};
  font-size: 2em;
  color: ${props => props.theme.color.secondary};
  margin-top: 3em;
`;

export const FooterMessage = styled.span`
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};
  margin-top: .6em;

  a {
    font-weight: 600;
    text-decoration: underline;
  }
`;

'use client'

import Navbar from "@/components/Navbar"
import Tile from "@/components/Tile"
import getLocale, { localeUtils } from "@/config/data"
import { ThemeContext } from "@/contexts/ThemeContext"
import { useCallback, useContext } from "react"
import { Assignment, DoneContainer, DoneHeader, DoneTitle, ExplainingMessageBox, FooterContainer, FooterDescription, FooterHeader, FooterLocationContainer, FooterLocationIcon, FooterLocationLabel, FooterMessage, FooterPhoto, FooterSideLeft, FooterSideRight, FooterSocialContainer, FooterSocialLink, FooterTitle, GhostAsset, GhostAssetContainer, HelloContainer, HelloMessage, HelloSecondaryMessage, HomeWelcomeContainer, IntroContainer, IntroContent, IntroDescription, IntroHeader, IntroTitle, MessageWelcomeContainer, OpeningMessage, RepoContainer, RepoContent, RepoFooterDescription, RepoFooterIcon, RepoHeader, RepoLanguageColor, RepoTitle, RepoWidget, RepoWidgetContent, RepoWidgetFooter, RepoWidgetFooterPack, RepoWidgetHeader, RepoWidgetMark, RepoWidgetTitle, ResumeContainer, ResumeContent, ResumeDate, ResumeDescription, ResumeDescriptionContainer, ResumeHeader, ResumeJobContent, ResumeJobContentSection, ResumeJobSubtitle, ResumeJobTitle, ResumeLogo, ResumeLogoBox, ResumeMainContent, ResumeSection, ResumeTitle, SkillBar, SkillBarBox, SkillBarContainer, SkillContainer, SkillTitle, SkillWarningMessage, TechContainer, TechDescription, TechIcon, TechWidget, WarningMessage } from "./styles"
import {
  Tooltip,
  TooltipProvider,
} from "@/components/ui/tooltip"
import GhostMotion from "@/components/GhostMotion"
import { faBookmark, faCodeBranch, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {

  const { locale } = useContext(ThemeContext)
  const localeData = getLocale(locale);
  const title = localeData.menu.home;
  
  const getOpeningMessage = useCallback(() => {
    const currentHour = (new Date()).getHours();

    if (currentHour > 18 || currentHour <= 4) return localeData.helloMessage.night.split(' ');
    else if (currentHour >= 5 && currentHour <= 11) return localeData.helloMessage.morning.split(' ');
    else return localeData.helloMessage.night.split(' ');
  }, [localeData.helloMessage.morning, localeData.helloMessage.night]);

  const getDateDescription = useCallback((date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    let monthDesc = ''

    if (locale === 'pt')
      monthDesc = localeUtils.pt.months(month);
    else
      monthDesc = localeUtils.en.months(month);

    return `${monthDesc} ${year}`
  }, [locale]);
  
  return (
    <Tile maxWidth={1440} title={`krauzy • ${title}`}>
      <Navbar selected={'home'} />
      {/* WELCOME */}
      <HomeWelcomeContainer>
        <MessageWelcomeContainer>
          <TooltipProvider>
            <Tooltip>
              <HelloContainer>
                <HelloMessage>{getOpeningMessage()[0]}</HelloMessage>
                <HelloSecondaryMessage>{getOpeningMessage()[1]}</HelloSecondaryMessage>
              </HelloContainer>
              <ExplainingMessageBox>
                <p>{localeData.helloMessage.explainingMessage((new Date()).toTimeString().split(' ')[0])}</p>
              </ExplainingMessageBox>
            </Tooltip>
          </TooltipProvider>
          <OpeningMessage dangerouslySetInnerHTML={{__html: localeData.openingMessage}}></OpeningMessage>
          <OpeningMessage>{localeData.secondaryOpeningMessage}</OpeningMessage>
          <WarningMessage>{localeData.warningOpeningMessage}</WarningMessage>
        </MessageWelcomeContainer>
        <GhostAssetContainer>
          <GhostAsset src={'/assets/ghost.svg'} />
        </GhostAssetContainer>
      </HomeWelcomeContainer>
      {/* INTRO */}
      <IntroContainer>
        <IntroHeader>
          <GhostMotion color="primary" />
          <IntroTitle>{localeData.resume.about.title}</IntroTitle>
          <GhostMotion color="primary" />
        </IntroHeader>
        <IntroContent>
          {localeData.resume.about.description.map((descriptionItem) => (
            <IntroDescription key={descriptionItem}>{descriptionItem}</IntroDescription>
          ))}
        </IntroContent>
      </IntroContainer>
      {/* DONE */}
      <DoneContainer>
        <DoneHeader>
          <GhostMotion color="secondary" />
          <DoneTitle>{localeData.resume.do.title}</DoneTitle>
          <GhostMotion color="secondary" />
        </DoneHeader>
        <TechContainer>
          {localeData.resume.do.languages.map(tech => (
            <TechWidget key={tech.name} customColor={tech.color ?? "black"}>
              <TechIcon icon={tech.logo} />
              <TechDescription>{tech.name ?? ""}</TechDescription>
            </TechWidget>
          ))}
        </TechContainer>
        <SkillContainer>
          {localeData.resume.do.metrics.map((metric, index) => (
            <SkillBarContainer key={metric.title}>
              <SkillTitle>{metric.title}</SkillTitle>
              <SkillBarBox>
                <SkillBar value={metric.value} index={index + 1} />
              </SkillBarBox>
            </SkillBarContainer>
          ))}
        </SkillContainer>
        <SkillWarningMessage>{localeData.resume.do.warningMetricMessage}</SkillWarningMessage>
      </DoneContainer>
      <ResumeContainer>
        <ResumeHeader>
          <GhostMotion color="primary" />
          <ResumeTitle>{localeData.resume.done.title}</ResumeTitle>
          <GhostMotion color="primary" />
        </ResumeHeader>
        <ResumeContent>
          {localeData.resume.done.timeline.map(job => (
            <ResumeSection key={job.title}>
              <ResumeLogoBox>
                <ResumeLogo src={job.logo} />
              </ResumeLogoBox>
              <ResumeMainContent>
                <ResumeJobTitle>{job.title}</ResumeJobTitle>
                <ResumeJobContent>
                  {job.tiers.map(tier => (
                    <ResumeJobContentSection key={tier.description}>
                      <ResumeJobSubtitle>{tier.description}</ResumeJobSubtitle>
                      <ResumeDate>{`${getDateDescription(tier.beginDate)} - ${tier.endDate ? getDateDescription(tier.endDate) : tier.actualMessage}`}</ResumeDate>
                      <ResumeDescriptionContainer>
                        {tier.topics.map(topic => (
                          <ResumeDescription key={topic}>{topic}</ResumeDescription>
                        ))}
                      </ResumeDescriptionContainer>
                    </ResumeJobContentSection>
                  ))}
                </ResumeJobContent>
              </ResumeMainContent>
            </ResumeSection>
          ))}
        </ResumeContent>
      </ResumeContainer>
      <RepoContainer>
        <RepoHeader>
          <GhostMotion color="secondary" />
          <RepoTitle>{localeData.resume.creations.title}</RepoTitle>
          <GhostMotion color="secondary" />
        </RepoHeader>
        <RepoContent>
          {localeData.resume.creations.repos.map((repo, index) => (
            <RepoWidget key={repo.title} index={index} href={repo.link} target="_blank">
              <RepoWidgetHeader>
                <RepoWidgetMark icon={faBookmark} />
                <RepoWidgetTitle>{repo.title}</RepoWidgetTitle>
              </RepoWidgetHeader>
              <RepoWidgetContent>{repo.description}</RepoWidgetContent>
              <RepoWidgetFooter>
                <RepoWidgetFooterPack>
                  <RepoLanguageColor customColor={repo.languageColor} />
                  <RepoFooterDescription>{repo.language}</RepoFooterDescription>
                </RepoWidgetFooterPack>
                <RepoWidgetFooterPack>
                  <RepoFooterIcon icon={faCodeBranch} />
                  <RepoFooterDescription>{repo.branches ?? 0}</RepoFooterDescription>
                </RepoWidgetFooterPack>
                <RepoWidgetFooterPack>
                  <RepoFooterIcon icon={faStar} />
                  <RepoFooterDescription>{repo.stars ?? 0}</RepoFooterDescription>
                </RepoWidgetFooterPack>
              </RepoWidgetFooter>
            </RepoWidget>
          ))}
        </RepoContent>
      </RepoContainer>
      <FooterContainer>
        <FooterSideLeft>
          <FooterHeader>
            <GhostMotion color="white" />
            <FooterTitle>{localeData.resume.footer.title}</FooterTitle>
          </FooterHeader>
          <FooterDescription>{localeData.resume.footer.description}</FooterDescription>
          <FooterLocationContainer>
            <FooterLocationIcon icon={faLocationDot} />
            <FooterLocationLabel>{localeData.resume.footer.location}</FooterLocationLabel>
          </FooterLocationContainer>
          <FooterSocialContainer>
            {localeData.resume.footer.socialMedias.map(social => (
              <FooterSocialLink customColor={social.color} href={social.link} key={social.link}>
                <FontAwesomeIcon icon={social.logo} />
              </FooterSocialLink>
            ))}
          </FooterSocialContainer>
          <Assignment>-{localeData.resume.footer.assignment}</Assignment>
        </FooterSideLeft>
        <FooterSideRight>
          <FooterPhoto src={localeData.resume.footer.photo} />
        </FooterSideRight>
      </FooterContainer>
      <FooterMessage dangerouslySetInnerHTML={{__html: localeData.resume.footer.endMessage}} />
    </Tile>
  )
}

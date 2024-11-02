'use client'

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ToolBackButton, ToolContainer, ToolDescription, ToolDescriptionHeader, ToolDescriptionSubtitle, ToolDescriptionText, ToolDescriptionTitle, ToolHeader, ToolHeaderContent, ToolIconContent, ToolTitle } from "../styles";
import { ThemeContext } from "@/contexts/ThemeContext";
import getLocale from "@/config/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TopKeywordCount, TopKeywordRow, TopKeywordText, WordCounterContent, WordCounterEditor, WordCounterFeedback, WordCounterFeedbackBox, WordCounterFeedbackContent, WordCounterFeedbackTitle, WordCounterFeedbackValue, WordCounterTopKeyWordsContainer, WordCounterTopKeyWordsContent, WordCounterTopKeyWordsTitle } from "./styles";
import getMetaInfo from "@/service/metaInfo";

interface WordMetrics {
  wordCounter: number;
  characterCounter: number;
  sentenceCounter: number;
  paragraphCounter: number;
  whiteSpaceCounter: number;
  readingTime: {
    minute: number;
    second: number;
  };
  readability: {
    grade: string;
    age: string;
  };
  topKeywords: {
    value: string;
    count: number;
  }[];
}

interface WordCounterLocale {
  words: string;
  characters: string;
  sentences: string;
  whiteSpaces: string;
  paragraphs: string;
  readingTime: string;
  readabilityTitle: string;
  readability: {
    grade: string;
    score: number;
    age: string;
  }[];
  topKeywords: string;
}

const ptLocale: WordCounterLocale = {
  words: 'Palavras',
  characters: 'Caracteres',
  sentences: 'Sentenças',
  whiteSpaces: 'Espaços',
  paragraphs: 'Parágrafos',
  readingTime: 'Leitura',
  readabilityTitle: 'Legibilidade',
  topKeywords: 'Top Palavras-Chave',
  readability: [
    {
      grade: 'Jardim de Infância',
      age: 'Idade: 5-6',
      score: 1
    },
    {
      grade: 'Ensino Fundamental I',
      age: 'Idade: 6-7',
      score: 2
    },
    {
      grade: 'Ensino Fundamental I',
      age: 'Idade: 7-8',
      score: 3
    },
    {
      grade: 'Ensino Fundamental I',
      age: 'Idade: 8-9',
      score: 4
    },
    {
      grade: 'Ensino Fundamental I',
      age: 'Idade: 9-10',
      score: 5
    },
    {
      grade: 'Ensino Fundamental I',
      age: 'Idade: 10-11',
      score: 6
    },
    {
      grade: 'Ensino Fundamental II',
      age: 'Idade: 11-12',
      score: 7
    },
    {
      grade: 'Ensino Fundamental II',
      age: 'Idade: 12-13',
      score: 8
    },
    {
      grade: 'Ensino Fundamental II',
      age: 'Idade: 13-14',
      score: 9
    },
    {
      grade: 'Ensino Fundamental II',
      age: 'Idade: 14-15',
      score: 10
    },
    {
      grade: 'Ensino Médio',
      age: 'Idade: 15-16',
      score: 11
    },
    {
      grade: 'Ensino Médio',
      age: 'Idade: 16-17',
      score: 12
    },
    {
      grade: 'Ensino Médio',
      age: 'Idade: 17-18',
      score: 13
    },
    {
      grade: 'Universitário',
      age: 'Idade: 18-22',
      score: 14
    }
  ]
}

const enLocale: WordCounterLocale = {
  words: 'Words',
  characters: 'Characters',
  sentences: 'Sentences',
  whiteSpaces: 'White Spaces',
  paragraphs: 'Paragraphs',
  readingTime: 'Reading Time',
  readabilityTitle: 'Readability',
  topKeywords: 'Top Keywords',
  readability: [
    {
      grade: 'Kindergarten',
      age: 'Age: 5-6',
      score: 1
    },
    {
      grade: 'First Grade',
      age: 'Age: 6-7',
      score: 2
    },
    {
      grade: 'Second Grade',
      age: 'Age: 7-8',
      score: 3
    },
    {
      grade: 'Third Grade',
      age: 'Age: 8-9',
      score: 4
    },
    {
      grade: 'Fourth Grade',
      age: 'Age: 9-10',
      score: 5
    },
    {
      grade: 'Fifth Grade',
      age: 'Age: 10-11',
      score: 6
    },
    {
      grade: 'Sixth Grade',
      age: 'Age: 11-12',
      score: 7
    },
    {
      grade: 'Seventh Grade',
      age: 'Age: 12-13',
      score: 8
    },
    {
      grade: 'Eighth Grade',
      age: 'Age: 13-14',
      score: 9
    },
    {
      grade: 'Ninth Grade',
      age: 'Age: 14-15',
      score: 10
    },
    {
      grade: 'Tenth Grade',
      age: 'Age: 15-16',
      score: 11
    },
    {
      grade: 'Eleventh Grade',
      age: 'Age: 16-17',
      score: 12
    },
    {
      grade: 'Twelfth Grade',
      age: 'Age: 17-18',
      score: 13
    },
    {
      grade: 'College Student',
      age: 'Age: 18-22',
      score: 14
    }
  ]
}

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula libero vitae fermentum maximus. Nulla facilisi. Praesent auctor velit vel bibendum ultricies. Sed nec orci eget nisl fermentum interdum. Aenean auctor ipsum id purus ultricies convallis. Sed at libero non dolor aliquet fringilla. Maecenas et viverra est. Nam ac scelerisque eros. Ut ut nisi ac orci rhoncus gravida nec eu lacus. Integer vel venenatis neque. Mauris sit amet sapien at ligula fermentum feugiat. Suspendisse in velit non arcu vulputate gravida. Nunc nec diam sed erat accumsan convallis. Aenean fringilla nunc id libero finibus, ut scelerisque.";

export default function WordCounter() {
  const slug = 'word-counter';

  const { locale } = useContext(ThemeContext)
  const localeData = getLocale(locale);
  const actualTool = localeData.tools.categoryTools.filter(categoryTool => categoryTool.slug === slug)[0];
  
  const [local, setLocal] = useState<WordCounterLocale>(locale === 'pt' ? ptLocale : enLocale);
  const [text, setText] = useState<string>(loremIpsum);

  useEffect(() => {
    setLocal(locale === 'pt' ? ptLocale : enLocale);
    getMetaInfo("https://d4builds.gg/builds/87fa072a-50b1-4232-aed9-d28848d8cc5f/").then(meta => {
      console.log(meta);
    });
  }, [locale]);

  function top6Occurrences(arr: string[]): { value: string, count: number }[] {
    const occurrenceMap: { [key: string]: number } = {};

    arr.forEach((str) => {
      if (occurrenceMap[str]) {
        occurrenceMap[str]++;
      } else {
        occurrenceMap[str] = 1;
      }
    });

    const occurrencesArray = Object.keys(occurrenceMap).map(key => ({
      value: key,
      count: occurrenceMap[key]
    }));
    
    occurrencesArray.sort((a, b) => b.count - a.count);
    
    return occurrencesArray.slice(0, 6);
  }

  const textMetrics = useMemo(() => {
    const wordMetrics: WordMetrics = {
      characterCounter: 0,
      paragraphCounter: 0,
      readability: {
        age: local.readability[0].age,
        grade: local.readability[0].grade
      },
      readingTime: {
        minute: 0,
        second: 0
      },
      sentenceCounter: 0,
      topKeywords: [],
      whiteSpaceCounter: 0,
      wordCounter: 0
    };

    if (text !== "") {
      const words = text.split('\n')
        .map(line => line.trim().split(' ').filter(word => word != "" && word != " "))
        .flatMap(line => line);
      
      wordMetrics.wordCounter = words.length;
      wordMetrics.characterCounter = text.length;
      wordMetrics.paragraphCounter = text.split('\n').length;
      wordMetrics.sentenceCounter = text.split('\n').map(line => line.split('.')).flatMap(line => line).length;
      wordMetrics.whiteSpaceCounter = text.split(' ').length;

      const wordsPerMinute = wordMetrics.wordCounter / 275;
      wordMetrics.readingTime.minute = Math.floor(wordsPerMinute);
      wordMetrics.readingTime.second = Math.round((wordsPerMinute - wordMetrics.readingTime.minute) * 60);

      let score = Math.ceil((4.71 * (wordMetrics.characterCounter / wordMetrics.wordCounter == 0 ? 1 : wordMetrics.wordCounter)) 
        + (0.5 * (wordMetrics.wordCounter / wordMetrics.sentenceCounter == 0 ? 1 : wordMetrics.sentenceCounter)) 
        - 21.43);
      score = score > 14 ? 14 : score;
      score = score <= 0 ? 1 : score;
      const readability = local.readability.filter(read => read.score === score)[0];
      wordMetrics.readability.age = readability.age;
      wordMetrics.readability.grade = readability.grade;  
      wordMetrics.topKeywords = top6Occurrences(words); 
    }

    return (
      <WordCounterFeedback>
        <WordCounterFeedbackContent>
          <WordCounterFeedbackBox min>
            <WordCounterFeedbackValue>{wordMetrics.wordCounter}</WordCounterFeedbackValue>
            <WordCounterFeedbackTitle>{local.words}</WordCounterFeedbackTitle>
          </WordCounterFeedbackBox>
          <WordCounterFeedbackBox min>
            <WordCounterFeedbackValue>{wordMetrics.characterCounter}</WordCounterFeedbackValue>
            <WordCounterFeedbackTitle>{local.characters}</WordCounterFeedbackTitle>
          </WordCounterFeedbackBox>
          <WordCounterFeedbackBox min>
            <WordCounterFeedbackValue>{wordMetrics.sentenceCounter}</WordCounterFeedbackValue>
            <WordCounterFeedbackTitle>{local.sentences}</WordCounterFeedbackTitle>
          </WordCounterFeedbackBox>
          <WordCounterFeedbackBox min>
            <WordCounterFeedbackValue>{wordMetrics.whiteSpaceCounter}</WordCounterFeedbackValue>
            <WordCounterFeedbackTitle>{local.whiteSpaces}</WordCounterFeedbackTitle>
          </WordCounterFeedbackBox>
          <WordCounterFeedbackBox min>
            <WordCounterFeedbackValue>{wordMetrics.paragraphCounter}</WordCounterFeedbackValue>
            <WordCounterFeedbackTitle>{local.paragraphs}</WordCounterFeedbackTitle>
          </WordCounterFeedbackBox>
          <WordCounterFeedbackBox min>
            <WordCounterFeedbackValue>{`${wordMetrics.readingTime.minute}m ${wordMetrics.readingTime.second}s`}</WordCounterFeedbackValue>
            <WordCounterFeedbackTitle>{local.readingTime}</WordCounterFeedbackTitle>
          </WordCounterFeedbackBox>
          <WordCounterFeedbackBox>
            <WordCounterFeedbackValue>{`${wordMetrics.readability.age}, ${wordMetrics.readability.grade}`}</WordCounterFeedbackValue>
            <WordCounterFeedbackTitle>{local.readabilityTitle}</WordCounterFeedbackTitle>
          </WordCounterFeedbackBox>
        </WordCounterFeedbackContent>
        {wordMetrics.topKeywords.length > 0 && (<WordCounterTopKeyWordsContainer>
          <WordCounterTopKeyWordsTitle>{local.topKeywords}</WordCounterTopKeyWordsTitle>
          <WordCounterTopKeyWordsContent>
            {wordMetrics.topKeywords.map((topWord, index) => (
              <TopKeywordRow key={topWord.value}>
                <TopKeywordText>{`${index + 1}. ${topWord.value.length > 25 ? topWord.value.substring(0, 24) + '...' : topWord.value}`}</TopKeywordText>
                <TopKeywordCount>{topWord.count}</TopKeywordCount>
              </TopKeywordRow>
            ))}
          </WordCounterTopKeyWordsContent>
        </WordCounterTopKeyWordsContainer>)}
      </WordCounterFeedback>
    );    
  }, [local, text]);

  return (
    <ToolContainer>
      <ToolHeader>
        <ToolBackButton href={'/tools'}>{localeData.tools.backMessage}</ToolBackButton>
      </ToolHeader>
      <ToolTitle>{actualTool.title ?? ''}</ToolTitle>
      <WordCounterContent>
        <WordCounterEditor value={text} onChange={(e) => setText(e.target.value)} />
        {textMetrics}
      </WordCounterContent>
      <ToolDescription>
        <ToolDescriptionHeader>
          <ToolIconContent backgroundColor={actualTool.backgroundColor} foreColor={actualTool.foreColor} >
            <FontAwesomeIcon icon={actualTool.icon} />
          </ToolIconContent>
          <ToolHeaderContent>
            <ToolDescriptionTitle>{actualTool.title}</ToolDescriptionTitle>
            <ToolDescriptionSubtitle>{actualTool.subtitle}</ToolDescriptionSubtitle>
          </ToolHeaderContent>
        </ToolDescriptionHeader>
        <ToolDescriptionText dangerouslySetInnerHTML={{__html: actualTool.description}} />
      </ToolDescription>
    </ToolContainer>
  )
}

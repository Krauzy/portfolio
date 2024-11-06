import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToolBackButton, ToolContainer, ToolDescription, ToolDescriptionHeader, ToolDescriptionSubtitle, ToolDescriptionText, ToolDescriptionTitle, ToolHeader, ToolHeaderContent, ToolIconContent, ToolTitle } from "../styles";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import getLocale from "@/config/data";
import { FitMetricContent, FitMetricFeedbackBox, FitMetricFeedbackTitle, FitMetricFeedbackValue, FitMetricIMCIndex, FitMetricIMCIndexContainer, FitMetricIMCIndexContent, FitMetricIMCIndexTitle, FitMetricInputContainer, FitMetricResultContainer, FitMetricRunButton, FitMetricRunContainer, FitMetricSelect, FitMetricSelectContainer, FitMetricSelectContent, FitMetricSelectTitle } from "./styles";
import TextBox from "@/components/TextBox";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { LoadingContext } from "@/contexts/LoadingContext";

interface FitMetricLocale {
  height: string;
  gender: {
    man: string;
    woman: string;
    title: string;
  };
  weight: string;
  age: string;
  imc: string;
  tmb: string;
  ncd: string;
  fatIndex: string;
  idealWeight: string;
  errorPrefix: (prefix: string) => string;
  activity: {
    title: string;
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
  };
  fitIndex: {
    title: string;
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  }
}

interface FitMetricValue {
  imc: number;
  tmb: number;
  ncd: number;
  fat: number;
  ideal: number;
}

const ptLocale: FitMetricLocale = {
  age: 'Idade',
  gender: {
    man: 'Masculino',
    woman: 'Feminino',
    title: 'Sexo'
  },
  height: 'Altura (cm)',
  weight: 'Peso (Kg)',
  fatIndex: 'IGC',
  idealWeight: 'Peso ideal',
  imc: 'IMC',
  ncd: 'NCD',
  tmb: 'TMB',
  errorPrefix: (prefix) => `${prefix} inválido!`,
  activity: {
    title: "Nível de atividade física",
    0: "Sedentário",
    1: "Leve",
    2: "Moderado",
    3: "Ativo",
    4: "Extremamente Ativo"
  },
  fitIndex: {
    title: "Classificação IMC",
    0: "Abaixo do peso",
    1: "Peso normal",
    2: "Sobrepeso",
    3: "Obesidade Grau I",
    4: "Obesidade Grau II (Obesidade Severa)",
    5: "Obesidade Grau III (Obesidade Mórbida)"
  }
}

const enLocale: FitMetricLocale = {
  age: 'Age',
  gender: {
    man: 'Male',
    woman: 'Female',
    title: 'Sex'
  },
  height: 'Height (cm)',
  weight: 'Weight (Kg)',
  fatIndex: 'FBI',
  idealWeight: 'Ideal weight',
  imc: 'BMI',
  ncd: 'BMR',
  tmb: 'DCR',
  errorPrefix: (prefix) => `Invalid ${prefix}!`,
  activity: {
    title: "Physical activity level",
    0: "Sedentary",
    1: "Light",
    2: "Moderate",
    3: "Active",
    4: "Extremely Active"
  },
  fitIndex: {
    title: "BMI Classification",
    0: "Underweight",
    1: "Normal Weight",
    2: "Overweight",
    3: "Grade I Obesity",
    4: "Grade II Obesity (Severe Obesity)",
    5: "Grade III Obesity (Morbid Obesity)"
  }
}

export default function FitMetric() {

  const slug = 'fit-metric';

  const { locale } = useContext(ThemeContext);
  const { setLoading } = useContext(LoadingContext);
  const localeData = getLocale(locale);
  const actualTool = localeData.tools.categoryTools.filter(categoryTool => categoryTool.slug === slug)[0];

  const [local, setLocal] = useState<FitMetricLocale>(locale === 'pt' ? ptLocale : enLocale);
  const [gender, setGender] = useState<"M" | "F">("M");
  const [activityFactor, setActivityFactor] = useState<1.2 | 1.375 | 1.55 | 1.725 | 1.9>(1.2);
  const [height, setHeight] = useState<number | undefined>();
  const [weight, setWeight] = useState<string>("");
  const [age, setAge] = useState<number | undefined>();

  const [fitValue, setFitValue] = useState<FitMetricValue>();

  const [heightError, setHeightError] = useState<string | undefined>();
  const [ageError, setAgeError] = useState<string | undefined>();
  const [weightError, setWeightError] = useState<string | undefined>();

  useEffect(() => {
    setLocal(locale === 'pt' ? ptLocale : enLocale);
  }, [locale]);

  function validateFitInput(customWeight: string, customHeight?: number, customAge?: number) {
    let isValid = true;

    if (customHeight === undefined || customHeight === 0) {
      setHeightError(local.errorPrefix(local.height.split(' ')[0]));
      isValid = false;
    } else setHeightError(undefined);
    
    if (customWeight === "" || isNaN(Number(customWeight))) {
      setWeightError(local.errorPrefix(local.weight.split(' ')[0]));
      isValid = false;
    } else setWeightError(undefined);

    if (customAge === undefined || customAge === 0) {
      setAgeError(local.errorPrefix(local.age));
      isValid = false;
    } else setAgeError(undefined);

    return isValid;
  }

  function calcFitMetric(customGender: "M" | "F", customActivity: number, customWeight: string, customHeight?: number, customAge?: number) {
    if (validateFitInput(customWeight, customHeight, customAge)) {
      // IMC
      const weightValue = Number(customWeight);
      const imc = weightValue / Math.pow((customHeight! / 100), 2);

      // TMB
      const tmb = (customGender === "M") 
        ? 88.36 + (13.4 * weightValue) + (4.8 * customHeight!) - (5.7 * customAge!)
        : 447.6 + (9.2 * weightValue) + (3.1 * customHeight!) - (4.3 * customAge!);

      // NCD
      const ncd = tmb * customActivity;

      // Taxa de Gordura Corporal
      const fatIndex = (1.2 * imc) + (0.23 * customAge!) - (customGender === "M" ? 16.2 : 5.4);

      // Peso Ideal
      const idealWeight = (customGender === "M" ? 52 : 49) + (0.91 * (customHeight! - 152.4))

      setFitValue({
        imc: imc,
        ncd: ncd,
        tmb: tmb,
        fat: fatIndex,
        ideal: idealWeight
      })
    }
  }

  return (
    <ToolContainer>
      <ToolHeader>
        <ToolBackButton href={'/tools'}>{localeData.tools.backMessage}</ToolBackButton>
      </ToolHeader>
      <ToolTitle>{actualTool.title ?? ''}</ToolTitle>
      <FitMetricContent>
        <FitMetricInputContainer>
          <FitMetricSelectContainer>
            <FitMetricSelectTitle>{local.gender.title}</FitMetricSelectTitle>
            <FitMetricSelectContent>
              <FitMetricSelect active={gender === 'M'} onClick={() => setGender('M')}>{local.gender.man}</FitMetricSelect>
              <FitMetricSelect active={gender === 'F'} onClick={() => setGender('F')}>{local.gender.woman}</FitMetricSelect>
            </FitMetricSelectContent>
          </FitMetricSelectContainer>
          <TextBox 
            label={local.age} 
            placeholder="18" 
            maxWidth={3} 
            value={(age ?? "").toString()}
            isNumber 
            setValue={(value) => setAge(Number(value))}
            error={ageError}
          />
          <TextBox 
            label={local.height} 
            placeholder="186" 
            maxWidth={3} 
            isNumber
            value={(height ?? "").toString()} 
            setValue={(value) => setHeight(Number(value))}
            error={heightError}
          />
          <TextBox 
            label={local.weight} 
            placeholder="80.6"
            value={weight} 
            setValue={(value) => {
              const numbers = value.split('.');
              if (numbers.length <= 2) {
                if (numbers.length === 1 && !isNaN(Number(value))) {
                  setWeight(value);
                }
                if (numbers.length === 2 && !isNaN(Number(numbers[0])) && (numbers[1] === '' || !isNaN(Number(numbers[1])))) {
                  setWeight(value);
                }
              }
            }}
            error={weightError}
          />
          <FitMetricSelectContainer>
            <FitMetricSelectTitle>{local.activity.title}</FitMetricSelectTitle>
            <FitMetricSelectContent>
              <FitMetricSelect active={activityFactor === 1.2} onClick={() => setActivityFactor(1.2)}>{local.activity[0]}</FitMetricSelect>
              <FitMetricSelect active={activityFactor === 1.375} onClick={() => setActivityFactor(1.375)}>{local.activity[1]}</FitMetricSelect>
              <FitMetricSelect active={activityFactor === 1.55} onClick={() => setActivityFactor(1.55)}>{local.activity[2]}</FitMetricSelect>
              <FitMetricSelect active={activityFactor === 1.725} onClick={() => setActivityFactor(1.725)}>{local.activity[3]}</FitMetricSelect>
              <FitMetricSelect active={activityFactor === 1.9} onClick={() => setActivityFactor(1.9)}>{local.activity[4]}</FitMetricSelect>
            </FitMetricSelectContent>
          </FitMetricSelectContainer>
          <FitMetricRunContainer>
            <FitMetricRunButton onClick={() => calcFitMetric(gender, activityFactor, weight, height, age)} >
              <FontAwesomeIcon icon={faBolt} />
            </FitMetricRunButton>
          </FitMetricRunContainer>
        </FitMetricInputContainer>
        <FitMetricResultContainer>
          <FitMetricFeedbackBox min>
            <FitMetricFeedbackValue>{fitValue?.imc.toFixed(1) ?? "0.0"}</FitMetricFeedbackValue>
            <FitMetricFeedbackTitle>{local.imc}</FitMetricFeedbackTitle>
          </FitMetricFeedbackBox>
          <FitMetricFeedbackBox min>
            <FitMetricFeedbackValue>{fitValue?.tmb.toFixed(0) ?? "0"} Kcal</FitMetricFeedbackValue>
            <FitMetricFeedbackTitle>{local.tmb}</FitMetricFeedbackTitle>
          </FitMetricFeedbackBox>
          <FitMetricFeedbackBox min>
            <FitMetricFeedbackValue>{fitValue?.ncd.toFixed(0) ?? "0"} Kcal</FitMetricFeedbackValue>
            <FitMetricFeedbackTitle>{local.ncd}</FitMetricFeedbackTitle>
          </FitMetricFeedbackBox>
          <FitMetricFeedbackBox min>
            <FitMetricFeedbackValue>{fitValue?.fat.toFixed(2) ?? "0.00"}%</FitMetricFeedbackValue>
            <FitMetricFeedbackTitle>{local.fatIndex}</FitMetricFeedbackTitle>
          </FitMetricFeedbackBox>
          <FitMetricFeedbackBox>
            <FitMetricFeedbackValue>{fitValue?.ideal.toFixed(2) ?? "0.00"} KG</FitMetricFeedbackValue>
            <FitMetricFeedbackTitle>{local.idealWeight}</FitMetricFeedbackTitle>
          </FitMetricFeedbackBox>
          <FitMetricIMCIndexContainer>
            <FitMetricIMCIndexTitle>{local.fitIndex.title}</FitMetricIMCIndexTitle>
            <FitMetricIMCIndexContent>
              <FitMetricIMCIndex backgroundColor="#BEEFB2" color="#212121" active={fitValue === undefined || fitValue.imc < 18.5}>{local.fitIndex[0]}</FitMetricIMCIndex>
              <FitMetricIMCIndex backgroundColor="#7DDF64" color="#212121" active={fitValue !== undefined && fitValue.imc >= 18.5 && fitValue.imc < 25}>{local.fitIndex[1]}</FitMetricIMCIndex>
              <FitMetricIMCIndex backgroundColor="#B0DF7D" color="#212121" active={fitValue !== undefined && fitValue.imc >= 25 && fitValue.imc < 30}>{local.fitIndex[2]}</FitMetricIMCIndex>
              <FitMetricIMCIndex backgroundColor="#DEB986" color="#FFFFFF" active={fitValue !== undefined && fitValue.imc >= 30 && fitValue.imc < 35}>{local.fitIndex[3]}</FitMetricIMCIndex>
              <FitMetricIMCIndex backgroundColor="#DB6C79" color="#FFFFFF" active={fitValue !== undefined && fitValue.imc >= 35 && fitValue.imc < 40}>{local.fitIndex[4]}</FitMetricIMCIndex>
              <FitMetricIMCIndex backgroundColor="#ED4D6E" color="#FFFFFF" active={fitValue !== undefined && fitValue.imc >= 40}>{local.fitIndex[5]}</FitMetricIMCIndex>
            </FitMetricIMCIndexContent>
          </FitMetricIMCIndexContainer>
        </FitMetricResultContainer>
      </FitMetricContent>
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

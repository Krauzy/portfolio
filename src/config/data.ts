import { localeMonthFilterEnglish, localeMonthFilterPortuguese } from "./dataTools/localeMonthFilter";
import portugueseData from "./dataTools/portugueseData";
import englishData from "./dataTools/englishData";
import DataLocale from "./dataTools/dataInterface";

export const localeUtils = {
  pt: {
    months: localeMonthFilterPortuguese
  },
  en: {
    months: localeMonthFilterEnglish
  }
} 

export default function getLocale(locale: string) : DataLocale {
  return locale === 'pt' ? portugueseData : englishData;
}

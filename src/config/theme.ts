import { Space_Mono, Alex_Brush } from 'next/font/google';

const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], style: 'normal', display: 'auto' });
const alexBrush = Alex_Brush({ weight: ['400'], subsets: ['latin']});

interface ThemeProperties {
  fonts: {
    spaceMono: string;
    alexBrush: string;
  },
  color: {
    primary: string;
    secondary: string;
    grey: string;
    purple: string;
    pink: string;
    yellow: string;
    success: string;
    error: string;
    variation: {
      primary: (opacity: number) => string;
      secondary: (opacity: number) => string;
      purple: (opacity: number) => string;
    }
  },
  widget: {
    pack1: {
      background: string;
      color: string;
    },
    pack2: {
      background: string;
      color: string;
    },
    pack3: {
      background: string;
      color: string;
    }
  }
}

export const darkTheme : ThemeProperties = {
  fonts: {
    spaceMono: spaceMono.style.fontFamily,
    alexBrush: alexBrush.style.fontFamily
  },
  color: {
    primary: '#212121',
    secondary: '#FFFFFF',
    grey: '#626262',
    purple: '#5865F2',
    pink: '#EB459E',
    yellow: '#FEE75C',
    success: '#57F287',
    error: '#ED4245',
    variation: {
      primary: (opacity: number) => `rgba(21, 21, 21, ${opacity})`,
      secondary: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
      purple: (opacity: number) => `rgba(88, 101, 242, ${opacity})`
    }
  },
  widget: {
    pack1: {
      background: '#5865F2',
      color: '#FFFFFF'
    },
    pack2: {
      background: '#FEE75C',
      color: '#212121'
    },
    pack3: {
      background: '#EB459E',
      color: '#FFFFFF'
    }
  }
}

export const lightTheme : ThemeProperties = {
  fonts: {
    spaceMono: spaceMono.style.fontFamily,
    alexBrush: alexBrush.style.fontFamily
  },
  color: {
    primary: '#FFFFFF',
    secondary: '#212121',
    grey: '#626262',
    purple: '#5865F2',
    pink: '#EB459E',
    yellow: '#FEE75C',
    success: '#57F287',
    error: '#ED4245',
    variation: {
      primary: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
      secondary: (opacity: number) => `rgba(21, 21, 21, ${opacity})`,
      purple: (opacity: number) => `rgba(88, 101, 242, ${opacity})`
    }
  },
  widget: {
    pack1: {
      background: '#5865F2',
      color: '#FFFFFF'
    },
    pack2: {
      background: '#FEE75C',
      color: '#212121'
    },
    pack3: {
      background: '#EB459E',
      color: '#FFFFFF'
    }
  }
}

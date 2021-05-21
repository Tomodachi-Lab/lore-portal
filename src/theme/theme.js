export const colors = {
  black: '#111111',
  grey: '#252423',
  white: '#F2F2F2',

  // Offline Colors
  lavender: '#884BF9',
  coral: '#FC2E3B',

  // Prelive Colors
  magenta: '#FF25F9',
  red: '#FF1011',
  redCornell: '#B51415',
  yellowSun: '#F8E033',

  redRadical: '#FF246E',
  orangeSunshade: '#FFA12B',
};

export const theme = {
  mainBg: '#E7E6E3',
  text: colors.black,

  primary: colors.lavender,
  accent: colors.coral,

  gradient: `linear-gradient(135deg, ${colors.redRadical}) 0%, ${colors.orangeSunshade} 100%)`,
};

export const breakpoints = {
  tablet: `${992}px`,
  desktop: `${1200}px`,
  ultraWide: `${1400}px`,
};

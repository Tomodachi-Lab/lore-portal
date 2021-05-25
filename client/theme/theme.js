export const colors = {
  black: '#111111',
  grey: '#252423',
  white: '#F2F2F2',

  // Offline Colors
  lavender: '#884BF9',
  redCornell: '#B51415',
  pink: '#E0479E',
  greyConcrete: '#7A7A7A',

  twitch: '#6441A4',

  // Offline
  lavender: '#884BF9',

  // Prelive colors
  redRadical: '#FF246E',
  orangeSunshade: '#FFA12B',
};

export const theme = {
  mainBg: '#E7E6E3',
  text: colors.black,

  primary: colors.lavender,
  accent: colors.coral,

  twitchGradient: `linear-gradient(120deg, ${colors.twitch} 0%, ${colors.lavender} 100%);`,
  preliveGradient: `linear-gradient(120deg, ${colors.redRadical} 0%, ${colors.orangeSunshade} 100%);`,
};

export const breakpoints = {
  tablet: `${992}px`,
  desktop: `${1200}px`,
  ultraWide: `${1400}px`,
};

export const fontFamilies = {
  body: 'Nunito Sans',
  titles: 'Alegreya Sans',
};

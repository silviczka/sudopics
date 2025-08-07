export const imageSets: Record<
  string,
  { images: Record<number, string>; size: { width: number; height: number } }
> = {
  Jesus: {
    images: {
      1: '/images/Jesus/Jesus1.png',
      2: '/images/Jesus/Jesus2.png',
      3: '/images/Jesus/Jesus3.png',
      4: '/images/Jesus/Jesus4.png',
      5: '/images/Jesus/Jesus5.png',
      6: '/images/Jesus/Jesus6.png',
      7: '/images/Jesus/Jesus7.png',
      8: '/images/Jesus/Jesus8.png',
      9: '/images/Jesus/Jesus9.png',
    },
    size: {
      width: 53,
      height: 53,
    },
  },
  cats: {
    images: {
      1: '/images/cats/1.png',
      2: '/images/cats/2.png',
      3: '/images/cats/3.png',
      4: '/images/cats/4.png',
      5: '/images/cats/5.png',
      6: '/images/cats/6.png',
      7: '/images/cats/7.png',
      8: '/images/cats/8.png',
      9: '/images/cats/9.png',
    },
    size: { width: 61, height: 61 },
  },
  birds: {
    images: {
      1: '/images/birds/1.png',
      2: '/images/birds/2.png',
      3: '/images/birds/3.png',
      4: '/images/birds/4.png',
      5: '/images/birds/5.png',
      6: '/images/birds/6.png',
      7: '/images/birds/7.png',
      8: '/images/birds/8.png',
      9: '/images/birds/9.png',
    },
    size: { width: 60, height: 60 },
  },
  gems: {
    images: {
      1: '/images/gems/1.gif',
      2: '/images/gems/2.gif',
      3: '/images/gems/3.gif',
      4: '/images/gems/4.gif',
      5: '/images/gems/5.gif',
      6: '/images/gems/6.gif',
      7: '/images/gems/7.gif',
      8: '/images/gems/8.gif',
      9: '/images/gems/9.gif',
    },
    size: { width: 64, height: 64 },
  },
} as const;

// all styles except dark/light mode
export const styles = {
  variant: {
    primary: "font-['Oswald']",
    secondary: 'font-nunito-sans',
  },
  size: {
    xs3: 'text-[clamp(0.521rem,calc(0.5rem+0.25vw),0.579rem)]',
    xs2: 'text-[clamp(0.625rem,calc(0.6rem+0.25vw),0.694rem)]',
    xs: 'text-[clamp(0.75rem,calc(0.7rem+0.25vw),0.833rem)]',
    sm: 'text-[clamp(0.875rem,calc(0.825rem+0.25vw),1rem)]',
    base: 'text-[clamp(1rem,calc(0.95rem+0.25vw),1rem)]',
    lg: 'text-[clamp(1.125rem,calc(1.075rem+0.25vw),1.2rem)]',
    xl: 'text-[clamp(1.25rem,calc(1.2rem+0.25vw),1.44rem)]',
    xl2: 'text-[clamp(1.5rem,calc(1.5rem+((1vw-0.2rem)*0.833)),1.728rem)]',
    xl3: 'text-[clamp(1.75rem,calc(1.75rem+((1vw-0.2rem)*1.042)),2.074rem)]',
    xl4: 'text-[clamp(2rem,calc(2rem+((1vw-0.2rem)*1.25)),2.488rem)]',
    xl5: 'text-[clamp(2.5rem,calc(2.5rem+((1vw-0.2rem)*1.458)),3.583rem)]',
    xl6: 'text-[clamp(3rem,calc(3rem+((1vw-0.2rem)*1.667)),4.3rem)]',
    xl7: 'text-[clamp(3.375rem,calc(3.375rem+((1vw-0.2rem)*1.875)),5.19rem)]',
  },
  leading: {
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
  },
  textcase: {
    uppercase: 'uppercase',
    capitalize: 'capitalize',
    lowercase: 'lowercase',
    normal: 'normal-case',
  },
  textalign: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  },
  textweight: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
  textstyle: {
    normal: 'not-italic',
    italic: 'italic',
  },
  textdecoration: {
    underline: 'underline',
    lineThrough: 'line-through',
    noUnderline: 'no-underline',
  },
};

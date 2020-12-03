module.exports = {
  purge: ["src/**/*.html"],
  theme: {
    // overwrite tailwind classes here
    // colors:{
    //   red: "#ff0000",
    // },
    opacity:{
      '0':'0',
      '20':'0.2',
      '40':'0.4',
      '60':'0.8',
      '100':'1',
    },
    extend: {
      // adds to the tailwind classes
      spacing:{
            sm:'8px',
            md:'12px',
            lg:'16px',
          },
      fontFamily:{
        fun: ['Roboto', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

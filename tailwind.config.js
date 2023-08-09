/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
  },
  daisyui: {
    themes: [
      {
        'darkBeauty': {                          /* your theme name */
           'primary' : '#eeea42',           /* Primary color */
           'primary-focus' : '#eeea42',     /* Primary color - focused */
           'primary-content' : '#000000',   /* Foreground content color to use on primary color */

           'secondary' : '#101b1e',         /* Secondary color */
           'secondary-focus' : '#101b1e',   /* Secondary color - focused */
           'secondary-content' : '#f2f7f8', /* Foreground content color to use on secondary color */

           'accent' : '#5693a4',            /* Accent color */
           'accent-focus' : '#5693a4',      /* Accent color - focused */
           'accent-content' : '#f2f7f8',    /* Foreground content color to use on accent color */

           'neutral' : '#3d4451',           /* Neutral color */
           'neutral-focus' : '#2a2e37',     /* Neutral color - focused */
           'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

           'base-100' : '#010c0f',          /* Base color of page, used for blank backgrounds */
           'base-200' : '#010c0f',          /* Base color, a little darker */
           'base-300' : '#010c0f',          /* Base color, even more darker */
           'base-content' : '#f2f7f8',      /* Foreground content color to use on base color */

           'info' : '#2094f3',              /* Info */
           'success' : '#009485',           /* Success */
           'warning' : '#ff9900',           /* Warning */
           'error' : '#ff5724',             /* Error */
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

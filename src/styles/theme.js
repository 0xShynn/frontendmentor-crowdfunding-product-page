import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  breakpoints: {
    '2xl': '96em',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontSize: '16px',
        fontFamily: 'body',
      },
      a: {
        transition: 'background-color 3s, color 1s',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  fonts: {
    heading: 'Commissioner',
    body: 'Commissioner',
  },
  colors: {
    primary: {
      modeCyan: 'hsl(176, 50%, 47%)',
      darkCyan: 'hsl(176, 72%, 28%)',
    },
    neutral: {
      darkGray: 'hsl(0, 0%, 48%)',
    },
  },
});

export default customTheme;

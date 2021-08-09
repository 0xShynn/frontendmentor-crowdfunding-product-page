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
        backgroundColor: '#FAFAFA',
      },
      a: {
        _hover: {},
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
  components: {
    Box: {
      variants: {
        content: {
          border: '1px',
          borderColor: 'gray.100',
        },
      },
    },
  },
});

export default customTheme;

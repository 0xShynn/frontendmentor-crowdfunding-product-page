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
    Container: {
      baseStyle: {
        p: '6',
        bg: 'white',
        rounded: 'lg',
        mb: '6',
        maxW: { md: '640px', lg: '730px' },
        border: '1px',
        borderColor: 'gray.100',
      },
      variants: {
        content: {
          border: '1px',
          borderColor: 'gray.100',
        },
      },
    },
    Button: {
      baseStyle: {
        rounded: 'full',
      },
      variants: {
        primary: {
          bg: 'primary.modeCyan',
          textColor: 'white',
          fontSize: { base: 'sm', md: 'md' },
          px: { base: 8, md: 10 },
          py: { base: '26px', md: '28px' },
          _hover: {
            bg: 'primary.darkCyan',
          },
        },
      },
    },
    Text: {
      baseStyle: {
        lineHeight: 'tall',
        fontSize: { base: 'sm', md: 'md' },
        color: 'neutral.darkGray',
      },
    },
  },
});

export default customTheme;

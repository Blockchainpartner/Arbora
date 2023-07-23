import { createTheme } from '@mui/material/styles';

const MyTheme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            background: `linear-gradient(to left, primary, secondary)`,
          },
        },
      },
    },
    shape: { borderRadius: 15 },
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#494ae0",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        // light: will be calculated from palette.secondary.main,
        main: "#1a003d",
        // dark: will be calculated from palette.secondary.main,
        // contrastText: will be calculated to contrast with palette.secondary.main
      },
      // error: will us the default color
    },
  });

export default MyTheme;
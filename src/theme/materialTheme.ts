import { createMuiTheme } from '@material-ui/core';
import { Colors } from './Colors';

export const materialTheme = createMuiTheme({
  palette: {
    primary: {
      light: `${Colors.primary.light}`,
      main: `${Colors.primary.main}`,
    },
    secondary: {
      light: `${Colors.secondary.light}`,
      main: `${Colors.secondary.main}`,
    },
    error: {
      main: `${Colors.danger}`,
    },
  },
  spacing: 2,
});

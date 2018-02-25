import { createMuiTheme } from 'material-ui/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4c8c4a",
      main: "#1b5e20",
      dark: "#003300",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#f9683a",
      main: "#bf360c",
      dark: "#870000",
      contrastText: "#ffffff",
    },
    error: {
      light: "#ff7539",
      main: "#ff3d00",
      dark: "#c30000",
      contrastText: "#000000",
    },
  },
});

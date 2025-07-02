import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // 主色
    },
    secondary: {
      main: '#ffffff', // 副色
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  spacing: 8, // 1 spacing unit = 8px
});

export default theme;

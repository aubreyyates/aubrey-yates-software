// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

const DarkTheme = (colors) => {
  const { red, gold, cyan, green, grey } = colors;
  console.log(colors);

  const greyColors = {
    0: grey[0],
    50: grey[1],
    100: '#000',
    200: '#000',
    300: grey[4],
    400: '#fff',
    500: '#fff',
    600: '#fff',
    700: '#fff',
    800: '#fff',
    900: '#fff',
    A50: '#fff',
    A100: '#fff',
    A200: grey[12],
    A400: grey[13],
    A700: grey[14],
    A800: grey[16]
  };

  const darkBlue = {
    300: '#3f4661',
    400: '#3d435c',
    500: '#383E55',
    600: '#32384C',
    700: '#292E3D',
    800: '#212531',
    900: '#1c1e27'
  };

  // "#262832"
  // "#1c1e27"

  const orange = {
    300: '#e1932e'
  };

  const contrastText = '#fff';

  return {
    primary: {
      lighter: '#000',
      100: darkBlue[300],
      200: darkBlue[300],
      light: darkBlue[300],
      400: darkBlue[400],
      main: orange[300],
      dark: darkBlue[600],
      700: darkBlue[600],
      darker: darkBlue[700],
      900: darkBlue[800],
      contrastText
    },
    secondary: {
      lighter: darkBlue[300],
      100: darkBlue[300],
      200: darkBlue[300],
      light: greyColors[300],
      400: greyColors[400],
      main: greyColors[500],
      600: greyColors[600],
      dark: greyColors[700],
      800: greyColors[800],
      darker: greyColors[900],
      A100: greyColors[0],
      A200: greyColors.A400,
      A300: greyColors.A700,
      contrastText: greyColors[0]
    },
    error: {
      lighter: red[0],
      light: red[2],
      main: red[4],
      dark: red[7],
      darker: red[9],
      contrastText
    },
    warning: {
      lighter: gold[0],
      light: gold[3],
      main: gold[5],
      dark: gold[7],
      darker: gold[9],
      contrastText: greyColors[100]
    },
    info: {
      lighter: cyan[0],
      light: cyan[3],
      main: cyan[5],
      dark: cyan[7],
      darker: cyan[9],
      contrastText
    },
    success: {
      lighter: green[0],
      light: green[3],
      main: green[5],
      dark: green[7],
      darker: green[9],
      contrastText
    },
    grey: greyColors,
    darkBlue: darkBlue
  };
};

export default DarkTheme;

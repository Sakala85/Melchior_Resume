import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#fff",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1140,
      xl: 1920,
    },
  },
  typography: {
    h1: {
      fontSize: "3.7rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.9rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.15rem",
      fontWeight: 400,
    },
    body1: {
      lineHeight: 1.25,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      lineHeight: 1.33,
    },
    subtitle2: {
      fontSize: "1rem",
    },
    caption: {
      fontSize: ".7rem",
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    overline: {
      fontSize: ".7rem",
      letterSpacing: 0,
      textTransform: "uppercase",
      lineHeight: 1,
      marginBottom: 8,
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        subtitle1: "p",
        subtitle2: "p",
        caption: "p",
        overline: "p",
      },
    },
  },
  overrides: {
    MuiTableCell: {
      body: {
        fontSize: "1rem",
      },
      head: {
        fontSize: "1.1rem",
      },
    },
    MuiDivider: {
      root: {
        borderBottom: "1px solid",
        borderBottomColor: "rgba(0, 0, 0, 0.12)",
        backgroundColor: "none",
      },
      light: {
        backgroundColor: "none",
        borderBottomColor: "rgba(0, 0, 0, 0.08)",
      },
    },
  },
});

const themeWithResponsiveFontSizes = responsiveFontSizes(theme);

const getTheme = () => {
  return themeWithResponsiveFontSizes;
};

export default getTheme;

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    fontFamily: "'Pacifico', cursive",
    fontSize: "1.2rem",
    textAlign: "center",
    display: "block",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  subtitle: {
    // fontSize: "1rem",
    marginTop: "1rem",
    // fontFamily: "'Pacifico', cursive",
    display: "block",

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  toolbar: {
    backgroundColor: "#0E5064",
    display: "block",
    margin: "auto",
    justifyContent: "center",
  },

  logoFooter: {
    display: "block",
    margin: "auto",
    width: "120px",
    marginBottom: "2rem",
    marginTop: "0.5rem",
  },
}));

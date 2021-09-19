import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  chip: {
    margin: "5px 5px 5px 0",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0px",
    justifyContent: "space-between",

    marginTop: "10px",

    fontSize: "12px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "14px",
    },
  },
  spacing: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0px",
    justifyContent: "space-between",
    fontSize: "12px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "14px",
    },
  },

  placeLinks: {
    textDecoration: "none",
  },
  outLinks: {
    padding: "5px 15px",
    backgroundColor: "#0e5064",
    color: "white",
    "&:hover": {
      background: "#0a304b",
    },
  },

  call: {
    padding: "5px 15px",
    backgroundColor: "#0a304b",
    color: "white",
    "&:hover": {
      background: "#0e5064",
    },
  },

  tripAdvisorLogo: {
    width: "23px",
    height: "23px",
    marginRight: "3px",
  },
}));

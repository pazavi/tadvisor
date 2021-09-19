import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "15px",
    backgroundColor: "#f4f4f4",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "70vh",
    overflow: "auto",
  },
  scroll: {
    width: "30px",
    height: "30px",
    background: `url(
      "https://res.cloudinary.com/ddgevj2yp/image/upload/v1629281857/output-onlinegiftools_zusnov.gif"
    )`,
    backgroundSize: "cover",
    backgroundReapet: "no-reapet",
    backgroundPosition: "center",
    // borderRadius: "50%",
    margin: "auto",
    position: "relative",
    marginBottom: "-15px",
  },
}));

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { FaLinkedin } from "react-icons/fa";
import { Dialog } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Layout from "../components/layout";

const INFO_EMAIL = "";
const LINKEDIN_URL = "";
const PRIMARY_COLOR = "";

const styles = () => ({
  iconWrapper: {
    textAlign: "center"
  },
  icon: {
    color: PRIMARY_COLOR
  }
});

function ContactUs({ classes, navigate }) {
  return (
    <Layout>
      <Dialog
        aria-labelledby="contact-us-modal"
        fullWidth
        maxWidth="xs"
        open={true}
        onClose={() => navigate("/")}
        className={classes.dialog}>
        <DialogTitle id="contact-us-modal">Contact Us</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Have any questions about becoming a host? Care to help us improve
            our service? We'd love to hear from you!
          </DialogContentText>
          <DialogContentText>
            Email us at{" "}
            <a style={{ color: "black" }} href={`mailto:${INFO_EMAIL}`}>
              {INFO_EMAIL}
            </a>{" "}
            and connect with us on
          </DialogContentText>
          <div className={classes.iconWrapper}>
            <a href={LINKEDIN_URL} className={classes.icon}>
              <FaLinkedin size={40} />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

ContactUs.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object
};

export default withStyles(styles)(ContactUs);

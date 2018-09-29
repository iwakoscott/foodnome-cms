import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { FaLinkedin } from "react-icons/fa";
import { Dialog } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
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
  },
  backLinkWrapper: {
    textAlign: "right"
  }
});

function ContactUs({ classes, location, navigate }) {
  const { from } = location.state || { from: "/" };
  return (
    <Layout location={location}>
      <Dialog
        aria-labelledby="contact-us-modal"
        fullWidth
        maxWidth="xs"
        open={true}
        onClose={() => navigate(from)}
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
          <div className={classes.backLinkWrapper}>
            {from && (
              <Button onClick={() => navigate(from)} size="small">
                back
              </Button>
            )}
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

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { FaLinkedin } from "react-icons/fa";
import { Dialog } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Layout from "../components/layout";
import { graphql, StaticQuery } from "gatsby";

const styles = () => ({
  iconWrapper: {
    textAlign: "center"
  }
});

function ContactUs({ classes, navigate }) {
  return (
    <StaticQuery
      query={graphql`
        query ContactUsQuery {
          site {
            siteMetadata {
              linkedInURL
              themeColor
              email
            }
          }
        }
      `}
      render={data => (
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
                Have any questions about becoming a host? Care to help us
                improve our service? We'd love to hear from you!
              </DialogContentText>
              <DialogContentText>
                Email us at{" "}
                <a
                  style={{ color: "black" }}
                  href={`mailto:${data.site.siteMetadata.email}`}>
                  {data.site.siteMetadata.email}
                </a>{" "}
                and connect with us on
              </DialogContentText>
              <div className={classes.iconWrapper}>
                <a
                  rel="noopener noreferrer"
                  target="_BLANK"
                  href={data.site.siteMetadata.linkedInURL}
                  className={classes.icon}>
                  <FaLinkedin
                    size={40}
                    color={data.site.siteMetadata.themeColor}
                  />
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </Layout>
      )}
    />
  );
}

ContactUs.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object
};

export default withStyles(styles)(ContactUs);

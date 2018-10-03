import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Dialog } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Layout from "../components/layout";

const styles = () => ({
  backLinkWrapper: {
    textAlign: "right"
  },
  list: {
    padding: "1em"
  }
});

function Privacy({ classes, location, navigate }) {
  const { from } = location.state || { from: "/" };
  return (
    <Layout location={location}>
      <Dialog
        aria-labelledby="privacy-policy-modal"
        maxWidth="md"
        fullWidth
        open={true}
        onClose={() => navigate(from)}
        className={classes.dialog}>
        <DialogTitle id="privacy-policy-modal">Privacy Policy</DialogTitle>
        <DialogContent>
          <div>
            <DialogContentText>
              The purpose of this Privacy Policy is to inform you about what
              information we collect from you as a user of this website and any
              of our mobile applications. We have summarized this in the
              simplest terms below:
            </DialogContentText>
            <ul className={classes.list}>
              <li>
                <DialogContentText>
                  This Privacy Policy is for users of the website
                  www.foodnome.com and any other mobile applications provided by
                  Foodnome.
                </DialogContentText>
              </li>
              <li>
                <DialogContentText>
                  This Policy does not apply to any other websites and we are
                  not responsible for the content or privacy policies of other
                  sites, including any that are reached through a link on this
                  website.
                </DialogContentText>
              </li>
              <li>
                <DialogContentText>
                  We are required under the Data Protection Act, to protect any
                  information we collect from you and will use administrative,
                  technical, and physical measures to safeguard personal
                  information against loss, theft and unauthorized uses, access
                  or modifications of it.
                </DialogContentText>
              </li>
              <li>
                <DialogContentText>
                  Personal information may be collected from you, such as your
                  Name, IP address, Email address, Mailing address, Credit Card
                  details, and your Phone number. We may also analyze visitors
                  and usage patterns of such visits to the website in order to
                  make improvements to the website and the information within it
                  and to be able to send you relevant information from time to
                  time.
                </DialogContentText>
              </li>
              <li>
                <DialogContentText>
                  We will only share personal information where compelled to do
                  so under legal processes or statute.
                </DialogContentText>
              </li>
              <li>
                <DialogContentText>
                  We will not sell or pass such information to third parties
                  without your specific permission. However, whilst we will do
                  everything we can to maintain the security of your personal
                  information, it is not possible to guarantee it and therefore
                  if you supply such information you do so at your own risk. If
                  you find that the information we hold is incorrect or you wish
                  to remove it, please contact us at{" "}
                  <a href="mailto:info@foodnome.com" style={{ color: "black" }}>
                    info@foodnome.com
                  </a>
                  .
                </DialogContentText>
              </li>
            </ul>
          </div>

          <div className={classes.backLinkWrapper}>
            {from && (
              <Button size="small" onClick={() => navigate(from)}>
                back
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

Privacy.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object
};

export default withStyles(styles)(Privacy);
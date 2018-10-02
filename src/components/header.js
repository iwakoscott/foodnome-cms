import React from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Image from "react-shimmer";
import FoodnomeLogo from "../images/logos/FoodnomeCarrot_WordOnly_White_TransparentBG_small.png";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaPinterest,
  FaFacebook
} from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";

const styles = () => ({
  appBarInterior: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  closeButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%"
  },
  drawerBody: {
    padding: ".5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "1 auto"
  },
  iconWrapper: {
    width: "100%",
    maxWidth: "300px",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "1em 0"
  },
  drawer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { themeColor, classes, siteTitle } = this.props;
    return (
      <header>
        <AppBar style={{ background: themeColor, width: "100%" }}>
          <div className={classes.appBarInterior}>
            <Button onClick={this.handleToggle}>
              <FaBars style={{ margin: ".25rem" }} color="white" size={20} />
            </Button>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}>
              <Link to="/">
                <Image
                  style={{ padding: 0, margin: 0 }}
                  src={FoodnomeLogo}
                  width={125}
                  height={50}
                  alt={`${siteTitle} Logo`}
                />
              </Link>
            </div>
          </div>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleToggle}>
          <div className={classes.drawer}>
            <div className={classes.closeButtonWrapper}>
              <Button onClick={this.handleToggle}>
                <FaTimes size={20} />
              </Button>
            </div>
            <div className={classes.drawerBody}>
              <h1>Hello, world!</h1>
            </div>
            <div>
              {/* Social Media Links here */}
              <div className={classes.iconWrapper}>
                <Button>
                  <FaFacebook size={30} color={themeColor} />
                </Button>
                <Button>
                  <FaInstagram size={30} color={themeColor} />
                </Button>
                <Button>
                  <FaPinterest size={30} color={themeColor} />
                </Button>
              </div>
            </div>
          </div>
        </Drawer>
      </header>
    );
  }
}

export default withStyles(styles)(Header);

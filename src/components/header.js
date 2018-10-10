import React from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Image from "react-shimmer";
import FoodnomeLogo from "../images/logos/FoodnomeCarrot_WordOnly_White_TransparentBG_small.png";
import { FaBars, FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import { StaticQuery, graphql } from "gatsby";
import { CloseButton, TextButton } from "./Buttons";
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
    flex: 1,
    width: "300px"
  },
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "1.25em",
    margin: ".5em 0"
  },
  links: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  mainLogo: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  }
});

const getRoutes = () => [
  { to: "/", name: "Home" },
  {
    to: "/blog",
    name: "Blog"
  },
  {
    to: "/apply",
    name: "Apply to be a Cook!"
  }
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState(({ open }) => ({ open: !open }));

  handleLinkClick = route => {
    this.handleToggle();
    this.props.navigate(route);
  };

  render() {
    const { themeColor, classes, siteTitle } = this.props;
    return (
      <header>
        <AppBar style={{ background: themeColor, width: "100%" }}>
          <div className={classes.appBarInterior}>
            <Button onClick={this.handleToggle}>
              <FaBars style={{ margin: ".25rem" }} color="white" size={20} />
            </Button>
            <div className={classes.mainLogo}>
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
              <CloseButton
                onClick={this.handleToggle}
                iconProps={{ size: 20 }}
              />
            </div>
            <div className={classes.links}>
              {getRoutes().map((route, index) => (
                <TextButton
                  style={{ margin: "1em 0" }}
                  key={index}
                  onClick={() => this.handleLinkClick(route.to)}>
                  {route.name}
                </TextButton>
              ))}
            </div>
            <div>
              {/* Social Media Links here */}
              <StaticQuery
                query={graphql`
                  query SocialMediaLinks {
                    site {
                      siteMetadata {
                        instagramURL
                        facebookURL
                        pinterestURL
                      }
                    }
                  }
                `}
                render={data => (
                  <div className={classes.iconWrapper}>
                    <Button
                      component={"a"}
                      rel="noopener noreferrer"
                      target="_BLANK"
                      href={data.site.siteMetadata.facebookURL}>
                      <FaFacebook size={30} color={themeColor} />
                    </Button>
                    <Button
                      component={"a"}
                      rel="noopener noreferrer"
                      target="_BLANK"
                      href={data.site.siteMetadata.instagramURL}>
                      <FaInstagram size={30} color={themeColor} />
                    </Button>
                    <Button
                      component={"a"}
                      rel="noopener noreferrer"
                      target="_BLANK"
                      href={data.site.siteMetadata.pinterestURL}>
                      <FaPinterest size={30} color={themeColor} />
                    </Button>
                  </div>
                )}
              />
            </div>
          </div>
        </Drawer>
      </header>
    );
  }
}

export default withStyles(styles)(Header);

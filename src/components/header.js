import React from 'react'
import { Link } from 'gatsby'
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Image from "react-shimmer";
import FoodnomeLogo from "../images/FoodnomeCarrot_WordOnly_White_TransparentBG_small.png"
import { FaBars, FaTimes } from "react-icons/fa"
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer';

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
  drawer: {
    padding: ".5rem"
  }
});


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleToggle = () => this.setState(({ open }) => ({ open: !open }));

  render(){
    const { themeColor, classes, siteTitle } = this.props;
    return (
      <header>
        <AppBar style={{ background: themeColor, marginBottom: "1em", width: "100%" }} position="static">
          <div className={classes.appBarInterior}>
            <Button onClick={this.handleToggle}>
              <FaBars style={{ margin: ".25rem" }} color="white" size={20}/>
            </Button>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <Link to="/">
                <Image style={{ padding: 0, margin: 0 }} src={FoodnomeLogo} width={125} height={50} alt={`${siteTitle} Logo`}/>
              </Link>
            </div>
          </div>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleToggle}>
          <div className={classes.closeButtonWrapper}>
            <Button onClick={this.handleToggle}>
              <FaTimes size={20}/>
            </Button>
          </div>
          <div className={classes.drawer}>
            <h1>Hello, world!</h1>
          </div>
        </Drawer>
      </header>
    );
  }
}

export default withStyles(styles)(Header);

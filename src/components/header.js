import React from 'react'
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar';
import Image from "react-shimmer";
import FoodnomeLogo from "../images/FoodnomeCarrot_WordOnly_White_TransparentBG_small.png"

const Header = ({ siteTitle, themeColor }) =>  (
  <AppBar style={{ background: themeColor, marginBottom: "1em" }} position="static">
    <Link to="/">
      <Image style={{ padding: 0, margin: 0 }} src={FoodnomeLogo} width={125} height={50} alt={`${siteTitle} Logo`}/>
    </Link>
  </AppBar>
)

export default Header

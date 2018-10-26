import React from 'react';
import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import FoodnomeLogo from '../images/logos/FoodnomeCarrot_WordOnly_White_TransparentBG_small.png';
import { FaBars, FaInstagram, FaPinterest, FaFacebook } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import { StaticQuery, graphql } from 'gatsby';
import { CloseButton, TextButton } from './Buttons';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';

const AppBarInterior = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const IconContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-evenly;
  margin: 1em 0;
`;

const DrawerInterior = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 300px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const getRoutes = () => [
  { to: '/', name: 'Home' },
  {
    to: '/blog',
    name: 'Blog'
  },
  {
    to: '/story',
    name: 'Story'
  },
  {
    to: '/team',
    name: 'Meet the Team!'
  }
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      transparent: false
    };
  }

  isTransparent = path => ['/', '/story/', '/story'].includes(path);

  handleScroll = () => {
    const scrollPos = window.pageYOffset;
    if (scrollPos <= 90) {
      this.setState({
        transparent: true
      });
    } else {
      this.setState({
        transparent: false
      });
    }
  };

  componentDidMount() {
    if (this.isTransparent(this.props.location.pathname)) {
      if (window.pageYOffset <= 90) {
        this.setState({
          transparent: true
        });
      }
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleToggle = () => this.setState(({ open }) => ({ open: !open }));

  handleLinkClick = route => {
    this.handleToggle();
    this.props.navigate(route);
  };

  render() {
    const { themeColor, siteTitle } = this.props;
    const { transparent } = this.state;

    return (
      <div>
        <AppBar
          style={{
            background: this.isTransparent(this.props.location.pathname)
              ? transparent
                ? 'transparent'
                : themeColor
              : themeColor,
            transition: 'all 300ms ease-out',
            boxShadow: transparent ? 'none' : 'auto'
          }}>
          <AppBarInterior>
            <Button onClick={this.handleToggle}>
              <FaBars color="white" size={20} />
            </Button>
            <LogoContainer>
              <Link to="/">
                <img
                  style={{ padding: 0, margin: 0 }}
                  src={FoodnomeLogo}
                  width={125}
                  height={50}
                  alt={`${siteTitle} Logo`}
                />
              </Link>
            </LogoContainer>
          </AppBarInterior>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleToggle}>
          <DrawerInterior>
            <CloseButtonContainer>
              <CloseButton
                onClick={this.handleToggle}
                iconProps={{ size: 20 }}
              />
            </CloseButtonContainer>
            <LinksContainer>
              {getRoutes().map((route, index) => (
                <TextButton
                  style={{ margin: '1em 0' }}
                  key={index}
                  onClick={() => this.handleLinkClick(route.to)}>
                  {route.name}
                </TextButton>
              ))}
            </LinksContainer>
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
                  <IconContainer>
                    <Button
                      component={'a'}
                      rel="noopener noreferrer"
                      target="_BLANK"
                      href={data.site.siteMetadata.facebookURL}>
                      <FaFacebook size={30} color={themeColor} />
                    </Button>
                    <Button
                      component={'a'}
                      rel="noopener noreferrer"
                      target="_BLANK"
                      href={data.site.siteMetadata.instagramURL}>
                      <FaInstagram size={30} color={themeColor} />
                    </Button>
                    <Button
                      component={'a'}
                      rel="noopener noreferrer"
                      target="_BLANK"
                      href={data.site.siteMetadata.pinterestURL}>
                      <FaPinterest size={30} color={themeColor} />
                    </Button>
                  </IconContainer>
                )}
              />
            </div>
          </DrawerInterior>
        </Drawer>
      </div>
    );
  }
}

export default Header;

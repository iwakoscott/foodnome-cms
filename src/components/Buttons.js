import React from 'react';
import Button from '@material-ui/core/Button';
import { FaTimes, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'gatsby';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import styled, { keyframes } from 'styled-components';
import CookAvatar from '../images/other/Cook.png';

export function CloseButton({ onClick, iconProps, ...rest }) {
  return (
    <Button onClick={onClick} {...rest}>
      <FaTimes {...iconProps} />
    </Button>
  );
}

export function LinkButton({ to, iconProps, children, ...rest }) {
  return (
    <Button component={Link} to={to} {...rest}>
      <span>{children}</span>
      <FaAngleDoubleRight {...iconProps} />
    </Button>
  );
}

export function TextButton({ onClick, children, ...rest }) {
  return (
    <ButtonBase onClick={onClick} {...rest}>
      {children}
    </ButtonBase>
  );
}

const BannerText = styled.h2`
  font-size: 1em;
  padding: 0;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 0.85em;
  }
`;

const AnimatedButton = styled(Button)``;

export function BecomeACookButton({ to, children }) {
  return (
    <Button
      color="secondary"
      variant="contained"
      component={Link}
      to={to}
      style={{
        backgroundColor: '#fa5f65',
        color: 'white',
        margin: '0.25rem'
      }}>
      <div
        style={{
          display: 'grid',
          maxWidth: 175,
          width: '100%',
          gridTemplateColumns: '1fr 1fr',
          justifyContent: 'space-evenly',
          gridColumnGap: '.5rem',
          alignItems: 'center',
          margin: 0,
          padding: '0 0.5rem'
        }}>
        <Avatar
          imgProps={{
            style: { margin: 0, padding: 0, width: 30, height: 30 }
          }}
          style={{ margin: 0, padding: 0 }}
          src={CookAvatar}
          alt="cook avatar."
        />
        <BannerText>{children}</BannerText>
      </div>
    </Button>
  );
}

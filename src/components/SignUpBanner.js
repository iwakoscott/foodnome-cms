import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Card from '@material-ui/core/Card';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 1em 1em;
`;

const BannerText = styled.h2`
  font-size: 2.5em;
  @media (max-width: 500px) {
    font-size: 2em;
  }
`;

const StyledCard = styled(Card)`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3em;
  max-width: 900px;
`;

export default function SignUpBanner(props) {
  return (
    <Container>
      <StyledCard>
        <BannerText>
          Home restaurants are coming soon. Join the movement and stay in the
          loop!
        </BannerText>
        <BannerText>
          <Link to="/sign-up" state={{ from: props.location.pathname }}>
            Sign up today!
          </Link>
        </BannerText>
      </StyledCard>
    </Container>
  );
}

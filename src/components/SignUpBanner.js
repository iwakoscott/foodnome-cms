import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 1em 0em;
  margin-bottom: 3em;
`;

const BannerText = styled.h2`
  font-size: 2.5em;
  padding: 0;
  text-align: center;
  margin: 0;
  line-height: 1.2em;

  @media (max-width: 500px) {
    font-size: 2em;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 2em 0em 2em;
  margin-bottom: 3em;
  max-width: 900px;
`;

function SignUpBanner(props) {
  return (
    <Container>
      <StyledCard>
        <BannerText>
          Home restaurants are coming soon. Join the movement and stay in the
          loop!
        </BannerText>
        <div style={{ margin: '3em 0' }}>
          <Button
            color="secondary"
            variant="contained"
            component={Link}
            to="/sign-up"
            style={{
              backgroundColor: '#ec008c',
              color: 'white',
              width: '300px',
            }}
            state={{ from: props.location.pathname }}
          >
            <BannerText> Sign up today!</BannerText>
          </Button>
        </div>
      </StyledCard>
    </Container>
  );
}

export default SignUpBanner;

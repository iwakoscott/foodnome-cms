import styled from 'styled-components';

export const HeroText = styled.h2`
  color: white;
  font-size: 3em;
  max-width: 950px;
  margin: 0.5em;

  @media (max-width: 620px), (max-height: 500px) {
    font-size: 1.8em;
  }
`;

import styled from 'styled-components';
import { media } from 'styles/theme';

export const Content = styled.div`
  display: flex;

  ${media.tablet} {
    flex-direction: column;
  }
`;

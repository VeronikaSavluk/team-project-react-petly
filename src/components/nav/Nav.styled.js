import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: ${p => p.theme.fonts.body};
  padding-top: 20px;
  padding-bottom: 20px;
  text-decoration: none;
  font-size: 32px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.37;
  color: #181c27;
  transition: all 0.3s linear;

  &.active {
    font-weight: ${p => p.theme.fontWeights.bold};
    color: #f59256;
    text-decoration-line: underline;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #f59256;
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 80px;
    line-height: 1.35;
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

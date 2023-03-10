import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  padding: 20px 0;
  width: 100%;

  background: linear-gradient(356deg, #ff634e 0%, #ffdf48 105.44%);

  -webkit-box-shadow: inset 0px 36px 60px -13px rgba(222, 179, 49, 1);
  -moz-box-shadow: inset 0px 36px 60px -13px rgba(222, 179, 49, 1);
  box-shadow: inset 0px 36px 60px -13px rgba(222, 179, 49, 1);

  z-index: 9;
  margin: 0 auto;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    font-size: ${p => p.theme.fontSizes.xxs};
    line-height: ${p => p.theme.lineHeights.min};
  }

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.min};
  }

  @media screen and (min-width: 1280px) {
    padding-top: 30px;
    padding-bottom: 28px;
  }
`;

export const Position = styled.div`
  width: 100%;
  padding: 0 30px;
  align-items: center;
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.footerText};
  @media screen and (min-width: 768px) {
    margin-right: 34px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 133px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-right: 34px;
  }
`;

export const DeveloperData = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 3px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
`;

export const BoxRight = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 3px;
  }
`;

export const ButtonModal = styled.button`
  margin-left: 6px;
  padding: 1px;
  color: ${p => p.theme.colors.footerText};
  border: ${p => p.theme.borders.none};
  border-bottom: ${p => p.theme.borders.normal};
  border-bottom-color: ${p => p.theme.colors.footerText};
  cursor: pointer;
  background-color: transparent;
  transition: border-bottom-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${p => p.theme.colors.focus};
    border-bottom: ${p => p.theme.borders.normal};
    border-bottom-color: ${p => p.theme.colors.focus};
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const SpanTeam = styled.span`
  margin-left: 5px;
  width: 104px;
  text-align: left;

  cursor: pointer;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${p => p.theme.colors.focus};
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

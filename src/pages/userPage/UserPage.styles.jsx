import styled from '@emotion/styled';

export const UserPageContainer = styled.div`
margin-top: 130px;
@media screen and (min-width: 768px) {
  display: flex;
}
`
export const UserInfo = styled.div`
box-sizing: border-box;
width: auto;
justify-content: center;
padding: 20px 12px 20px 16px;
background-color: #fff;
border-radius: 7%;
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
@media screen and (max-width: 768px) {
  margin-left: 20px;
  margin-right: 20px;
}

@media screen and (min-width: 768px) {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 24px 40px 24px 40px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;

}

@media screen and (min-width: 1280px) {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px 40px 24px 40px;
  width: 570px;
}
`;

export const UserContainer = styled.div`
@media screen and (min-width: 768px) {

}
@media screen and (min-width: 1280px) {
  display: flex;

}`

// export const UserContainer = styled.div`
//   margin-bottom: 48px;
//   @media screen and (min-width: 768px) {
//     padding-left: 0;

//     @media screen and (min-width: 768px) {
//       margin-bottom: 20px;
//   }
//   @media screen and (min-width: 1280px) {
//     margin-bottom: 0px;
//     margin-right: 32px;
//     width: 411px;

//     border-radius: 0px 40px 40px 0px;
//     box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
// }
// `;

export const UserTitle = styled.h2`
  font-family: 'Manrope';

  font-weight: 500;
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.normal};
  color: #111111;
  @media screen and (min-width: 768px) {

    font-size: 28px;
    line-height: {t => };
  }
  @media screen and (min-width: 1280px) {

    font-size: 28px;
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';

  font-weight: 500;
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.normal};
  color: #111111;
  @media screen and (min-width: 768px) {

    font-size: 28px;
    line-height: {t => };
  }
  @media screen and (min-width: 1280px) {

    font-size: 28px;
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;

export const PetTitle = styled.h3`
font-family: 'Manrope';

font-weight: 500;
font-size: 20px;
line-height: ${p => p.theme.lineHeights.normal};
color: #111111;
@media screen and (min-width: 768px) {

  font-size: 28px;
  line-height: {t => };
}
@media screen and (min-width: 1280px) {

  font-size: 28px;
  line-height: ${p => p.theme.lineHeights.normal};
}`

export const UserCardWrapper = styled.div`
@media screen and (min-width: 1279px) {
margin-right: 32px
}
`
import styled from '@emotion/styled';

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

export const Photo = styled.img`
  height: 100%;
  margin: 0 auto;
  width: 233px;
  height: 233px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
`;

export const PhotoEdit = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const PhotoEditLab = styled.label`
display: flex;
justify-content: flex-end;
@media screen and (max-width: 1280px) {
margin-left: 0px;
margin-right: 0px;
margin-top: 12px;
display: flex;
justify-content: flex-end;
position: absolute;
right: 24px;

flex-shrink: 1;
}
@media screen and (min-width: 768px) {
  margin-top: 8px;
  right: 0px;
}
@media screen and (min-width: 1280px) {

}
`
export const PhotoEditText = styled.p`
margin-bottom: 0px;
margin-left: 5px;

font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xxxs};
line-height: 22px;
color: ${p => p.theme.colors.black}

@media screen and (min-width: 1280px) {

  }
`
export const PhotoContainer = styled.div`
position: relative;
@media screen and (min-width: 1280px) {
 }
`
export const EditPhotoBtn = styled.button`
margin-rigth: 10px;
`


export const UserInfoWrapper = styled.div`
@media screen and (min-width: 768px) {
  display: flex;
}
`
export const UserFormContainer = styled.div`
margin-top: 100px;`

export const UserPhotoWrapper = styled.div`
margin-bottom: 68px;
@media screen and (min-width: 768px) {
  margin-bottom: 0px;
 }
 @media screen and (min-width: 1280px) {
  margin-bottom: 36px;
 }`

export const LogOutBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 768px) {
  position: absolute;
  bottom: 20px;
  right: 12px;

  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${p => p.theme.colors.muted}
}

@media screen and (min-width: 768px) {
  display: flex;
  margin-top: 5px;
  margin-bottom: 0px;
}

@media screen and (min-width: 1280px) {
  margin-top: 44px;
`
export const LogOutText = styled.p`
margin-bottom: 0px;
margin-left: 8px;
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.max};
letter-spacing: ${p => p.theme.letterSpacings.normal}

`
export const PhotoEditSubmitBtn = styled.button`
display: flex;
margin-bottom: 0px;
margin-left: 5px;

font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xxxs}
line-height: 22px;
color: ${p => p.theme.colors.black}
`
export const PhotoEditSubmitWrapper = styled.div`
display: flex;
justify-content: flex-end;
@media screen and (max-width: 1280px) {
margin-left: 0px;
margin-right: 0px;
margin-top: 12px;
display: flex;
justify-content: flex-end;
position: absolute;
right: 24px;
flex-shrink: 1;
}
@media screen and (min-width: 768px) {
  margin-top: 8px;
  right: 0px;
}
`
export const UserWrapper = styled.div`
align-items: center;
justify-content: center;
margin-bottom: 0px;
`
export const UserFormWrapper = styled.div`
margin-bottom: 0px;`

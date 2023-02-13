import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, removeUserPet } from 'redux/user/operations';
import { resetIsAddedPetSuccess } from 'redux/user/slice';
import { getIsAddedPetSuccess, getUserError } from 'redux/user/selectors';
import { selectors } from 'pages/userPage/selectors';
import { AddPetButton } from 'components/petsData/AddPet';
import { UserForm } from 'components/userData/UserInfo';
import { PetCard } from 'components/petsData/PetCard';

import {
  UserPageContainer,
  UserContainer,
  PetsContainerWrapper,
  UserInfo,
  PetTitle,
  UserCardWrapper,
  Title,
  AddPetBtnContainer,
} from 'pages/userPage/UserPage.styles';

const UserPage = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(selectors.getUserInfo);
  const userAvatar = useSelector(selectors.getUserAvatar);
  const userPets = useSelector(selectors.getUserPets);
  const isPetsLoading = useSelector(selectors.getPetsLoading);
  const isUserLoading = useSelector(selectors.getUserLoading);
  const error = useSelector(getUserError);
  const isAddedPetSuccess = useSelector(getIsAddedPetSuccess);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    if (isAddedPetSuccess) {
      dispatch(resetIsAddedPetSuccess());
    }
  }, [dispatch, isAddedPetSuccess, error]);

  const onDeletePet = e => {
    const petToRemove = e.currentTarget.id;
    dispatch(removeUserPet(petToRemove));
  };
  const formData = { userInfo, userAvatar, isUserLoading };
  const cardData = { userPets, onDeletePet, isPetsLoading };
  console.log(cardData)

  return (
    <main>
    <UserPageContainer>
      <UserCardWrapper>
        <Title>My information</Title>
        <UserInfo>
          <UserContainer>
            <UserForm formData={formData} />
          </UserContainer>
        </UserInfo>
      </UserCardWrapper>

      <PetsContainerWrapper>
        <div>
          <PetTitle>My pets</PetTitle>
          <PetCard cardData={cardData} />
        </div>
        <AddPetBtnContainer>
          <AddPetButton />
        </AddPetBtnContainer>
      </PetsContainerWrapper>
    </UserPageContainer>
    </main>
  );
};

export default UserPage;

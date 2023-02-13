export const getUserError = ({ user }) => user.error;
export const getPetsLoading = ({ user }) => user.loading;
export const getUserLoading = ({ user }) => user.userLoading;
export const getLoadingUpdate = ({ user }) => user.isLoadingUpdate;
export const getDisabledFields = ({ user }) => user.isDisabledFields;
export const getUserWithPets = ({ user }) => user.user;
export const getUserInfo = ({ user }) => user.user;
export const getUserAvatar = ({ user }) => user?.user.avatarURL;
export const getUserPets = ({ user }) => user.userPets;

export const getAddPetError = ({ user }) => user.addPetError;
export const getIsAddedPetSuccess = ({ user }) => user.isAddedPetSuccess;

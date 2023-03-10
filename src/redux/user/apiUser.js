
// axios.defaults.baseURL = 'https://pets-support-webapp.onrender.com/api';
import * as API from '../../redux/auth/operations';

// export const getUserData = async () => {
// 	const { data } = await API.get('/user/get');
// 	return data;
// };

// export const updateUserData = async data => {
// 	const { data: result } = await API.put('/user/update', data);
// 	return result;
// };

// export const addUserPet = async data => {
// 	const { data: result } = await API.post('/pets/add', data);
// 	return result;
// };

export const removeUserPet = async id => {
	const { data } = await API.delete(`/pets/remove/${id}`);
	return data;
};

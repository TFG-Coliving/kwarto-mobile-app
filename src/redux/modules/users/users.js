import {useDispatch, useSelector} from 'react-redux';
import {getCurrentUser} from "./usersModule";
import {useEffect} from "react";

const Users = () => {
  const user = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const getUser = () => user;
  const getFirstName = () => user.firstname;
  const getLastName = () => user.lastname;
  const getEmail = () => user.email;
  const getRole = () => user.role;
  const getPhone = () => user.phone;
  const getScore = () => user.score;
  const getScoreHidden = () => user.score_hidden;
  const getBirthDate = () => user.birth_date;
  const getProfilePicture = () => user.profilePicture.uri;

  return {
    getUser,
    getFirstName,
    getLastName,
    getEmail,
    getRole,
    getPhone,
    getScore,
    getScoreHidden,
    getBirthDate,
    getProfilePicture
  };
};

export default Users;

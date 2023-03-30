import { useSelector } from 'react-redux';

const Users = () => {
  const user = useSelector(state => state.users);

  const getUser = () => {
    return user;
  };
  const getFirstName = () => {
    return user.firstname;
  }
  const getLastName = () => {
    return user.lastname;
  }
  const getEmail = () => {
    return user.email;
  }
  const getRole = () => {
    return user.role;
  }
  const getPhone = () => {
    return user.phone;

  }
  const getScore = () => {
    return user.score;
  }
  const getScoreHidden = () => {
    return user.score_hidden;
  }
  const getBirthDate = () => {
    return user.birth_date;
  }
  const getProfilePicture = () => {
    return user.profilePicture.uri;
  }

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

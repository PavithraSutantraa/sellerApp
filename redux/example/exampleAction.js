const add_postID = postID => {
  return {
    type: 'ADD_POSTID',
    payload: postID,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

export default {
  add_postID,
  logOut,
};

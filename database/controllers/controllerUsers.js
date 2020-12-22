import firebase from "firebase";
import "firebase/firestore";

export const createUser = (values) => {
  const { email, password } = values;
  var ref = firebase.auth().createUserWithEmailAndPassword(email, password);
  /*     .then((user) => {
      console.log("Usuario creado con exito");
    })
    .catch((error) => {
      console.log("No fue posible crear usuario");
      console.log(error);
    }); */
  return ref;
};

export const loginUser = (values) => {
  const { email, password } = values;
  let ref = firebase.auth().signInWithEmailAndPassword(email, password);
  return ref;
};

export const GetUserLogin = () => {
  let user = firebase.auth().currentUser;
  return user;
};

export const UpdateUser = (values) => {
  var user = firebase.auth().currentUser;
  var { displayName, photoURL } = values;

  var ref = user.updateProfile({
    displayName,
    photoURL,
  });

  return ref;
};

export const ResetPassword = (newPassword) => {
  var user = firebase.auth().currentUser;
  var ref = user.updatePassword(newPassword);
  return ref;
  
};
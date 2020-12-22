import firebase from "firebase";
import "firebase/firestore";

export const createUser = (values) => {
  const { email, password } = values;
  var ref = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
/*     .then((user) => {
      console.log("Usuario creado con exito");
    })
    .catch((error) => {
      console.log("No fue posible crear usuario");
      console.log(error);
    }); */
    return ref
};

export const loginUser = async (values) => {
  const { email, password } = values;
  let ref = await firebase.auth().signInWithEmailAndPassword(email, password);
  return ref;
};

export const GetUserLogin = () => {
  let user = firebase.auth().currentUser;
  return user;
};

export const GetUserLogin2 = () => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log("estoy en home");
    console.log(user);
    setUsuario({
      nombre: user.displayName,
      email: user.email,
    });
  });
};

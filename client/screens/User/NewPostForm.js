import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import { styles } from "../../styles/styles";
import Header from "../../components/Header";
import { createPost } from "../../database/controllers/controllerPost";
import { getUserLogin } from "../../functions/getUserLogin";
import { ScrollView } from "react-native-gesture-handler";

export default function NewPostForm({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentDate, setCurrentDate] = useState("");

  const obtenerFecha = () => {
    getUserLogin().then((user) => user && setCurrentUser(user.user));
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    setCurrentDate(
      "Realizado el " + date + "/" + month + "/" + year + " a las " + hours + ":" + min + "hs. por:"
    );
  };

  const handlerPost = async (values, { resetForm }) => {
    obtenerFecha();
    values = { ...values, user: currentUser, fecha: currentDate };
    let posteo = await createPost(values);
    posteo && console.log(posteo);
    resetForm();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("PostsList");
    }, 2000);
  };

  useEffect(() => {
    obtenerFecha();
  }, []);

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.body}>
          {loading ? (
            <>
              <ActivityIndicator size="large" color="#FFFF01" />
              <Text style={{ color: "#FFF", marginTop: 15 }}>
                Publicando...
              </Text>
            </>
          ) : (
            <Formik
              initialValues={{ title: "", description: "", tag: "Modulo 1" }}
              onSubmit={handlerPost}
            >
              {({ values, handleChange, handleSubmit, setFieldValue }) => (
                <View style={styles.formNewPost}>
                  {currentUser && (
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        marginBottom: 20,
                      }}
                    >
                      ¿Cual es tu duda {currentUser.displayName}?
                    </Text>
                  )}

                  <TextInput
                    placeholder="Haz tu pregunta"
                    onChangeText={handleChange("title")} //update title
                    value={values.title} //recibe valor de input
                    style={styles.inputNewPost}
                  />
                  <TextInput
                    style={styles.inputDescription}
                    multiline //Permite texto largo
                    placeholder="Agregar una descripción"
                    onChangeText={handleChange("description")}
                    value={values.description}
                  />
                  <Text style={{ marginTop: 15, marginBottom: 10 }}>
                    ¿A qué modulo pertenece tu duda?
                  </Text>
                  <Picker
                    style={styles.inputNewPost}
                    onValueChange={(itemValue) =>
                      setFieldValue("tag", itemValue)
                    }
                  >
                    <Picker.Item label="Modulo 1" value="Modulo 1" key={1} />
                    <Picker.Item label="Modulo 2" value="Modulo 2" key={2} />
                    <Picker.Item label="Modulo 3" value="Modulo 3" key={3} />
                    <Picker.Item label="Modulo 4" value="Modulo 4" key={4} />
                    <Picker.Item label="E-Commerce" value="eCommerce" key={5} />
                    <Picker.Item
                      label="Proyecto Final"
                      value="Proyecto"
                      key={6}
                    />
                  </Picker>

                  <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
                    <Text style={{ fontWeight: "bold" }}>Publicar</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          )}
        </View>
      </ScrollView>
    </>
  );
}

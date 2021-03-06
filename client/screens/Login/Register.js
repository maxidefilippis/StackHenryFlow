import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { styles } from "../../styles/styles";
import { createUser } from "../../database/controllers/controllerUsers";
import {Input} from "react-native-elements";

export default function Register({ navigation }) {
  const validations = yup.object().shape({
    email: yup.string()
      .email("Email no válido")
      .required("Campo obligatorio"),
    password: yup
      .string()
      .min( 8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
      .required("Campo obligatorio"),
  });

  const handleRegister = (values, { resetForm }) => {
    if (values.repeatPassword !== values.password) {
      alert("Passwords do not match");
    } else {
      createUser(values)
        .then((user) => {
          console.log("Usuario creado con exito");
          navigation.navigate("Login");
        })
        .catch((error) => {
          console.log("No fue posible crear usuario");
          console.log(error);
          alert(error.message);
        });
      resetForm();
    }
  };

  return (
    <>
      <View style={styles.headerOut}>
        <Image
          source={require("../../assets/henry.png")}
          resizeMode="contain"
          style={styles.imgHenryOut}
        ></Image>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              repeatPassword: "",
            }}
            onSubmit={handleRegister}
            validationSchema={validations}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <View style={styles.form}>
                <Text style={styles.h1}>REGISTRO</Text>

                {/* CAMPO EMAIL */}
                
                <Input
                  style={styles.input}
                  style={{marginTop:10, textAlign:"center"}}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder='Email'
                />
                {/* ERROR EMAIL */}
                {touched.email && errors.email && (
                  <Text style={styles.errorForm}>{errors.email}</Text>
                )}

                {/* CAMPO PASSWORD */}
                
                <Input
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder='Contraseña'
                />
                {/* ERROR PASSWORD */}
                {touched.password && errors.password && (
                  <Text style={styles.errorForm}>{errors.password}</Text>
                )}

                {/* CAMPO REPEAT PASSWORD */}
                
                <Input
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={handleChange("repeatPassword")}
                  onBlur={handleBlur("repeatPassword")}
                  value={values.repeatPassword}
                  placeholder='Repite la contraseña'
                />
                {/* ERROR REPEAT PASSWORD */}
                {touched.repeatPassword && errors.repeatPassword && (
                  <Text style={styles.errorForm}>{errors.repeatPassword}</Text>
                )}
                {touched.repeatPassword &&
                values.password !== values.repeatPassword ? (
                  <Text style={styles.errorForm}>
                    Las contraseñas no coinciden
                  </Text>
                ) : null}

                {/* REGISTRARSE */}
                <TouchableOpacity
                  style={styles.boton}
                  disabled={!isValid}
                  onPress={handleSubmit}
                >
                  <Text style={{ fontWeight: "bold" }}>Registrarme</Text>
                </TouchableOpacity>

                {/* INICIAR SESIÓN */}
                <TouchableOpacity
                  style={styles.label}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.linkForm}>
                    Ya tenés cuenta? Iniciá sesión
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
}

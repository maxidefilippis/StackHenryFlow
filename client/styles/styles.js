import { StyleSheet, Dimensions } from "react-native";
import { yellow, black, white, errorRed, gray } from "./globalsVariables";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${white}`,
    color: `${white}`,
    textAlign: "center",
  },
  headerOut: {
    top: 0,
    left: 0,
    paddingTop: 20,
    width: "100%",
    backgroundColor: `${yellow}`,
  },
  header: {
    top: 0,
    left: 0,
    paddingTop: 2,
    width: "100%",
    backgroundColor: `${yellow}`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
      
  },
  body: {
    textAlign: "center",
    backgroundColor: `${white}`,
    color: `${black}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    minHeight: windowHeight * 0.85,
    paddingVertical: 10,
  },

  bodyPostList: {
    textAlign: "center",
    backgroundColor: `${white}`,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: windowHeight * 0.813,
    paddingVertical: 20,
    borderRadius:24
  },
  post: {
    backgroundColor: `${white}`,
    color: `${black}`,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    borderColor: yellow,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  postList: {
    color: `${black}`,
    fontSize: 15,
    alignSelf: "center",
    paddingVertical: 10,
  },
  postTag: {
    fontWeight: "bold",
    backgroundColor: `${yellow}`,
    borderRadius: 100,
    paddingHorizontal: 8,
    alignSelf: "center",
    fontSize: 11,
  },
  listItemContainer: { borderBottomWidth: 1.5 },
  h1: {
    color: `${black}`,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 10,
  },
 
  h2: {
    color: `${white}`,
    fontSize: 18,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  h3: {
    color: black,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  h4: {
    color: white,
    fontSize: 15,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  h5: {
    color: black,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
  welcome: {
    color: `${black}`,
    marginTop: 30,
    marginBottom: 20,
    marginRight: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 10,
  },
  form: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#00FFFF",
    borderRadius: 15,
    backgroundColor: "#00000005",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2%",
    marginBottom: "3%",
    color:`${black}`,
  },
  formNewPost: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#00FFFF",
    borderRadius: 15,
    backgroundColor: `${gray}`,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
  },
  input: {
   border: "none",
    borderWidth: 1,
    // borderColor: yellow,
    height: 30,
    width: "80%",
    marginTop: 5,
    justifyContent: "center",
    textAlign: "center",
    color: `${black}`,
  },
  inputNewPost: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${black}`,
    backgroundColor: `${gray}`,
    height: 30,
    width: "80%",
    marginVertical: 5,
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    
  },
  inputDescription: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: `${black}`,
    height: 100,
    width: "80%",
    marginVertical: 5,
    justifyContent: "center",
    textAlign: "center",
  },
  label: {
    color: `${black}`,
    marginTop: 15,
  },
  errorForm: {
    fontSize: 12,
    color: `${errorRed}`,
    marginTop: 5,
    marginBottom: 15,
  },
  boton: {
    color: `${black}`,
    fontWeight: "bold",
    backgroundColor: `${yellow}`,
    borderRadius: 100,
    height: 30,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  linkForm: {
    color: `${black}`,
    marginBottom: 10,
    marginTop: 5,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: `${gray}`,
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.40,
    shadowRadius: 7.0,
    elevation: 24,
    minHeight: windowHeight * 0.5
  },
  cardComment: {
    backgroundColor: `${white}`,
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.40,
    shadowRadius: 7.0,
    elevation: 24,
    minHeight: windowHeight * 0.5
  },
  cardPostList: {
    backgroundColor: `${gray}`,
    color: black,
    width: "90%",
    display: "flex",
    justifyContent: "flex-start",
    marginVertical: 30,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.40,
    shadowRadius: 7.0,
    elevation: 24,
    minHeight: windowHeight * 0.6
  },
  imgHenry: {
    alignSelf: "center",
    width: 124,
    height: 50,
    zIndex: 1,
    marginLeft: -50,
  },
  imgHenryOut: {
    alignSelf: "center",
    width: 124,
    height: 50,
    zIndex: 1,
  },
  containerInputComment: {
    borderRadius: 10,
    borderColor: "yellow",
    backgroundColor: "black",
    padding: 8,
    margin: 10,
    width: 200,
    height: 100,
    color: "white",
  },
  comment: {
    textAlign: "center",
    padding: 8,
    marginVertical: 20,
    width: 280,
    height: 100,
    color: black,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    paddingTop:20
  },
  separatorPostList: {
    height: 1,
    width: "70%",
    backgroundColor: "#CED0CE",
    marginLeft: "15%",
    marginRight: "15%"
  },
  spinnerVerticalPagination: {
    paddingVertical: 20,
      borderTopWidth: 1,
      borderColor: "#CED0CE"
  },
  comentario: {
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 5,
    color: "#FFF",
  },
  containerSearch: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#329999",
    borderRadius: 8,
    //border: "none",
    overflow: "hidden",
  },
  // STYLES VIDEOS DE CLASES
  h1clases: {
    color: `${black}`,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 10,
    marginTop:20
  },
  h2clases: {
    color: `${black}`,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 10,
    marginTop:28,
    marginBottom:20,
  
  },
  containerVideo: {
    display:"flex",
    width:300,
    height:200,
    marginTop:20,
    alignSelf: "center",
  },
  containerVideo2: {
    display:"flex",
    width:300,
    height:200,
    alignSelf: "center",
  }
});

import { StyleSheet, Dimensions } from "react-native";
import { yellow, black, white, errorRed, gray } from "./globalsVariables";

 const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const darkStyles = StyleSheet.create({
  darkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${black}`,
    color: `${yellow}`,
    textAlign: "center",
  },
  darkHeaderOut: {
    top: 0,
    left: 0,
    paddingTop: 20,
    width: "100%",
    backgroundColor: `${black}`,
  },
  darkHeader: {
    top: 0,
    left: 0,
    paddingTop: 2,
    width: "100%",
    backgroundColor:`${white}`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
      
  },
  scroll:{
    backgroundColor: `${black}`,
  },
  darkBody: {
    textAlign: "center",
    backgroundColor: `${black}`,
    color: `${yellow}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    minHeight: windowHeight * 0.85,
    paddingVertical: 10,
  },

  darkBodyPostList: {
    textAlign: "center",
    backgroundColor: `${black}`,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: windowHeight * 0.813,
    paddingVertical: 20,
  },
  darkPost: {
    backgroundColor: black,
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
  darkPostList: {
    color: white,
    fontSize: 15,
    alignSelf: "center",
    paddingVertical: 10,
  },
  darkPostTag: {
    fontWeight: "bold",
    backgroundColor: `${yellow}`,
    borderRadius: 100,
    paddingHorizontal: 8,
    alignSelf: "center",
    fontSize: 11,
  },
darkH1: {
    color: `${yellow}`,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 10,
  },
 
  darkH2: {
    color: `${yellow}`,
    fontSize: 18,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  darkH3: {
    color:`${yellow}`,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  darkH3text:{
      color:`${yellow}`,
      fontSize: 18,
      marginTop: 10,
      marginBottom: 15,
      fontWeight: "bold",
      textAlign: "center",
    
  },
  darkH4: {
    color: white,
    fontSize: 15,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  darkH5: {
    color: yellow,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
  darkWelcome: {
    color: `${black}`,
    marginTop: 30,
    marginBottom: 20,
    marginRight: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 10,
  },
  darkForm: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#00FFFF",
    borderRadius: 15,
    backgroundColor: "#black",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2%",
    marginBottom: "3%",
  },
  listItemContainer: { borderBottomWidth: 1.5, backgroundColor: gray },
  darkFormNewPost: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#00FFFF",
    borderRadius: 15,
    backgroundColor: black,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
  },
  darkFormikInput :{
    backgroundColor: `${yellow}`
  },
  darkInput: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: yellow,
    height: 30,
    width: "80%",
    marginTop: 5,
    justifyContent: "center",
    textAlign: "center",
    color: `${white}`,
  },
  darkInputNewPost: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${yellow}`,
    backgroundColor: `${black}`,
    color: `${white}`,
    height: 30,
    width: "80%",
    marginVertical: 5,
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    
  },
  darkInputDescription: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: `${yellow}`,
    height: 100,
    width: "80%",
    marginVertical: 5,
    justifyContent: "center",
    textAlign: "center",
  },
  darkLabel: {
    color: `${white}`,
    marginTop: 15,
  },
  darkErrorForm: {
    fontSize: 12,
    color: `${errorRed}`,
    marginTop: 5,
    marginBottom: 15,
  },
  darkBoton: {
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
  darkLinkForm: {
    color: `${white}`,
    marginBottom: 10,
    marginTop: 5,
  },
  darkCard: {
    backgroundColor: `${black}`,
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
  darkCardComment: {
    backgroundColor: `${black}`,
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
  darkCardPostList: {
    backgroundColor: `${black}`,
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
  darkImgHenry: {
    alignSelf: "center",
    width: 124,
    height: 50,
    zIndex: 1,
    marginLeft: -50,
  },
  darkImgHenryOut: {
    alignSelf: "center",
    width: 124,
    height: 50,
    zIndex: 1,
  },
  darkContainerInputComment: {
    borderRadius: 10,
    borderColor: "yellow",
    backgroundColor: "black",
    padding: 8,
    margin: 10,
    width: 200,
    height: 100,
    color: "white",
  },
  darkComment: {
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
  darkSeparatorPostList: {
    height: 1,
    color:black,
    width: "70%",
    marginLeft: "15%",
    marginRight: "15%"
  },
  darkSpinnerVerticalPagination: {
    paddingVertical: 20,
      borderTopWidth: 1,
      borderColor: `${yellow}` 
  },
  darkComentario: {
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 5,
    color: "#FFF",
  },
  darkContainerSearch: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#329999",
    borderRadius: 8,
    border: "none",
    overflow: "hidden",
  },
  darkInput:{
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    // margin: 0.25rem 0.5rem,
    paddingLeft: 16,
    fontSize: 16,
    width: 6,
  },
  darkTextStyle:{
    color:`${yellow}`
  },
  placeholder:{
    color: "#4c2882 ",
  },
  darkFocus: {
    outline: "none",
  },
   darkDisplayName : {
    color:`${yellow}`
  },
  textstyle:{
    color:`${black}`
  },
  darkScroll:{
    backgroundColor:`${black}`
  },
  bodydark:{
    backgroundColor:black
  },
  h1classesdark:{
    color: `${yellow}`,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 10,
    marginTop:20
  },
  h2classesdark:{
    color: `${yellow}`,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 10,
    marginTop:28,
    marginBottom:20,
  }
  
});

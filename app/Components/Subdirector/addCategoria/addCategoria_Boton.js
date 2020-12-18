import React from "react";
import { StyleSheet, View,Alert } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Subdirector_Boton() {
  const navigation = useNavigation();
  return (        
    <View style={styles.viewBtn}>
    <Button
      title="Añadir Categoria"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={showAlert}
    />
    </View>
  
  );
}
var clave,nombreCategoria
const showAlert = () =>{
    Alert.alert(
       'Categoria agregada...'+clave+' '+nombreCategoria
    )
  }

const styles = StyleSheet.create({
   btnAddMaestro: {
   marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#CA6F1E"
  },
  btnContainer: {
    width: "80%"
  },
  viewBtn: {
    
    alignItems: "center"
  }
 });
import React from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import Subdirector_Titulo from "../../Components/Subdirector/Subdirector/Subdirector_Titulo";
import Subdirector_Boton from "../../Components/Subdirector/Subdirector/Subdirector_Boton";
import Subdirector_Categorias from "../../Components/Subdirector/Subdirector/Subdirector_Categorias";


export default function Subdirector() {
  
  return (
    <View style={styles.viewBody}>
    <Subdirector_Titulo/> 
    <Subdirector_Boton/>
    <Subdirector_Categorias/>
  
  </View>    
  );
}

const alertItemName = (item) => {
  Alert.alert(item.title+"\n actualizar  borrar ")
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
 
});


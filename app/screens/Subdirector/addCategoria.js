import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import AddCategoria_Titulo from "../../Components/Subdirector/addCategoria/addCategoria_Titulo";
import AddCategoria_Datos from "../../Components/Subdirector/addCategoria/addCategoria_Datos";
import AddCategoria_Boton from "../../Components/Subdirector/addCategoria/addCategoria_Boton";



export default function addCategoria() {
  return (

    <View style={styles.viewBody}>
    <AddCategoria_Titulo/>
    <ScrollView>
    <AddCategoria_Datos/>
    <AddCategoria_Boton/>
    </ScrollView>
  </View>


  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
  marginBottom: 100,
  },
  
});

import React from "react";
import {View, TextInput, Text } from "react-native";

export default function Form(){
       return(
      <View>
      <View> 

       <Text>Altura</Text>
        <TextInput
          placeholder="Ex 1.75"
           keyboardType="numeric"/>

       <Text>Peso</Text>
         <TextInput
          placeholder="Ex 90.89"
           keyboardType="numeric"/>
      
       </View>
       </View>
       );
}
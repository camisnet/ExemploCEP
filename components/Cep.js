import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <>
        <Text style={styles.texto}>Estado: </Text>
        <Text style={styles.texto}>Cidade: </Text>
        <Text style={styles.texto}>Logradouro: </Text>
        <Text style={styles.texto}>Complememto: </Text>
    </>
  );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 15,
        marginTop:10,
    }
});
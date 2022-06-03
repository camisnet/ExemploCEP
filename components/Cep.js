import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Cep(props) {
  return (
    <>
        <Text style={styles.texto}>Estado: {props.data.localidade} </Text>
        <Text style={styles.texto}>Bairro: {props.data.bairro} </Text>
        <Text style={styles.texto}>Cidade: {props.data.uf} </Text>
        <Text style={styles.texto}>Logradouro: {props.data.logradouro} </Text>
        <Text style={styles.texto}>Complememto: {props.data.complemento} </Text>
    </>
  );
}

export function limpar() {
  return (
    <>
        <Text style={styles.texto}>Estado: {""} </Text>
        <Text style={styles.texto}>Bairro: {""} </Text>
        <Text style={styles.texto}>Cidade: {""} </Text>
        <Text style={styles.texto}>Logradouro: {""} </Text>
        <Text style={styles.texto}>Complememto: {""} </Text>
    </>
  );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 15,
        marginTop:10,
    }
});
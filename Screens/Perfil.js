import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'skyblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
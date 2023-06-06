import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#726cd5",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
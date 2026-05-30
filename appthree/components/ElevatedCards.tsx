import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Me
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                To
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                see
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Scroll
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                more...
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Kuch Bhi
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
     flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,

    },
  card:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    borderRadius:4,
    margin:8,
    color:'green',
  },
  cardElevated:{
    backgroundColor: '#430733',
    elevation: 4,
    shadowOffset: {
        width: 1,
        height: 2,  
    },
    shadowColor: '#ffffff',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }
})
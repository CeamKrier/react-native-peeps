import React from 'react'
import { View, StyleSheet } from 'react-native'
import Peep, { Accessories, Body, Face, FacialHair, Hair } from './src'

const styles = StyleSheet.create({
  peepStyle: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5
  }
})

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        width: 180,
        height: 180,
        alignSelf: 'center',
        borderRadius: 100,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'black'
      }}
    >
      <Peep
        style={styles.peepStyle}
        accessory={Accessories.SunglassWayfarer}
        body={Body.Geek}
        face={Face.Driven}
        facialHair={FacialHair.FullMajestic}
        hair={Hair.ShavedSides}
      />
    </View>
  )
}

export default App

import React from 'react'
import { StyleSheet } from 'react-native'
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
    <Peep
      style={styles.peepStyle}
      accessory={Accessories.SunglassWayfarer}
      body={Body.Geek}
      face={Face.Driven}
      facialHair={FacialHair.FullMajestic}
      hair={Hair.ShavedSides}
      />
  )
}

export default App

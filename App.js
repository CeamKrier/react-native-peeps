import React from 'react'
import {StyleSheet, View} from 'react-native'
import Peep, {
  Accessories,
  Body,
  Face,
  FacialHair,
  Hair,
  CirclePeep
} from './src'

const styles = StyleSheet.create({
  peepStyle: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  circleStyle: {
    backgroundColor: '#F3D34A',
    width: 180,
    height: 180,
    alignSelf: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'black'
  }
})

const App = () => {
  return (
    <View>
      <Peep
        style={styles.peepStyle}
        accessory={Accessories.GlassRoundThick}
        body={Body.Geek}
        face={Face.Smile}
        facialHair={FacialHair.Goatee}
        hair={Hair.ShortVolumed}
      />

      <CirclePeep
        style={styles.peepStyle}
        accessory={Accessories.GlassRoundThick}
        body={Body.Geek}
        face={Face.Smile}
        facialHair={FacialHair.Goatee}
        hair={Hair.ShortVolumed}
        circleStyle={styles.circleStyle}
      />
    </View>
  )
}

export default App

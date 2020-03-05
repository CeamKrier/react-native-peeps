
# react-native-peeps

React-native implementation of the hand drawn illustration library called [Open Peeps](https://www.openpeeps.com/)

<p align="center"><img src="example.png" alt="peeps example" width="200"/></p>

## Installation

```
npm install react-native-peeps
```

Module depends on react-native-svg, so install it too.

```
npm install react-native-svg
```

If your React Native version is below 0.60 the auto-linking feature won't work. You need to follow the steps to complete your installation of the [react-native-svg](https://github.com/react-native-community/react-native-svg#manually)
Otherwise, running the npm install command will be sufficient.

## Usage

```javascript
import { StyleSheet } from  'react-native'
import  Peep, { Accessories, Body, Face, FacialHair, Hair } from  './src'

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

const styles = StyleSheet.create({
  peepStyle: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})

```
To use circular version

```javascript

import { StyleSheet } from  'react-native'
import { CirclePeep, Accessories, Body, Face, FacialHair, Hair, circleStyle } from  './src'

const App = () => {

  return (
    <CirclePeep
      style={styles.peepStyle}
      accessory={Accessories.GlassRoundThick}
      body={Body.Geek}
      face={Face.Smile}
      facialHair={FacialHair.Goatee}
      hair={Hair.ShortVolumed}
      circleStyle={styles.circleStyle}
    />
  )
}

const  styles = StyleSheet.create({
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
  
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Thanks :raised_hands:


## License
[MIT]([https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/))
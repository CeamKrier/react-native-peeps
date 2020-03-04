
# react-native-peeps

React-native implementation of the hand drawn illustration library called [Open Peeps]([https://www.openpeeps.com/](https://www.openpeeps.com/))

<p align="center"><img src='example.png?raw=true' style='width: 150px; height: 150px;' /></p>

## Installation

```
npm install react-native-peeps
```

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

const  styles = StyleSheet.create({
  peepStyle: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Thanks :raised_hands:


## License
[MIT]([https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/))
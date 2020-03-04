import React from 'react'

import { G } from 'react-native-svg'

const index = ({ hair, face, facialHair, accessory }) => {
  return (
    <G id='Head' transform='translate(225 0)'>
      <G id='HAIR'>{hair && React.createElement(hair)}</G>
      <G id='FACE' transform='translate(159 186)'>
        {face && React.createElement(face)}
      </G>
      <G id='FACIAL-HAIR' transform='translate(123 338)'>
        {facialHair && React.createElement(facialHair)}
      </G>
      <G id='ACCESORIES' transform='translate(47 241)'>
        {accessory && React.createElement(accessory)}
      </G>
    </G>
  )
}

export default index

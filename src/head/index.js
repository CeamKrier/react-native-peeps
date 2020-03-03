import React from 'react'

import { G } from 'react-native-svg'

import { VeryAngry } from '../face/VeryAngry'
import { LongAfro } from '../hair/LongAfro'

const index = () => {
  return (

    <G id='Head' transform='translate(225 0)'>
      <G id='HEAD'>
        <LongAfro />
      </G>
      <G id='FACE' transform='translate(159 186)'>
        <VeryAngry />
      </G>
      <G id='FACIAL-HAIR' transform='translate(123 338)' />
      <G id='ACCESORIES' transform='translate(47 241)' />
    </G>

  )
}

export default index

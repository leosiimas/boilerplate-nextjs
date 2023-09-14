import React from 'react'
import GlobaStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobaStyles />
      <Story />
    </>
  )
]

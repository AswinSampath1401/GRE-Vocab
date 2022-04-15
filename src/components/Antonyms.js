import React from 'react'

const Antonyms = ({antonyms}) => {
  return antonyms.map(antonym=>
    <h3 className='antonym'>{antonym}</h3>
  )
}

export default Antonyms
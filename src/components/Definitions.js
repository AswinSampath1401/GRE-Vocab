import React from 'react'

const Definitions = ({definitions}) => {
  return definitions.map(item=>
    <h3 className='definition'>{item.definition}</h3>
  )
}

export default Definitions
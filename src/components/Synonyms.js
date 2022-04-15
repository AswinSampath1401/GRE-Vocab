import React from 'react'

const Synonyms = ({synonyms}) => {
  return synonyms.map(synonym=>
    <h3 className='synonym'>{synonym}</h3>
  )
}

export default Synonyms
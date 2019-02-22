import React from 'react'

import Service from './Service'
export default ({ 
  data, 
  filter, 
  favourites, 
  addFavourite 
}) => { 
  
  const names = data
    .map((person, i) => {
    // only display names that match current input string
      return (
        <Service 
          id={person.id}
          key={i}
          info={person}
          handleFavourite={(id) => addFavourite(id)}
        />
      )
    })
  
  /* ##### the component's output ##### */
  return ( 
    <ul className="services-list"> 
      {names}
    </ul>
  )
}
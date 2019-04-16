import React from 'react'

import Service from './Service'
export default ({
  data,
  filter,
  favourites,
  addFavourite
}) => {
  console.log(favourites)
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
  const namesfinal = names.filter(function (e) {
    return this.indexOf(parseInt(e.key)) < 0;
  }, favourites
  )
  /* ##### the component's output ##### */
  return (
    <ul className="services-list">
      {namesfinal}
    </ul>
  )
}
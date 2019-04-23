import React from 'react'
import './HeadTitle.scss'

const NameTitle = ({ params }) => {
  const firstLetter = params.charAt(0);
  const restOfName = params.slice(1);
  return (
    <div className="NameTitle">
      <span className="NameTitle_first">{firstLetter}</span><span className="NameTitle_">{restOfName}</span>
    </div>
  )

}


export default NameTitle;


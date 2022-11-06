import React from 'react'

export const Card = (props) => {
  return (
    <div className='fourC__cards-card'>
      <h3 className='fourC__cards-card_title'>{props.title}</h3>
      <p className='fourC__cards-card_desc'>{props.description}</p>
      <img
        className='fourC__cards-card_img'
        src={props.icon}
        alt={props.altIcon}
      />
    </div>
  )
}

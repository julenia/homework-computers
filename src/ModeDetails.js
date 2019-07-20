import * as React from 'react'

export default function ModeDetails(props) {
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.manufacturer}</p>
      <p>{props.year}</p>
      <p>{props.origin}</p>
    </div>
  )
}
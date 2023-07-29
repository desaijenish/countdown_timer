import React from 'react'

interface timee{
  time:number,
  name:string
}

const Time  = (props:timee) => {
  return (
    <div className='w-25'>
      <h1 className="time">{props.time}</h1>
      <p>{props.name}</p>
    </div>
  )
}

export default Time

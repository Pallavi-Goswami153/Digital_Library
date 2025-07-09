import React from 'react'
import { useParams } from 'react-router-dom'
export function Course() {
    const {cls}=useParams();
    console.log(cls)
  return (
    <>
    <h1>{cls}</h1>
    </>
  )
}

 
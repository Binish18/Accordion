import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({questions}) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((q)=>{
        return <SingleQuestion key={q.id} {...q}/>
      })}
    </section>
  )
}

export default Questions

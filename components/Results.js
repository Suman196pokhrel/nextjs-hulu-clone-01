import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

const Results = ({results}) => {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    3xl:flex justify-center flex-wrap 3xl:text-xl
    '>
        {results.map((result)=>(
            <Thumbnail key={result.id} result={result}/>
        ))}
    </FlipMove>
  )
}

export default Results
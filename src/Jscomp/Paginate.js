import React from 'react'

function Paginate({postPerPage, totalPost, paginate}) {
    const pageNumber = []

    for (let i = 1; i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumber.push(i)
}
  return (
    <div>

        <p>
            {pageNumber.map(number => (
                <p  key={number}>
                    <h6  onClick={()=>paginate(number)}>{number}</h6>
                </p>                
            ))}
        </p>
    </div>
  )
}

export default Paginate
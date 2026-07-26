import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className='p-20'>
                <h1>Subjects</h1>

                <ul>
                    {props.course.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Card
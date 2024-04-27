import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoBack = () => {
    const navigate = useNavigate()

    return (
        <button className='link' onClick={() => navigate(-1)}><h4 className='purple-text'>Go back</h4></button>
    )
}

export default GoBack
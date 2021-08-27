import React from 'react'
import { useParams } from 'react-router-dom'
import Form from '../../components/Form/Form'

export default function RegisterPage() {
    const { id } = useParams()
    console.log( id)
    return (
        <div>
            <Form id={id}/>
        </div>
    )
}

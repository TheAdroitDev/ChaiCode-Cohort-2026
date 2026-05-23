import React, { useState } from 'react'

const ROLES = ["Frontend", "Backend", "AI Engineer"];

const ManualForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        role: "Backend",
        experience: "",
        cover:""
    })

    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    function set(field) {
        
    }

    return (
        <div>
            ManualForm
        </div>
    )
}

export default ManualForm
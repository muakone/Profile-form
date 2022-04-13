import React, { useState } from 'react'

const Modal = ({ setSubmitting, setFormData, formData }) => {
    const [submit, setSubmit] = useState(false)
    const handleClose = () => {
        setSubmitting(false)
        setFormData({
            reset: true
        })
    }
    const handleSubmit = () => {
        setSubmit(true)
        setTimeout(() => {
            setSubmit(false);
            setSubmitting(false)
            setFormData({
                reset: true
            })
        }, 3000);
    }
    return (
        <div className='modal'>
            {submit ? <h3 className='submitted'>Thanks for Submitting</h3> :
                <div>
                    <div>
                        <h1 className='close' onClick={handleClose}>
                            x
                        </h1>
                    </div>
                    <hr />
                    <div className='modal-content'>
                        <h4 className='submit-text'>You are submitting the following:</h4>
                        <ul>
                            {Object.entries(formData).map(([name, value]) => (
                                <div className='list-modal'>
                                    <li key={name}><strong>{name}</strong>: {value.toString()}</li>
                                    <hr />
                                </div>
                            ))}
                        </ul>
                        <div className='btn-submit'>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Modal
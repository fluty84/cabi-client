import { useState } from "react"
import { Form, FormGroup, Button } from "react-bootstrap"
import lunchService from "../../services/lunch.services"
import './CreateEater.css'

const CreateEater = ({ setNewItem }) => {

    const [eaterForm, setEaterForm] = useState({
        name: "",
        email: ""
    })

    const {name, email} = eaterForm

    const handleImputChange = (e) => {
        const { name, value } = e.target

        setEaterForm({
            ...eaterForm,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, email} = eaterForm
        if (!name || !email) { 
            alert('please fill in all fields of the form')
            return
        }
        lunchService
            .createEater(name, email)
            .then(res => {
                console.log(res)
                setNewItem(prev => !prev)
                setEaterForm({
                    name: "",
                    email: ""
                })
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <h2>Create Eater</h2>
            <Form onSubmit={handleSubmit} id="eaterForm">
                <FormGroup className="mb-3" controlId="formBasicEmail" variant="filled">
                    <input

                        className='eaterName'
                        id="outlined-required-input"
                        label="name"
                        name="name"
                        type="text"
                        onChange={handleImputChange}
                        value={name}
                    />
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicPassword" color="white">
                    <input

                        id="email"
                        label="email"
                        name="email"
                        type="email"
                        onChange={handleImputChange}
                        value={email}
                    />
                </FormGroup>
                <Button variant="primary" type="submit" id='eaterForm'>
                    Send
                </Button>

            </Form>

        </>
    )
}

export default CreateEater
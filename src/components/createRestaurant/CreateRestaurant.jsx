import { useState } from "react"
import { Form, FormGroup, Button } from "react-bootstrap"
import lunchService from "../../services/lunch.services"
import './CreateRestaurant.css'

const CreateRestaurant = ({ setNewItem }) => {

    const [restaurantForm, setRestaurantForm] = useState({
        name: "",
        address: ""
    })

    const {name, address} = restaurantForm

    const handleImputChange = (e) => {
        const { name, value } = e.target

        setRestaurantForm({
            ...restaurantForm,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, address} = restaurantForm

        if (!name || !address) {
            alert('please fill in all fields of the form')
            return
        }
        lunchService
            .createRestaurant(name, address)
            .then(res => {
                console.log(res)
                setNewItem(prev => !prev)
                setRestaurantForm({
                    name: "",
                    address: ""
                })
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <h2>Create Restaurant</h2>
            <Form onSubmit={handleSubmit} id="restaurantForm">
                <FormGroup className="mb-3" controlId="formBasicEmail" variant="filled">
                    <input

                        className='restaurantName'
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

                        id="address"
                        label="address"
                        name="address"
                        type="address"
                        onChange={handleImputChange}
                        value={address}
                    />
                </FormGroup>
                <Button variant="primary" type="submit" id='restaurantForm'>
                    Send
                </Button>

            </Form>

        </>
    )
}

export default CreateRestaurant
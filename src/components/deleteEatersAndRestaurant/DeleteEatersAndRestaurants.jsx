
import lunchService from "../../services/lunch.services"

import { Button } from "react-bootstrap"


const DeleteEatersAndRestaurants = ({ setNewItem, setCanGroup }) => {

    const deleteAll = () => {

        lunchService
            .deleteEatersAndRestaurants()
            .then(response => {
                setCanGroup(false)
                setNewItem(prev => !prev)
            })
            .catch(error => console.log(error))
    }

    return (
        <Button
            onClick={deleteAll}
            variant="danger"
        ><p>Delete Eaters & Restaurants</p>
        </Button>
    )
}

export default DeleteEatersAndRestaurants
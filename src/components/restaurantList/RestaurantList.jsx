import './RestaurantList.css'

const RestaurantList = ({restaurants}) =>{

    return(
        <ul>
            <h3>Restaurant LIST</h3>
            {
                restaurants?.map((restaurant) => {
                    return (
                        <li key={restaurant._id}>
                            <span>{restaurant.name}:</span>
                            <span>{restaurant.adress}</span>
                           <hr />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RestaurantList
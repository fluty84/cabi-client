import './RestaurantList.css'

const RestaurantList = ({ restaurants }) => {

    return (
        <ul>
            {restaurants.length ? <h3>Restaurant LIST</h3> : <h3>Please create Restaurants</h3>}
            {
                restaurants?.map((restaurant) => {
                    return (
                        <li key={restaurant._id}>
                            <span>{restaurant.name}:</span>
                            <span>{restaurant.address}</span>
                            <hr />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RestaurantList

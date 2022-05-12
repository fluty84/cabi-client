import axios from "axios"

class LunchService {
    constructor() {
        this.api = axios.create({
            baseURL: "https://cabi-restaurant.herokuapp.com/API" || "http://localhost:5005/api"
        })
    }

    getApi = () => {
        return this.api.get('/')
    }

    createEater = (name, email) => {
        return this.api.post('/eaters', { name, email })
    }

    getAllEaters = () => {
        return this.api.get('/eaters')
    }

    createRestaurant = (name, adress) => {
        return this.api.post('/restaurants', { name, adress })
    }

    getAllRestaurants = () => {
        return this.api.get('/restaurants')
    }

    deleteEatersAndRestaurants = () => {
        return this.api.delete('/eaters')
    }

    generateEaters = (number) => {
        return this.api.post('test/eaters', { number })
    }

    generateRestaurants = (number) => {
        return this.api.post('test/restaurants', { number })
    }

    generateGroups = () => {
        return this.api.post('/create_groups')
    }

    getGroups = () => {
        return this.api.get('/groups')
    }

    deleteGroups = () => {
        return this.api.delete('/groups')
    }

}

const lunchService = new LunchService()

export default  lunchService

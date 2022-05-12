import logo from './logo.png';
import lunchService from './services/lunch.services';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import CreateEater from './components/createEater/CreateEater';
import EatersList from './components/eatersList/EatersList';
import CreateRestaurant from './components/createRestaurant/CreateRestaurant';
import RestaurantList from './components/restaurantList/RestaurantList';
import Groups from './components/groups/Groups';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';



function App() {

  const [eaters, setEaters] = useState()
  const [restaurants, setRestaurants] = useState()
  const [groups, setGroups] = useState([])

  const [loading, setLoading] = useState("loaded")

  const [newItem, setNewItem] = useState(true)


  const getEaters = () => {

    setLoading("loading")

    lunchService
      .getAllEaters()
      .then(response => setEaters(response.data))
      .then(() => setLoading("loaded"))
      .catch(err => console.log(err))
  }

  const getRestarurants = () => {

    lunchService
      .getAllRestaurants()
      .then(response => setRestaurants(response.data))
      .catch(err => console.log(err))

  }

  const getGroups = () => {

    lunchService
      .getGroups()
      .then(response => setGroups(response.data))
      .catch(err => console.log(err))

  }

  useEffect(() => {
    getEaters()
    getRestarurants()
    getGroups()

  }, [newItem])

  return (
    <div className="App">
      <main className="App-header">
        <h1>
          Cabify Restaurat Groups Service.
        </h1>
        <img src={logo} className={`App-logo ${loading}`} alt="logo" />
      
        <Groups groups={groups} setGroups={setGroups} setNewItem={setNewItem}></Groups>

        <Row>
          <Col md={6}>
            <CreateEater setNewItem={setNewItem}></CreateEater>
          </Col>
          <Col md={6}>
            <EatersList eaters={eaters}></EatersList>
          </Col>
          <hr></hr>
        </Row>

        <Row>
          <Col md={6}>
            <CreateRestaurant setNewItem={setNewItem}></CreateRestaurant>
          </Col>
          <Col md={6}>
            <RestaurantList restaurants={restaurants}></RestaurantList>
          </Col>
          <hr></hr>
        </Row>
        <a
          className="App-link"
          href="https://github.com/fluty84"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </main>
    </div>
  );
}

export default App;

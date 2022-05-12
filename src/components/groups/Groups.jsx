
import { Button, Card, Container, ListGroup, ListGroupItem, Col, Row } from "react-bootstrap"

import lunchService from "../../services/lunch.services"

import './Groups.css'

const Groups = ({ groups, setGroups, setNewItem }) => {

    const createGroups = () => {
        lunchService
            .generateGroups()
            .then(response => setGroups(response.data))
            .catch(err => alert("Groups already created, delete first"))
    }

    const deleteGroups = () => {
        lunchService
            .deleteGroups()
            .then(() => setNewItem(prev => !prev))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container >
                <Row className="justify-content-center">
                   {groups.length  && 
                        groups.map((group, idx) => {
                            
                            return (
                                <Col md={4} key={group._id} >
                                    <Card text="dark"  style={{ width: '18rem' }} className='card'>
                                        <Card.Title >Group of {group.leader}</Card.Title>
                                        <Card.Subtitle>Restaurant:  {group.restaurant}</Card.Subtitle>
                                        <ListGroup>
                                            {
                                                group?.eaters.map((eater, idx) => {
                                                    return (
                                                        <ListGroupItem key={idx}>
                                                            {eater}
                                                        </ListGroupItem>)
                                                })
                                            }
                                        </ListGroup>
                                    </Card>
                                </Col>
                            )
                        }) 
                     }
                </Row>
            </Container>
            <Container className="buttons">
                <Button variant="warning" onClick={createGroups} id='GroupBtn'>
                    Create Groups
                </Button>
                <Button variant="danger" onClick={deleteGroups} id='GroupBtn'>
                    Delete Groups
                </Button>
            </Container>
        </>
    )
}

export default Groups
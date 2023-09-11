import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'

function App() {
  const [activities, setActivities] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:5000/api/activities')
    .then(response => {
      setActivities(response.data)
    })
  }, [])

  return (
    <>
    <Container>
      <Row>
        <Col>
          <h2>Reactivities</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {activities.map((activity: any) => (
              <ListGroup.Item key={activity.id}>
                {activity.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
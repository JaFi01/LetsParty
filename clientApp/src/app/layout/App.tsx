import { Container, Row } from 'react-bootstrap'
import NavBar from './NavBar'
import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
    <NavBar />
    <Container>
      <Row className='pt-3'>
        <Outlet />
      </Row>
    </Container>
    
    </>
  )
}

export default observer (App);
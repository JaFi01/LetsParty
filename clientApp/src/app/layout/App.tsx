import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import NavBar from './NavBar'
import ActivityDashboard from '../../features/activities/ActivityDashboard'
import LoadingComponent from './LoadingComponent'
import { useStore } from '../stores/store'
import { observer } from 'mobx-react-lite'

function App() {
  const {activityStore} = useStore();


  useEffect(() =>{
    activityStore.loadActivities()
  }, [])



  if(activityStore.loadingInititial) return <LoadingComponent/>

  return (
    <>
    <NavBar />
    <Container>
      <Row className='pt-3'>
        <ActivityDashboard />
      </Row>
    </Container>
    
    </>
  )
}

export default observer (App);
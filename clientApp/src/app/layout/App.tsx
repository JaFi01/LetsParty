import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import { Activity } from '../models/activity'
import NavBar from './NavBar'
import ActivityDashboard from '../../features/activities/ActivityDashboard'
import {v4 as uuid} from 'uuid'

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false)

  useEffect(() =>{
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response => {
      setActivities(response.data)
    })
  }, [])

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find( x => x.id === id));
  }
  function handleCancelActivity() {
    setSelectedActivity(undefined);
  }
  function handleFormOpen(id?: string){
    id ? handleSelectActivity(id) : handleCancelActivity();
    setEditMode(true);
  }
  function handleFormClose() {
    setEditMode(false)
  }
  function handleCreateOrEditActivity(activity: Activity){
    activity.id 
      ? setActivities([...activities.filter(x =>x.id !==activity.id), activity])
      :setActivities([...activities, {...activity, id: uuid()}]);
    setEditMode(false);
    setSelectedActivity(activity);
  }
  function handleDeleteActivity(id: string){
    setActivities([...activities.filter(x => x.id !== id)])
  }

  return (
    <>
    <NavBar openForm ={handleFormOpen}/>
    <Container>
      <Row className='pt-3'>
        <ActivityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Row>
    </Container>
    
    </>
  )
}

export default App
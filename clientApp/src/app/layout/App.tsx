import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Activity } from '../models/activity'
import NavBar from './NavBar'
import ActivityDashboard from '../../features/activities/ActivityDashboard'
import {v4 as uuid} from 'uuid'
import agent from '../agent'
import LoadingComponent from './LoadingComponent'

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    agent.Activities.list().then(response => {
      let activities: Activity[] = [];
      response.forEach(activity => {
        activity.date=activity.date.split('T')[0];
        activities.push(activity)
      })
      setActivities(activities)
      setLoading(false)
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
  if(loading) return <LoadingComponent/>

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
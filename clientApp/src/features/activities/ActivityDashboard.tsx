import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Activity } from '../../app/models/activity'
import ActivityList from './ActivityList'
import ActivityDetails from './ActivityDetails'
import ActivityForm from './ActivityForm'

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (acyivity: Activity) => void;
    deleteActivity: (id: string) => void;

}

export default function ActivityDashboard({
    activities, selectedActivity, selectActivity, cancelSelectActivity,
    editMode, openForm, closeForm, createOrEdit, deleteActivity}: Props)
{
    return(
        <Container>
            <Row>
                <Col  xs={12} lg={7}>
                    <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
                </Col>
                <Col xs={12} lg={5}>
                    {selectedActivity && !editMode &&
                    <ActivityDetails 
                        activity={selectedActivity} 
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />}
                    {editMode &&
                        <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}/>
                    }
                    
                </Col>
            </Row>
        </Container>
    )
}
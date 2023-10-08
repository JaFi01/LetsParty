import { Button, Card } from "react-bootstrap";
import { useStore } from "../../app/stores/store";

export default function ActivityDetails(){

    const {activityStore} = useStore();
    const{selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore

    if(!activity) return;

    return(
        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={`/assets/categoryImages/${activity.category}.jpg`} />
        <Card.Body>
            <Card.Title>{activity.title}</Card.Title>
            <Card.Text>
                    {activity.description}      
            </Card.Text>
            <div className="ms-auto">
                <Button onClick={() => openForm(activity.id)} variant="outline-primary">Edit</Button>
                <Button onClick={cancelSelectedActivity} variant="outline-warning">Cancel</Button>
            </div>
        </Card.Body>
        </Card>
    );
}
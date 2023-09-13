import { Button, Card } from "react-bootstrap";
import { Activity } from "../../app/models/activity";

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string)=> void;
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm}: Props){
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
                <Button onClick={cancelSelectActivity} variant="outline-danger">Cancel</Button>
            </div>
        </Card.Body>
        </Card>
    );
}
import { Container, ListGroup, Card, Button, Badge } from "react-bootstrap";
import { Activity } from "../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
  return (
    <Container>
      <ListGroup>
        {activities.map((activity) => (
          <ListGroup.Item key={activity.id}>
            <div>
              <h5>{activity.title}</h5>
              <p>{activity.date}</p>
            </div>
            <div>
              <p>{activity.description}</p>
              <p>
                {activity.city}, {activity.venue}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Badge bg="secondary">{activity.category}</Badge>
              </div>
              <div>
                <Button onClick={() => selectActivity(activity.id)} variant="primary"> View details </Button>
                <Button onClick={() => deleteActivity(activity.id)} variant="danger"> Delete Activity</Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

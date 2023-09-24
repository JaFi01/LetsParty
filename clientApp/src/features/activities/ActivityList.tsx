import { Container, ListGroup, Button, Badge } from "react-bootstrap";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityList() {
  const {activityStore} = useStore();
  const {deleteActivity, activitiesByDate} = activityStore


  return (
    <Container>
      <ListGroup>
        {activitiesByDate.map((activity) => (
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
                <Button onClick={() => activityStore.selectActivity(activity.id)} variant="primary"> View details </Button>
                <Button onClick={() => deleteActivity(activity.id)} variant="danger"> Delete Activity</Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
})

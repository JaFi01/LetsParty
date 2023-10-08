import { Container, ListGroup, Badge } from "react-bootstrap";
import {Button} from "semantic-ui-react"
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

export default observer(function ActivityList() {
  const {activityStore} = useStore();
  const {deleteActivity, activitiesByDate, loading} = activityStore;

  const [target, setTarget] = useState('');

    function handleDeleteActivity(e: SyntheticEvent<HTMLButtonElement>, id: string) {
      setTarget(e.currentTarget.name);
      deleteActivity(id)
  }
  
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
                    <Button as={Link} to={`/activities/${activity.id}`} floated='right' content='View' color='blue'
                    onClick={() => activityStore.selectActivity(activity.id)}/>
                    <Button loading={loading && target === activity.id}
                      name={activity.id} floated='right' content='Delete'
                      color='red'
                      onClick={(e) => handleDeleteActivity(e, activity.id)}/>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      )
  })

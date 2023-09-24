import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Activity } from "../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "./ActivityDetails";
import ActivityForm from "./ActivityForm";

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
  submitting: boolean;
}

export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
  submitting
}: Props) {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={7} className="order-2 order-md-1">
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}

          />
        </Col>
        <Col xs={12} lg={5} className="order-1 order-md-2">
          {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              cancelSelectActivity={cancelSelectActivity}
              openForm={openForm}
            />
          )}
          {editMode && (
            <ActivityForm
              closeForm={closeForm}
              activity={selectedActivity}
              createOrEdit={createOrEdit}
              submitting={submitting}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

import { Card } from "react-bootstrap";
import { Button } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default observer( function ActivityDetails(){

    const {activityStore} = useStore();
    const{selectedActivity: activity, loadActivity, loadingInititial} = activityStore
    const {id} = useParams();

    useEffect(()=> {
        if(id) loadActivity(id);
    }, [id, loadActivity]);
    
    if(loadingInititial || !activity) return <LoadingComponent />;

    return(
        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={`/assets/categoryImages/${activity.category}.jpg`} />
        <Card.Body>
            <Card.Title>{activity.title}</Card.Title>
            <Card.Text>
                    {activity.description}      
            </Card.Text>
            <div className="ms-auto">
                <Button as={Link} to={`/manage/${activity.id}`} basic color="blue">Edit</Button>
                <Button as={Link} to={`/activities`} basic color="grey">Cancel</Button>
            </div>
        </Card.Body>
        </Card>
    );
})
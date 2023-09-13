import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Activity } from '../../app/models/activity';
import { ChangeEvent, useState } from 'react';
interface Props{
    activity: Activity | undefined
    closeForm: () => void;
    createOrEdit: (acyivity: Activity) => void;
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit} : Props)
{

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    }
    const [activity, setActivity] = useState(initialState)
    
    function handleSubmit(){
        createOrEdit(activity);
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return(
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Group className="my-3 d-flex flex-column justify-content-end" controlId="newActivityForm">
                <Form.Label className='h5'>Create new event</Form.Label>                
                
                <Form.Control type="text" placeholder="Title" value={activity.title} name='title' onChange={handleInputChange}/>
                <Form.Control as="textarea" type="text" placeholder="Description" rows={3} value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Control type="text" placeholder="Category" value={activity.category} name='category' onChange={handleInputChange}/>
                <Form.Control type="text" placeholder="Date" value={activity.date} name='date' onChange={handleInputChange}/>
                <Form.Control type="text" placeholder="City" value={activity.city} name='city' onChange={handleInputChange}/>
                <Form.Control type="text" placeholder="Venue" value={activity.venue} name='venue' onChange={handleInputChange}/>

                <div className="me-auto">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button onClick={closeForm} variant="danger" type="reset">
                    Cancel
                </Button>
            </div>
            </Form.Group>
            </Form>

    )
}
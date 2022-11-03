import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { jobService } from 'services';

export default function JobForm() {
    const router = useRouter();

    const [jobForm, setJobForm] = useState({
        title: "",
        description: "",
        work_day: "Full-Time",
        area: "",
        location: "",
        tasks: "",
        looking_for: "",
        offer: "",
        activateSendingButton: false,
        publish: false,
    })
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const target = e.target
        const value = target.name === 'activateSendingButton' || target.name === 'publish' ? target.checked : target.value
        const name = target.name

        setJobForm({
            ...jobForm,
            [name]: value,
        })
    }

    function handleSubmit(event) {
        setError("");
        event.preventDefault();
        event.stopPropagation();

        setValidated(true);

        if (!jobForm.title ||
            !jobForm.description ||
            !jobForm.location ||
            !jobForm.area ||
            !jobForm.work_day) {
            setError("Please fill in the required fields");
            return;
        }

        return jobService.create(jobForm)
            .then((response) => {
                router.push('/admin/jobs');
            })
            .catch(error => { setError(error) });
    }

    return (
        <>
            <Alert variant="danger" dismissible onClose={() => setError("")} show={error != ""}>
                {error}
            </Alert>
            <Form onSubmit={handleSubmit} noValidate validated={validated}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Enter a title"
                        required
                        value={jobForm.title}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" placeholder="Enter a Description"
                        required
                        value={jobForm.description}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formWorkDay">
                    <Form.Label>Work Day</Form.Label>
                    <Form.Select name="work_day" aria-label="Full-Time"
                        required
                        value={jobForm.work_day}
                        onChange={handleChange}>
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control name="area" type="text" placeholder="Enter an Area. For example: Marketing"
                        required
                        value={jobForm.area}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control name="location" type="text" placeholder="Enter a Location. For example: Argentina"
                        required
                        value={jobForm.location}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTasks">
                    <Form.Label>Tasks</Form.Label>
                    <Form.Control name="tasks" as="textarea" placeholder="Enter Job Tasks"
                        value={jobForm.tasks}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLookingFor">
                    <Form.Label>What are we looking for?</Form.Label>
                    <Form.Control name="looking_for" as="textarea" placeholder="Enter What are we looking for"
                        value={jobForm.looking_for}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formOffer">
                    <Form.Label>What are we Offer?</Form.Label>
                    <Form.Control name="offer" as="textarea" placeholder="Enter what we offer"
                        value={jobForm.offer}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPublishCheckbox">
                    <Form.Check type="checkbox" name="publish" label="Publish Job"
                        checked={jobForm.publish}
                        onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </>
    )
}
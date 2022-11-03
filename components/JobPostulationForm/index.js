import { useEffect, useState } from 'react'
import { Button, InputGroup, Form, Alert } from "react-bootstrap";
import { jobService } from 'services';

export default function JobPostulationForm({ job_id, position }) {

    const [jobForm, setJobForm] = useState({
        name: "",
        email: "",
        phone: "",
        position: position,
        resumee: "",
    })

    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const target = e.target
        const value = target.name === 'resumee' ? target.files[0] : target.value;
        const name = target.name

        setJobForm({
            ...jobForm,
            [name]: value,
        })
    }

    function cleanMessages() {
        setError("");
        setSuccess("");
    }

    function handleSubmit(event) {

        cleanMessages();
        event.preventDefault();
        event.stopPropagation();

        setValidated(true);

        if (!jobForm.name ||
            !jobForm.email ||
            !jobForm.position ||
            !jobForm.phone ||
            !jobForm.resumee) {
            setError("Por favor complete los campos obligatorios");
            return;
        }

        const jobFormData = new FormData();
        jobFormData.append('name', jobForm.name);
        jobFormData.append('email', jobForm.email);
        jobFormData.append('position', jobForm.position);
        jobFormData.append('phone', jobForm.phone);
        jobFormData.append('resumee', jobForm.resumee);

        return jobService.postulate(job_id, jobFormData)
            .then((response) => {
                setSuccess("Tu postulación fue guardada con éxito");
            })
            .catch(error => { setError(error) });
    }

    return (
        <>
            <Alert variant="danger" show={error != ""} onClose={() => setError("")} dismissible>
                Ocurrió un error al registrar su postulación: {error}
            </Alert>
            <Alert variant="success" show={success != ""} onClose={() => setSuccess("")} dismissible>
                {success}
            </Alert>
            <Form onSubmit={handleSubmit} noValidate validated={validated}>
                <InputGroup className="mb-3">
                    <Form.Control
                        name="name"
                        required
                        type="text"
                        placeholder="Firstname & Lastname"
                        aria-label="name"
                        aria-describedby="basic-addon1"
                        className="input-koi fs-7"
                        value={jobForm.name}
                        onChange={handleChange} />
                </InputGroup>
                <InputGroup className="mb-3 ">
                    <Form.Control
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        required
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        className="input-koi fs-7"
                        value={jobForm.email}
                        onChange={handleChange} />
                </InputGroup>
                <InputGroup className="mb-3 ">
                    <Form.Control
                        placeholder="Phone number"
                        aria-label="phone"
                        aria-describedby="basic-addon1"
                        className="input-koi fs-7"
                        value={jobForm.phone}
                        name="phone"
                        required
                        type="text"
                        onChange={handleChange} />
                </InputGroup>
                {/* <InputGroup className="mb-3 ">
                    <Form.Control
                        placeholder="Job position"
                        aria-label="position"
                        name="position"
                        type="text"
                        required
                        aria-describedby="basic-addon1"
                        className="input-koi fs-7"
                        value={jobForm.position}
                        onChange={handleChange} />
                </InputGroup> */}
                <Form.Group controlId="formFile" className="mb-3 fs-7 w-75">
                    <Form.Label className="custom-file-upload">
                        Cargar curriculum
                    </Form.Label>
                    <Form.Control
                        className="custom-file-input fs-8"
                        type="file"
                        name="resumee"
                        accept="application/pdf"
                        required
                        onChange={handleChange} />
                </Form.Group>
                <Button variant="outline-primary" type="submit" className="rounded-pill fs-7 btn-orange text-center">
                    Apply now
                </Button>
            </Form>
        </>
    );
}
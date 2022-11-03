import { useState, useEffect } from 'react';
import { Container, Breadcrumb, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { jobService } from 'services';
import { useRouter } from 'next/router';
import DataTable from 'react-data-table-component';
import Link from 'next/link';

export default function ListJobs() {

    const router = useRouter();

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },
        {
            name: 'Work Day',
            selector: row => row.work_day,
        },
        {
            name: 'Area',
            selector: row => row.area,
        },
        {
            name: 'Location',
            selector: row => row.location,
        },
        {
            name: 'Tasks',
            selector: row => row.tasks,
        },
        {
            name: 'Looking For',
            selector: row => row.looking_for,
        },
        {
            name: 'Offer',
            selector: row => row.offer,
        },
        {
            name: 'Publish Date',
            selector: row => new Date(row.createdAt).toLocaleString(),
        },
        {
            name: 'Publish/Unpublish',
            button: true,
            cell: row => {
                if (!row.publish) {
                    return (<a href="" onClick={(e) => publish(e, row._id)} >
                        Publish
                    </a>)
                }
                else {
                    return (<a href="" onClick={(e) => unpublish(e, row._id)} >
                        Unpublish
                    </a>)
                }
            },
        },
        {
            name: 'Delete',
            button: true,
            cell: row => (
                <a href="" onClick={(e) => deleteJob(e, row._id)} >
                    Delete
                </a>
            ),
        },
    ];

    const [jobs, setJobs] = useState([]);
    const [jobsLoading, setJobsLoading] = useState(true);

    useEffect(() => {
        jobService.getAll().then(jobs => { setJobs(jobs), setJobsLoading(false) });
    }, []);

    function publish(event, id) {
        event.preventDefault()
        jobService.publish(id).then(() =>
            setJobs(
                jobs.map(obj => {
                    if (obj._id === id) {
                        return { ...obj, publish: true };
                    }
                    return obj;
                }),
            )
        )
    };

    function unpublish(event, id) {
        event.preventDefault()
        jobService.unpublish(id).then(() =>
            setJobs(
                jobs.map(obj => {
                    if (obj._id === id) {
                        return { ...obj, publish: false };
                    }
                    return obj;
                }),
            )
        )
    };

    function deleteJob(event, id) {
        event.preventDefault();
        jobService.delete(id).then(() => {
            setJobs(
                jobs.filter(obj => {
                    return obj._id != id;
                }),
            );
        })
    };

    return (
        <Container fluid className="px-4">
            <Row>
                <Col>
                    <h1 className="mt-4">Jobs on Koibanx</h1>
                    <Breadcrumb className="mb-4">
                        <Link href="/admin/jobs/new" passHref>
                            <Breadcrumb.Item active><a href="">Add new</a></Breadcrumb.Item>
                        </Link>
                        <Breadcrumb.Item active><a href="/jobs" rel="noreferrer" target="_blank">See on website</a></Breadcrumb.Item>
                    </Breadcrumb>
                    {/* <Alert variant="danger" dismissible onClose={() => setShow(false)} show={show}>
                        <strong>We couldn&#39;t add your job.</strong> Try again please.
                    </Alert> */}
                    <Card className="mb-4">
                        <Card.Header><BsFillBagCheckFill /> Published Jobs</Card.Header>
                        <Card.Body>
                            <DataTable
                                id="datatablesSimple"
                                columns={columns}
                                progressPending={jobsLoading}
                                data={jobs}
                                pagination
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

ListJobs.pageLayout = 'admin'
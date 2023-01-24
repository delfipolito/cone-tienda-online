import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import JobPostulationForm from 'components/JobPostulationForm';
import { jobService } from 'services';
import {useRouter} from 'next/router';
import { AiOutlineLeft } from 'react-icons/ai';


export default function JobDetail() {
  const router = useRouter();
  const [width, setWidth] = useState(null);
  const [job, setJob] = useState(null);
  const isMobile = width <= 768;

  useEffect(() => {

    const id = router.query?.id;
    if(id) {
      jobService.getByIdPublic(id.toString())
          .then(x => setJob(x))
    }

    if (window !== undefined) {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }

  }, [router.query]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  return (
    <>
      {job && <div>
        <section className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center mt-5 text-white">
          <Row className='container mt-3 pt-4'>
            <div>
              <Link href="/jobs">
                <a className="rounded-pill mt-3 fs-8 btn-go-back">
                  <AiOutlineLeft size={14}/>
                  <span>back</span>
                </a>
              </Link>
            </div>
          </Row>
          <Row className='container mt-4 pt-3'>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Row>
                <h5 className='fw-bold mb-5'>{job.title}</h5>
              </Row>
              <Row>
                <Col xs={6} lg={6}>
                  <h4 className='fs-5 fw-bold'>Lugar de trabajo</h4>
                  <p className='fs-7 fw-regular'>{job.location}</p>
                </Col>
                <Col xs={6} lg={6}>
                  <h4 className='fs-5 fw-bold'>Publicado</h4>
                  <p className='fs-7 fw-regular'>{new Date(job.createdAt).toLocaleString()}</p>
                </Col>
                <Col xs={6} lg={6}>
                  <h4 className='fs-5 fw-bold'>Área</h4>
                  <p className='fs-7 fw-regular'>{job.area}</p>
                </Col>
                <Col xs={6} lg={6}>
                  <h4 className='fs-5 fw-bold'>Work day</h4>
                  <p className='fs-7 fw-regular'>{job.work_day}</p>
                </Col>
              </Row>
              <Row className='mt-4'>
                <p className='fs-7 fw-regular'>
                  {job.description}
                </p>
                <span className='text-primary fw-bold'>Lo que harás</span><br />
                <p>
                  {job.tasks}
                </p>
                <span className='text-primary fw-bold'>Lo que buscamos</span><br />
                <p>
                  {job.looking_for}
                </p>
                <span className='text-primary fw-bold'>Lo que ofrecemos</span><br />
                <p>
                  {job.offer}
                </p>
              </Row>
            </Col>
            {!isMobile && <Col lg={6} className="d-flex justify-content-end align-items-center section-full position-fixed-job">
              <div className='col align-self-start'>
                <JobPostulationForm job_id={job.title} position={job.title}></JobPostulationForm>
              </div>
            </Col>}
          </Row>
        </section>
        <section className="jobs-sections">
          <footer className="footer bg-dark mt-0 fs-7 z-index-footer fixed-bottom top-shadow display-mobile-none">
            <Container className="text-white pt-4 pb-3">
              <Row>
                <Col xs={2} sm={2} md={2} lg={2} className="h-100 pt-3">
                  <span className="link-footer">Privacy Policies</span>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} className="h-100 pt-3 text-center">
                  <span className="link-footer">Terms & Conditions El Salvador</span>
                </Col>
                <Col xs={5} sm={5} md={5} lg={5} className="h-100 text-center">
                  <Link href="/jobs" passHref>
                    <Button
                      variant="outline-light"
                      className="rounded-pill px-4 m-2 fs-8"
                    >
                      Join our team
                    </Button>
                  </Link>
                  <Button
                    variant="outline-light"
                    className="rounded-pill px-4 m-2 fs-8"
                    href="mailto:info@koibanx.com"
                  >
                    Contact us
                  </Button>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} className="h-100">
                  <p className="text-center align-middle fs-6 pt-3">
                    <a href="https://www.linkedin.com/company/koibanx/mycompany/" className="text-white px-1" target="_blank" rel="noreferrer">
                      <BsLinkedin styles={{ marginRight: "0.2em" }} />
                    </a>
                    <a href="https://twitter.com/koibanx" className="text-white px-1" target="_blank" rel="noreferrer">
                      <BsTwitter styles={{ marginRight: "0.2em" }} />
                    </a>
                    <a href=" https://www.youtube.com/c/Koibanx " className="text-white px-1" target="_blank" rel="noreferrer">
                      <BsYoutube styles={{ marginRight: "0.2em" }} />
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </footer>
          {isMobile && <footer className="bg-dark fs-7 text-white fixed-bottom top-shadow">
            <section className="container-fluid pt-4">
              <Row className='container'>
                <JobPostulationForm></JobPostulationForm>
              </Row>
            </section>
          </footer>}
        </section>
      </div >}
    </>
  );
}

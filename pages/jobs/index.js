import { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/future/image";
import Marquee from "react-fast-marquee";
import JobItem from 'components/job';
import { jobService } from 'services';

export default function JobList() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    jobService.getAllPublic()
      .then(elem => setJobs(elem))
  }, []);

  return (
    <>
      <container className="text-white">
        <section id="jobs-sections" className="container-fluid bg-dark h-100 d-flex flex-column align-items-center justify-content-center pt-5">
          <Row className='my-3'>
            <div className="text-primary">
              { !jobs || jobs.length === 0 ? null : <Marquee gradient={false} speed={120}>
                <h3 className='fs-0'>
                  We are hiring!&nbsp;
                  <span className="text-stroke-black"> We are hiring!&nbsp;</span>
                </h3>
              </Marquee>}
            </div>
          </Row>
          <Row className="container">
            <Col xs={11} md={11} lg={11} className="text-left">
              <Row className="gy-2 gx-lg-3">
                {jobs && jobs.map((job) => (
                  <JobItem title={job.title} description={job.description} key={job._id} id={job._id} />
                ))}
                {!jobs || jobs.length === 0 ? <p className={'text-center'}></p> : null}
              </Row>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1} className="text-center display-mobile-none">
              <Image
                src={require("../../public/assets/img/jobs.svg")}
                alt="Products section"
                width={18}
                style={{ height: "auto" }}
              />
            </Col>
          </Row>
        </section>
      </container>
    </>
  );
}

export async function getStaticProps({ locale }) {
  // const response = await fetch("URL");
  // const result = await response.json();

  const response = await import(`../../lang/${locale}.json`);

  return {
    props: {
      NavBar: response.default.NavBar,
      Footer: response.default.Footer,
    }
  }
}

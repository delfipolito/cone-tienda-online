import { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/future/image";
import Marquee from "react-fast-marquee";
import Job from "../components/job";

export default function Jobs() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch("/api/jobs")
      .then(response => response.json())
      .then(data => setJobs(data));
  });

  return (
    <>
      <header className="about-navbar jobs-sections"></header>
      <section className="jobs-sections">
        <Container className="text-white" fluid>
          <div className="text-primary">
            <Marquee gradient={false} speed={120}>
              <h3>
                  We are hiring!&nbsp;
                  <span className="text-stroke-black"> We are hiring!</span>
                </h3>
              </Marquee>
            </div>
        </Container>
        <Container className="px-4 px-lg-5 py-4 text-white">
          <Row>
            <Col xs={11} md={11} lg={11} className="text-left">
              <Row className="gy-5 gx-lg-5">
                {jobs && jobs.map((job) => (
                  <Job title={job.title} description={job.description} key={job.title} />
                ))}
              </Row>
            </Col>
            <Col xs={1} md={1} lg={1} className="text-center">
              <Image
                src={require("../public/assets/img/jobs.svg")}
                alt="Products section"
                width={18}
                style={{ height: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
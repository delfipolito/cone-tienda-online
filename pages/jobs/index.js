import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Image from 'next/future/image'
import Marquee from 'react-fast-marquee'
import JobItem from 'components/job'
import { jobService } from 'services'

export default function JobList() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    jobService.getAllPublic().then(elem => setJobs(elem))
  }, [])

  return (
    <div className="text-white">
      <section
        id="jobs-sections"
        className="container-fluid bg-dark h-100 d-flex flex-column align-items-center justify-content-center pt-5"
      >
        <Row className="my-3">
          <div className="text-primary">
            {!jobs || jobs.length === 0 ? null : (
              <Marquee gradient={false} speed={120}>
                <h3 className="fs-0">
                  We are hiring!&nbsp;
                  <span className="text-stroke-black">
                    {' '}
                    We are hiring!&nbsp;
                  </span>
                </h3>
              </Marquee>
            )}
          </div>
        </Row>
        <Row className="container">
          <Col xs={11} md={11} lg={11} className="text-left">
            <Row className="gy-2 gx-lg-3">
              {jobs &&
                jobs.map(job => (
                  <JobItem
                    title={job.title}
                    description={job.description}
                    key={job._id}
                    id={job._id}
                  />
                ))}
              {!jobs || jobs.length === 0 ? (
                <p className={'text-center'} />
              ) : null}
              <JobItem
                title={'Sr. Sales Specialist'}
                description={
                  'Nos encontramos en búsqueda de un/a Sr. Sales Specialist para incorporar a nuestro equipo. Será responsable de identificar y las oportunidades los retos, desafíos y objetivos comerciales de un cliente, utilizando conceptos profesionales y objetivos de la compañía, ayudando a desarrollar propuestas de valor comercial en torno a los productos y soluciones de Koibanx y cerrando negociaciones con los potenciales clientes.'
                }
                key={20}
                id={20}
              />
              <JobItem
                title={'Backend Developer'}
                description={
                  'Sumandote a Koibanx  como Backend Developer vas a ser protagonista de una compañía que está creando historia construyendo los rieles transaccionales sobre blockchain para generar un sistema financiero más accesible, seguro y eficiente, siendo  los habilitadores entre el mundo financiero tradicional y el mundo cripto.'
                }
                key={21}
                id={21}
              />
              <JobItem
                title={'Jr. Technical Support'}
                description={
                  'La posicion de Jr. Technical Support  proporcionará asistencia técnica a los clientes y colaboradores a problemas relacionados con el software. Diagnosticará y solucionará problemas técnicos, escalándolos según sea necesario con personal de Soporte Técnico Sr.'
                }
                key={22}
                id={22}
              />
              <JobItem
                title={'UI Designer Jr'}
                description={
                  'El equipo de Product Design es el responsable de prototipar los productos que resuelven los problemas de los clientes. A través de brainstormings, sketching, documentación de flujos, prototipos interactivos,  y trabajo con desarrolladores para realizar los diseños. Desde la idea inicial hasta los wireframes en alta del producto final.'
                }
                key={23}
                id={23}
              />
            </Row>
          </Col>
          <Col
            xs={1}
            sm={1}
            md={1}
            lg={1}
            className="text-center display-mobile-none"
          >
            <Image
              src={require('../../public/assets/img/jobs.svg')}
              alt="Products section"
              width={18}
              style={{ height: 'auto' }}
            />
          </Col>
        </Row>
      </section>
    </div>
  )
}

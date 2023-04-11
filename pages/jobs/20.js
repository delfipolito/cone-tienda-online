import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'
import { BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import JobPostulationForm from 'components/JobPostulationForm'
import { jobService } from 'services'
import { useRouter } from 'next/router'
import { AiOutlineLeft } from 'react-icons/ai'

export default function JobDetail() {
  const router = useRouter()
  const [width, setWidth] = useState(null)
  const isMobile = width <= 768

  useEffect(
    () => {
      if (window !== undefined) {
        setWidth(window.innerWidth)
      }

      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange)
      }
    },
    [router.query]
  )

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  return (
    <>

        <div>
          <section className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center mt-5 text-white">
            <Row className="container mt-3 pt-4">
              <div>
                <Link href="/jobs">
                  <a className="rounded-pill mt-3 fs-8 btn-go-back">
                    <AiOutlineLeft size={14} />
                    <span>back</span>
                  </a>
                </Link>
              </div>
            </Row>
            <Row className="container mt-4 pt-3">
              <Col xs={12} sm={12} md={6} lg={6}>
                <Row>
                  <h5 className="fw-bold mb-5">Sr. Sales Specialist</h5>
                </Row>
                <Row>
                  <Col xs={6} lg={6}>
                    <h4 className="fs-5 fw-bold">Lugar de trabajo</h4>
                    <p className="job-description">Guatemala</p>
                  </Col>
                  <Col xs={6} lg={6}>
                    <h4 className="fs-5 fw-bold">Publicado</h4>
                    <p className="job-description">
                    -
                    </p>
                  </Col>
                  <Col xs={6} lg={6}>
                    <h4 className="fs-5 fw-bold">Área</h4>
                    <p className="job-description">Comercial</p>
                  </Col>
                  <Col xs={6} lg={6}>
                    <h4 className="fs-5 fw-bold">Work day</h4>
                    <p className="job-description">Fulltime</p>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <p className="job-description">
                    Koibanx nace con el objetivo de contribuir a la creación de
                    una economía y un ecosistema financiero más eficiente.
                    Ofrecemos una plataforma de software financiero apalancada
                    en tecnología Blockchain que permite procesar pagos,
                    conectar programas de fidelidad y de factoraje, entre otros
                    activos financieros. Contamos con una experiencia combinada
                    de más de 20 años en tecnología y la industria financiera,
                    estando presentes en Argentina, Uruguay, México, Colombia y
                    El Salvador.
                  </p>
                  <p className="job-description">
                    Si tienes ganas de ser parte de una de las industrias de
                    mayor crecimiento en la región, quieres aprender de la mano
                    de pioneros del ecosistema crypto y formar parte de un
                    equipo de gran calidad humana y con proyectos de alto
                    impacto para la vida financiera en LatAm, ¡Queremos
                    conocerte!
                  </p>
                  <p className="job-description">
                    Nos encontramos en búsqueda de un/a Sr. Sales Specialist
                    para incorporar a nuestro equipo. Será responsable de
                    identificar y las oportunidades los retos, desafíos y
                    objetivos comerciales de un cliente, utilizando conceptos
                    profesionales y objetivos de la compañía, ayudando a
                    desarrollar propuestas de valor comercial en torno a los
                    productos y soluciones de Koibanx y cerrando negociaciones
                    con los potenciales clientes.
                  </p>
                  <p className="job-description">
                    Lidera la planificación de ventas y actividades de
                    desarrollo comercial del territorio asignado generando
                    relación de confianza comercial en los prospectos
                  </p>
                  <span className="text-primary fw-bold">Lo que harás</span>
                  <br />
                  <ul className="job-description">
                    <li>
                      Mantener y desarrollar relaciones con clientes clave,
                      elaborando briefs y generando oportunidad de negocios.
                    </li>
                    <li>
                      Cumplimiento con resultados de ventas de su territorio
                    </li>
                    <li>
                      Creación de propuestas y presupuestos comerciales para
                      clientes. Involucramiento y seguimiento en la etapa
                      inicial contractual.
                    </li>
                    <li>
                      Trabajo en conjunto con los equipos de marketing, medios y
                      operaciones en la mejora continua de procesos, elaboración
                      de materiales y tácticas comerciales.
                    </li>
                    <li>
                      Trabajar de manera complementaria con los comerciales en
                      otras plazas, compartiendo experiencias y mejores
                      prácticas.
                    </li>
                    <li>
                      Participación junto con el equipo de marketing en pitches
                      comerciales, eventos y presentaciones de producto y de la
                      compañía.{' '}
                    </li>
                    <li>
                      Ser responsable de elaborar y entregar las presentaciones
                      comerciales de producto a clientes, conocer y saber
                      defender sus características y viabilidad, con soporte del
                      área de marketing, diseño y operaciones.
                    </li>
                    <li>
                      Desarrollo y crecimientos de cuentas propias y
                      preexistentes de la compañía. Se espera identifique nuevas
                      oportunidades con clientes existentes, persuada a clientes
                      de utilizar nuestros servicios y entregue excelentes
                      resultados en todo momento.
                    </li>
                    <li>
                      Asegurar la satisfacción del cliente al finalizar cada
                      proyecto.
                    </li>
                    <li>
                      Realizar seguimiento metódico de leads y prospectos,
                      generar reportes e informes.
                    </li>
                  </ul>

                  <p>
                    Buscamos que quien ocupe el rol de Sales Specialist tenga un
                    perfil de vendedor consultivo, con capacidad de
                    relacionamiento y sea un excelente comunicador, orientado a
                    resultados, proactivo en su enfoque y la gestión de
                    proyectos.
                  </p>
                  <span className="text-primary fw-bold">Lo que buscamos</span>
                  <br />
                  <ul className="job-description">
                    <li>Residencia en Guatemala</li>
                    <li>Experiencia en ventas B2B o en consultoras.</li>
                    <li>Conocimiento sobre sistemas financieros.</li>
                    <li>Experiencia trabajando por medio de objetivos</li>
                    <li>Excelentes habilidades interpersonales</li>
                    <li>Inglés intermedio o superior</li>
                    <li>Se valora la experiencia en ventas de tecnología</li>
                    <li>
                      Conocimiento de nuevas estrategias para ventas digitales
                      B2B
                    </li>
                  </ul>
                  <span className="text-primary fw-bold">Lo que ofrecemos</span>
                  <br />
                  <ul className="job-description">
                    <li>
                      Salario competitivo de mercado + esquema de comisiones
                    </li>
                    <li>
                      Bono anual por desempeño y cumplimiento de objetivos
                      personales y de la compañía.
                    </li>
                    <li>
                      Esquema híbrido entre Home Office y Oficina. (Flexible)
                    </li>
                    <li>Horario Flex.</li>
                    <li>Clases de Inglés.</li>
                    <li>
                      Capacitaciones sobre Blockchain y referentes al puesto.
                    </li>
                    <li>
                      Incorporar conocimiento crypto aplicado a la industria
                      fintech.
                    </li>
                    <li>
                      Posibilidad de desarrollarse en una industria en pleno
                      crecimiento y de vanguardia.
                    </li>
                    <li>
                      1 semana libre adicional a las vacaciones y licencias
                      existentes. (+ 5 días fraccionables free!)
                    </li>
                    <li>Posibilidad de liderazgo de equipos</li>
                  </ul>
                </Row>
              </Col>
              {!isMobile && (
                <Col
                  lg={6}
                  className="d-flex justify-content-end align-items-center section-full position-fixed-job"
                >
                  <div className="col align-self-start">
                    <JobPostulationForm
                      job_id={'Sr. Sales Specialist'}
                      position={'Sr. Sales Specialist'}
                    />
                  </div>
                </Col>
              )}
            </Row>
          </section>
          <section className="jobs-sections">
            <footer className="footer bg-dark mt-0 fs-7 z-index-footer fixed-bottom top-shadow display-mobile-none">
              <Container className="text-white pt-4 pb-3">
                <Row>
                  <Col xs={2} sm={2} md={2} lg={2} className="h-100 pt-3">
                    <span className="link-footer">Privacy Policies</span>
                  </Col>
                  <Col
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    className="h-100 pt-3 text-center"
                  >
                    <span className="link-footer">
                      Terms & Conditions El Salvador
                    </span>
                  </Col>
                  <Col
                    xs={5}
                    sm={5}
                    md={5}
                    lg={5}
                    className="h-100 text-center"
                  >
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
                      <a
                        href="https://www.linkedin.com/company/koibanx/mycompany/"
                        className="text-white px-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsLinkedin styles={{ marginRight: '0.2em' }} />
                      </a>
                      <a
                        href="https://twitter.com/koibanx"
                        className="text-white px-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsTwitter styles={{ marginRight: '0.2em' }} />
                      </a>
                      <a
                        href=" https://www.youtube.com/c/Koibanx "
                        className="text-white px-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsYoutube styles={{ marginRight: '0.2em' }} />
                      </a>
                    </p>
                  </Col>
                </Row>
              </Container>
            </footer>
            {isMobile && (
              <footer className="bg-dark fs-7 text-white fixed-bottom top-shadow">
                <section className="container-fluid pt-4">
                  <Row className="container">
                    <JobPostulationForm />
                  </Row>
                </section>
              </footer>
            )}
          </section>
        </div>
    </>
  )
}

import styled from 'styled-components'
import Footer from '../Footer'
import Navbar from '../Navbar'
import JobsForm from '../components/JobsForm'

export default function CrossBorder() {
  return (
    <>
      <Navbar />
      <JobsForm/>
      <Section>
        <DescriptionBox>
          <Title>Backend Developer</Title>
          <Tags>
            <div>
              <Label>Lugar de trabajo</Label>
              <Description>Colombia, Mexico, Argentina</Description>
            </div>
            <div>
              <Label>Publicado</Label>
              <Description>-</Description>
            </div>
            <div>
              <Label>Área</Label>
              <Description>Deployment</Description>
            </div>
            <div>
              <Label>Work day</Label>
              <Description>Fulltime</Description>
            </div>
          </Tags>

          <br />
          <br />
          <Description>
            El equipo de Deployment de Koibanx, tiene como objetivo el diseño y
            desarrollo de productos basados en tecnología blockchain, para el
            mundo fintech dentro y fuera de LATAM.
          </Description>
          <Description>
            Sumandote a Koibanx como Backend Developer vas a ser protagonista de
            una compañía que está creando historia construyendo los rieles
            transaccionales sobre blockchain para generar un sistema financiero
            más accesible, seguro y eficiente, siendo los habilitadores entre el
            mundo financiero tradicional y el mundo cripto.
          </Description>
          <br />
          <br />
          <Label>¿Con que te vas a encontrar?</Label>

          <Description>
            Cada día se va a tratar de desafiarte a vos mismo. Vas a estar en un
            lugar donde serás escuchado, donde tu opinión SIEMPRE va a ser
            importante y nos ocuparemos de atender tus necesidades. Vas a
            empujar las fronteras del conocimiento constantemente, teniendo
            posibilidades de crecer en un equipo donde encontrarás diversión,
            compromiso, dinamismo, ambición y compañerismo.
          </Description>
          <br />
          <br />
          <Label>Lo que harás</Label>
          <ul>
            <li>
              <Description>
                Desarrollo de funcionalidades complejas con excelencia de
                calidad
              </Description>
            </li>
            <li>
              <Description>
                Definición de flujos y arquitecturas simples
              </Description>
            </li>
            <li>
              <Description>
                Colaborar en las definiciones de arquitectura en un nivel macro
              </Description>
            </li>
            <li>
              <Description>
                Integración a través de distintos protocolos (SFTP, SOAP, etc)
              </Description>
            </li>
            <li>
              <Description>
                Integración con distintos servicios cloud (colas de mensajes,
                almacenamiento de objetos)
              </Description>
            </li>
          </ul>

          <Description>
            Tecnologías Complementarias:
            <br />
            Ethereum blockchain - Algorand blockchain - NodeJs - RabbitMq -
            MongoDB - Swagger - Microservices Docker
          </Description>
          <Description>
            Esta descripción no es cerrada y limitante, creemos firmemente en la
            autonomía, por lo que buscamos personas entusiastas que vean la
            oportunidad de mejora y sean lo suficientemente proactivos para
            hacerlo realidad.
          </Description>
          <br />
          <br />
          <Label>Lo que buscamos</Label>
          <ul>
            <li>
              <Description>
                Estudiante avanzado o recientemente egresado de ingeniería en
                informática o afines{' '}
              </Description>
            </li>
            <li>
              <Description>
                2 años de experiencia en roles de similar responsabilidad
              </Description>
            </li>
            <li>
              <Description>
                Conocimientos avanzados de bases de datos SQL y NoSQL (MongoDB
                es un plus)
              </Description>
            </li>
            <li>
              <Description>
                Conocimientos avanzados de REST API y desarrollo de web servers
              </Description>
            </li>
            <li>
              <Description>
                Conocimiento de diferentes herramientas de guardado de datos
                (cache, object storage, etc)
              </Description>
            </li>
            <li>
              <Description>
                Manejo de asincronismo / paralelismo / concurrencia
              </Description>
            </li>
            <li>
              <Description>
                Conocimiento de buenas prácticas de programación (testing, code
                review, análisis estático)
              </Description>
            </li>
            <li>
              <Description>Inglés avanzado (oral y escrito).</Description>
            </li>
          </ul>
          <br />
          <br />
          <Label>Lo que ofrecemos</Label>
          <ul>
            <li>
              <Description>
                Salario competitivo de mercado + esquema de comisiones
              </Description>
            </li>
            <li>
              <Description>
                Oportunidad de trabajar en una startup en crecimiento continuo y
                trabajar con pioneros del ecosistema crypto.
              </Description>
            </li>
            <li>
              <Description>
                Capacitaciones sobre Blockchain, sistemas financieros,
                tecnologías y lo que quieras aprender.
              </Description>
            </li>
            <li>
              <Description>Clases de Inglés.</Description>
            </li>
            <li>
              <Description>
                Esquema híbrido presencial (vas a venir porque te va a gustar,
                no por obligación)
              </Description>
            </li>
            <li>
              <Description>
                Los días de KoiWork, reconocemos gastos por almuerzo, bebidas &
                snacks.
              </Description>
            </li>
            <li>
              <Description>
                Reconocimiento de gasto por seguro médico
              </Description>
            </li>
            <li>
              <Description>Horario flexible, de verdad.</Description>
            </li>
            <li>
              <Description>
                + 5 días Koibanx free adicionales a todas tus licencias.
              </Description>
            </li>
            <li>
              <Description>Bono anual </Description>
            </li>
            <li>
              <Description>
                Y lo más importante: ser parte de un equipo increíble.{' '}
              </Description>
            </li>
          </ul>
          <Description>
            En Koibanx lideramos la revolución tecnológica de la industria en la
            región prestando servicios de pagos y tokenización de activos al
            sector bancario y financiero de Argentina, Colombia, México, El
            Salvador y Uruguay. A través de nuestra plataforma, la
            infraestructura de nuestros clientes logra ser más segura, ágil y
            rentable para pagos, factoring y tokenización de activos para llegar
            a nuevos segmentos del mercado. Trabajamos construyendo los rieles
            que posibilitan pagos multi-activos, convirtiendo las tenencias del
            sistema financiero en líquidas, permitiendo que se realicen pagos
            mixtos y parciales utilizando criptomonedas, dinero fiat, títulos
            valores, commodities y puntos de fidelidad.
          </Description>
          <Description>
            Si queres ser parte, ¡haznoslo saber! people@koibanx.com REF:
            Backend Developer
          </Description>
        </DescriptionBox>
      </Section>
      <Footer />
    </>
  )
}

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  position: relative;
  width: 100%;
  margin: 100px auto;
  background: transparent;
  padding: 20px 80px;
  overflow: hidden;
  z-index: 30;
  box-sizing: border-box;
  li {
    list-style: disc;
    color: #ff5900;
  }

  @media only screen and (max-width: 600px) {
    padding: 10px 30px;
  }
`

const DescriptionBox = styled.div`
  width: 50%;
  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
`

const Tags = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`

const Title = styled.h1`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;
  letter-spacing: 0.02em;
  color: #ffffff;
  @media only screen and (max-width: 600px) {
    font-size: 22px;
  }
`

const Label = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  letter-spacing: 0.02em;

  color: #ffffff;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`

const Description = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #ffffff;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`

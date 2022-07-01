import Header from "../Header"
import Footer from "../Footer"
import Banner from '../Banner'

function WhoAmI() {
  return (
    <>
      <section className="mx-8 lg:mx-48 lg:px-10 px-4 py-12 flex justify-center flex-wrap translate-y-16 sm:translate-y-32">
        <h3 className="text-xl tracking-wide my-5">Quien soy yo?</h3>
        <p className="tracking-wide">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <Banner
        lowText="Tesis Doctoral apoyada por la Agencia Nacional de Investigación y Desarrollo/ANID"
        highText="Las respuestas de los maestros/as a la ansiedad de los niños/as con Trastornos del Espectro Autista"
      />
        <WhoAmI />
        <Footer/>
    </>
  )
}

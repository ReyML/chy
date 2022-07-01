import aut from "../assets/aut.jpeg"

function Banner({ highText, lowText }) {
  return (
    <div className="translate-y-24 sm:translate-y-32 w-full backdrop-brightness-75 h-auto flex justify-center items-center text-white  hue-rotate-30 back z-10 ">
      <section
        className="w-full  bg-cover bg-center bg-repeat"
        style={{ backgroundImage: `url(${aut})` }}
      >
        <div className="py-8 backdrop-brightness-75 text-white gap-y-5 flex flex-col items-center justify-center h-full">
          <h2 className="px-8 text-sm lg:text-2xl brightness-200">{lowText}</h2>
          <h2 className="annie px-8 text-xl lg:text-5xl lg:px-32 text-bold brightness-200 text-center">
            {highText}
          </h2>
        </div>
      </section>
    </div>
  )
}

export default Banner

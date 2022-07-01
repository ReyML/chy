const Footer = () => {
  return (
    <>
      <footer className="flex items-end justify-center h-72">
        <div className="mx-2 flex flex-col justify-center items-center text-gray-600">
          <p>Chyty - Copyright 2022.</p>
          <p className="text-xs relative  mb-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Created by <a href="https://linktr.ee/rey117">ReyML</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
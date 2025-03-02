// const handleClick=()=> alert("card is clicked!!!")

export function Card({ oneLiner,imgURL,title,className="",...props}) {
  return(<>
  <div  
  className={`max-w-sm  p-6 rounded-md shadow-md bg-black ${className}`}{...props} >
    <img
      src={imgURL}
      alt=""
      className="object-cover object-center w-full rounded-md h-62  bg-gray-500"
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
        {title}
      </span>
      <h2 className="text-xl font-semibold tracking-wide">{oneLiner}</h2>
    </div>
    {/* <p className="text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
      amet
    </p> */}
  </div>
  </>
  )
}
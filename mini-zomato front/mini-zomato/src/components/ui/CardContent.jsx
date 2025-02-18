export function CardContent({imgURL,text,places, className="",...props}) {
 return(<><div className={`relative w-72 rounded-xl overflow-hidden ${className}`}{...props}>
  {/* Background Image */}
  <img
    src={imgURL}
    alt="test"
    className="w-full h-72 object-cover"
  />

  {/* Blurred Overlay */}
  <div className="absolute bottom-0 w-full bg-black/30 backdrop-blur-md text-white p-3">
    <h1 className="text-lg font-bold">{text}</h1>
    <a href="#">{places} places</a>
  </div>
</div>
</>)
  
  }
  
import SearchBar from "./ui/SearchBar";
import logo from '../assets/logo.svg'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen size-full overflow-hidden">
      <nav className=" container relative mx-auto flex w-full items-center justify-between px-5 py-3 text-xl ">
      <div><img src={logo} alt="Zomato Logo" className="h-35 w-auto drop-shadow-md" /></div>

        <div className="flex items-center justify-around">
          <ul className="mx-3 flex">
            <li className="mx-3"><a href="#">Invester Relation</a>x</li>
            <li className="mx-3"><a href="#">Add Restaurant</a></li>
            <li className="mx-3"><a href="#">Log In</a></li>
            <li className="mx-3"><a href="#">Sign Up</a></li>
          </ul>
        </div>
      </nav>

      <div className="relative flex flex-col items-center justify-center">
        <div className="relative top-32 max-w-3xl font-Manrope">
          <h1 className="text-5xl font-extrabold sm:text-7xl">
          ZOMATO          
          </h1>
          <p className="my-4 font-medium">
            Discover Best Food and Drinks in Pune.
          </p>
          <div>
            <SearchBar/>
          </div>
        </div>
      </div>
      <div className="relative   top-[10vh] max-w-full sm:top-0 ">
        <div className="absolute w-full object-contain">
          <img src="circle.png" alt="" className="relative  object-fill" />
        </div>
      </div>
    </div>
  );
}
               

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularRestaurants from "@/components/PopularRestaurants";
import Nav from '@/components/ui/Nav.jsx'
import { Card } from "../components/ui/Card";
import { CardContent } from "../components/ui/CardContent";
import Footer from "../components/Footer";

const handleClick =()=> alert("card is clicked")

export default function HomePage() {
  return (
    <div>
      <div>
        <HeroSection/>
      </div>
      
      <div className="flex justify-between items-center w-full px-6">
        <Card oneLiner={"Stay home and order to your door step"} className="bg-red-100" onClick={()=>handleClick()} title={"Order Online"} imgURL={"https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"}/>
        <Card oneLiner={"View the city's favourite dining venues"} className="bg-red-100"  onClick={()=>handleClick()} title={"Dining"} imgURL={"https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"}/>
        <Card oneLiner={"Discover India’s best events & concerts"} className="bg-red-100" onClick={()=>handleClick()} title={"Live Events"} imgURL={"https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*"}/>
      </div>
      {/* Collection cards */}
      <div className=" container flex justify-between items-center w-full my-12 px-1 py-4">
  {/* Left Side: Title & Subtitle */}
  <div  >
    <h1 className="text-4xl text-left mx-px font-bold mx-0">Collections</h1>
    <p className="text-gray-600">
      Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends
    </p>
  </div>

  {/* Right Side: Link */}
  <a href="#" className="text-red-500 font-medium hover:underline flex items-center">
    All collections in Pune
    <span className="ml-1">▶</span> {/* Arrow icon */}
  </a>
</div>

<div className="flex justify-between items-center w-full px-6">
    <CardContent text={"Top trending places"} places={'27'} imgURL={"https://www.hilton.com/im/en/PNQCHDI/1857227/three-spices-option-1.jpg?impolicy=crop&cw=3926&ch=3054&gravity=NorthWest&xposition=871&yposition=0&rw=684&rh=532"}/>
    <CardContent text={"Newly Opened Places"} places={'41'} imgURL={"https://digital.ihg.com/is/image/ihg/holiday-inn-new-delhi-9334688711-2x1"}/>
    <CardContent text={"Best Roof Top Places"} places={'15'} imgURL={"https://www.hotelierindia.com/cloud/2022/08/19/Outdoor-dining-Ssaffron-Shangri-La-Bengaluru-.jpg"}/>
    <CardContent text={"Best Insta Worthy Places"} places={'18'} imgURL={"https://content.jdmagicbox.com/comp/pune/g7/020pxx20.xx20.181227173126.b5g7/catalogue/tipsy-turtle-poolside-lounge-cafe-bhugaon-pune-restaurants-1pe861mm7e.jpg"}/>
  
   </div>
   {/* <div><Footer/></div> */}
   
    </div>
  );
}

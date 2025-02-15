import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularRestaurants from "@/components/PopularRestaurants";
import Nav from '@/components/ui/Nav.jsx'
import { Card } from "../components/ui/Card";

const handleClick =()=> alert("card is clicked")

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <div className="flex justify-between items-center w-full px-6">
        <Card  className="bg-red-100" onClick={()=>handleClick()} title={"Order Online"} imgURL={"https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"}/>
        <Card className="bg-red-100"  onClick={()=>handleClick()} title={"Dining"} imgURL={"https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"}/>
        <Card  className="bg-red-100" onClick={()=>handleClick()} title={"Live Events"} imgURL={"https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*"}/>
      </div>
    </div>
  );
}

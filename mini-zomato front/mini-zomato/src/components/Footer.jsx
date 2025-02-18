 function Footer() {
    return (
      <footer className="bg-white text-black py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-6">
          {/* Left Sections */}
          <div>
            <h1 className="text-3xl font-bold">zomato</h1>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-12">
            {/* About Zomato */}
            <div>
              <h2 className="font-semibold text-lg mb-3">ABOUT ZOMATO</h2>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#">Who We Are</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Work With Us</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Report Fraud</a></li>
                <li><a href="#">Press Kit</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Zomaverse */}
            <div>
              <h2 className="font-semibold text-lg mb-3">ZOMAVERSE</h2>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#">Zomato</a></li>
                <li><a href="#">Blinkit</a></li>
                <li><a href="#">District</a></li>
                <li><a href="#">Feeding India</a></li>
                <li><a href="#">Hyperpure</a></li>
                <li><a href="#">Zomato Live</a></li>
                <li><a href="#">Zomaland</a></li>
                <li><a href="#">Weather Union</a></li>
              </ul>
            </div>
  
            {/* For Restaurants */}
            <div>
              <h2 className="font-semibold text-lg mb-3">FOR RESTAURANTS</h2>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#">Partner With Us</a></li>
                <li><a href="#">Apps For You</a></li>
              </ul>
            </div>
  
            {/* Learn More */}
            <div>
              <h2 className="font-semibold text-lg mb-3">LEARN MORE</h2>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex flex-col gap-4 items-end">
            {/* Country and Language Select */}
            <div className="flex gap-4">
              <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2">
                🇮🇳 India
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2">
                🌍 English
              </button>
            </div>
  
            {/* Social Links */}
            <div>
              <h2 className="font-semibold text-lg mb-3">SOCIAL LINKS</h2>
              <div className="flex gap-4 text-xl">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-x-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
              </div>
            </div>
  
            {/* App Download Links */}
            <div className="flex flex-col gap-2">
              <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" 
                     alt="App Store" className="w-40" />
              </a>
              <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                     alt="Google Play" className="w-40" />
              </a>
            </div>
          </div>
          </div>
      </footer>
    );
  }

  export default Footer;
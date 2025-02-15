export default function PopularRestaurants() {
    return (
      <section className="p-8">
        <h3 className="text-xl font-semibold mb-4">Popular Restaurants</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-md p-4 rounded-lg">
              <img src={`https://source.unsplash.com/400x300/?restaurant,food&random=${item}`} alt="Restaurant" className="w-full h-40 object-cover rounded-lg" />
              <h4 className="text-lg font-bold">Restaurant {item}</h4>
              <p className="text-gray-600">📍 Location</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
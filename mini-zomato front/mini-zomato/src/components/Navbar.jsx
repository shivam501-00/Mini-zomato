export default function Navbar() {
    return (
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">Mini Zomato</h1>
        <div>
          <button className="px-4 py-2">Home</button>
          <button className="px-4 py-2">Orders</button>
          <button className="px-4 py-2">Profile</button>
        </div>
      </nav>
    );
  }
  
import React from "react";
import { Button } from "./ui/button";

function NavBar() {
  return (
    <div className="bg-white text-black flex items-center justify-between p-2">
      <div className="flex">
        <h1 className="mr-8 text-xl font-bold">TripTrap.</h1>

        <ul className="flex gap-4">
          <li>Deals</li>
          <li>Support</li>
          <li>Partnership</li>
          <li>Bookings</li>
        </ul>
      </div>

      <div>
        <Button className="bg-white text-black border border-black rounded-full mr-2">
          Login
        </Button>
        <Button className="border border-black rounded-full">Register</Button>
      </div>
    </div>
  );
}

export default NavBar;

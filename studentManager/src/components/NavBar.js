
"use client";

import { Button, Navbar } from "flowbite-react";

export function NavBarComp() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
      <div className="flex p-3">
        <span className="text-orange-500 text-2xl bg-black p-1 rounded-md">J</span>
        <h2 className="text-pink-700 text-2xl p-1">abana</h2>
        </div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button gradientDuoTone="pinkToOrange">Login</Button>
      </div>
      <hr/>
    </Navbar>
  );
}

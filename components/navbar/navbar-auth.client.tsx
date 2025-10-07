"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const NavbarAuth = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
      <AvatarFallback>VT</AvatarFallback>
    </Avatar>
  );
};

export default NavbarAuth;

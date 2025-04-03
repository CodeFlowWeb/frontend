"use client";

import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { LogOut } from "lucide-react";

export default function NavLogoutItem() {
  const handleLogout = () => {
    signOut({ callbackUrl: "/auth" });
  };

  return (
    <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
      <LogOut className="mr-2 h-4 w-4" />
      Выйти
    </DropdownMenuItem>
  );
}

"use client";

import { redirect } from "next/navigation";
import { Button } from "./ui/button";

interface RedirectButtonProps {
  redirectUrl: string;
  children?: React.ReactNode;
  props?: any;
}

export default function RedirectButton({
  redirectUrl,
  children,
  props,
}: RedirectButtonProps) {
  const handleClick = () => {
    redirect(redirectUrl);
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}

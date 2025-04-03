"use client";

import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

export default function SettingsButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/my/settings");
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      <Settings className="w-4 h-4 mr-2" />
      Настройки
    </Button>
  );
}

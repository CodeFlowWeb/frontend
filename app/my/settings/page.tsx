import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProtectedPageLayout from "@/layouts/PageLayout";
import { Calendar, LogOut, User } from "lucide-react";
import { redirect } from "next/navigation";
import { LogoutButton } from "./components/logout-alert-dialog";

export default async function Settings() {
  const session = await auth();
  if (!session?.user) return redirect("/auth?error=not-authenticated");

  return (
    <ProtectedPageLayout activePage="my/settings">
      <div className="flex flex-col w-full max-w-6xl mx-auto gap-8 p-6">
        {/* Шапка профиля */}
        <section className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex gap-4 items-center">
            <Avatar className="w-20 h-20">
              <AvatarImage src={session.user.image || ""} />
              <AvatarFallback>
                <User className="w-8 h-8" />
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400">
                {session.user.name}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                {session.user.email}
              </p>
            </div>
          </div>
          <LogoutButton className="mt-4 md:mt-0" />
        </section>

        <Separator />
      </div>
    </ProtectedPageLayout>
  );
}

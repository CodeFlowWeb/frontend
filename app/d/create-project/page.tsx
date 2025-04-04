import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ProtectedPageLayout from "@/layouts/PageLayout";
import CreateProjectForm from "@/forms/CreateProject/components/create-project-form";

export const metadata: Metadata = {
  title: "Создание проекта | Code Flow",
  description: "Создайте новый проект в Code Flow",
};

export default async function Page() {
  const session = await auth();

  if (!session) {
    return redirect("/auth?error=not-authenticated");
  }
  return (
    <ProtectedPageLayout activePage="d/createproject">
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full h-full",
          "py-8"
        )}
      >
        <Card className={cn("w-full max-w-md shadow-lg")}>
          <CardHeader className="text-center space-y-2">
            <h1 className="text-2xl font-semibold">Создайте новый проект</h1>
            <p className="text-muted-foreground">
              Заполните все поля и нажмите "Создать"
            </p>
          </CardHeader>
          <CardContent>
            <CreateProjectForm />
          </CardContent>
        </Card>
      </div>
    </ProtectedPageLayout>
  );
}

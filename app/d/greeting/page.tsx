import { auth } from "@/auth";
import ProtectedPageLayout from "@/layouts/PageLayout";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Rocket, Users, Kanban, Book, ArrowRight } from "lucide-react";

export default async function Page() {
  const session = await auth();
  if (!session?.user) return redirect("/auth");

  return (
    <ProtectedPageLayout activePage="d/greeting">
      <div className="flex flex-col w-full max-w-6xl mx-auto gap-8 p-6">
        {/* Приветственный блок */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400">
            Приветствуем вас, {session.user.name}!
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Code Flow — это мощный инструмент для управления IT-проектами,
            сочетающий в себе лучшие практики Trello с расширенным функционалом
            для разработки программного обеспечения.
          </p>
        </section>

        <Separator />

        {/* Основные возможности */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-2 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                <Kanban className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
              </div>
              <CardTitle>Канбан-доски</CardTitle>
              <CardDescription>
                Визуализируйте рабочий процесс с помощью настраиваемых досок и
                карточек
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-2 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                <Users className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
              </div>
              <CardTitle>Командная работа</CardTitle>
              <CardDescription>
                Эффективно взаимодействуйте с командой, отслеживайте прогресс и
                делегируйте задачи
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-2 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                <Book className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
              </div>
              <CardTitle>Документация</CardTitle>
              <CardDescription>
                Храните всю документацию проекта в одном месте с удобной
                системой поиска
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Быстрый старт */}
        <section className="mt-8">
          <Card className="bg-zinc-50 dark:bg-zinc-900 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="w-6 h-6" />
                Быстрый старт
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-zinc-600 dark:text-zinc-400">
                <li>
                  Создайте новый проект или присоединитесь к существующему
                </li>
                <li>
                  Настройте доску в соответствии с вашим рабочим процессом
                </li>
                <li>Пригласите членов команды и начните совместную работу</li>
              </ol>

              <Button className="mt-4" size="lg" asChild>
                <a href="/d">
                  Начать работу
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </ProtectedPageLayout>
  );
}

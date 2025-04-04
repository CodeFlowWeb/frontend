import { auth } from "@/auth";
import ProtectedPageLayout from "@/layouts/PageLayout";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  User,
  Calendar,
  Activity,
  GitPullRequest,
  Star,
  Clock,
  CheckCircle2,
  Circle,
  Settings,
} from "lucide-react";
import { LineChartLabel } from "@/components/ui/line-chart-label";
import SettingsButton from "./components/SettingsButton";

// Моковые данные для демонстрации
const stats = {
  totalTasks: 124,
  completedTasks: 98,
  activeProjects: 5,
  efficiency: 79,
};

const recentActivity = [
  {
    id: 1,
    action: "Завершил задачу",
    project: "Frontend Development",
    time: "2 часа назад",
    status: "completed",
  },
  {
    id: 2,
    action: "Создал новую задачу",
    project: "API Integration",
    time: "5 часов назад",
    status: "active",
  },
  {
    id: 3,
    action: "Обновил документацию",
    project: "Documentation",
    time: "вчера",
    status: "completed",
  },
];

export default async function Profile() {
  const session = await auth();
  if (!session?.user) return redirect("/auth?error=not-authenticated");

  return (
    <ProtectedPageLayout activePage="my">
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
          <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
            <SettingsButton />
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Присоединился в марте 2024
            </Button>
          </div>
        </section>

        <Separator />

        {/* Статистика */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Всего задач
              </CardTitle>
              <CardDescription>За все время</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalTasks}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Выполнено
              </CardTitle>
              <CardDescription>Завершенные задачи</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.completedTasks}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <GitPullRequest className="w-4 h-4" />
                Активные проекты
              </CardTitle>
              <CardDescription>В работе</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.activeProjects}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl flex items-center gap-2">
                <Star className="w-4 h-4" />
                Эффективность
              </CardTitle>
              <CardDescription>Процент выполнения</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.efficiency}%</p>
            </CardContent>
          </Card>
        </section>

        {/* График активности */}
        {/* <LineChartLabel /> */}

        {/* Последние действия */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Последние действия
            </CardTitle>
            <CardDescription>
              История ваших последних действий в системе
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    {activity.status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5 text-blue-500" />
                    )}
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {activity.project}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </ProtectedPageLayout>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProtectedPageLayout from "@/layouts/PageLayout";

export default async function Page() {
  return (
    <ProtectedPageLayout activePage="d">
      <div className="flex flex-col items-center justify-center h-full">
        <Card className="p-4 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-medium">Проект не выбран</h1>
          <p>Создайте, или подключитесь к новому проекту</p>
          <div className="flex flex-row gap-2">
            <Button>Создать проект</Button>
            <Button>Подключиться</Button>
          </div>
        </Card>
      </div>
    </ProtectedPageLayout>
  );
}

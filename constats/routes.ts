export type RouteType = {
  title: string;
  url: string;
};

interface Routes {
  d: {
    title: string;
    url: string;
    createproject: RouteType;
    connectproject: RouteType;
    greeting: RouteType;
    settings: RouteType;
    subscription: RouteType;
    docs: RouteType;
  };
  my: {
    title: string;
    url: string;
    settings: RouteType;
    subscription: RouteType;
    notificantions: RouteType;
    billing: RouteType;
  };
}

export const routes: Routes = {
  d: {
    title: "Главная",
    url: "/d",
    greeting: {
      title: "Приветствие",
      url: "/d/greeting",
    },
    createproject: {
      title: "Новый проект",
      url: "/d/create-project",
    },
    connectproject: {
      title: "Присоединиться к проекту",
      url: "/d/connect-project",
    },
    settings: {
      title: "Настройки",
      url: "/d/settings",
    },
    subscription: {
      title: "Подписка",
      url: "/d/subscription",
    },
    docs: {
      title: "Документация",
      url: "/d/docs",
    },
  },
  my: {
    title: "Мой профиль",
    url: "/my",
    settings: {
      title: "Настройки",
      url: "/my/settings",
    },
    subscription: {
      title: "Подписка",
      url: "/my/subscription",
    },
    notificantions: {
      title: "Уведомления",
      url: "/my/notifications",
    },
    billing: {
      title: "Выставление счетов",
      url: "/my/billing",
    },
  },
};

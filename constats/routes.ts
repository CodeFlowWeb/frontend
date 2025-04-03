export type RouteType = {
  title: string;
  url: string;
};

interface Routes {
  d: {
    title: string;
    url: string;
    greeting: RouteType;
    settings: RouteType;
    subscription: RouteType;
    docs: RouteType;
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
};

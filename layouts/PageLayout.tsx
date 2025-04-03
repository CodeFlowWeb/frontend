import { auth } from "@/auth";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { routes, type RouteType } from "@/constats/routes";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

export default async function ProtectedPageLayout({
  children,
  activePage,
}: Readonly<{
  children: React.ReactNode;
  activePage: string;
}>) {
  type PageInfo = {
    parent?: typeof routes.d;
    current: typeof routes.d | RouteType;
    isRoot: boolean;
  };

  const getCurrentPageInfo = (): PageInfo | null => {
    const [section, page] = activePage.split("/");
    if (section === "d") {
      if (!page) {
        return {
          current: routes.d,
          isRoot: true,
        };
      }
      const subpage = routes.d[page as keyof typeof routes.d] as RouteType;
      if (subpage && "title" in subpage) {
        return {
          parent: routes.d,
          current: subpage,
          isRoot: false,
        };
      }
    }
    return null;
  };

  const pageInfo = getCurrentPageInfo();
  const session = await auth();

  if (!session?.user) return redirect("/auth");

  return (
    <SidebarProvider>
      <AppSidebar
        name={session.user.name}
        email={session.user.email}
        image={session.user.image}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {pageInfo && (
                  <>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href={routes.d.url}>
                        {routes.d.title}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {!pageInfo.isRoot && (
                      <>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                          <BreadcrumbPage>
                            {pageInfo.current.title}
                          </BreadcrumbPage>
                        </BreadcrumbItem>
                      </>
                    )}
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

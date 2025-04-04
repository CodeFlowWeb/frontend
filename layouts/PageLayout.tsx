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
    parent?: (typeof routes)[keyof typeof routes];
    current: (typeof routes)[keyof typeof routes] | RouteType;
    isRoot: boolean;
    section: keyof typeof routes;
  };

  const getCurrentPageInfo = (): PageInfo | null => {
    const [section, page] = activePage.split("/");

    if (section in routes) {
      const currentSection = routes[section as keyof typeof routes];

      if (!page) {
        return {
          current: currentSection,
          isRoot: true,
          section: section as keyof typeof routes,
        };
      }

      const subpage = currentSection[
        page as keyof typeof currentSection
      ] as RouteType;
      if (subpage && "title" in subpage) {
        return {
          parent: currentSection,
          current: subpage,
          isRoot: false,
          section: section as keyof typeof routes,
        };
      }
    }
    return null;
  };

  const pageInfo = getCurrentPageInfo();
  const session = await auth();

  if (!session?.user) return redirect("/auth?error=not-authenticated");

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
                      <BreadcrumbLink href={routes[pageInfo.section].url}>
                        {routes[pageInfo.section].title}
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

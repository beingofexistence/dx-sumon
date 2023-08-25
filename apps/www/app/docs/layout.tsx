import { docsConfig } from "@/config/docs"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="border-b">
      <div className="container flex-1 items-start lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-0 xl:grid-cols-[350px_minmax(0,1fr)]">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r lg:sticky lg:block">
          <ScrollArea className="h-full pr-5">
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  )
}

import { BookOpen, Gauge } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from './ui/sidebar';

const educationItems = [
  { title: 'Universitas', url: '/dashboard/education/universitas' },
  { title: 'Fakultas', url: '/dashboard/education/fakultas' },
  { title: 'Jurusan', url: '/dashboard/education/jurusan' },
];

function isPathActive(pathname: string, url: string) {
  return pathname === url || pathname.startsWith(`${url}/`);
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation();
  const [educationOpen, setEducationOpen] = useState(() => pathname.startsWith('/education'));

  return (
    <Sidebar {...props} className='border-r border-sidebar-border bg-sidebar'>
      <SidebarHeader className='border-b border-sidebar-border px-5 py-5'>
        <NavLink
          to='/dashboard'
          className='flex items-center gap-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring'
        >
          <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-foreground text-background'>
            <BookOpen className='size-4.5' aria-hidden='true' />
          </div>
          <div className='flex min-w-0 flex-col'>
            <span className='truncate text-sm font-semibold tracking-tight text-foreground'>WA Manage</span>
            <span className='mt-0.5 text-xs text-muted-foreground'>Manage WhatsApp</span>
          </div>
        </NavLink>
      </SidebarHeader>

      <SidebarContent className='px-3 py-4'>
        <SidebarMenu className='gap-1'>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isPathActive(pathname, '/dashboard')}
              className='h-10 gap-3 px-3 text-sm'
            >
              <NavLink to='/dashboard'>
                <Gauge aria-hidden='true' />
                <span>Dashboard</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}

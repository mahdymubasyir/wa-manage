import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className='w-full'>
      <SidebarProvider>
        <AppSidebar />
        <main className='w-full overflow-hidden'>
          {/* <NavDash /> */}
          <div>
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;

import Sidebar from "@/components/admin/sidebar";
import TopNav from "@/components/admin/top-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar - Fixed width */}
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <TopNav />

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
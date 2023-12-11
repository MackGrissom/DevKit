import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ 
  children
}: { 
  children: React.ReactNode;
 }) => {
  return (
    <div className="h-full bg-gradient-to-t from-amber-100 via-white to-slate-100">
      <Navbar />
      {children}
    </div>
  );
 };

 export default DashboardLayout;

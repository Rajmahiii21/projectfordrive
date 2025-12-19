import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Users, Mail, Send } from 'lucide-react';

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/projects', label: 'Projects', icon: Briefcase },
    { path: '/admin/clients', label: 'Clients', icon: Users },
    { path: '/admin/contacts', label: 'Contacts', icon: Mail },
    { path: '/admin/newsletter', label: 'Newsletter', icon: Send },
  ];

  return (
    <aside className="w-64 bg-black text-white min-h-screen">
      {/* Logo / Title */}
      <div className="p-6 border-b border-gray-700">
        <Link
          to="/"
          className="text-xl font-bold tracking-wide hover:text-gray-300 transition"
        >
          Admin Panel
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm font-medium transition
                ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;

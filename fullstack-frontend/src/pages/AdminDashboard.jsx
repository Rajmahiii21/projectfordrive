// import { Outlet, Link } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import { Briefcase, Users, Mail, Send } from 'lucide-react';

// function AdminDashboard() {
//   const stats = [
//     { label: 'Projects', icon: Briefcase, link: '/admin/projects', color: 'bg-blue-500' },
//     { label: 'Clients', icon: Users, link: '/admin/clients', color: 'bg-green-500' },
//     { label: 'Contacts', icon: Mail, link: '/admin/contacts', color: 'bg-purple-500' },
//     { label: 'Newsletter', icon: Send, link: '/admin/newsletter', color: 'bg-orange-500' },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <main className="flex-1 p-8">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {stats.map((stat) => {
//               const Icon = stat.icon;
//               return (
//                 <Link
//                   key={stat.label}
//                   to={stat.link}
//                   className={`${stat.color} rounded-lg p-6 text-white hover:opacity-90 transition`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm opacity-90">Manage</p>
//                       <p className="text-2xl font-bold">{stat.label}</p>
//                     </div>
//                     <Icon className="w-12 h-12 opacity-80" />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//           <div className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-xl font-semibold mb-4 text-gray-900">Welcome to Admin Panel</h2>
//             <p className="text-gray-600">
//               Use the sidebar navigation to manage projects, clients, view contacts, and newsletter subscribers.
//             </p>
//           </div>
//         </div>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default AdminDashboard;
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Briefcase, Users, Mail, Send } from 'lucide-react';

function AdminDashboard() {
  const stats = [
    { label: 'Projects', icon: Briefcase, link: '/admin/projects' },
    { label: 'Clients', icon: Users, link: '/admin/clients' },
    { label: 'Contacts', icon: Mail, link: '/admin/contacts' },
    { label: 'Newsletter', icon: Send, link: '/admin/newsletter' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-black">
            Admin Dashboard
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Link
                  key={stat.label}
                  to={stat.link}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:bg-black hover:text-white transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 group-hover:text-white">
                        Manage
                      </p>
                      <p className="text-2xl font-bold">
                        {stat.label}
                      </p>
                    </div>
                    <Icon className="w-10 h-10 opacity-80" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Welcome Box */}
          <div className="bg-white border border-gray-200 rounded p-6">
            <h2 className="text-xl font-semibold mb-4">
              Welcome to Admin Panel
            </h2>
            <p className="text-gray-700">
              Use the sidebar navigation to manage projects, clients,
              view contact form responses, and newsletter subscriptions.
            </p>
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashboard;

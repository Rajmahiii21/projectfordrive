// import { useState, useEffect } from 'react';
// import { Plus, Trash2 } from 'lucide-react';
// import Sidebar from '../components/Sidebar';
// import { projectsAPI } from '../services/api';

// function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     imageUrl: '',
//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       // BACKEND API INTEGRATION POINT
//       const response = await projectsAPI.getAll();
//       setProjects(response.data);
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // BACKEND API INTEGRATION POINT
//       await projectsAPI.create(formData);
//       setFormData({ name: '', description: '', imageUrl: '' });
//       setShowForm(false);
//       fetchProjects();
//     } catch (error) {
//       console.error('Error creating project:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <main className="flex-1 p-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900">Projects Management</h1>
//             <button
//               onClick={() => setShowForm(!showForm)}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
//             >
//               <Plus className="w-5 h-5 mr-2" />
//               Add Project
//             </button>
//           </div>

//           {showForm && (
//             <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//               <h2 className="text-xl font-semibold mb-4 text-gray-900">Add New Project</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Project Name
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Description
//                   </label>
//                   <textarea
//                     required
//                     rows="4"
//                     value={formData.description}
//                     onChange={(e) =>
//                       setFormData({ ...formData, description: e.target.value })
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Image URL
//                   </label>
//                   <input
//                     type="url"
//                     required
//                     value={formData.imageUrl}
//                     onChange={(e) =>
//                       setFormData({ ...formData, imageUrl: e.target.value })
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="https://example.com/image.jpg"
//                   />
//                 </div>
//                 <div className="flex gap-4">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
//                   >
//                     {loading ? 'Adding...' : 'Add Project'}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setShowForm(false)}
//                     className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           <div className="bg-white rounded-lg shadow">
//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-4 text-gray-900">All Projects</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projects.map((project) => (
//                   <div key={project.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
//                     <img
//                       src={project.imageUrl}
//                       alt={project.name}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="p-4">
//                       <h3 className="font-semibold text-lg mb-2 text-gray-900">
//                         {project.name}
//                       </h3>
//                       <p className="text-gray-600 text-sm mb-4">
//                         {project.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Projects;
import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { projectsAPI } from '../services/api';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // BACKEND API INTEGRATION POINT
      const response = await projectsAPI.getAll();
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // BACKEND API INTEGRATION POINT
      await projectsAPI.create(formData);
      setFormData({ name: '', description: '', imageUrl: '' });
      setShowForm(false);
      fetchProjects();
    } catch (error) {
      console.error('Error creating project:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-black">
              Projects Management
            </h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Project
            </button>
          </div>

          {/* Add Project Form */}
          {showForm && (
            <div className="bg-white border border-gray-200 rounded p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Add New Project
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Project Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Description
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-2 font-medium">
                    Image URL
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.imageUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, imageUrl: e.target.value })
                    }
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                  >
                    {loading ? 'Adding...' : 'Add Project'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Projects List */}
          <div className="bg-white border border-gray-200 rounded">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">
                All Projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-gray-200 rounded overflow-hidden"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {project.name}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Projects;

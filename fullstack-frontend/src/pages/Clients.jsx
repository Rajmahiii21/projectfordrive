 import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { clientsAPI } from '../services/api';

function Clients() {
  const [clients, setClients] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    description: '',
    imageUrl: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      // BACKEND API INTEGRATION POINT
      const response = await clientsAPI.getAll();
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // BACKEND API INTEGRATION POINT
      await clientsAPI.create(formData);
      setFormData({ name: '', designation: '', description: '', imageUrl: '' });
      setShowForm(false);
      fetchClients();
    } catch (error) {
      console.error('Error creating client:', error);
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
              Clients Management
            </h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Client
            </button>
          </div>

          {/* Add Client Form */}
          {showForm && (
            <div className="bg-white border border-gray-200 rounded p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Add New Client
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Client Name
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
                    Designation
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.designation}
                    onChange={(e) =>
                      setFormData({ ...formData, designation: e.target.value })
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
                    {loading ? 'Adding...' : 'Add Client'}
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

          {/* Clients List */}
          <div className="bg-white border border-gray-200 rounded">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">
                All Clients
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="border border-gray-200 rounded p-6"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={client.imageUrl}
                        alt={client.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">
                          {client.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {client.designation}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "{client.description}"
                    </p>
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

export default Clients;

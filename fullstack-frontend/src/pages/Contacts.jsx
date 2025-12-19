import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { contactAPI } from '../services/api';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      // BACKEND API INTEGRATION POINT
      const response = await contactAPI.getAllForAdmin();
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-black">
            Contact Form Submissions
          </h1>

          <div className="bg-white border border-gray-200 rounded overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-gray-600">
                Loading contacts...
              </div>
            ) : contacts.length === 0 ? (
              <div className="p-8 text-center text-gray-600">
                No contact submissions yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100 border-b border-gray-300">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                        Full Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                        Mobile Number
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                        City
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {contacts.map((contact, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-black">
                          {contact.fullName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {contact.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {contact.mobileNumber}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {contact.city}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contacts;

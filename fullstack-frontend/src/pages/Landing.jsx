// import { useState, useEffect } from 'react';
// import { ArrowRight } from 'lucide-react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { projectsAPI, clientsAPI, contactAPI, newsletterAPI } from '../services/api';

// function Landing() {
//   const [projects, setProjects] = useState([]);
//   const [clients, setClients] = useState([]);
//   const [contactForm, setContactForm] = useState({
//     fullName: '',
//     email: '',
//     mobileNumber: '',
//     city: '',
//   });
//   const [newsletterEmail, setNewsletterEmail] = useState('');
//   const [contactSuccess, setContactSuccess] = useState(false);
//   const [newsletterSuccess, setNewsletterSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchProjects();
//     fetchClients();
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

//   const fetchClients = async () => {
//     try {
//       // BACKEND API INTEGRATION POINT
//       const response = await clientsAPI.getAll();
//       setClients(response.data);
//     } catch (error) {
//       console.error('Error fetching clients:', error);
//     }
//   };

//   const handleContactSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // BACKEND API INTEGRATION POINT
//       await contactAPI.submit(contactForm);
//       setContactSuccess(true);
//       setContactForm({ fullName: '', email: '', mobileNumber: '', city: '' });
//       setTimeout(() => setContactSuccess(false), 3000);
//     } catch (error) {
//       console.error('Error submitting contact form:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleNewsletterSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // BACKEND API INTEGRATION POINT
//       await newsletterAPI.subscribe(newsletterEmail);
//       setNewsletterSuccess(true);
//       setNewsletterEmail('');
//       setTimeout(() => setNewsletterSuccess(false), 3000);
//     } catch (error) {
//       console.error('Error subscribing to newsletter:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Navbar />

//       {/* Hero Section */}
//       <section id="hero" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold mb-6">
//               Welcome to Our Digital Solutions
//             </h1>
//             <p className="text-xl mb-8 text-blue-100">
//               We build innovative products that transform businesses and delight customers
//             </p>
//             <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center mx-auto">
//               Get Started
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Our Projects Section */}
//       <section id="projects" className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
//             Our Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project) => (
//               <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
//                 <img
//                   src={project.imageUrl}
//                   alt={project.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2 text-gray-900">
//                     {project.name}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
//                   <button className="text-blue-600 font-medium hover:text-blue-700 transition">
//                     Read More →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Happy Clients Section */}
//       <section id="clients" className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
//             Happy Clients
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {clients.map((client) => (
//               <div key={client.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
//                 <div className="flex items-center mb-4">
//                   <img
//                     src={client.imageUrl}
//                     alt={client.name}
//                     className="w-16 h-16 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-lg text-gray-900">
//                       {client.name}
//                     </h3>
//                     <p className="text-sm text-gray-600">{client.designation}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 italic">"{client.description}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section id="contact" className="py-16 bg-gray-50">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
//             Get In Touch
//           </h2>
//           {contactSuccess && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
//               Thank you for contacting us! We'll get back to you soon.
//             </div>
//           )}
//           <form onSubmit={handleContactSubmit} className="bg-white rounded-lg shadow-lg p-8">
//             <div className="mb-6">
//               <label className="block text-gray-700 font-medium mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={contactForm.fullName}
//                 onChange={(e) =>
//                   setContactForm({ ...contactForm, fullName: e.target.value })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 font-medium mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 required
//                 value={contactForm.email}
//                 onChange={(e) =>
//                   setContactForm({ ...contactForm, email: e.target.value })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 font-medium mb-2">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 required
//                 value={contactForm.mobileNumber}
//                 onChange={(e) =>
//                   setContactForm({ ...contactForm, mobileNumber: e.target.value })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 font-medium mb-2">
//                 City
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={contactForm.city}
//                 onChange={(e) =>
//                   setContactForm({ ...contactForm, city: e.target.value })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-400"
//             >
//               {loading ? 'Submitting...' : 'Submit'}
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-16 bg-blue-600 text-white">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
//           <p className="mb-8 text-blue-100">
//             Stay updated with our latest news and offers
//           </p>
//           {newsletterSuccess && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
//               Successfully subscribed to newsletter!
//             </div>
//           )}
//           <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
//             <input
//               type="email"
//               required
//               placeholder="Enter your email"
//               value={newsletterEmail}
//               onChange={(e) => setNewsletterEmail(e.target.value)}
//               className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition disabled:bg-gray-300"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// export default Landing;
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projectsAPI, clientsAPI, contactAPI, newsletterAPI } from '../services/api';

function Landing() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    city: '',
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
    fetchClients();
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

  const fetchClients = async () => {
    try {
      // BACKEND API INTEGRATION POINT
      const response = await clientsAPI.getAll();
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // BACKEND API INTEGRATION POINT
      await contactAPI.submit(contactForm);
      setContactSuccess(true);
      setContactForm({ fullName: '', email: '', mobileNumber: '', city: '' });
      setTimeout(() => setContactSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // BACKEND API INTEGRATION POINT
      await newsletterAPI.subscribe(newsletterEmail);
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 3000);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            We Build Digital Products
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Simple, scalable and business-focused solutions
          </p>
          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded overflow-hidden"
              >
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {project.description}
                  </p>
                  <button className="text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Clients */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Happy Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="border border-gray-200 rounded p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={client.imageUrl}
                    alt={client.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{client.name}</h3>
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
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Get In Touch
          </h2>

          {contactSuccess && (
            <div className="border border-gray-300 bg-white px-4 py-3 rounded mb-6 text-center">
              Thank you for contacting us.
            </div>
          )}

          <form onSubmit={handleContactSubmit} className="bg-white border border-gray-200 p-8 rounded">
            {['fullName', 'email', 'mobileNumber', 'city'].map((field) => (
              <div key={field} className="mb-6">
                <label className="block mb-2 capitalize">
                  {field.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  required
                  value={contactForm[field]}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, [field]: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Newsletter
          </h2>
          <p className="text-gray-700 mb-8">
            Subscribe to stay updated
          </p>

          {newsletterSuccess && (
            <div className="border border-gray-300 bg-white px-4 py-3 rounded mb-6">
              Subscribed successfully.
            </div>
          )}

          <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;

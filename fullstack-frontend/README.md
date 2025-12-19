# Placement Assignment - Frontend Application

A complete React frontend application with a Landing Page and Admin Panel built for a placement assignment.

## Tech Stack

- React 18 + Vite
- React Router DOM
- Axios
- Tailwind CSS
- Lucide React (Icons)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar for landing page
│   ├── Footer.jsx          # Footer component
│   └── Sidebar.jsx         # Admin panel sidebar navigation
│
├── pages/
│   ├── Landing.jsx         # Landing page with all sections
│   ├── AdminDashboard.jsx  # Admin dashboard home
│   ├── Projects.jsx        # Project management (CRUD)
│   ├── Clients.jsx         # Client management (CRUD)
│   ├── Contacts.jsx        # Contact form submissions (Read-only)
│   └── Newsletter.jsx      # Newsletter subscribers (Read-only)
│
├── services/
│   └── api.js              # Axios instance and API endpoints
│
├── App.jsx                 # Main routing configuration
└── main.tsx                # Application entry point
```

## Features

### Landing Page

1. **Hero Section** - Static welcome section
2. **Our Projects Section** - Displays all projects from backend
3. **Happy Clients Section** - Shows client testimonials
4. **Contact Form** - Submit contact information
5. **Newsletter Subscription** - Email subscription form

### Admin Panel

1. **Dashboard** - Overview with quick links
2. **Projects Management** - Add and view projects
3. **Clients Management** - Add and view clients
4. **Contact Submissions** - View all contact form entries
5. **Newsletter Subscribers** - View all email subscribers

## Backend Integration

### API Configuration

Update the backend URL in `src/services/api.js`:

```javascript
const BASE_URL = 'http://localhost:8080'; // Replace with your Spring Boot backend URL
```

### API Endpoints

All API endpoints are clearly marked with comments:

```javascript
// BACKEND API INTEGRATION POINT
```

#### Projects API
- `GET /admin/projects` - Get all projects
- `POST /admin/projects` - Create new project

#### Clients API
- `GET /admin/clients` - Get all clients
- `POST /admin/clients` - Create new client

#### Contact API
- `POST /contact` - Submit contact form
- `GET /contact/admin` - Get all contact submissions

#### Newsletter API
- `POST /newsletter` - Subscribe to newsletter
- `GET /newsletter/admin` - Get all subscribers

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Routes

- `/` - Landing page
- `/admin` - Admin dashboard
- `/admin/projects` - Projects management
- `/admin/clients` - Clients management
- `/admin/contacts` - Contact submissions
- `/admin/newsletter` - Newsletter subscribers

## Data Models

### Project
```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "imageUrl": "string"
}
```

### Client
```json
{
  "id": "string",
  "name": "string",
  "designation": "string",
  "description": "string",
  "imageUrl": "string"
}
```

### Contact
```json
{
  "fullName": "string",
  "email": "string",
  "mobileNumber": "string",
  "city": "string"
}
```

### Newsletter
```json
{
  "email": "string",
  "subscribedDate": "date"
}
```

## Notes

- No authentication is required for admin panel access
- All backend integration points are marked with clear comments
- Forms include validation and loading states
- Success messages are displayed after form submissions
- Responsive design works on all screen sizes
- Clean and professional UI using Tailwind CSS

## Connecting to Spring Boot Backend

1. Start your Spring Boot backend on port 8080 (or update the BASE_URL in `api.js`)
2. Ensure CORS is configured on the backend to allow requests from the frontend
3. The frontend will automatically connect to all API endpoints
4. Test each feature to ensure proper data flow

## Future Enhancements

- Add authentication for admin panel
- Implement delete functionality for projects and clients
- Add pagination for large datasets
- Include image upload instead of URL input
- Add search and filter capabilities

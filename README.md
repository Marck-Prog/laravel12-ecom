# Laravel 12 & React 19 E-commerce Platform

A modern e-commerce application built with **Laravel 12** as the backend API and **React 19** as the frontend. This project provides a robust foundation for an online store with features like product management, user authentication, shopping cart, and checkout functionality.

## Features

- **Backend (Laravel 12):** RESTful API for product, cart, and order management - User authentication (JWT or Sanctum) - Database migrations and seeders for quick setup - Payment gateway integration (e.g., Stripe, PayPal - specify if applicable)
- **Frontend (React 19):** Responsive UI with modern design - State management (e.g., Redux, Context API - specify if applicable) - Product listing, cart, and checkout pages - Client-side routing with React Router
- **Additional Tools:** Laravel Artisan for CLI management - Vite for frontend asset bundling (assumed with Laravel 12)

## Prerequisites

Before you begin, ensure you have the following installed:

- PHP >= 8.2 (Laravel 12 requirement)
- Composer
- Node.js >= 20.x (for React 19)
- npm or Yarn
- MySQL/PostgreSQL (or your preferred database)
- Git

## Installation

### Backend Setup (Laravel)

1. Clone the repository: `bash git clone https://github.com/yourusername/your-repo-name.git cd your-repo-name `
2. Install PHP dependencies: `bash composer install `
3. Copy the `.env.example` file to `.env`: `bash cp .env.example .env `
4. Configure your `.env` file: - Set database credentials (`DB_HOST`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`) - Update `APP_URL` and other necessary environment variables
5. Generate an application key: `bash php artisan key:generate `
6. Run migrations and seed the database: `bash php artisan migrate --seed `
7. Start the Laravel development server: `bash php artisan serve ` The backend will be available at `http://localhost:8000`.

### Frontend Setup (React)

1. Navigate to the frontend directory (e.g., `frontend` or `resources/js` if integrated with Laravel): `bash cd frontend `
2. Install JavaScript dependencies: `bash npm install `
3. Configure the API base URL: - Update your API endpoint in the React app (e.g., in a `.env` file or config file) to point to `http://localhost:8000/api`.
4. Start the React development server: `bash npm run dev ` The frontend will typically be available at `http://localhost:5173` (Vite default).

### Running Together

- If you're using Laravel's Vite integration, ensure the frontend is built and served via Laravel. Run: `bash npm run build ` Then access the app through the Laravel server (`php artisan serve`).

## Project Structure

Laravel 12 & React 19 E-commerce Platform

A modern e-commerce application built with Laravel 12 as the backend API and React 19 as the frontend. This project provides a robust foundation for an online store with features like product management, user authentication, shopping cart, and checkout functionality.

Features

Backend (Laravel 12):
RESTful API for product, cart, and order management
User authentication (JWT or Sanctum)
Database migrations and seeders for quick setup
Payment gateway integration (e.g., Stripe, PayPal - specify if applicable)
Frontend (React 19):
Responsive UI with modern design
State management (e.g., Redux, Context API - specify if applicable)
Product listing, cart, and checkout pages
Client-side routing with React Router
Additional Tools:
Laravel Artisan for CLI management
Vite for frontend asset bundling (assumed with Laravel 12)
Prerequisites
Before you begin, ensure you have the following installed:

PHP >= 8.2 (Laravel 12 requirement)
Composer
Node.js >= 20.x (for React 19)
npm or Yarn
MySQL/PostgreSQL (or your preferred database)
Git
Installation
Backend Setup (Laravel)
Clone the repository:
bash

Collapse

Wrap

Copy
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
Install PHP dependencies:
bash

Collapse

Wrap

Copy
composer install
Copy the .env.example file to .env:
bash

Collapse

Wrap

Copy
cp .env.example .env
Configure your .env file:
Set database credentials (DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD)
Update APP_URL and other necessary environment variables
Generate an application key:
bash

Collapse

Wrap

Copy
php artisan key:generate
Run migrations and seed the database:
bash

Collapse

Wrap

Copy
php artisan migrate --seed
Start the Laravel development server:
bash

Collapse

Wrap

Copy
php artisan serve
The backend will be available at http://localhost:8000.
Frontend Setup (React)
Navigate to the frontend directory (e.g., frontend or resources/js if integrated with Laravel):
bash

Collapse

Wrap

Copy
cd frontend
Install JavaScript dependencies:
bash

Collapse

Wrap

Copy
npm install
Configure the API base URL:
Update your API endpoint in the React app (e.g., in a .env file or config file) to point to http://localhost:8000/api.
Start the React development server:
bash

Collapse

Wrap

Copy
npm run dev
The frontend will typically be available at http://localhost:5173 (Vite default).
Running Together
If you're using Laravel's Vite integration, ensure the frontend is built and served via Laravel. Run:
bash

Collapse

Wrap

Copy
npm run build
Then access the app through the Laravel server (php artisan serve).

# 🛋️ Furniture Shop - Fullstack E-Commerce Platform

**Furniture Shop** is a full-stack web application that simulates an online shopping experience - from browsing products, adding them to the cart, to completing secure online payments.  
The project includes both **client-side (user)** and **admin dashboard** applications for managing users, products, and orders.

---

## 🚀 Features

### 🛍️ Client Application
- User authentication and authorization using **JWT + OAuth2**.
- Product listing with **search, filter, and pagination**.
- Product detail page with dynamic routing and image preview.
- Shopping cart functionality: add, remove, and update product quantity.
- Online payment integration using **ZaloPay** and **Stripe**.
- Order management and checkout confirmation.
- Responsive design built with **Tailwind CSS** and **shadcn/ui** components.
- Cloudinary integration for image storage and optimization.

### 🧑‍💼 Admin Dashboard
- Manage **users, products, orders, and categories** through an intuitive dashboard.
- CRUD operations with real-time data updates.
- Role-based access control (Admin/User).
- Secure API communication via JWT authentication.

---

## 🧠 Tech Stack

**Frontend (Client):**
- [Next.js (TypeScript)](https://nextjs.org)
- Tailwind CSS, shadcn/ui
- Axios for API integration
- JWT Authentication
- ZaloPay & Stripe payment gateway

**Backend:**
- Spring Boot, Spring Security, Spring Data JPA
- RESTful API, MySQL
- JWT, OAuth2, BCrypt
- Cloudinary for image management
- SMTP Mail (for verification and notifications)

---

## 🧑‍💻 Team
- **Team size:** 3  
- **Your role:** Front-end Developer (UI/UX Design, API integration, payment flow)

---

## 📂 Repositories

- **Client (User App):** [https://github.com/PhuQuang205/furniture-app.git](https://github.com/PhuQuang205/furniture-app.git)  
- **Admin Dashboard:** [https://github.com/PhuQuang205/furniture-admin-app.git](https://github.com/PhuQuang205/furniture-admin-app.git)
- **Back-end**:[https://github.com/autdanttt/furniture-backend.git](https://github.com/autdanttt/furniture-backend.git)
---

## 🧩 Getting Started

To run the development server locally:

```bash
npm install
npm run dev
# or
yarn dev

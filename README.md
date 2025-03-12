# 📌 **Dashboard UI - README**

## 🎯 **Objective**

Build a **dashboard UI** based on the provided layout, integrate it with APIs, and implement authentication using **JWT**.

- 🎨 **Figma UI**: [Figma Design](https://www.figma.com/design/amcHdHI8piC0CDP5nIj1Cn/DESIGN-3?node-id=0-1&m=dev&t=sLlrI314z007vIQz-1)
- 🔗 **API Reference**: [PokeAPI](https://pokeapi.co/)

---

## 📋 **Project Requirements**

### 🔑 **1. Authentication (JWT)**

- Create a **login page** based on the Figma design.
- Implement **JWT-based authentication**:
  - Allow users to log in via API.
  - Store the JWT token securely (**localStorage** or **sessionStorage**).
  - Use the token for authenticated API requests.
- Implement **logout functionality** to clear the token and redirect users to the login page.

🔹 **Test User Credentials:**  
📧 **Email:** `eve.holt@reqres.in`  
🔑 **Password:** `Any Random Text`

---

### 📊 **2. Dashboard (API Integration)**

- Fetch and display **user-specific data** from an API **after login**.
- The dashboard should contain **at least five fields** displaying API data.
- Use **PokeAPI or another public API** to fetch and display relevant data.
- Implement **loading states** for enhanced user experience.

---

### 🌐 **3. API Choices**

You may use one of the following **mock APIs** for authentication and user data:

- 🔹 [**Reqres.in**](https://reqres.in/) – Mock JWT login API.
- 🔹 [**MockAPI.io**](https://mockapi.io/) – Custom API endpoints.
- 🔹 [**JSONPlaceholder**](https://jsonplaceholder.typicode.com/) – Fake user data.

Additionally, use the **PokeAPI** (or any other public API) to fetch and display data on the dashboard.

---

### 🔄 **4. API Integration**

- Fetch **real-time data** from the API.
- Display the fetched information in a **structured format** on the dashboard.

---

## ⚙️ **Technical Stack & Requirements**

- 🖥 **Frontend Framework:** React.js or Vue.js
- 🔑 **JWT Storage:** Securely store JWT using **localStorage** or **sessionStorage**.
- 🔗 **API Requests:** Use **Axios** or **Fetch API**.
- 🎨 **Styling:** Apply UI styling using **CSS, Tailwind, or Bootstrap**.
- 🔐 **Authentication:** Implement **Protected Routes** to restrict dashboard access to authenticated users.

---

## 🚀 **Project Setup & Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/dashboard-ui.git
   cd dashboard-ui
   ```

2. **Install dependencies:**
   ```bash
   npm install  # or yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start  # or yarn start
   ```

4. **Build for production:**
   ```bash
   npm run build  # or yarn build
   ```

---

## 📌 **Folder Structure**

```
📂 dashboard-ui
│-- 📂 src
│   │-- 📂 components       # Reusable UI components
│   │-- 📂 pages            # Page-level components (Login, Dashboard)
│   │-- 📂 services         # API request functions
│   │-- 📂 utils            # Utility functions
│   │-- 📜 App.js           # Main application file
│   │-- 📜 index.js         # Entry point
│-- 📜 package.json         # Project metadata and dependencies
│-- 📜 README.md            # Project documentation
```

---

## ✨ **Features**

✅ **JWT-based authentication** (Login & Logout)  
✅ **User-specific dashboard with API integration**  
✅ **Secure token storage & protected routes**  
✅ **Modern UI with Tailwind CSS / Bootstrap**  
✅ **Loading states for better UX**  

---

## 📞 **Support & Contact**

For any queries, feel free to reach out! 🚀

📧 **Email:** support@yourcompany.com  
💬 **Discord:** yourdiscordlink  

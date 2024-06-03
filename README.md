# Pet Love Client - For a pet adoption platform by Tauhid Hasan

### **Project Live link:** https://pet-love-eight.vercel.app/
### **Live Server link:** https://pet-adoption-plaform-a8.vercel.app
### **Frontend Repo:** https://github.com/tauhid-hasan-dev/pet-love-client.git
### **Backend Repo:** https://github.com/tauhid-hasan-dev/pet-love-backend.git


The Pet Adoption website is a comprehensive platform designed to facilitate the adoption of pets by connecting potential adopters with available animals. The website includes features for browsing and searching for pets, detailed pet profiles, user account management, and administrative tools for managing pet listings and user accounts. The goal is to create an efficient, user-friendly, and secure system that promotes responsible pet adoption and helps pets find loving homes.
   


### **Technology Stack:**

- **Programming Language:** TypeScript
- **Web Framework:** Next.js
- **Component Library:** Material UI
- **Authentication:** JWT (JSON Web Tokens)

### **Topics are covered in this Project:**

- SSR(Server side rendering) and CSR(Client Side Rendering)
- -
- Authentication with json web token
- CRUD operations(Pet, Adoption request, User)
- Error Handling using zod error.
- Routing with express router.

### **To run this project locally, follow theese instructions**

- You should have postgreSQL installed in your computer
- take a look at the .env.example file to replace your own credintials
- Import the postman collection to the postman to test the apis

**Clone this repository in your machine**

```
git clone https://github.com/tauhid-hasan-dev/pet-love-backend.git

**Install yarn for node_modules**

```
yarn install
```

**Run the project**

```
yarn run dev
```

**The connect the project to the database**

```
npx prisma migrate dev
```

**To connect to the database**

```
npx prisma studio
```

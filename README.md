# Pet Love Server - For a pet adoption platform by Tauhid Hasan

### **Live Server link:** https://pet-adoption-plaform-a8.vercel.app
### **Project Live link:** https://pet-love-eight.vercel.app/
### **Frontend Repo:** https://github.com/tauhid-hasan-dev/pet-love-client.git


This is a pet adoption platform aiming to create a great user experience for individuals interested in adopting pets. Users can submit adoption requests to pet owners. Owners will then have the option to approve or reject these requests. After submitting a request, users can update the request information. Users will be verified using JSON Web Tokens.

### **Technology Stack:**

- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **Object Relational Mapping (ORM):** Prisma with PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)

### **Topics are covered in this Project:**

- Data validation with Prisma ORM
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

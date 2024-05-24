const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
const dbPath = path.join(__dirname, "e_learning_platform.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(4001, () => {
      console.log("Server Running at http://localhost:4001/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();

//Registe_API!!!

app.post("/register", async (request, response) => {
  const { name, phone, email, password } = request.body;
  const hashedPassword = await bcrypt.hash(request.body.password, 10);
  const selectUserQuery = `SELECT * FROM user_details WHERE name = '${name}'`;
  const dbUser = await db.get(selectUserQuery);
  if (dbUser === undefined) {
    const createUserQuery = `
      INSERT INTO 
        user_details (name, phone, email, password) 
      VALUES 
        (
          
          '${name}',
          '${phone}',
          '${email}',
          '${hashedPassword}'
          
        )`;
    const dbResponse = await db.run(createUserQuery);
    const newUserId = dbResponse.lastID;
    response.send(`Created new user with ${newUserId}`);
  } else {
    response.status = 400;
    response.send("User already exists");
  }
});

//Login_API!!!!

app.post("/login", async (request, response) => {
  const { name, password } = request.body;
  const selectUserQuery = `SELECT * FROM user_details WHERE name = '${name}'`;
  const dbUser = await db.get(selectUserQuery);
  if (dbUser === undefined) {
    response.status(400);
    response.send("Invalid User");
  } else {
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password);
    if (isPasswordMatched === true) {
      response.send("Login Success!");
    } else {
      response.status(400);
      response.send("Invalid Password");
    }
  }
});

app.get("/user/", async (request, response) => {
  const getUsersQuery = `
  SELECT
    *
  FROM
  user_details
  ORDER BY
    id;`;
  const usersArray = await db.all(getUsersQuery);
  response.send(usersArray);
});

app.get("/user1/", (request, response) => {
  response.send("sudharshan");
});



app.get("/courses/", async (request, response) => {
  const getCoursesQuery = `
  SELECT
    *
  FROM
  course
  ORDER BY
    course_id;`;
  const coursesArray = await db.all(getCoursesQuery);
  response.send(coursesArray);
});



app.get("/orders/", async (request, response) => {
  const orders = `
  SELECT
    *
  FROM
  registrations
  ORDER BY
    course_id;`;
  const orderarray = await db.all(orders);
  response.send(orderarray);
});

app.get("/courses/:courseId/", async (request, response) => {
  const { courseId } = request.params;
  const coursequery = `SELECT * FROM course WHERE course_id = ${courseId}`;
  const res4 = await db.get(coursequery);
  response.send(res4);
});


//API-5 delete method
app.delete("/orders/:course_id/", async (request, response) => {
  const { course_id } = request.params;
  const delete1query = `DELETE FROM registrations WHERE course_id = ${course_id};`;
  const res4 = await db.run(delete1query);
  response.send("orders Deleted");
});



app.post("/registrations", async (request, response) => {
  const { course_id, course_name, user_name, amount } = request.body;
 
  const selectUserQuery = `SELECT * FROM user_details WHERE name = '${user_name}'`;
  const dbUser = await db.get(selectUserQuery);
  if (dbUser === undefined) {
    response.status(400);
    response.ok = false;
    response.send("User not login ..");
  } else {
    
    const createUserQuery = `
      INSERT INTO 
        registrations (course_id, course_name, user_name, amount) 
      VALUES 
        (
          
          ${course_id},
          '${course_name}',
          '${user_name}',
          ${amount}
          
        )`;
    const dbResponse = await db.run(createUserQuery);
    
    response.send(`registration successfull...`);
  }
});



app.post("/registerd", async (request, response) => {
  const { name } = request.body;
  const selectUserQuery = `SELECT * FROM registrations WHERE user_name = '${name}'`;
  const dbUser = await db.all(selectUserQuery);
  if (dbUser === undefined) {
    response.status(400);
    response.send("Invalid User");
  } else {
      response.send(dbUser)
    }
  }
);


module.exports = app;
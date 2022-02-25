# Question 4

## Goal
In this question you will be writing some server side code. The client side code has been written for you.

## Instructions
1. Open the file `server/controllers/midterm/question4.controller.ts`. This is where you will make your changes.

1. Add a get endpoint to the controller for `/users`.

1. Inject the `usersService` into the controller and use the `this.userService.findAll()` method to get all of the users out of the database.

1. Return an object the from the controller that has the shape
```javascript
{
  users: [...],
}
```
Hint: just say `return { users };` assuming you called your variable users, that is.

5. Verify your controller is working properly by returning to your browers and verifying that you see 10 or so users rendered in the section for question 4. They will have generated names like `Generated1 User`. The Site Admin user will also be in the list.
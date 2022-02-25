# Question 5

## Goal
In this question will you will make post and put requests to create and update todo items in this simple todos widget. You will need to write both client and server side code and you will be given less detailed instructions on what you need to accomplish.

## Instructions

1. Add an endpoint to `server/controllers/midterm/question5.controller.ts` for creating a new todo item. Return the newly todo item from the controller. Look at `todo.entity.ts` in the entities folder to see what the todo looks like. You will also need to add a method to `todos.service.ts` in the providers folder to facilitate this.
2. Add a method to `server/providers/services/todos.service.ts` for creating a new todo item.
3. Add an endpoint to the `question5.controller.ts` for updating a todo item. The only attribute that needs to be updated is the `isComplete` attribute. Again, you will need to add a method to the todos service for this.
4. On the front end in `_question_5.jsx`, when the SAVE button is pressed you should add a new todo item to the database and then display the new item by adding it to the todos list once it has finished being created.
5. In the `todo.jsx` component, when the checkbox is checked you should update the todo on the server to change whether it has been completed or not.
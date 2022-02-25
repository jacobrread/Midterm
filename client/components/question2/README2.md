# Question 2

## Goal
In this question you will show me you can render items in a list.

## Instructions

In `_question_2.jsx` you are given a variable called `users` that contains an array of objects of shape:

```javascript
{
  name: "Some String",
  id: 1, // some number
  email: "someemail@usu.edu",
  isAdmin: true, // or false
}
```
Each object in the array represents a user.

Do the following:
1. Create a component in the `question2` folder called `User`. `User` should take a user as a prop.
1. In `User` display the name and email of the user. If the user is an admin change the text color of the user's name to be some shade of green.
1. In the `Question2` component found in `_question_2.jsx`, map over the users array and render a `User` component for each user.
1. Make sure to set a key on each user! You will lose points if you have key related errors.
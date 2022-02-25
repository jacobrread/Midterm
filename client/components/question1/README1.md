# Question 1

## Goal
In this question you will be dealing with React, props, and state.

## Instructions
1. Create a new react component called `Counter` in the `question1` folder. `Counter` should accept a prop for min and max.
1. The counter component should display a number (the current count value), and two buttons: and increment button and decrement button.
1. The initial number to be displayed should either be 0, whatever the min prop is if min is greater than 0, or whatever the max prop is is max is less than 0. You can assume that min will always be lower than max.
1. When the buttons are pressed, the value displayed by the number should increment or decrement accordingly such that the count never exceeds the max prop or drops below the min prop.
1. Import the Counter component into `_question_1.jsx`
1. Render 3 instances of the counter into Question1, one with min=-5 and max=5, one with min=-15 and max=-5, and one with min=5 max=15
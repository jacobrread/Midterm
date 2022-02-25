# Question 3

## Goal
In this exercise you will interact with data sent from the server.

## Instructions
1. In the `Question3` component, make a `get` request to `/transactions`. I have written the controller for you and it will return an object that has the following shape:
```javascript
{
  transactions: [
    {
      id: 1,
      amount: 100.53,
      fromUser: {
        id: 1,
        name: 'Abby Zollinger'
      },
      toUser: {
        id: 2,
        name: 'Bruce Young'
      }
    },
    ...
  ]
}
```
2. Make sure you use the proper React construct for doing things with side effects.
2. Create a new component in the `question3` folder called `Transaction`. This component should display the information about the transaction, namely the `amount`, and names of the people who sent and recieved the money.
2. In the `Question3` component render a `Transaction` for each transaction returned from the server.

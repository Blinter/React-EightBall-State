# Eight Ball

- States
  
The *EightBall* will need state to keep track of the current color and message text, and this state should initially be “black” and “Think of a Question”.

Make it so that the ball chooses a random message when it is clicked on. This should change the background color of the ball and the message.



---
### TODO
*Further Study*

---

## **Further Study 1**

If you have more time, here are some things to try out:

### **Reset**

Add a button below the ball that will reset the ball back to its initial state.

### **Record Keeping**

As you ask questions to the ball, display counts of the number of times the eight ball shows up as each of the three different colors.

## **Further Study 2: Color Boxes**

For this part, you should show a series of 16 boxes (a box is just square div with a background color). At the bottom of all of the boxes should be a button labeled “Change”.

Initially, each box should have a background color chosen from a random list of colors.

When you click the button:

- it should select a random box
- it should change the background color of that random box to a new color from the possible colors list.

Before building anything, *think about the structure of your React app.* This entire thing shouldn’t be one giant component.

## **Further Study 3**

### **Default Properties**

For both parts, there are opportunities to move some things into default properties:

- the list of possible colors for boxes
- the number of boxes (so it doesn’t always have to be 16!)

### **Feedback on Changed Box**

For the color boxes app, it can be tricky to tell which box changed when you clicked (particularly when it picks the same random color, so you can’t see any difference!)

Change the application so that, when a box just changed, it shows “changed!” inside of the div. That text should go away after the next click.
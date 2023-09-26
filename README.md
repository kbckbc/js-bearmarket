### Tony Tong approved this rubric on the 6th of November around 9pm.
### I did a presentation to Matt Lu on the 4th of December around 12pm.

# 2022 Fall, CSE330, Module 7 Creative project
+ Byeongchan Gwak, 501026, kbckbc
+ This is done by only me

# About project
+ Project Name: Bear Market
+ Author: Byeongchan Gwak(b.gwak@wustl.edu)
+ Project idea: A second-hand market for WashU students(You don't have to be a student). You can freely buy and sell used textbooks or personal items. Satisfaction is imposed on the completed transaction so that the user can use it as a judgment index for the next transaction. I made this because I thought that if I set a place and time at school and buy and sell things, I could cut costs.

# Rubric turned in on time (5 points)
+ 5 - Submit it on time

# Languages/Frameworks used (30 points)
+ 10 - Frontend: Learned/Used Vue.js
+ 10 - Backend: Learned/Used Express
+ 10 - Database: Learned/Used Mongo db

# Functionality(50 points)
+ 10 - Users can register, login, and logout
+ 20 - Logged in users can write or update or delete a post. Plus, they can comment on a post.
+ 5 - Users can set favorites on posts and view them all at once on My Page.
+ 5 - Favorite count of a post is displayed, so you can know how popular it is.
+ 5 - A post has three stages(pre-transaction, in-transaction and closed stages)
+ 5 - An author can change the stage of a post along with the trading situation. Closed posts can't have more comments.

# Best Practices (5 points)
+ 3 - Code is readable and well formatted
+ 2 - All pages pass the html validator

# Creative portion (10 points)
+ 10 - Trade participants can rate their opponents after completing the trade and all logged in users can see this. The user's evaluation can be used as a judgment index of the next transaction.


# How to test on local
+ Copy this src: git clone [gitrepository]
+ install mongodb on your local pc
  - create 'bearmarketDB'
  - create collections: 'item' 'item_comment' 'user' 'user_review' 
+ Run frontend(If you haven't install vue-cli, you need to install it first)
  - npm i --force
  - npm run serve
+ Run backend
  - npm i --force
  - npm run test
+ Visit the app page

# How to deploy 
+ Compile the frontend and copy the output to the backend 'public' folder
  - npm run build
+ 

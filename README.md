# EatCounts

### HackViolet 2021 Best Automation Application 

## Team
#### Zoe kim, Eugene Song, Josh Kim, Kyoungjin Lim 

<img width="829" alt="Screen Shot 2021-02-01 at 7 17 36 AM" src="https://user-images.githubusercontent.com/70327883/121284712-404b3200-c918-11eb-8b58-536c4cfc2363.png">

## Inspiration
We want to empower mothers and all women who single handedly sacrifice their time and energy in the kitchen for their family. According to The 2014 Eating & Health Module Data:Americans' Eating Patterns and Time Spent on Food, the average time spent in food preparation and cleanup by women (approximately 56 minutes) is almost twice as high compared to men’s (30 minutes). From the same source, 74% of the women indicated that they are the usual meal preparer in their household, whereas only 33% of the men participated in kitchen work. The amount of time women have to dedicate in the kitchen only increased recently as the COVID-19 pandemic forced more people to rely on home cooked meals. EatCounts aims to allow everyone to easily participate in the kitchen work which gives those good hearted women the chance to pursue their potential career and vision.

## Summary
Logic: Cooking requires a significant time and effort in and outside of the kitchen (the planning that precedes before the actual act of cooking tends to be longer and tedious)

=> This restrains women, who are usually expected to be proficient in this kind of housework, such as…

Women are obligated to use their personal time for such an activity => decreases the amount of time that they can invest in their future. The high entry barrier to participate in cooking becomes an additional factor that keeps women solely responsible for housework.

To free these women from carrying this burden alone, we need a way for everyone to easily partake in the kitchen activities

=> EatCounts scans what’s in the fridge, provides menus that can be created with the ingredients inside the fridge, and suggests food options that fit the user’s health condition.

## Mission
Mission: EatCounts’ mission is to make kitchen work healthy and accessible for all family members. EatCounts cares about your time. We suggest various menus based on the ingredients in your fridge and allow you to order any missing ingredients on Amazon Fresh. EatCounts cares about your health. We provide recipes based on your health condition and dietary preference. EatCounts cares about our mothers. We allow everyone to be comfortable in the kitchen and help each other.

## What it does
Eat Counts provide recipes based on your health condition, preference, number of people, and ingredients in your fridge. If you click a recipe that requires an ingredient that’s not in your fridge, it will direct you to Amazon Fresh.

You can fill in your preference list to indicate your health condition, ingredients in your fridge, and the range of targeting calories. In the Recipe page, you can type in the keyword of your preferred menu. The search results will show you recipes for food that contain that keyword. If you click the recipe, it will show you the required ingredients and steps to take. If you don’t have some ingredients, Eat Counts will direct you to AmazonFresh, so that you can buy them online.

## How We built it
Our program was developed with React, using minimal back-end components via json parsing and API documents. It utilizes Edamam api for nutritional information. With personalized information entered in user information section, the nutritional requirement section is updated. CSS was customized for the appearance, with the react elements slightly modified for functionality. React’s Router function was used to navigate through the pages with user information. User information at this stage is only saved locally. Future implementation guide includes a list of following. Constructing back-end DB for user information Further design modifications Amazon Fresh API integration Specific Nutritional Data and Presentation.

## Challenges We ran into
The most challenging part of this project was using ‘ReactJS’ to develop a Web App. All of our members were new to this framework, so we had to spend much of our time installing the program and learning about JavaScript, CSS, and HTML.

Several functions that we planned, such as searching recipes by keywords, required the API with ReactJS. We tried to refer to various online resources, but some applications didn’t work in our app. It was also challenging to use React Router. We used three different components: Home, About, and Recipe. Since we didn’t know how the navigation among views work in React, it was challenging to separate components altogether in App.js and making sure that the UI syncs with the URL.

Initially, we wanted to provide UI/UX that is familiar with the popular Web Apps that we use every day. However, it was hard to increase the quality of UI/UX while also making sure that the main functions work. For instance, when we tried to add animations for our welcome screen, the search bar disappeared. To avoid this kind of function failure, we had to simplify our design.

## Accomplishments that We're proud of
We took a long time thinking about ‘how’ we can empower women. We decided to define ‘empowering’ as caring about one’s health and sharing responsibilities within a family. Our web app, ‘EatCounts’, not only makes cooking convenient for family members but also takes care of their health. Although there are some improvements left for UI/UX, we are proud that we challenged ourselves to ReactJS, which we all are not familiar with, to create the app. Despite the hardships that we had in connecting APIs with ReactJS, we were able to turn our idea of ‘empowering women’ into ‘EatCounts’.

## What We learned
Through brainstorming project ideas, we learned about the various ways to empower women. We learned the importance of a healthy diet and dividing responsibilities within the family. Since it was our first time using ReactJS, we learned about CSS, JavaScript, HTML.

Also, while integrating API we were able to grasp an understanding of JSON structure usage in the Web applications. We learned about the structuring and access through the react state and hooks. React design standards such as hooks rule were checked to ensure the maximum functionality of the program.

We utilized the agile/scrum methodology in the process of making, via making one feature at a time(ex. Search, nutrition) through thorough feedback. We made sure that the interface is user-friendly, simplifying every procedure to the best of our ability, through which we learned UI/UX feedback method.d

What's next for EatCounts
The next step for EatCounts is to add AmazonFresh API to direct users to AmazonFresh if they are willing to buy the required ingredients. It would be more convenient for users to move directly to AmazonFresh than writing down the list of ingredients on Notes and buying them later.

The other important step is to improve UI/UX. Once we have the main functions working, we would like to focus on the design of our app. Adding a separate welcome screen with animation, deciding a theme color, or improving the navigation bar would help increase the quality of our app.

For the preference list, we can add more items to check the user’s environment. Currently, we are checking only a few aspects of health - diabetes, hypertension, and aiming calories. To provide a better recommendation of the menu, adding more diseases that require dietary control would be helpful. Also, asking the number of people joining the meal will be a good way to match recommendation with the amount of ingredients in the fridge. Furthermore, we are hoping to extend this project by increasing user contribution in the Recipes Page. We could allow users to share their own special recipes with others.

Besides these specific plans, our team will continue to learn ReactJS, JavaScript, CSS, and HTML. We felt that we were not familiar enough with these to turn all of our ideas into reality. Keep practicing online resources and applying on EatCounts would help us to be more comfortable with the framework.

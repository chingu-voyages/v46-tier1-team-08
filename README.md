# Recipes

## Table of Contents
* [Overview](#overview)
* [Features](#features)
* [Issues](#issues)
* [Dependencies](#dependencies)
* [Deployment](#deployment)
* [Improvements](#improvements)
* [What we learned](#what-we-learned)
* [Contributors](#contributors)
  
## Overview</br>
The Recipes app helps users search for recipes based on an ingredient that they would like to use in a dish. This project is the result of four developers who are participating in Chingu’s Voyage 46. Chingu has been an amazing organization that helped us connect with each other to develop a fullstack application. We were given resources to organize, manage, and track our project effectively. Using agile methodologies, specifically the Scrum framework, we all have a working knowledge of solving a problem with this approach. This is an application for individuals who enjoy cooking.

## Features</br>
+ Header component with an image, a search bar, and button to initiate the search
+ The user can input an ingredient, but we were not able to produce results once the button is clicked
+ Main data component displays various recipe cards that have an image and recipe title
+ Clickable cards that flip to summary details component that shows two tabs: ingredients and instructions
+ Data is fetched from a JSON file as an alternative to the Tasty Recipe API

<p align="center">
  <img width="359" alt="recipes" src="https://github.com/chingu-voyages/v46-tier1-team-08/assets/31903755/f7f67ad2-5d85-4daa-9959-17f407a74cf7">
</p>

[Click here to view mock-up](https://www.figma.com/file/cZB1RraJhH5ZklyFyUWoWP/Recipes-App?type=design&node-id=0%3A1&mode=design&t=52VnnasF71hbY8pf-1)

## ISSUES</br>
+ Typing in the search bar causes the whole site to go blank and produces a TypeError in the console
+ Initiating a search by clicking the search button does not change the results and produces a TypeError
+ We originally used the Tasty API but we ran out of free API calls. We switched to using the provided JSON file. The Card.jsx and Card.module.css files contain the code that fetchs data from the API.

## DEPENDENCIES</br> 
<img alt="Static Badge" src="https://img.shields.io/badge/React-blue?logo=react&color=414445">
<img alt="Static Badge" src="https://img.shields.io/badge/Vite-blue?logo=vite&color=414445">
<img alt="Static Badge" src="https://img.shields.io/badge/Netlify-blue?logo=netlify&color=414445">
<img alt="Static Badge" src="https://img.shields.io/badge/ESLint-blue?logo=eslint&color=414445">

## DEPLOYMENT</br>
1. Open Command Prompt or Terminal to install vite
2. Run _npm create@latest_
3. Choose React from list
4. Choose JavaScript from list
5. cd into project folder
6. Run _npm install_
7. Run _npm install react-icons_
8. Run _npm run dev_

## Improvements</br>
+ Troubleshoot the search bar component to render results based on the ingredient that the user inputs
+ Add a filter in the main data display that allows the user to alter results based on cuisine, dietary restrictions, breakfast, lunch, dinner, or dessert
+ Enable the preservation of search criteria between sessions, allowing users to select them from a dropdown menu when needed
+ Display an error message when an unlisted item is entered.
+ Add a link to the instruction video on the summary detail component
+ In addition to the information for the selected data, also display the nutritional data on the summary detail component
+ User login where recipes can be saved and a profile can be made
+ Integrate social media icons for sharing capabilities

## What we learned</br>
_Richard_ 
> I learned first hand the importance of working as a team as a developer. We were able to apply agile methodologies to designing and implementing a project. We were able to use the expertise of the different team members to produce a better product and add to our own knowledge. We were also able to practice using GitHub when multiple devs have access to the same repo, and how to coordinate that effort. I really feel that I have gained valuable experience of being part of a dev team and I was able to practice the soft skills necessary to successfully collaborate on a project.

_Laura G_ 
> Working in a team is so much better than working by yourself - more heads are better than one, for ideas, troubleshooting bugs. I learned how to install Vite for a React project and a bit of a refresher on how to write react code since I haven’t worked with it in awhile. Also learned that AI can be a good resource.

_Laura C_ 
> The past six weeks improved my skills with debugging/testing, project management, team collaboration, version control, and best practices in software developement. I found that applying Agile methodologies with the Scrum framework enforced a better understanding of SDLC. My confidence grew with each sprint and I learned how to communicate effectively with shifting priorities. When things weren't going as planned, I felt supported which enabled me to reach out to Jim or my team for help. I've already promoted this program to students from my college and other developers. I look forward to the next Voyage!

## CONTRIBUTORS
**Laura Gieg**</br>
Discord: @frosty5493</br>
GitHub: [Follow Laura](https://github.com/frosty8104)</br>
LinkedIn: [Connect with Laura](https://www.linkedin.com/in/laura-gieg-web-designer-developer/)</br>  

**Richard Whittington**</br>
Discord: @richardwhittington</br>
GitHub: [Follow Richard](https://github.com/kilted2000)</br>
LinkedIn: [Connect with Richard](https://www.linkedin.com/in/richardwhittingtonse/)</br>  

**Laura Castro**</br>
Discord: @lauracastrotech</br>
GitHub: [Follow Laura](https://github.com/lauracastrotech)</br>
LinkedIn: [Connect with Laura](https://www.linkedin.com/in/lccastro/)</br> 

**Tyler Thietje**</br>
Discord: @Airboater1978</br>
GitHub: [Follow Tyler](https://github.com/tylerthietje)</br>
LinkedIn: [Connect with Tyler](https://www.linkedin.com/in/tylerthietje/)</br></br>[Back to Top](#recipes)

# ChinguGr08

# cypress-express-udemy
Exercises I did when learning cypress on udemy

[Cypress Express - Udemy](https://www.udemy.com/course/cypress-express/)


==============
First of all, we need to start a node project.
""
/> npm init
""

This will create the file package.json with the initial setup of your project

After that, we need to install cypress using the command bellow:
"""
/> npm i cypress --save-dev
"""

Now, cypress is installed inside the forlder of your project.

"""
/> npm uninstall cypress   -- Will remove cypress from your project
/> npm i cypress@12.2.0 --save-dev   -- Will install the version 12.2.0 of cypress instead of the latest one
"""

To start cypress, the following commad shall be sent:
""""
/> npx cypress open
""""

The LOCAL test environment that can be accessed from a web browser at localhost:3000 address.

The app folder has the project we are going to test
inside the app\markL\api folder, to install the packages of the project the command is:
/> npm install

Command to start the api database
/> npm run db:init

to start the api, run the command:
/> npm run dev

Now lets do the same for the app\markL\web project
/> npm install
/> npm run dev
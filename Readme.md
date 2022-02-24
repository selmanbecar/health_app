The application I made helps to monitor everyday things that affect our health, and these are proper nutrition, enough sleep, training, the amount of water ingested. The application on the backend also contains many more functionalities that are not used, such as CRUD for the user, middleware for authentication, but I did not use all the functionalities.
I didn't use the authentication stuff for ease of use and testing, while I left other things as an indication that the app is a good base for extensions and upgrades and that my code can be used anywhere we have similar requirements


Documentation for backend is in server/documentation folder
for frontent you will need to create .env with 
REACT_APP_BACKEND_URL=http://localhost:8000

then using cmd or terminal start command npm install 
and then npm start

YOU NEED TO RUN BACKEND BEFORE FRONTEND

when you load frontend you will should get login page. On login page you will have link to register page where you can register your profile.
After registration you will be redirect to home page.
On home page you will have logout button for logout, for add and 1 form.
Form is same for edit and add the difference is between the button that tells whether it is edit or add. Once we are convinced that the add button we can fill out a form with information that will tell us how much water we drank today, how much we slept, whether we trained, and how many times we ate. Each copy can be deleted and edited.




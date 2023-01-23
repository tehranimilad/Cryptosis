# Cryptosis
![landingPage](https://user-images.githubusercontent.com/114964227/213065191-2c5cc740-a143-4d57-b55e-2669c995cb8f.png)
![signUp](https://user-images.githubusercontent.com/114964227/213068841-d488fb52-d984-44c2-bd5c-98053b98ea04.png)
![logIn](https://user-images.githubusercontent.com/114964227/213068366-6b5205cc-e594-4c0c-9a32-af9f9b05548c.png)
![CryptoData](https://user-images.githubusercontent.com/114964227/213950360-45eee961-08b8-4838-886a-093859acc1fc.png)

### Technologies used: 
**MERN Stack Application**
* MongoDB 
* Express(.js)
* React
* Node

### Approach Taken: 

The first step in building a MERN stack application based on cryptocurrency is to set up the MongoDB database and define the schema for storing information about the various cryptocurrencies, user information for authentication (Login & Signup), and comments that can be left by users once logged in. 

The next step is setting up the Express server and defining the API routes for interacting with the database, as well routes for updating and creating information. This includes information about other cryptocurrencies, and comments left by other users on the home/forum page. 

Once the back-end is set up, my focus shifted towards the front-end and building the user interface with React. This process included creating components that display various crptocurrency prices, as well as forms for updating and deleting data.

Finally, I used Node.js to handle the server-side logic, such as connectiong the front-end and back-end together. Node.js also handles any other server-side tasks. 

It is important to remember that I took the proper consideration when building out this application since there are security, compliance,  and regulations related to cryptocurrency. This application adheres to laws and guidelines that are related t othe handling of cryptocurrency. 

### Installation Instructions:
* Fork and Clone Repository
* In your terminal, run the following command. (On the Frontend & Backend)
```
npm i
```

* And then in your terminal, run the following command at the root of the directory. 
```
npm start
```
### Major Hurdles/ Unsolved Problems:

At the moment, the only unsolved problem is the connection to the Coingecko API is receiving a web-socket error, but the information is still being properly rendered on the pages. The website functions as it should, but the user might see a websocket error in the console due to issues with the providor of the API. 


One major hurdle I dealt with was implementing Anime.JS, and optimizing the animations for various screen resolutions. 


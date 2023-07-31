
Van Life
A React project built as part of Scrimba's Advanced React course.

I was very excited to start this project for two reasons: React Router and Firebase/Firestore.
I had not used them previously in any other project, and are considered two important tools
for creating a single-page application with backend features.

Here is how I used them for this project:

**React Router**
To manage different pages I used the following components:

1. **BrowserRouter** and **Routes** to provide the routing structure for the entire app.

2. **Route** to map different components to different URLs.

3. **Link** and **NavLink** to create navigable links to different parts of the app.

4. **Outlet** as as a placeholder for nested routes.

5. **useLocation** to get the previous location from the location state, so the user can be redirected back to that location after they log in.

6. **useParams** to allow components to access the URL parameters.

7. **useNavigate** to change the route after a form submission. useNavigate returns a function that can be used to navigate programmatically. In the Login component, useNavigate is used to redirect the user to their previous location (or the "/host" page if there was no previous location) after they successfully log in.

8. **useSearchParams** to allow the application to read and modify the URL query. 
This custom hook returns an array that contains an instance of URLSearchParams (which contains the current URL parameters) and a function to update those parameters. In the Vans component, useSearchParams is used to get and set the URL parameters, which are used to filter the list of vans by type.


**Firebase and Firestore** 

Firestore is a NoSQL cloud database provided by Firebase to store and sync data for client- and server-side development. For this application, I used Firestore to store and retrieve data about vans and hosts. 

1. **initializeApp** function used to initialize and return a Firebase app instance, which I then used to interact with Firebase services.

2. **getFirestore** function gets the Firestore service for the given Firebase app.

3. **collection**, **doc**, **getDocs**, **getDoc**, **query**, **where**: these functions are that I used for querying and managing data in the Firestore database. I used them to read and write documents, collections, and create queries.



A few tools that I was already familiar with:

**React Hooks**: to manage state and effects I used the following 

- **useState**:  to manage various pieces of state, such as the list of vans (vans, setVans), the current status of data fetching (loading, setLoading), and any errors that occur during fetching (error, setError).

- **useEffect**: to fetch the list of vans when the component mounts

**Local Storage**  to persist login status across browser sessions.

PLEASE NOTE: I built this project with a desktop-first approach and is not yet responsive to smaller screens.
It is also missing critical a11y features. I plan to reconfigure and rebuild the entire application in order remove reduntant functionalities and add Firebase authentification. With that opportunity I will also take care of a11y and responsiveness.    




A React project built as part of Scrimba's Advanced React course.

To manage different pages I used React Router with the following components:

1. BrowserRouter and Routes to provide the routing structure for the entire app.
2. Route to map different components to different URLs.
3. Link and NavLink to create navigable links to different parts of the app.
4. Outlet as as a placeholder for nested routes.
5. useLocation to give access to the current location/path.
useLocation: This hook from react-router-dom returns the current location object, which contains information about the current URL. In the Login component, useLocation is used to get the previous location from the location state, so the user can be redirected back to that location after they log in.
6. useParams to allow components to access the URL parameters.
7. useNavigate to programmatically change the route after a form submission.
useNavigate: This is another react-router-dom hook. It returns a function that can be used to navigate programmatically. In the Login component, useNavigate is used to redirect the user to their previous location (or the "/host" page if there was no previous location) after they successfully log in.
8. useSearchParams to allows the application to read and modify the URL query 
useSearchParams: This is a custom hook from the react-router-dom library. It returns an array that contains an instance of URLSearchParams (which contains the current URL parameters) and a function to update those parameters. In the Vans component, useSearchParams is used to get and set the URL parameters, which are used to filter the list of vans by type.


React Hooks: They are used to handle state and other React features in function components. Hooks like React.useState, React.useEffect, React.useContext, and React.useRef are used in the project.

**useState**:  to manage various pieces of state, such as the list of vans (vans, setVans), the current status of data fetching (loading, setLoading), and any errors that occur during fetching (error, setError).

**useEffect**: to fetch the list of vans when the component mounts

**useContext**: Accepts a context object and returns the current context value.
useRef


Local Storage API (localStorage): Although not specifically a React tool, it's used within the React application to persist login status across browser sessions.


import React from 'react'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route, 
  RouterProvider } from 'react-router-dom';

// Components
import Navbar from './Components/Utilities_Components/Navbar';

//Layouts (Parent/Root layouts)
import RootLayout from './Layouts/RootLayout';

//Page Views
import Login from './Views/Login';
import Register from './Views/Register';
import LandingPage from './Views/LandingPage';
import ErrorUi from './Views/ErrorUi';

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<LandingPage />}/>
      <Route path='login' element={<Login />}/>
      <Route path='register' element={<Register />}/>
      <Route path='*' element={<ErrorUi />}/>
    </Route>
  )
);

function App() {
  return (
   <RouterProvider router={myRouter}/>
  );
}

export default App;


// errorElement={<ErrorUi />}
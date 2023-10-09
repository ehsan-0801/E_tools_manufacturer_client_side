import Navbar from './Components/Header/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Footer from './Components/Footer/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/Pages/NotFound';
import RequireAuth from './Components/Required/RequireAuth';
import Purchase from './Components/Products/Purchase';
import MyOrders from './Components/Products/MyOrders';
import AddReview from './Components/Products/AddReview';
import MyProfile from './Components/Products/MyProfile';
import RequireAdmin from './Components/Required/RequreAdmin';
import ManageAllOrders from './Components/AdminTask/ManageAllOrders';
import AddProducts from './Components/AdminTask/AddProducts';
import ManageProducts from './Components/AdminTask/ManageProducts';
import Users from './Components/AdminTask/Users';
import { ToastContainer } from 'react-toastify';
import Payment from './Components/Products/Payment';
import AllProducts from './Components/Products/AllProducts';

function App() {
  const [user] = useAuthState(auth);
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <Home></Home> }></Route>

        <Route path="/blog" element={ <Blog></Blog> }></Route>
        <Route path="/all_products" element={ <AllProducts></AllProducts> }></Route>
        <Route path="/signin" element={ <SignIn></SignIn> }></Route>
        <Route path="/signup" element={ <SignUp></SignUp> }></Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth> }>
        </Route>
        <Route path="dashboard" element={ <RequireAuth><Dashboard></Dashboard></RequireAuth> }>
          <Route index element={ <MyProfile></MyProfile> }></Route>
          <Route path="myorders" element={ <MyOrders></MyOrders> }></Route>
          <Route path="addreview" element={ <AddReview></AddReview> }></Route>
          <Route path="payment/:id" element={ <Payment></Payment> }></Route>
          <Route path="manageallorders" element={ <RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin> }></Route>
          <Route path="addproducts" element={ <RequireAdmin><AddProducts></AddProducts></RequireAdmin> }></Route>
          <Route path="users" element={ <RequireAdmin><Users></Users></RequireAdmin> }></Route>
          <Route path="manageproducts" element={ <RequireAdmin><ManageProducts></ManageProducts></RequireAdmin> }></Route>
        </Route>
        <Route path="*" element={ <NotFound></NotFound> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

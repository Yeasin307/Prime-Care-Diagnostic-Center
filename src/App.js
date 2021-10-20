import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header/Header';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ContactUs from './ContactUs/ContactUs';
import AboutUs from './AboutUs/AboutUs';
import Details from './Details/Details';
import Footer from './Footer/Footer';
import Services from './Services/Services';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/contact">
              <ContactUs></ContactUs>
            </PrivateRoute>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

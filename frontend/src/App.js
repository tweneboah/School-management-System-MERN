import React from 'react';
import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './scss/style.scss';
import { useSelector} from 'react-redux';
import {selectUser} from './store/slices/userSlice';
import {SignedOutRoutes} from './ProtectedRoutes'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
//const TheLayout = React.lazy(() => import('./containers/TheLayout'));
const Admin = React.lazy(() => import('./layouts/Admin/Admin'));
const Student = React.lazy(() => import('./layouts/Student/Student'));
const Teacher = React.lazy(() => import('./layouts/Teacher/Teacher'));

// Pages
const Login = React.lazy(() => import('./pages/login/Login'));
const Page404 = React.lazy(() => import('./pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));


function App() {
  const user = useSelector(selectUser);

  const getDashboard = () => {
    if(user){
      switch (user.role) {
        case "student":
            return <Student/>;
        case "teacher":
            return   <Teacher/>;
        case "admin": 
            return  <Admin/>;
        default:
          break;
      }

    }
     
  }
  console.log(user)

  const CurrentDashboard = getDashboard();

    return (
     <Router>
       <ToastContainer/>
          <React.Suspense fallback={loading}>
            <Switch>
              {user ?  
                <>
                   {/* <Route 
                       path="/" 
                       exact
                       render={props => <CurrentDashboard {...props} />} 
                    /> */}
                    <Route 
                       path="/" 
                       exact
                       render={props => <Admin {...props} />} 
                    />
                     <Route  
                   path="/500" 
                   exact
                   name="Page 500" 
                   render={props => <Page500 {...props}/>} />
                   <Route  
                   path="/404" 
                   exact
                   name="Page 404" 
                   render={props => <Page404 {...props}/>} />
                   <Redirect  path="*" to="/login" />
                </>
                :
                <>
                    <SignedOutRoutes 
                      isAuth={user} 
                      exact={true}
                      path="/login" 
                      name="Login Page" 
                      component={Login} />
                     <Redirect  path="*" to="/login" />
                 </>
            }
            </Switch>
          </React.Suspense>
         </Router>
    
    );
  
}

export default App;

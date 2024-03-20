import { useRoutes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import WrapNav from "./components/nav/WrapNav"

// import Home from './routes/Home';
// import Events from './routes/Events';
// import Team from './routes/Team';
// import Resources from './routes/Resources';
// import Contact from './routes/Contact';
// import Login from './routes/Login';
// import Admin from './routes/Admin';
import Protected from './routes/Protected';
import { AuthContextComponent } from './context/AuthContext';
import Loader from './components/loader/Loader';

const Home = lazy(() => import('./routes/Home'));
const Events = lazy(() => import('./routes/Events'));
const Team = lazy(() => import('./routes/Team'));
const Resources = lazy(() => import('./routes/Resources'));
const Contact = lazy(() => import('./routes/Contact'));
const Login = lazy(() => import('./routes/Login'));
const Admin = lazy(() => import('./routes/Admin'));
const Lost = lazy(() => import('./routes/Lost'));

function App() {
  const element = useRoutes([
    {
      path:"/",
      element: <WrapNav children={<Suspense fallback={<Loader/>}><Home /></Suspense>} />
    },
    {
      path:"/home",
      element: <WrapNav children={<Suspense fallback={<Loader/>}><Home /></Suspense>} />
    },
    {
      path:"/events",
      element: <WrapNav children={<Suspense fallback={<Loader/>}><Events /></Suspense>} />
    },
    {
      path:"/contact",
      element: <WrapNav children={<Suspense fallback={<Loader/>}><Contact /></Suspense>} />
    },
    {
      path:"/team",
      element: <WrapNav children={<Suspense fallback={<Loader/>}><Team /></Suspense>} />
    },
    {
      path:"/resources",
      element: <WrapNav children={<Suspense fallback={<Loader/>}><Resources /></Suspense>} />
    },
    {
      path:"/login",
      element: <Suspense fallback={<Loader/>}><Login /></Suspense>
    },
    {
      path:"/admin",
      element: <Protected><WrapNav children={<Suspense fallback={<Loader/>}><Admin /></Suspense>}/></Protected>
    },
    {
      path:"/*",
      element: <WrapNav children={<Suspense fallback={<Lost/>}></Suspense>} />
    },
  ])
  return <AuthContextComponent>
    <Suspense fallback={<Loader/>}>
      {element}
    </Suspense>
  </AuthContextComponent>
}

export default App;

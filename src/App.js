import { useRoutes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import WrapNav from "./components/nav/WrapNav"

import Protected from './routes/Protected';
import { AuthContextComponent } from './context/AuthContext';
import Loader from './components/loader/Loader';
import Lost from './routes/Lost';

const Home = lazy(() => import('./routes/Home'));
const Events = lazy(() => import('./routes/Events'));
const EventPage = lazy(() => import('./routes/EventPage'));
const Team = lazy(() => import('./routes/Team'));
const Resources = lazy(() => import('./routes/Resources'));
const Contact = lazy(() => import('./routes/Contact'));
const Login = lazy(() => import('./routes/Login'));
const Admin = lazy(() => import('./routes/Admin'));

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
      path:"/events/:id",
      element: <WrapNav children={<Suspense fallback={<Loader/>}><EventPage /></Suspense>} />
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
      element: <WrapNav children={<Lost />} />
      // element: <WrapNav children={<Suspense fallback={<Lost />}></Suspense>} />
    },
  ])
  return <AuthContextComponent>
    <Suspense fallback={<Loader/>}>
      {element}
    </Suspense>
  </AuthContextComponent>
}

export default App;

import { useRoutes } from 'react-router-dom';

import WrapNav from "./components/nav/WrapNav"
import Home from './routes/Home';
import Events from './routes/Events';
import Team from './routes/Team';
import Resources from './routes/Resources';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Admin from './routes/Admin';
import Lost from './routes/Lost';
import Protected from './routes/Protected';
import { AuthContextComponent } from './context/AuthContext';

function App() {
  const element = useRoutes([
    {
      path:"/",
      element: <WrapNav children={<Home />} />
    },
    {
      path:"/home",
      element: <WrapNav children={<Home />} />
    },
    {
      path:"/events",
      element: <WrapNav children={<Events />} />
    },
    {
      path:"/contact",
      element: <WrapNav children={<Contact />} />
    },
    {
      path:"/team",
      element: <WrapNav children={<Team />} />
    },
    {
      path:"/resources",
      element: <WrapNav children={<Resources />} />
    },
    {
      path:"/login",
      element: <Login />
    },
    {
      path:"/admin",
      element: <Protected><WrapNav children={<Admin />} /></Protected>
    },
    {
      path:"/*",
      element: <WrapNav children={<Lost />} />
    },
  ])
  return <AuthContextComponent>{element}</AuthContextComponent>
}

export default App;

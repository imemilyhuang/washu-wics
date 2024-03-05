import { useRoutes } from 'react-router-dom';

import WrapNav from "./components/nav/WrapNav"
import Home from './routes/Home';
import Events from './routes/Events';
import Team from './routes/Team';
import Resources from './routes/Resources';
import Lost from './routes/Lost';

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
      path:"/team",
      element: <WrapNav children={<Team />} />
    },
    {
      path:"/resources",
      element: <WrapNav children={<Resources />} />
    },
    {
      path:"/*",
      element: <WrapNav children={<Lost />} />
    },
  ])
  return element
}

export default App;

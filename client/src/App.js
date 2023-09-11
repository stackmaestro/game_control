import "./App.css";
import Scene from "./containers/Scene";
import Controller from "./containers/Controller";
import { useRoutes } from 'react-router-dom';

function App() {

  const routes = useRoutes([
    { path: '/', element: <Scene/>},
    { path: '/controller', element: <Controller /> },
  ]);

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;

import React, { createContext } from "react";
import { getPosition } from "../services/position";
export const SceneContext = createContext();
function SceneProvider({ children }) {
  const [boxDetails, setBoxDetails] = React.useState();

  React.useEffect(() => {
    const fetchPosition = async () => {
      const position = await getPosition();
      setBoxDetails(position);
    };
    fetchPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SceneContext.Provider value={{ boxDetails, setBoxDetails }}>
      {children}
    </SceneContext.Provider>
  );
}
export default SceneProvider;

import React from "react";
import { useFrame } from "@react-three/fiber";
import io from "socket.io-client";
import config from "../config";
import { SceneContext } from "../context/SceneContext";
const socket = io.connect(config.SERVER_URL);

export default function Box() {
  const { boxDetails, setBoxDetails } = React.useContext(SceneContext);
  const bref = React.useRef(boxDetails);

  useFrame(({ clock }) => {
    bref.current.rotation.x = clock.getElapsedTime();
  });

  React.useEffect(() => {
    socket.on("receive_position", (data) => {
      bref.current.position.x = data.x;
      bref.current.position.y = data.y;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  React.useEffect(() => {
    console.log(boxDetails);
    bref.current.position.x = boxDetails.x;
    bref.current.position.y = boxDetails.y;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bref]);

  React.useEffect(() => {
    window.addEventListener("keydown", (event) => {
      // eslint-disable-next-line default-case
      switch (event.code) {
        case "ArrowLeft":
          bref.current.position.x -= 1;
          break;
        case "ArrowUp":
          bref.current.position.y += 1;
          break;
        case "ArrowRight":
          bref.current.position.x += 1;
          break;
        case "ArrowDown":
          bref.current.position.y -= 1;
          break;
      }
      socket.emit("send_position", {
        x: bref.current.position.x,
        y: bref.current.position.y,
      });
      setBoxDetails({
        x: bref.current.position.x,
        y: bref.current.position.y,
      });
    });
    return () => {
      window.removeEventListener("keydown");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <mesh rotation={[90, 0, 20]} ref={bref}>
      <boxGeometry attach="geometry" args={[10, 10, 10]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

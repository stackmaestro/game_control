import React from 'react'
import styles from './Controller.module.css';
import {SceneContext} from '../context/SceneContext';
import io from 'socket.io-client'
import config from '../config';
const socket = io.connect(config.SERVER_URL);


function Controller() {

  const {boxDetails,setBoxDetails} = React.useContext(SceneContext);

  const updateScene = (direction)=>{
    let x =boxDetails.x;
    let y=boxDetails.y;
    // eslint-disable-next-line default-case
    switch (direction) {
      case 'ArrowLeft':
        setBoxDetails()
        x -= 1;
        break
      case 'ArrowUp':
        y += 1;
        break
      case 'ArrowRight':
        x += 1;
        break
      case 'ArrowDown':
        y -= 1;
        break
    }
    socket.emit('send_position', {
      x: x,
      y: y,
    })

    setBoxDetails({
      x: x,
      y: y,
    })
  }

  return (
    <div className={styles.controller}>
      <div className={styles.controls}>
        <button className={styles.control} onClick={()=> updateScene('ArrowLeft')}>
        <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className={styles.control} onClick={()=> updateScene('ArrowUp')}>
        <i className="fa-solid fa-arrow-up"></i>
        </button>
        <button className={styles.control} onClick={()=> updateScene('ArrowDown')}>
        <i className="fa-solid fa-arrow-down"></i>
        </button>
        <button className={styles.control} onClick={()=> updateScene('ArrowRight')}>
        <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Controller
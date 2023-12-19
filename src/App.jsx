import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import './assets/scss/global.scss';



export default function App() {
  return <form >
    <div>
      <h1>Hello World! <FontAwesomeIcon icon={icon({name: 'galactic-republic', style: 'brands'})} /></h1>
    </div>
  </form>
}


// import styles from './form.module.scss'
//  TO USE: <h1 className={styles.class}>Im a header!</h1>
// TO USE MULTIPLE CLASSES: <h1 className={`${styles.class} ${styles.classTwo}`}>Im a header!</h1>
// SIDE NOTE: global variables are just classname no need for styles.classname
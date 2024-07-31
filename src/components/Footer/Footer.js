import React from 'react';
import {Row, Col} from 'react-bootstrap';
import classes from './Footer.module.css';
import "../../app/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//icons

const Footer = () => {
  return (
          <div className={classes.roll}>

            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <p>Copyright © Defi-Layer</p>
            </div>



          </div>
  )
}

export default Footer

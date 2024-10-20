import React, {memo} from "react";
import styles from './Footer.module.css'

const Footer = memo(function Footer(){
   return <footer id={styles['footer']}>
      <small>Created by <a href="https://www.linkedin.com/in/leonardomarcattidasilva/">Leonanrdo Marcatti</a></small>
   </footer>
});

export default Footer
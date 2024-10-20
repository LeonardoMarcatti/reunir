import React, {memo} from "react";
import styles from './Header.module.css'

const Header = memo(function Header(){
   return <header id={styles['header']}>
      <h1>Reunir</h1>
   </header>
});

export default Header
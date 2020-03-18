import React from 'react';
import Styles from  './Header.css';
const Header = () => {

  const pi = '3.14';


  return (
    <>
      <div className={Styles.marquee}>
        <div className={Styles.text}>{pi}</div>
      </div>
    </>
  );
};

export default Header;

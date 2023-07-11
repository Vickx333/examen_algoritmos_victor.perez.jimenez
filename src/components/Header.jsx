import { Component } from "react";

function Header() {
     let styles = {
          headerStyle:
          {
               width: '90vw',
               height: '90px',
               padding: '10px 30px',
               boxShadow: '0px 9px 10px 0px black',
               backgroundColor: '#fff3',
               color: ' aqua',
               margin: '0px auto',
               borderRadius: '0px 0px 10px 10px'
          },
          stylemark: {
               padding: '10px 20px',
               borderRadius: '10px',
               boxShadow: '5px 3px 8px 0px #123432'
          }
     }
     return (
          <header style={styles.headerStyle}>
               <h2>Prueba Técnica v210700E <mark style={styles.stylemark}>Victor.p.j.z</mark></h2>
          </header>
     )
}
export default Header;
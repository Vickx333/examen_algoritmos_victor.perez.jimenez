import { Component } from "react";
import DescriptPuntos from './DescriptPuntos.jsx';


function Main() {
     const a = [17, 8, 30];
     const b = [99, 96, 80];

     const calcularPuntos = (a, b) => {
          let alicePuntos = 0;
          let bobPuntoos = 0;

          for (let i = 0; i < a.length; i++) {
               switch (true) {
                    case a[i] > b[i]:
                         alicePuntos++;
                         break;
                    case a[i] < b[i]:
                         bobPuntoos++;
                         break;
                    default:
                         break;

               }
               // console.log([alicePuntos, bobPuntoos])
          }
          return [alicePuntos, bobPuntoos]

     };



     const [alicePuntos, bobPuntoos] = calcularPuntos(a, b);
     const styles = {
          respuesta: {
               color: 'gold',
               fontSize: '2rem',
               fontWeight: '800'
          }
     }
     return (
          <>
               <h3></h3>
               <p style={styles.respuesta}>Puntos de Alice: {alicePuntos}</p>
               <p style={styles.respuesta}>Puntos de Bob: {bobPuntoos}</p>

               <DescriptPuntos />
               <hr />

               {console.log("puntoos Alice: " + alicePuntos)}
               {console.log("puntos bob: " + bobPuntoos)}
          </>

     )
}
export default Main;

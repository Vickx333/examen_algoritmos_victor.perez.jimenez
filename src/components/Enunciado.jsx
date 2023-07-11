import { Component } from "react";

function Enunciado() {
     const styles = {
          pstyle: {
               color: '#fff',
               fontSize: '1.4rem'

          }
     }
     return (
          <>
               <p style={styles.pstyle}>Un revisor califica dos desafios, otorgando puntos en  una escala del 1 al 100 para tres categorias: calidad  del problema, originalidad y dificultad.</p>
               <p style={styles.pstyle}>la ccalificacion del desafio de alice es  a = a0 , a1, a2,<br /> y lacalificaci'on del sesafio de Bob es de  b = b0, b1,  b2</p>
               <br />
               <ul>
                    <li>puntajes Alice: a
                         <ul>
                              <li>17</li>
                              <li>28</li>
                              <li>30</li>
                         </ul>
                    </li>
                    <li>
                         puntos de Bob: b
                         <ul>

                              <li>99</li>
                              <li>
                                   116
                              </li>
                              <li>8</li>

                         </ul>
                    </li>
               </ul>
          </>
     )
}
export default Enunciado;
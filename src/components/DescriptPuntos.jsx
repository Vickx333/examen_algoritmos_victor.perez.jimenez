import { Component } from "react";
function DescriptPuntos() {
     const styles = {
          conclucion: {
               width: '80%',
               textAlign: 'center',
               margin: '0px auto',
               opacity: '.3',
               fontWeight: ' 700'
          }
     }
     return (
          <>
               <p style={styles.conclucion}>
                    Desarrollé el ejercicio utilizando ReactJS con JSX para mostrarlo en componentes editables. Utilicé lógica en JavaScript para implementar el contador de puntos, y los resultados se pueden visualizar en la consola del navegador.  <br />
                    ruta del codigo =  '../src/components/main.jsxj'
               </p>


          </>
     )
}
export default DescriptPuntos
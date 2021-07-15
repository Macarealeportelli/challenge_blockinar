import React from 'react';
import CurvaEvolutiva from '../utils/CurvaEvolutiva';
import TablaInfectados from '../utils/TablaInfectados';




const Reportes =()=>{
    return(
        <div>
        <h1>Reportes de Casos Positivos</h1>
        <TablaInfectados/>
        <CurvaEvolutiva/>
        </div>
    )
};

export default Reportes;
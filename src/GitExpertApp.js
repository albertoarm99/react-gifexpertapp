import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    //const categorias = ['One punch','Samurai X','Dragon ball']

    const [categorias, setcategorias] = useState(['One punch']);

   /*  const handleAdd = () => {
        //setcategorias( categorias.concat('Hola') );
        //setcategorias( [...categorias,'HunterXHunter'] );
        //setcategorias( cats => [...cats ,'HunterXHunter'] );


    }
 */
    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setcategorias = {setcategorias}/>
            <hr/>
            <ol>
                {
                    categorias.map( category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}

import React from 'react';

export default function Header(props){
    /** <h1>Be The Hero</h1> -- Passagem direta */
    /** <h2>{props.title}</h2> -- Passagem por atributo */
    /** <h3>{props.children}</h3> -- Recuperação do conteúdo filho (interno) */
    return(
        <header>
            <h1>Be The Hero</h1> 
            <h2>{props.title}</h2> 
            <h3>{props.children}</h3> 
        </header>
    );
}
//Pode se exportar assim
//export default Header;
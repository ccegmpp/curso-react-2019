import React from 'react';
import "../styles/Badge.css"
import confLogo from '../images/badge-header.svg';



class Badge extends React.Component{
    render() {
        return ( 
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo">
                </img>
            </div>

            <div className="Badge__section-name" >
                <img className="Badge__avatar" src="https://s.gravatar.com/avatar/86c05cc5ce0f00899bb8f4d06e7bf22d?s=80
" alt="Avatar"></img>
                <h1>Enrique<br></br>Gómez Mont</h1>
            </div>

            <div className="Badge__section-info">
                <p>Frontend Engineer</p>
                <p>@ccegmpp</p>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
        )
    }
}

export default Badge;
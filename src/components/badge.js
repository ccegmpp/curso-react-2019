import React from 'react';
import confLogo from '../images/badge-header.svg';



class Badge extends React.Component{
    render() {
        return <div>
            <div>
                <img src={confLogo} alt="Logo">
                </img>
            </div>

            <div>
                <img src="https://s.gravatar.com/avatar/86c05cc5ce0f00899bb8f4d06e7bf22d?s=80
" alt="Avatar"></img>
                <h1>Enrique<br></br>Gómez Mont</h1>
            </div>

            <div>
                <p>Frontend Engineer</p>
                <p>@ccegmpp</p>
            </div>

            <div>
                #platziconf
            </div>
        </div>;
        
    }
}

export default Badge;
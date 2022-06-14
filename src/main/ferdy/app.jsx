import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import patternImage from '@image/pattern/black-paper.png';

import './style/fdStyle.scss';

const App = () => {
    let ferdyStyle = {
        padding:'30px',
    };
    let imageStyle = {
        border:'1px solid #FFF',
        background:'#2ba12f',
        width:'500px',
        height:'300px',
        borderRadius:'10px'
    }



    // Return templates
    return <div id="ferdy" style={ferdyStyle}>
        <h1>Hello World!</h1>
        <p>My name is ferdy</p>
        <img src={patternImage} style={imageStyle}/>
    </div>;
};

const root = createRoot(document.getElementById('app'));
root.render(<App/>);


//<img src="~@image/pattern/black-felt.png" style={{border:'1px solid #FFF'}} />
//<img src={"image/pattern/black-felt.png"} style={imageStyle} />
//
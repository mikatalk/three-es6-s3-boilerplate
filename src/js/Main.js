
// main dependencies
import THREE from 'three';

// main scss
import '../sass/app.scss';

// import './steps/01/Step01'; // Hello World
import Step02 from './steps/02/Step02'; // Hello World ES6
import Step03 from './steps/03/Step03'; // Plane Contain vs Cover
import Step04 from './steps/04/Step04'; // Custom Shader
import Step05 from './steps/05/Step05'; // Render Texture Material
import Step06 from './steps/06/Step06'; // Phong Material
import Step07 from './steps/07/Step07'; // Shadows
import Step08 from './steps/08/Step08'; // Sunshine
import Step09 from './steps/09/Step09'; // PostProcessing
import Step10 from './steps/10/Step10'; // GPGPU

let app = null;
readRoute();

function readRoute () {

    switch( window.location.hash ) {
        case '#Step02' :
            setNewApp(Step02, window.location.hash, null, '#Step03');
            break;
        case '#Step03' :
            setNewApp(Step03, window.location.hash, '#Step02', '#Step04');
            break;
        case '#Step04' :
            setNewApp(Step04, window.location.hash, '#Step03', '#Step05');
            break;
        case '#Step05' :
            setNewApp(Step05, window.location.hash, '#Step04', '#Step06');
            break;
        case '#Step06' :
            setNewApp(Step06, window.location.hash, '#Step05', '#Step07');
            break;
        case '#Step07' :
            setNewApp(Step07, window.location.hash, '#Step06', '#Step08');
            break;
        case '#Step08' :
            setNewApp(Step08, window.location.hash, '#Step07', '#Step09');
            break;
        case '#Step09' :
            setNewApp(Step09, window.location.hash, '#Step08', '#Step10');
            break;
        case '#Step10' :
            setNewApp(Step10, window.location.hash, '#Step09', null);
            break;
        
        default :
            window.location.hash = '#Step10';
            setNewApp(Step10, '#Step10', '#Step09', null);
            break;
    }
}

window.updateRoute = function (hash) {
    window.location.hash = hash;
    window.location.reload();
}

function setNewApp(Class, hash, previous, next) {
    app = new Class;
    if ( previous ) {
        let a = document.createElement('a');
        a.setAttribute('href', 'javascript:window.updateRoute("'+previous+'");');
        a.setAttribute('class','arrow-anchor left');
        a.innerHTML = '<';
        document.body.appendChild(a);
    }
    if ( next ) {
        let a = document.createElement('a');
        a.setAttribute('href', 'javascript:window.updateRoute("'+next+'");');
        a.setAttribute('class','arrow-anchor right');
        a.innerHTML = '>';
        document.body.appendChild(a);
    }   
}
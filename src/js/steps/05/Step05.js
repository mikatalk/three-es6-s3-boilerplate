import THREE from 'three';
import Stats from '../../../../node_modules/three/examples/js/libs/stats.min.js';
import OrbitControls from 'three-orbit-controls';
import RTT from './RTT';

const frameSize = { x:512, y:512 };

export default class Step05 {

    constructor () {

        this.clock = new THREE.Clock;

        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.top = '0px';
        document.body.appendChild( this.stats.domElement );

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        this.camera.position.z = 1000;
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize( window.innerWidth, window.innerHeight );
 
        document.body.appendChild( this.renderer.domElement );

        this.rtt = new RTT( frameSize.x, frameSize.y );

        this.mesh = this.newMesh( this.rtt );
        this.scene.add( this.mesh );

        this.controls = new (OrbitControls(THREE))( this.camera, this.renderer.domElement );
        //controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.enableZoom = false;

        window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
        this.onWindowResize();

        this.animate();

    }

    onWindowResize() {

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize( window.innerWidth, window.innerHeight );

    }
    
    newMesh () {

        let geometry = new THREE.SphereGeometry(500, 30, 30);
        let material = new THREE.MeshBasicMaterial({ map: this.rtt.texture.texture });

        return new THREE.Mesh( geometry, material );
    }


    animate() {
        
        requestAnimationFrame( this.animate.bind(this) );

        this.stats.update();

        let delta = this.clock.getDelta();

        this.rtt.render( this.renderer, delta);
        
        this.renderer.render( this.scene, this.camera );
    }

};

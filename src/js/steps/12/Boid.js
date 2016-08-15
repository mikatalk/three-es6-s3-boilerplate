import THREE from 'three';
import randomColor from 'randomcolor';


const vertexShader = `
    
    precision mediump float;

    varying vec2 vUv;
       
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    
`;

const fragmentShader = `
    
    precision mediump float;

    uniform float time;

    uniform vec3 color;
    
    varying vec2 vUv;

    void main () {
        gl_FragColor = vec4( color.rgb * abs(sin(vUv.x * 100.0)) * abs(sin(vUv.y * 100.0 + time*4.0)), 1.0);
    }

`;

export default class Boid {

    constructor ( scene, size ) {

        this.euler = new THREE.Euler(1,1,1, 'XYZ');
        this.velocity = new THREE.Vector3(0,0,0);

        this.mesh = new THREE.Mesh(  new THREE.SphereGeometry(size, 16, 16), 
            new THREE.ShaderMaterial( {
               
                uniforms: {
                    time: { type:"f", value: 1.0 },
                    color:     { type: "c", value: new THREE.Color( randomColor() ) }
                },
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                // transparent: true,
                // alphaTest: .1,
                // side: THREE.BackSide,
                side: THREE.FrontSide,
                // side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
                shading: THREE.SmoothShading,
            } )
        );
        this.mesh.geometry.computeVertexNormals();

        scene.add( this.mesh );
        
    }

    update ( time, delta ) {
        this.mesh.material.uniforms.time.value = time * 1;
let speed = 0.1;
        // this.velocity.x = delta*speed*;
        // this.mesh.setLinearVelocity( this.velocity );
// this.mesh.setAngularVelocity(new THREE.Vector3(0, 0, 0));

        // this.velocity.applyEuler( this.euler );
        // this.mesh.position.add( this.velocity );
        // this.mesh.rotation.y = -time;
    }
}

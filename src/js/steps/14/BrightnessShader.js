import THREE from 'three';

export default class BrightnessShader {

    constructor () {
        return {
            uniforms: {

                "tDiffuse": { value: null },
                "brightness": { type:"f", value: 1 },

            },

            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

                }
            `,

            fragmentShader: `

                uniform sampler2D tDiffuse;
                uniform float brightness;
                varying vec2 vUv;
                void main() {
                    vec4 color = texture2D( tDiffuse, vUv );
                    gl_FragColor = color.rgba * brightness;
                }
            `
        }
    }
};

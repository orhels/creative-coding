#ifdef GL_ES
precision mediump float;
#endif

varying vec2 pos;

void main() {

    vec4 top_left = vec4(0.9, 0.1, 0.9, 1.0);
    vec4 top_right = vec4(0.1, 1.0, 0.8, 1.0);

    vec4 bottom_left = vec4(0.8, 0.6, 0.1, 1.0);
    vec4 bottom_right = vec4(0.7, 0.1, 0.2, 1.0);


    vec4 top = mix(top_left, top_right, pos.x);
    vec4 bottom = mix(bottom_left, bottom_right, pos.x);

    vec4 mixed_color = mix(bottom, top, pos.y);

    gl_FragColor = mixed_color;
}
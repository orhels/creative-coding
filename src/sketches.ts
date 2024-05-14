import { helloWorld } from './sketches/helloWorldSketch.ts'
import { helloWorld2Sketch } from './sketches/helloWorld2Sketch.ts'
import { shaderTest } from './sketches/shader/shaderTest.ts'
import { gradientShaderSketch } from './sketches/gradient-shader/gradientShaderSketch.ts'
import { shakingDotsShader } from './sketches/shaking-dots-shader/shakingDotsShader.ts'
import { Sketch } from './types.ts'

export type SketchWrapper = {
    name: string
    path: string
    sketch: Sketch
}

export const sketches: SketchWrapper[] = [
    {
        name: 'Hello World',
        path: 'hello-world',
        sketch: helloWorld,
    },
    {
        name: 'Hello World 2',
        path: 'hello-world-2',
        sketch: helloWorld2Sketch,
    },
    {
        name: 'Shader Test',
        path: 'shader-test',
        sketch: shaderTest,
    },
    {
        name: 'Gradient Shader',
        path: 'gradient-shader',
        sketch: gradientShaderSketch,
    },
    {
        name: 'Shaking Dots Shader',
        path: 'shaking-dots-shader',
        sketch: shakingDotsShader,
    },
]

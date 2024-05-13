import React from 'react'
import { HelloWorldSketch } from './sketches/HelloWorldSketch.tsx'
import { HelloWorld2Sketch } from './sketches/HelloWorld2Sketch.tsx'
import { ShaderTest } from './sketches/shader/ShaderTest.tsx'
import { GradientShaderSketch } from './sketches/gradient-shader/GradientShaderSketch.tsx'

export type Sketch = {
    name: string
    path: string
    Sketch: React.FC
}

export const sketches: Sketch[] = [
    {
        name: 'Hello World',
        path: 'hello-world',
        Sketch: HelloWorldSketch,
    },
    {
        name: 'Hello World 2',
        path: 'hello-world-2',
        Sketch: HelloWorld2Sketch,
    },
    {
        name: 'Shader Test',
        path: 'shader-test',
        Sketch: ShaderTest,
    },
    {
        name: 'Gradient Shader',
        path: 'gradient-shader',
        Sketch: GradientShaderSketch,
    },
]

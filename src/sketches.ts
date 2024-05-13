import { HelloWorldSketch } from './sketches/HelloWorldSketch.tsx'
import { HelloWorld2Sketch } from './sketches/HelloWorld2Sketch.tsx'
import { ShaderTest } from './sketches/shader/ShaderTest.tsx'

export type Sketch = {
    name: string
    sketch: () => React.ReactNode
}

export const sketches: Sketch[] = [
    {
        name: 'Hello World',
        sketch: HelloWorldSketch,
    },
    {
        name: 'Hello World 2',
        sketch: HelloWorld2Sketch,
    },
    {
        name: 'Shader Test',
        sketch: ShaderTest,
    },
]

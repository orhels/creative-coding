import vert from './vert.glsl'
import frag from './frag.glsl'
import { Sketch } from '../../types.ts'

export const shaderTest: Sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(600, 600, 'webgl')
        p5.shader(p5.createShader(vert, frag))
        p5.noStroke()
    }

    p5.draw = () => {
        p5.clear()
        p5.rect(0, 0, p5.width, p5.height)
    }
}

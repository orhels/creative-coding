import { P5CanvasInstance, ReactP5Wrapper } from '@p5-wrapper/react'
import vert from './vert.glsl'
import frag from './frag.glsl'

function sketch(p5: P5CanvasInstance) {
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

export function ShaderTest() {
    return <ReactP5Wrapper sketch={sketch} />
}

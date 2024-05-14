import { P5CanvasInstance, ReactP5Wrapper } from '@p5-wrapper/react'
import vert from './vert.glsl'
import frag from './frag.glsl'
import { Shader, Vector } from 'p5'

function sketch(p5: P5CanvasInstance) {
    let shader: Shader
    const numCircles = 100
    let circles: Vector[] = []

    for (let i = 0; i < numCircles; i++) {
        circles.push(
            new Vector(p5.random(), p5.random(), p5.random(0.05, 0.01)),
        )
    }

    p5.preload = () => {
        shader = p5.createShader(vert, frag)
    }

    p5.setup = () => {
        p5.createCanvas(800, 800, 'webgl')
        p5.shader(shader)
        p5.noStroke()
    }

    p5.draw = () => {
        circles = circles.map((v) => {
            return v.add(Vector.random2D().limit(0.001))
        })
        shader.setUniform('millis', p5.millis())
        shader.setUniform('circles', circles.map((it) => it.array()).flat())

        p5.clear()
        p5.rect(0, 0, p5.width, p5.height)
    }
}

export function ShakingDotsShader() {
    return <ReactP5Wrapper sketch={sketch} />
}

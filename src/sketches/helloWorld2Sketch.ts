import { Sketch } from '../types.ts'

export const helloWorld2Sketch: Sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(600, 400, p5.WEBGL)
        p5.yolo()
    }

    p5.draw = () => {
        p5.background(250)
        p5.normalMaterial()
        p5.push()
        p5.rotateZ(p5.frameCount * 0.01)
        p5.rotateX(p5.frameCount * 0.01)
        p5.rotateY(p5.frameCount * 0.01)
        p5.box(100, 100, 100)
        p5.pop()
    }
}

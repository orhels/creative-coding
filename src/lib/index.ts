import p5 from 'p5'

declare module 'p5' {
    interface p5InstanceExtensions {
        yolo(): void
        heart(x: number, y: number, size: number): void
    }
}

p5.prototype.yolo = function () {
    console.log('yolo')
}

p5.prototype.heart = function (x: number, y: number, size: number) {
    this.push()
    this.translate(x, y - size / 2)
    this.beginShape()
    this.vertex(x, y)
    this.bezierVertex(
        x - size / 2,
        y - size / 2,
        x - size,
        y + size / 3,
        x,
        y + size,
    )
    this.bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y)
    this.endShape(this.CLOSE)
    this.pop()
}

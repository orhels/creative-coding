import p5 from 'p5'

declare module 'p5' {
    interface p5InstanceExtensions {
        yolo(): void
    }
}

p5.prototype.yolo = function () {
    console.log('yolo')
}

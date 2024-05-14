import { useEffect, useState } from 'react'
import p5 from 'p5'

type Props = {
    sketch: (p5: p5) => void
}

export function P5Wrapper({ sketch }: Props) {
    const [ref, setRef] = useState<HTMLDivElement | null>(null)

    useEffect(() => {
        if (ref) {
            const _sketch = new p5(sketch, ref)
            return _sketch.remove
        }
    }, [ref, sketch])

    return <div ref={setRef} />
}

import { Sketch, sketches } from './sketches.ts'
import { useState } from 'react'

export function SketchList() {
    const [activeSketch, setActiveSketch] = useState<null | Sketch>()

    return (
        <div>
            <ul>
                {sketches.map((sketch) => (
                    <li
                        key={sketch.name}
                        onClick={() => setActiveSketch(sketch)}
                    >
                        {sketch.name}
                    </li>
                ))}
            </ul>
            {activeSketch?.sketch()}
        </div>
    )
}

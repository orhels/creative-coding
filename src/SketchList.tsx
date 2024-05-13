import { sketches } from './sketches.ts'
import { Link } from 'react-router-dom'

export function SketchList() {
    return (
        <div>
            <nav>
                <ul>
                    {sketches.map((sketch) => (
                        <li key={sketch.path}>
                            <Link to={sketch.path}>{sketch.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

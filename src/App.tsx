import { SketchList } from './SketchList.tsx'
import { Route, Routes } from 'react-router-dom'
import { sketches } from './sketches.ts'
import { Home } from './Home.tsx'
import { P5Wrapper } from './P5Wrapper.tsx'

export function App() {
    return (
        <div>
            <h1>creative-coding</h1>
            <SketchList />
            <Routes>
                <Route path={'/'}>
                    <Route index element={<Home />} />
                    {sketches.map(({ path, sketch }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<P5Wrapper sketch={sketch} />}
                        />
                    ))}
                </Route>
            </Routes>
        </div>
    )
}

import { SketchList } from './SketchList.tsx'
import { Route, Routes } from 'react-router-dom'
import { sketches } from './sketches.ts'
import { Home } from './Home.tsx'

export function App() {
    return (
        <div>
            <h1>creative-coding</h1>
            <SketchList />
            <Routes>
                <Route path={'/'}>
                    <Route index element={<Home />} />
                    {sketches.map(({ path, Sketch }) => (
                        <Route key={path} path={path} element={<Sketch />} />
                    ))}
                </Route>
            </Routes>
        </div>
    )
}

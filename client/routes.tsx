import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import TimeUp from './pages/TimeUp.tsx'
export default createRoutesFromElements(<>
    <Route index element={<Home />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="/fail" element={<TimeUp />} />
    </>)

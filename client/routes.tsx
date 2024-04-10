import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
export default createRoutesFromElements(<>
    <Route index element={<Home />} />
    <Route path="/404" element={<NotFound />} />
    </>)

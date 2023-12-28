import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'

/**
 * Displays the routes of the application.
 * @returns {JSX.Element} - The JSX markup for the Router component.
 */
function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
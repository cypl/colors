import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
//import Test from '../pages/Test'
import TestColorPicker from '../pages/TestColorPicker'
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
                <Route path="/test" element={<TestColorPicker />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
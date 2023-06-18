import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Signin from './pages/Signin'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signin/>}/>
                <Route path='/Layout' element={<Layout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App

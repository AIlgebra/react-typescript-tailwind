import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

// Sayfa bileşenleri
import Home from './pages/Home';
import About from './pages/About';

// Yönlendirme verileri
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About }
];

const NavMenu: React.FC = () => {
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.path}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

function App() {
    return (
        <Router>
            <div className="bg-gray-100 h-screen flex justify-center items-center">
                <div className="bg-white p-8 rounded shadow-lg">
                    <NavMenu />
                    <Routes>
                        {routes.map(route => (
                            <Route key={route.path} path={route.path} element={<route.component />} />
                        ))}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

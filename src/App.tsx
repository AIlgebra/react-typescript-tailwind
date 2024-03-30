import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header'; // Header bileşenini içe aktarıyoruz
import Footer from './components/Footer'; // Header bileşenini içe aktarıyoruz

// Yönlendirme verileri
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About }
];

function App() {
    return (
        <Router>
            <div>
                <Header menuItems={routes} /> {/* Header bileşenini kullanırken menuItems props'unu geçiyoruz */}
                <div className="bg-gray-100 h-screen flex justify-center items-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <Routes>
                            {routes.map(route => (
                                <Route key={route.path} path={route.path} element={<route.component />} />
                            ))}
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

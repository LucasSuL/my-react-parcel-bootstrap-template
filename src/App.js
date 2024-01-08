import React from 'react'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Footer from './components/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
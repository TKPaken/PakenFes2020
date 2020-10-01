import React from 'react'
import './Home.css'

import Header from './Header'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <Header name="Home"/>
            <div className="cards">
                <div className="card">Hello</div>
                <div className="card">うしたぷ</div>
                <div className="card">たぴちゃん</div>
                <div className="card">Hello</div>
                <div className="card">うしたぷ</div>
                <div className="card">たぴちゃん</div>
            </div>
            <Footer />
        </div>
    );
}
export default Home;
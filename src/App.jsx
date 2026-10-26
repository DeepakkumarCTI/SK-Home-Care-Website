import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import LoadingPage from './components/LoadingPage'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

export default function App() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            {/* Initial Website Loading Animation */}
            {isLoading && (
                <LoadingPage
                    duration={1800}
                    onComplete={() => setIsLoading(false)}
                />
            )}

            {/* Existing Website */}
            <div className="min-h-screen bg-white font-sans text-stone-800 antialiased">
                <ScrollToTop />

                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>

                <Footer />

                <WhatsAppButton />
            </div>
        </>
    )
}
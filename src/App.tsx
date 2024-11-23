import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Editor from './pages/Editor'
import Profile from './pages/Profile'
import Article from './pages/Article'

function App() {
  const { theme } = useTheme()

  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-200 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Editor />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/article/:slug" element={<Article />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
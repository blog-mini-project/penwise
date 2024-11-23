import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { Sun, Moon, PenSquare, Home, User } from 'lucide-react'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={`sticky top-0 z-50 border-b ${
      theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <PenSquare className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold">Penwise</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="nav-link">
              <Home className="w-5 h-5" />
            </Link>
            <Link to="/write" className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
              <PenSquare className="w-4 h-4" />
              <span>Write</span>
            </Link>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/profile/me" className="nav-link">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
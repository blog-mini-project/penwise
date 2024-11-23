import { useParams } from 'react-router-dom'
import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react'

const Article = () => {
  const { slug } = useParams()

  return (
    <div className="max-w-4xl mx-auto">
      <article className="prose dark:prose-invert">
        <h1 className="text-4xl font-bold mb-4">The Art of Building Beautiful User Interfaces</h1>
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">Sarah Parker</h3>
              <p className="text-sm text-gray-500">Mar 15, 2024 · 5 min read</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200&h=600&fit=crop"
          alt="Cover"
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <div className="mb-8">
          <p>This is where the article content would go...</p>
        </div>

        <div className="flex items-center justify-between border-t dark:border-gray-800 pt-6">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600">
              <Heart className="w-6 h-6" />
              <span>234</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600">
              <MessageCircle className="w-6 h-6" />
              <span>45</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Article
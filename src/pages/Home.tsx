import { Link } from 'react-router-dom';
import { Bookmark, Heart, MessageCircle } from 'lucide-react';

const Home = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Building Beautiful User Interfaces',
      excerpt:
        'Exploring the principles of modern UI design and how to create engaging user experiences...',
      author: 'Sarah Parker',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=800&auto=format&fit=crop',
      likes: 234,
      comments: 45,
    },
    // More articles...
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-8">Featured Stories</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/article/${article.id}`}>
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transform transition-transform group-hover:scale-105"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">{article.author}</span>
                    <span className="text-sm text-gray-500">·</span>
                    <span className="text-sm text-gray-500">
                      {article.readTime}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{article.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{article.comments}</span>
                    </button>
                    <button className="text-gray-500 hover:text-purple-600">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

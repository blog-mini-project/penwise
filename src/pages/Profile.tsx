import { useParams } from 'react-router-dom';
import { Settings, Users } from 'lucide-react';

const Profile = () => {
  const { username } = useParams();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
          alt={username}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{username}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Writing about technology, design, and the intersection of both.
        </p>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="text-center">
            <div className="font-bold">1.2k</div>
            <div className="text-sm text-gray-500">Followers</div>
          </div>
          <div className="text-center">
            <div className="font-bold">234</div>
            <div className="text-sm text-gray-500">Following</div>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="flex items-center space-x-2 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
            <Users className="w-4 h-4" />
            <span>Follow</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Settings className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Article previews would go here */}
      </div>
    </div>
  );
};

export default Profile;

import React, { useState } from 'react'
import { ImagePlus } from 'lucide-react'
import EditorToolbar from '../components/editor/EditorToolbar'
import TagInput from '../components/editor/TagInput'

const Editor = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [coverImage, setCoverImage] = useState('')

  const handlePublish = () => {
    // Handle article publication
    console.log({ title, content, tags, coverImage })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-4xl font-bold bg-transparent border-none outline-none placeholder-gray-400 dark:placeholder-gray-600"
        />
      </div>

      <div className="mb-6">
        <button className="flex items-center space-x-2 px-4 py-2 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
          <ImagePlus className="w-5 h-5" />
          <span>Add cover image</span>
        </button>
      </div>

      <EditorToolbar />

      <div className="min-h-[500px] mb-6">
        <textarea
          placeholder="Tell your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-full bg-transparent border-none outline-none resize-none placeholder-gray-400 dark:placeholder-gray-600"
        />
      </div>

      <TagInput tags={tags} setTags={setTags} />

      <div className="flex justify-end mt-6">
        <button
          onClick={handlePublish}
          className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
        >
          Publish
        </button>
      </div>
    </div>
  )
}

export default Editor
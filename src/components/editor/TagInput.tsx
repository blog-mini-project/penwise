import React, { useState } from 'react'
import { X } from 'lucide-react'

interface TagInputProps {
  tags: string[]
  setTags: (tags: string[]) => void
}

const TagInput: React.FC<TagInputProps> = ({ tags, setTags }) => {
  const [input, setInput] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input) {
      e.preventDefault()
      if (!tags.includes(input.toLowerCase())) {
        setTags([...tags, input.toLowerCase()])
        setInput('')
      }
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span
            key={tag}
            className="flex items-center space-x-1 px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
          >
            <span>#{tag}</span>
            <button
              onClick={() => removeTag(tag)}
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              <X className="w-4 h-4" />
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add up to 4 tags..."
        className="w-full px-3 py-2 bg-transparent border-none outline-none placeholder-gray-400 dark:placeholder-gray-600"
        disabled={tags.length >= 4}
      />
    </div>
  )
}

export default TagInput
import { Bold, Italic, Link, List, Image, Quote } from 'lucide-react'

const EditorToolbar = () => {
  const tools = [
    { icon: Bold, label: 'Bold' },
    { icon: Italic, label: 'Italic' },
    { icon: Link, label: 'Link' },
    { icon: List, label: 'List' },
    { icon: Image, label: 'Image' },
    { icon: Quote, label: 'Quote' },
  ]

  return (
    <div className="flex items-center space-x-2 mb-4 p-2 border-b dark:border-gray-800">
      {tools.map((Tool, index) => (
        <button
          key={index}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          title={Tool.label}
        >
          <Tool.icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  )
}

export default EditorToolbar
'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Quote,
  Undo,
  Redo,
  Link as LinkIcon,
  Image as ImageIcon,
  Code,
  Strikethrough,
} from 'lucide-react'

interface TipTapEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
}

export function TipTapEditor({ content, onChange, placeholder = 'Wpisz treść...' }: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) {
    return null
  }

  const addImage = () => {
    const url = window.prompt('Wprowadź URL obrazka:')
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  const addLink = () => {
    const url = window.prompt('Wprowadź URL:')
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  const ToolbarButton = ({ 
    onClick, 
    isActive = false, 
    icon: Icon, 
    title 
  }: { 
    onClick: () => void
    isActive?: boolean
    icon: React.ElementType
    title: string
  }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-2 rounded hover:bg-gray-200 transition-colors ${
        isActive ? 'bg-gray-200 text-blue-600' : 'text-gray-600'
      }`}
    >
      <Icon className="h-4 w-4" />
    </button>
  )

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="border-b border-gray-200 p-2 bg-gray-50 flex flex-wrap gap-1">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          icon={Bold}
          title="Pogrubienie"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          icon={Italic}
          title="Kursywa"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
          icon={Strikethrough}
          title="Przekreślenie"
        />
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          isActive={editor.isActive('heading', { level: 1 })}
          icon={Heading1}
          title="Nagłówek 1"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive('heading', { level: 2 })}
          icon={Heading2}
          title="Nagłówek 2"
        />
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          icon={List}
          title="Lista wypunktowana"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          icon={ListOrdered}
          title="Lista numerowana"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
          icon={Quote}
          title="Cytat"
        />
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <ToolbarButton
          onClick={addLink}
          isActive={editor.isActive('link')}
          icon={LinkIcon}
          title="Wstaw link"
        />
        <ToolbarButton
          onClick={addImage}
          icon={ImageIcon}
          title="Wstaw obrazek"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
          icon={Code}
          title="Kod"
        />
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          icon={Undo}
          title="Cofnij"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          icon={Redo}
          title="Ponów"
        />
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none p-4 min-h-[300px] focus:outline-none"
      />
    </div>
  )
}

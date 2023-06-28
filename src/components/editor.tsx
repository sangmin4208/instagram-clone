'use client'

import EditorJS, { EditorConfig } from '@editorjs/editorjs'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { initializeEditor } from '@/lib/editorjs/editorjs'

interface EditorProps {
  onChange: EditorConfig['onChange']
}

const Editor: FunctionComponent<EditorProps> = ({ onChange }) => {
  const ref = useRef<EditorJS>()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && !isMounted) {
      setIsMounted(true)
    }
  }, [isMounted, setIsMounted])

  useEffect(() => {
    if (!isMounted) return
    const editor = initializeEditor({
      holder: 'editorjs',
      async onReady() {
        ref.current = await editor
      },
      onChange,
    })

    return () => {
      if (ref.current) {
        ref.current.destroy()
      }
    }
  }, [isMounted, onChange])

  return <div id={'editorjs'} className="min-h-[500px]"></div>
}

export default Editor

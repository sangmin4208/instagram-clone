import { EditorConfig } from '@editorjs/editorjs'
export const initializeEditor = async ({
  holder,
  onChange,
  onReady,
}: {
  holder: EditorConfig['holder']
  onChange: EditorConfig['onChange']
  onReady: EditorConfig['onReady']
}) => {
  const EditorJS = (await import('@editorjs/editorjs')).default
  const Header = (await import('@editorjs/header')).default
  const List = (await import('@editorjs/list')).default
  const InlineCode = (await import('@editorjs/inline-code')).default
  const Image = (await import('@editorjs/image')).default
  const Embed = (await import('@editorjs/embed')).default
  const Table = (await import('@editorjs/table')).default
  const LinkTool = (await import('@editorjs/link')).default
  const Marker = (await import('@editorjs/marker')).default
  const Delimiter = (await import('@editorjs/delimiter')).default
  const CodeTool = (await import('editorjs-codemirror')).default
  const Quote = (await import('@editorjs/quote')).default
  const Warning = (await import('@editorjs/warning')).default

  const editor = new EditorJS({
    holder,
    placeholder: 'Type here to write your post...',
    inlineToolbar: true,
    tools: {
      header: {
        class: Header,
        inlineToolbar: ['link'],
        shortcut: 'CMD+SHIFT+H',
      },
      list: {
        class: List,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+L',
      },
      inlineCode: {
        class: InlineCode,
        shortcut: 'CMD+SHIFT+M',
      },
      image: {
        class: Image,

        config: {
          uploader: {
            uploadByFile(file: File) {},
          },
        },
        shortcut: 'CMD+SHIFT+I',
      },
      embed: Embed,
      table: {
        class: Table,
        inlineToolbar: true,
        shortcut: 'CMD+ALT+T',
      },
      linkTool: LinkTool,
      marker: Marker,
      delimiter: Delimiter,
      code: CodeTool,
      quote: Quote,
      warning: Warning,
    },
    onChange,
    onReady,
  })

  return editor
}

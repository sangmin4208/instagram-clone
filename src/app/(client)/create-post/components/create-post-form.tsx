'use client'

import { Button } from '@/components/ui/button'
import Editor from '@/components/editor'
import { FunctionComponent } from 'react'
interface CreatePostFormProps {}

const CreatePostForm: FunctionComponent<CreatePostFormProps> = () => {
  return (
    <>
      <input className="block w-full px-4 py-2 mx-auto border rounded-md"></input>
      <div className="w-full px-2 pt-8 overflow-hidden border rounded-xl border-1">
        <Editor
          onChange={(api, event) => {
            console.log(api)
            console.log(event)
          }}
        />
      </div>
      <Button>
        <span>Submit</span>
      </Button>
    </>
  )
}

export default CreatePostForm

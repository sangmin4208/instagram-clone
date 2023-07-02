import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

import { Button } from '@/components/ui/button'

import { FunctionComponent } from 'react'
import Icons from '@/components/icons'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
interface CommentFormProps {
  id: string
}

const CommentForm: FunctionComponent<CommentFormProps> = ({ id }) => {
  const form = useForm()
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          console.log(data)
        })}
      >
        <section className="flex items-end justify-center gap-2">
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel className="flex items-center gap-1">
                  <span className="text-xs">Comment</span>
                  <Icons.Comment size={14} />
                </FormLabel>
                <FormControl>
                  <Input className="w-full" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="flex items-center gap-1">
            <span>Send</span>
            <Icons.Send size={14} />
          </Button>
        </section>
      </form>
    </Form>
  )
}

export default CommentForm

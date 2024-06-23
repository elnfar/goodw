'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { NewsletterValidator } from '@/lib/types.validators'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import axios from 'axios'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { onSubmitAction } from '@/app/_actions/formSubmit'
import { useRouter } from 'next/navigation'


type FormSchema = z.infer<typeof NewsletterValidator>

export default function AddNewsletter() {
   const form = useForm<z.output<typeof NewsletterValidator>>({
    resolver:zodResolver(NewsletterValidator),
    defaultValues:{
        title:''
    }
   })

    async function onSubmit(data:FormSchema) {

      const title = data.title;

      try {
          axios.post('http://localhost:3000/api/newsletter', {title})
           console.log(data);
              
            }catch(err) {
              console.log(err);
              
            }
        
      }
    



  return (
  <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className=' flex items-center'>
  <FormField
    control={form.control}   
    name="title"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
            <Input placeholder="Title" {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
    <Button type="submit" className='bg-black text-white hover:text-zinc-700 '>Submit</Button>

  </form>
</Form>
  )
}

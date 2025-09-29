"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FaArrowLeftLong } from "react-icons/fa6";

const FormSchema = z.object({
  email: z.string().email({ message: "البريد الإلكتروني غير صحيح" })
})
const Newsletter = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })
  function onSubmit(data) {

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem  className={"relative "}>
              <FormControl>
                <Input placeholder="البريد الإلكتروني" {...field} className={"bg-white placeholder:text-gray-300 placeholder:text-sm placeholder:p-2 h-12 border-2 border-gray-200 px-4 rounded-full"} />
              </FormControl>
              <FormMessage className={"absolute -bottom-6 start-0"} />
              <Button type="submit" className={"bg-primary-800 text-white rounded-full absolute top-1/2 -translate-y-1/2 end-2 !px-4"}>
                <FaArrowLeftLong size={20} />
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default Newsletter

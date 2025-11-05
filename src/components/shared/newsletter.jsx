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
import { useLocale, useTranslations } from "next-intl";
import { postData } from "@/services/fetch-data"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const Newsletter = () => {
  const t = useTranslations("newsletter")
  const locale= useLocale()
  const FormSchema = z.object({
    email: z.string().email({ message: t("validation") })
  })
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })
  const {isSubmitting} = form.formState
  async function onSubmit(data) {
    const res = await postData({
      url:"/news-letters",
      data,
      content:"application/json"
    })
    console.log(res)
    if(res?.code === 201){
      toast.success(t("success"))
    }
    else {
      toast.error(t("already"))
    }

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
                <Input placeholder={t("placeholder")} {...field} className={"bg-white placeholder:text-gray-300 placeholder:text-sm placeholder:p-2 h-12 border-2 border-gray-200 px-4 rounded-full"} />
              </FormControl>
              <FormMessage className={"absolute -bottom-6 start-0"} />
              
              <Button disabled={isSubmitting} type="submit" className={"bg-primary-800 text-white rounded-full absolute top-1/2 -translate-y-1/2 end-2 !px-4"}>
                {
                  isSubmitting ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <FaArrowLeftLong size={20} className={locale !== "ar" ? "rotate-180" : ""} />
                  )
                }
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default Newsletter

import CustomBreadcrumbs from "@/components/shared/custom-breadcrumbs"
import Image from "next/image"
import { RiFocus3Line } from "react-icons/ri";
import { PiEyeglassesLight } from "react-icons/pi";
import { MdCalendarMonth } from "react-icons/md";
import * as motion from "motion/react-client"
import SectionHeader from "@/components/shared/section-header";
import BlogSlider from "@/components/shared/blog-slider";
const SingleBlogPage = () => {

  return (
    <main >
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')]  space-y-20 pb-20">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label: 'الرئيسية', href: '/' }, { label: 'المقالات', href: '/blogs' }, { label: 'تفاصيل المقالة' }]} />
        </div>
        {/* single blog section   */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='container flex items-center gap-8 max-lg:flex-col '>
          {/* image */}
          <Image src="/images/blog.png" alt="work" width={300} height={300} className='block lg:w-1/2 w-full object-cover rounded-xl' />
          {/* content */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl  font-bold">صنع تجارب مستخدمين عاطفية وجذابة</h2>
            <p className="text-gray-200 leading-8 max-md:text-sm">افتح قوة تحليلات البيانات واحصل على رؤى قابلة للتنفيذ لاتخاذ قرارات تجارية مستنيرة. عزز رؤية موقعك على الويب افتح قوة تحليلات البيانات واحصل على رؤى قابلة للتنفيذ لاتخاذ قرارات تجارية مستنيرة. عزز رؤية موقعك على الويب</p>
            {/* detailes */}
            <div className="text-primary-800 md:text-sm text-xs flex items-center gap-4 max-md:flex-wrap ">
              {/* views */}
              <div className="flex items-center gap-2">
                <RiFocus3Line className="" />
                <p>1.5 ألف مشاهدة علي المقال</p>
              </div>
              <div className="w-px h-4 bg-primary-800 max-md:hidden"></div>
              {/* time */}
              <div className="flex items-center gap-2">
                <PiEyeglassesLight className="" />
                <p>3 دقيقة وقت القراءة</p>
              </div>
              <div className="w-px h-4 bg-primary-800 max-md:hidden"></div>
              {/* date */}
              <div className="flex items-center gap-2">
                <MdCalendarMonth className="" />
                <p>21 أغسطس 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* detailes */}
        <div className="container space-y-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 * i }}
              key={i}
              className='space-y-4 '>
              <h4 className="text-primary-800 font-bold lg:text-xl text-lg ">- نص تجريبي يمكن استبداله في هذه المساحة</h4>
              <p className="text-gray-200 leading-8 max-md:text-sm">نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.</p>
            </motion.div>
          ))}

        </div>

        {/* related posts */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container space-y-6 ">
          <SectionHeader title='مقالات ذات صلة' />
          <BlogSlider />
        </motion.div>
      </div>
    </main>
  )
}

export default SingleBlogPage

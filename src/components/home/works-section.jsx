import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getData } from "@/services/fetch-data"
import * as motion from "motion/react-client"
import { getLocale, getTranslations } from "next-intl/server"
import SectionHeader from '../shared/section-header'
import WorkGrid from '../shared/work-grid'
import WorkSlider from '../shared/work-slider'
const WorksSection = async ({ page = false }) => {
  const t = await getTranslations("works")
  let data = []
  let all =[]
  const res = await getData({ url: "/departments" })
  if (res?.code === 200) {
    data = res?.data?.data
  }
  else {
    data = []
  }

  const resAll = await getData({ url: "/projects" })
  if (resAll?.code === 200) {
    all = resAll?.data?.data
  }
  else {
    all = []
  }

  const locale = await getLocale()
  const tabStyle = "py-3 px-4 data-[state=active]:bg-primary-800 data-[state=active]:text-white data-[state=active]:rounded-full max-md:data-[state=active]:rounded-2xl"
  return (
    data.length > 0 ?
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='container py-16 space-y-12'>
        <SectionHeader title={t("title")} disc={t("description")} />
        <Tabs dir={locale === "ar" ? "rtl" : "ltr"} defaultValue={"all"} className="w-full space-y-12">
          <TabsList className="bg-[#EBEBEB] mx-auto text-gray-100 h-fit  p-2 md:rounded-full rounded-3xl max-md:flex-wrap">
            <TabsTrigger value="all" className={tabStyle}>{t("all")}</TabsTrigger>
            {data.map((item) => (
              <TabsTrigger key={item?.id} value={item?.slug} className={tabStyle}>{item?.name}</TabsTrigger>
            ))}
            
          </TabsList>
          <TabsContent value="all">
            {page ?
              <>
                <div className='max-md:hidden'>
                  <WorkGrid data={all} />
                </div>
                <div className='md:hidden'>
                  <WorkSlider data={all} />
                </div>
              </>
              : <WorkSlider data={all} />}
          </TabsContent>
          {data?.map((item) => (

            <TabsContent key={item?.id} value={item?.slug}>
              {page ?
                <>
                  <div className='max-md:hidden'>
                    <WorkGrid data={item?.projects} />
                  </div>
                  <div className='md:hidden'>
                    <WorkSlider data={item?.projects} />
                  </div>
                </>
                : <WorkSlider data={item?.projects} />}
            </TabsContent>
          ))}

        </Tabs>
      </motion.section> : null
  )
}

export default WorksSection

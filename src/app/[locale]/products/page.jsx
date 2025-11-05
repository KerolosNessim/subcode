import WorksSection from '@/components/home/works-section'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import React from 'react'
import { getTranslations } from 'next-intl/server'
import { getData } from '@/services/fetch-data'
import SectionHeader from '@/components/shared/section-header'
import WorkGrid from '@/components/shared/work-grid'
import WorkSlider from '@/components/shared/work-slider'
import * as motion from "motion/react-client"

const ProductsPage = async () => {
  const b = await getTranslations();
  const t = await getTranslations("works")
  const res = await getData({ url: "/websites" })
  let data = []
  if (res?.code === 200) {
    data = res?.data?.data
  }
  else {
    data = []
  }
  return (
    <main className='overflow-hidden'>
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label: b('navigation.home'), href: '/' },
          { label: b('navigation.products') },]} />
        </div>
        {/* works section  */}
        {data?.length > 0 ?
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='container py-16 space-y-12'>
            <SectionHeader title={b("navigation.products")} disc={t("description")} />
            <div className='max-md:hidden'>
              <WorkGrid data={data} product={true} />
            </div>
            <div className='md:hidden'>
              <WorkSlider data={data} product={true} />
            </div>
          </motion.section> : null}
      </div>

    </main>
  )
}

export default ProductsPage

import WorksSection from '@/components/home/works-section'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import React from 'react'
import { getTranslations } from 'next-intl/server'

const WorksPage = async () => {
  const b = await getTranslations();
  return (
    <main className='overflow-hidden'>
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label: b('navigation.home'), href: '/' },
          { label: b('navigation.works') },]} />
        </div>
        {/* works section  */}
        <WorksSection page disc={false} />
      </div>

    </main>
  )
}

export default WorksPage

import WorksSection from '@/components/home/works-section'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import React from 'react'

const WorksPage = () => {
  return (
    <main className='overflow-hidden'>
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label: 'الرئيسية', href: '/' }, { label: 'أعمالنا' }]} />
        </div>
        {/* works section  */}
        <WorksSection page/>
      </div>

    </main>
  )
}

export default WorksPage

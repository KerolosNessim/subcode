import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import StackSection from '@/components/shared/stacked-cards-section'
import React from 'react'

const ServicesPage = () => {
  return (
    <main >
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label: 'الرئيسية', href: '/' }, { label: 'خدماتنا' }]} />
        </div>
        {/* works section  */}
        <StackSection withLink={false}/>
      </div>

    </main>
  )
}

export default ServicesPage

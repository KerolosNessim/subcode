import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import StackSection from '@/components/shared/stacked-cards-section'
import { getTranslations } from 'next-intl/server'

const ServicesPage = async () => {
  const b=await getTranslations();
  return (
    <main >
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label: b('navigation.home'), href: '/' },
          { label: b('services.title')},]} />
        </div>
        {/* works section  */}
        <StackSection withLink={false} />
      </div>

    </main>
  )
}

export default ServicesPage

import * as motion from "motion/react-client"
import ClientSlider from '../shared/client-slider'
import SectionHeader from '../shared/section-header'
import { useTranslations } from 'next-intl'
const ClientSection = () => {
  const t = useTranslations('clientReviews')
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className='container py-20 lg:space-y-8 space-y-6 '>
      <SectionHeader title={t('title')} disc={t('description')} />
      <ClientSlider />
    </motion.section>
  )
}

export default ClientSection

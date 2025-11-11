import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import SectionHeader from '@/components/shared/section-header';
import StackSection from '@/components/shared/stacked-cards-section'
import { getData } from '@/services/fetch-data';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server'
import Image from 'next/image';
import { FaRegCircleCheck } from 'react-icons/fa6';
import * as motion from 'motion/react-client';
import DynamicLink from '@/components/shared/dynamic-link';
const ServicesPage = async () => {
  const b = await getTranslations();
  const t =await getTranslations("services");
  let projects = []

  const res = await getData({
    url: '/services',
  })

  if (res?.code == 200) {
    projects = res?.data?.data
  }else{
    projects = []
  }




  return (
    <main >
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label: b('navigation.home'), href: '/' },
          { label: b('services.title')},]} />
        </div>
        {/* works section  */}
        <section  className="container py-20 relative">
          <SectionHeader title={t('title')} disc={t('description')} />


          {/* الكروت فوق الخلفية */}
          {projects?.length > 0 &&
            <div className="relative w-full z-10 space-y-12 mt-12">
              {/* الصورة خلفية ثابتة */}
              <Image
                src="/images/waves-circle.svg"
                width={300}
                height={300}
                alt="victor"
                className="absolute top-0 end-0 lg:size-60 size-40 pointer-events-none z-0"
              />
              {/* الصورة خلفية ثابتة */}
              <Image
                src="/images/dots.svg"
                width={300}
                height={300}
                alt="victor"
                className="absolute bottom-20 start-0  lg:size-60 size-40 pointer-events-none z-0"
              />

              {projects.map((project, i) => {
                return (
                  <Card
                    key={`p_${i}`}
                    id={project?.id}
                    i={i}
                    className={i % 2 === 0 ? 'odd:bg-[#104c66] even:bg-[#2c4443]' : 'odd:bg-[#2c4443] even:bg-[#104c66]'}
                    img={project?.image}
                    title={project?.title}
                    description={project?.description}
                    features={project?.features}
                  />
                );
              })}
            </div>
          }

        </section>
      </div>

    </main>
  )
}

export default ServicesPage



export const Card = ({
  id,
  i,
  title,
  description,
  features,
  img,
  className,

}) => {
  const t = useTranslations("services");


  return (
    <div
      className=" flex items-center justify-center "
    >
      <motion.div
        className={`bg-[url('/images/card-pattern.svg')]  bg-contain bg-repeat flex  max-md:flex-col items-center justify-between max-md:gap-10 relative -top-[25%] min-h-[450px] w-[90%] rounded-3xl  origin-top  ${className}`}
      >

        {/* content */}
        <div className='md:space-y-6 space-y-4 md:w-1/2 w-full p-10'>
          <h3 className='text-lg   bg-gradient-to-r from-[#A7FCEEBD] to-[#C6FCA6] bg-clip-text text-transparent'>{title}</h3>
          <h2 className='md:text-3xl text-xl font-bold text-white'>{description}</h2>
          <hr className='border-1 border-white w-3/4' />
          <ul className='flex flex-col gap-2'>
            {features.map((item, i) => (
              <li key={i} className='md:text-lg text-sm flex items-center gap-1 text-white'>
                <FaRegCircleCheck size={16} />
                <p>{item?.title}</p>
              </li>
            ))}
          </ul>

          <DynamicLink href={`/services/${id}`}>
            {t('detailes')}
          </DynamicLink>

        </div>
        {/* image */}
        <div className='md:w-1/2 max-md:hidden md:h-[400px] h-[250px]  rounded pe-10'>
          <Image
            src={img}
            width={300}
            height={300}
            alt="victor"
            className=" w-full h-full object-contain drop-shadow-xl  drop-shadow-white-50/10 "
          />
        </div>


      </motion.div>
    </div>
  );
};

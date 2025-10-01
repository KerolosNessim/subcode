'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import SectionHeader from './section-header';
import { FaRegCircleCheck } from 'react-icons/fa6';
import DynamicLink from './dynamic-link';

const projects = [
  {
    title: 'البرمجيات وتطوير الأنظمة',
    description: ["تصميم وتطوير مواقع إلكترونية وتطبيقات الموبايل", "أنظمة برمجية قوية وموثوقة تعيش لسنوات", "دعم فني متوفر على مدار الساعة"],
    img: "/images/Laptop.svg",
    color: '#104c66',
  },
  {
    title: 'البرمجيات وتطوير الأنظمة',
    description: ["تصميم وتطوير مواقع إلكترونية وتطبيقات الموبايل", "أنظمة برمجية قوية وموثوقة تعيش لسنوات", "دعم فني متوفر على مدار الساعة"],
    img: "/images/phone.svg",
    color: '#2c4443',
  },
  {
    title: 'البرمجيات وتطوير الأنظمة',
    description: ["تصميم وتطوير مواقع إلكترونية وتطبيقات الموبايل", "أنظمة برمجية قوية وموثوقة تعيش لسنوات", "دعم فني متوفر على مدار الساعة"],
    img: "/images/Laptop.svg",
    color: '#104c66',
  },
  {
    title: 'البرمجيات وتطوير الأنظمة',
    description: ["تصميم وتطوير مواقع إلكترونية وتطبيقات الموبايل", "أنظمة برمجية قوية وموثوقة تعيش لسنوات", "دعم فني متوفر على مدار الساعة"],
    img: "/images/phone.svg",
    color: '#2c4443',
  },

];

export default function StackSection({ withLink = true }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <section ref={container} className="container py-20 relative">
        <SectionHeader
          title={'خدماتنا'}
          disc={
            'حلول مبتكرة نساعدك من خلالها على تنمية عملك وتطوير حضورك الرقمي نقدم لك خبرة متخصصة تضمن لك نتائج ملموسة.'
          }
        />


        {/* الكروت فوق الخلفية */}
        <div className="relative w-full z-10">
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
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                img={project?.img}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
        {withLink &&
          <DynamicLink href={'/services'} className={"mx-auto"}>
            إكتشف الخدمات
          </DynamicLink>
        }
      </section>
    </ReactLenis>
  );
}

export const Card = ({
  i,
  title,
  description,
  img,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="bg-[url('/images/card-pattern.svg')] bg-contain bg-repeat flex  max-md:flex-col items-center justify-between max-md:gap-10 relative -top-[25%] min-h-[450px] w-[90%] rounded-3xl  origin-top  "
      >

        {/* content */}
        <div className='md:space-y-6 space-y-4 md:w-1/2 w-full p-10'>
          <h3 className='text-lg   bg-gradient-to-r from-[#A7FCEEBD] to-[#C6FCA6] bg-clip-text text-transparent'>خدمتك المميزة</h3>
          <h2 className='md:text-3xl text-xl font-bold text-white'>{title}</h2>
          <hr className='border-1 border-white w-3/4' />
          <ul className='flex flex-col gap-2'>
            {description.map((item, i) => (
              <li key={i} className='md:text-lg text-sm flex items-center gap-1 text-white'>
                <FaRegCircleCheck size={16} />
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <DynamicLink href={"#"}>
            تفاصيل الخدمة
          </DynamicLink>

        </div>
        {/* image */}
        <div className='md:w-1/2 w-full md:h-[400px] h-[250px] self-end'>
          <Image
            src={img}
            width={300}
            height={300}
            alt="victor"
            className=" w-full h-full drop-shadow-2xl drop-shadow-white-50/50 "
          />
        </div>


      </motion.div>
    </div>
  );
};

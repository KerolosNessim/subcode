import * as motion from "motion/react-client"

const SectionHeader = ({ title = "من نحن", disc  }) => {
  return (
    <div className='text-center lg:max-w-5xl mx-auto space-y-4'>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='lg:text-3xl md:text-2xl text-xl font-bold text-primary-800'>{title}</motion.h2>
      {disc ?
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 , delay:0.2}}
          className='text-gray-100 leading-relaxed lg:text-[32px] md:text-3xl '>{disc}</motion.p>
        : null
      }
    </div>
  )
}

export default SectionHeader

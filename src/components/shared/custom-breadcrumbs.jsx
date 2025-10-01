import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useLocale } from "next-intl"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import *as motion from "motion/react-client"
const CustomBreadcrumbs = ({ items }) => {
  const locale = useLocale()
  return (
    <motion.div
      initial={{ opacity: 0, y:-30 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Breadcrumb>
        <BreadcrumbList dir={locale === "ar" ? "rtl" : "ltr"}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-primary-800 font-semibold">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={item.href || "#"}>
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && (
                  <BreadcrumbSeparator>
                    {locale === "ar" ? <IoIosArrowBack /> : <IoIosArrowForward />}
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </motion.div>
  )
}

export default CustomBreadcrumbs

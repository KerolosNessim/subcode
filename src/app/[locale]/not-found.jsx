import { getTranslations } from "next-intl/server";
import * as motion from "motion/react-client";
import DynamicLink from "@/components/shared/dynamic-link";
import DynamicLinkDark from "@/components/shared/dynamic-link-dark";
import CustomBreadcrumbs from "@/components/shared/custom-breadcrumbs";
import { getSettings } from "@/services/fetch-settings";
import Image from "next/image";

export default async function NotFoundPage() {
  const t = await getTranslations("notFound");
  const b = await getTranslations();
  const settings = await getSettings();

  return (
    <main>
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat min-h-[calc(100vh-200px)]">
        <div className="container space-y-16 pb-20">
          <CustomBreadcrumbs
            items={[
              { label: b("navigation.home"), href: "/" },
              { label: t("breadcrumb") },
            ]}
          />

          <div className="text-center flex flex-col items-center justify-center py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-fit py-2 px-5 rounded-md shadow-md shadow-[#081822] bg-primary-950 flex items-center justify-center gap-4 mx-auto mb-8"
            >
              <div className="animate-pulse size-4 rounded-full bg-primary-400/25 flex items-center justify-center">
                <div className="size-3 rounded-full bg-primary-400" />
              </div>
              <p className="text-white-50 md:text-sm text-xs font-bold">
                {t("badge")}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[120px] md:text-[180px] font-extrabold leading-none text-primary-800/15 select-none"
              aria-hidden
            >
              404
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl md:text-4xl font-bold text-gray-100 -mt-8 md:-mt-12"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-gray-200 md:text-xl leading-relaxed max-w-xl mt-4"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center justify-center gap-4 mt-8 flex-wrap"
            >
              <DynamicLinkDark href="/" withIcon>
                {t("backHome")}
              </DynamicLinkDark>
              <DynamicLink
                href={`https://wa.me/${settings?.social_media?.whatsapp}`}
                external
              >
                {t("contactUs")}
              </DynamicLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative mt-16 w-48 h-48 md:w-64 md:h-64"
            >
              <Image
                src="/images/circles.svg"
                alt=""
                fill
                className="object-contain opacity-60 animate-wiggle"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

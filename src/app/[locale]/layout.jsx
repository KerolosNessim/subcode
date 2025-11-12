import "../globals.css";
import { Alexandria } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsappContact from "@/components/shared/whatsapp-contact";
import { Toaster } from "@/components/ui/sonner";
import { getSettings } from "@/services/fetch-settings";
import Script from "next/script";
import FloatingSocials from "@/components/shared/floating-social";

const alexandria = Alexandria({
  subsets: ["latin"],
  variable: "--font-alexandria",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// ✅ 1. Generate metadata dynamically
export async function generateMetadata({ params }) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const settings = await getSettings();
  const seo = settings?.seo || {};

  return {
    title: settings?.site_name,
    description: seo.meta_description || settings?.site_description,
    keywords: seo.meta_keywords,
    icons: {
      icon: settings?.site_favicon
    },
    openGraph: {
      title: settings?.site_name,
      description: seo.meta_description,
      images: [settings?.site_og_image || settings?.site_favicon],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: settings?.site_name,
      description: seo.meta_description,
      images: [settings?.site_og_image || settings?.site_favicon],
    },
  };
}

// ✅ 2. Root layout
export default async function RootLayout({ children, params }) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();
  const settings = await getSettings();
  console.log(settings);
  const seo = settings?.seo || {};

  return (
    <html lang={locale}>
      <head>
        {/* Google Analytics */}
        {seo.google_analytics && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${seo.google_analytics}`}
            />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${seo.google_analytics}');
              `}
            </Script>
          </>
        )}

        {/* Facebook Pixel */}
        {seo.facebook_pixel && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${seo.facebook_pixel}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>

      <body
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={alexandria.className}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar logo={settings?.site_logo} />
          <Toaster position="top-center" richColors />
          <FloatingSocials social={settings?.social_media} />
          {/* <WhatsappContact number={settings?.social_media?.whatsapp} /> */}
          {children}
          <Footer settings={settings} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import useRootLocalization from "@/shared/lib/hooks/useRootLocalization";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { Roboto } from "next/font/google";
const roboto = Roboto({
    weight: ["400", "500", "700"],
    style: ["normal"],
    subsets: ["latin", "cyrillic"]
});

import "./globalStyles.scss";

export const metadata: Metadata = {
    title: "NA CV",
    description: "Root layout of Frontend engineer CV"
};

async function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
    const { locale, messages } = await useRootLocalization(params);

    return (
        <html lang={locale}>
            <body className={roboto.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Header />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default RootLayout;

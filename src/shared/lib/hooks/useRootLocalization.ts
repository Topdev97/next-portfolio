import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

async function useRootLocalization(params: any) {
    const locale = useLocale();

    let messages;
    try {
        messages = (await import(`@/shared/constants/locales/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    if (params.locale !== locale) {
        notFound();
    }

    return {
        locale,
        messages
    };
}
export default useRootLocalization;

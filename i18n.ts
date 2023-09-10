import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
    messages: (await import(`@/shared/constants/locales/${locale}.json`)).default
}));

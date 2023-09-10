// import { create } from "zustand";
// import { immer } from "zustand/middleware/immer";
// import { devtools } from "zustand/middleware";
//
// import { locales } from "@/shared/constants/intl/locales";
//
// interface IUseLocaleStore {
//     currentLocale: locales;
//     setCurrentLocale: (locale: locales) => void;
// }
//
// const useLocaleStore = create<IUseLocaleStore>()(
//     devtools(
//         immer((set, get) => ({
//             currentLocale: locales.ENGLISH,
//             setCurrentLocale: (locale: locales) => {
//                 set({ currentLocale: locale });
//             }
//         }))
//     )
// );
//
// export default useLocaleStore;

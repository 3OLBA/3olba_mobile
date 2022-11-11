import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../lang/en.json';
import fr from '../lang/fr.json';
import ar from '../lang/ar.json';
import tz from '../lang/tz.json';


i18n
    .use(initReactI18next)
    .use(initReactI18next)
    .init({
        lng: 'en',
        debug : true,
        fallbackLng: 'en',
        resources: {
            en: en,
            fr: fr,
            ar: ar,
            tz: tz,
    },
    interpolation: {
        escapeValue: false // react already safes from xss
    }
});

export default i18n;

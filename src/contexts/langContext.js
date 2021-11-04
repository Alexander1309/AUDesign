import { createContext, useState } from 'react'
import { IntlProvider } from 'react-intl'

import en from '../lang/en.json'
import es from '../lang/es.json'

const langContext = createContext()

const LangProvider = ({ children }) => {
    let defaultLocale, defaultMessage
    const lang = localStorage.getItem('AUDesign_lang')

    if(lang) {
        defaultLocale = lang
        if (lang === 'en-Us') defaultMessage = en
        else if(lang === 'es-Mx') defaultMessage = es
        else defaultMessage = es
    } else {
        defaultMessage = es
        localStorage.setItem('AUDesign_lang', 'es-Mx')
    }

    const [message, setMessage] = useState(defaultMessage)
    const [locale, setLocale] = useState(defaultLocale)

    const setLang = lang => {
        switch(lang) {
            case 'en-Us':
                setLocale('en-Us')
                setMessage(en)
                localStorage.setItem('AUDesign_lang', 'en-Us')
            break
            
            case 'es-Mx':
                setLocale('es-Mx')
                setMessage(es)
                localStorage.setItem('AUDesign_lang', 'es-Mx')
            break

            default: 
                setLocale('es-MX')
                setMessage(es)
                localStorage.setItem('AUDesign_lang', 'es-Mx')
        }
    }

    return (
        <langContext.Provider value={{ setLang }}>
            <IntlProvider locale={locale} messages={message}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}

export { langContext, LangProvider }
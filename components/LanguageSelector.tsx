'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import i18nConfig from '@/i18nConfig'

export default function LanguageSelector() {
    const { i18n } = useTranslation()
    const currentLocale = i18n.language
    const router = useRouter()
    const currentPathname = usePathname()

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value
        const days = 30
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        const expires = date.toUTCString()
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/;SameSite=Lax`

        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname)
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            )
        }
    }

    return (
        <select
            value={currentLocale}
            onChange={handleChange}
            className="p-0.5 md:px-1 md:p-0 lg:px-2 lg:p-0.5 border rounded font-sans font-semibold cursor-pointer"
        >
            <option value="ka" className="font-sans font-semibold">
                Ge
            </option>
            <option value="en" className="font-sans font-semibold">
                En
            </option>
            <option value="ru" className="font-sans font-semibold">
                Ru
            </option>
        </select>
    )
}

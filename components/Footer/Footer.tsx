'use client'

import { useTranslation } from 'react-i18next'
import FooterContact from '../FooterContact/FooterContact'
import FooterMenu from '../FooterMenu/FooterMenu'
import FooterInfo from '../FooterInfo/FooterInfo'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="h-min pt-4 text-gray-300 bg-yellow-950">
            {/* OURGOAL+MENU+CONTACT */}
            <div className="mx-8 mt-4 flex justify-center max-[767px]:flex-col">
                <FooterInfo additionalClass="md:mr-auto lg:mr-0" />
                <nav
                    className="flex flex-col justify-between items-start md:w-3/4 lg:w-auto md:items-top md:flex-row md:items-top lg:items-center lg:justify-center"
                    aria-label="Footer navigation"
                >
                    <FooterMenu additionalClass="order-2 md:mx-auto lg:mx-0 md:mr-auto max-[767px]:mt-8" />
                    <svg
                        width="1"
                        height="180px"
                        viewBox="0 0 1 190"
                        xmlns="http://www.w3.org/2000/svg"
                        className="max-[1023px]:hidden mx-4 order-3 min-[1280px]:mx-12"
                    >
                        <line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="190"
                            stroke="gray"
                            strokeWidth="2"
                        />
                    </svg>
                    <svg
                        width="1"
                        height="200px"
                        viewBox="0 0 1 190"
                        xmlns="http://www.w3.org/2000/svg"
                        className="max-[1023px]:hidden mx-4 order-1 min-[1280px]:mx-12"
                    >
                        <line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="190"
                            stroke="gray"
                            strokeWidth="2"
                        />
                    </svg>
                    <FooterContact additionalClass="order-3 max-[767px]:mt-8 max-[767px]:mr-4" />
                </nav>
            </div>
            {/* TEXT FIELD */}
            <div>
                <p className="mx-4 mt-8 text-center text-gray-400 text-sm">
                    {t('common:footerFirstText')}
                </p>
                <p className="mx-4 text-center text-gray-400 text-sm">
                    {t('common:footerSecondText')}
                </p>
            </div>
            {/* COPYRIGHT */}
            <div className="h-10 mt-4 flex items-center justify-center bg-orange-900">
                <p className="text-center text-gray-800 font-mono">
                    Copyright © 2024 Georgian House LLC
                </p>
            </div>
        </footer>
    )
}

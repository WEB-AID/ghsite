'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export const footerMenuItems = [
    { name: 'mainPage', path: '/' },
    { name: 'galery', path: '/galery' },
    { name: 'pricing', path: '/pricing' },
    { name: 'news', path: '/news' },
    { name: 'contact', path: '/contact' },
    { name: 'about', path: '/about' },
    { name: 'learning', path: '/learning' },
    { name: 'vacancies', path: '/vacancies' },
]

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="h-min p-4 text-gray-300  bg-yellow-950">
            {/* INFO+MENU+CONTACT */}
            <div className="max-[767px]:w-4/5  mt-4 max-[767px]:ml-12 mr-auto flex justify-around lg:justify-center items-start md:items-center flex-col md:flex-row">
                <ul className="max-[767px]:mt-8 grid grid-rows-5 max-[767px]:grid-rows-4 grid-flow-col gap-y-4 gap-x-2 md:grid-rows-4 min-[1280px]:gap-x-6 max-[767px]:grid-cols-2 order-2 md:order-2 text-left">
                    {footerMenuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className="before:content-['·'] before:mr-1"
                            >
                                <span className="hover:underline whitespace-nowrap">
                                    {t(`footerMenu:${item.name}`)}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <svg
                    width="1"
                    height="180px"
                    viewBox="0 0 1 190"
                    xmlns="http://www.w3.org/2000/svg"
                    className="order-3 max-[1023px]:hidden mx-4 min-[1280px]:mx-12"
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
                <div className="md:w-30vh lg:w-60vh flex flex-col justify-items-start order-1 md:order-1">
                    <Image
                        src="/logo2.png"
                        alt="logo2"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-10 lg:w-14"
                    />
                    <div className="mt-2">
                        We provide corporate services, company formation, sales
                        of ready made companies, company accounts and accounting
                        in Georgia. We specialize in clouding companies in the
                        Free Trade Zone and Virtual Zone. We provide virtual
                    </div>
                </div>
                <svg
                    width="1"
                    height="200px"
                    viewBox="0 0 1 190"
                    xmlns="http://www.w3.org/2000/svg"
                    className="order-1 max-[1023px]:hidden mx-4 min-[1280px]:mx-12"
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
                <div className="flex flex-col order-3 md:order-3 max-[767px]:mt-8">
                    <div className="">
                        <h1 className="text-xl">Contact us</h1>
                        <div className="flex flex-col mt-4">
                            <div>Besiki 5, 0108, Tbilisi, Georgia</div>
                            <div>(+995) 555 940 077</div>
                            <div>info@readymade.ge</div>
                        </div>
                    </div>
                    <div className="flex">
                        <Image
                            src="/iconFacebook.svg"
                            alt="ISO"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-10 mt-4 "
                        />
                        <Image
                            src="/iconLinkedin.svg"
                            alt="ISO"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-10 mt-4 "
                        />
                        <Image
                            src="/ISO.png"
                            alt="ISO"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-24 md:w-28 max-[767px]:ml-12 ml-auto mt-4 "
                        />
                    </div>
                </div>
            </div>
            {/* TEXT FIELD */}
            <div className="mt-8 text-center text-gray-300 text-sm">
                {t('common:footerFirstText')}
            </div>
            <div className="mt-2 text-center text-gray-300 text-sm">
                {t('common:footerSecondText')}
            </div>
            {/* COPYRIGHT */}
            <div className="mt-8 text-center text-gray-400">
                Copyright © 2024 Georgian House LLC
            </div>
        </footer>
    )
}

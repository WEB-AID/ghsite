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
        <footer className="h-min pt-4 text-gray-300 bg-yellow-950">
            {/* OURGOAL+MENU+CONTACT */}
            <nav
                className="mt-4 mr-auto flex flex-col justify-between items-start md:mx-4 max-[767px]:ml-12 md:flex-row md:items-top lg:items-center lg:justify-center"
                aria-label="Footer navigation"
            >
                <ul className="grid grid-rows-4 grid-flow-col gap-y-4 gap-x-2 order-2 max-[767px]:mt-4 min-[1280px]:gap-x-6 max-[767px]:grid-cols-2">
                    {footerMenuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className="before:content-['·'] before:mr-1"
                            >
                                <span className="hover:underline whitespace-nowrap">
                                    {t(`footer:${item.name}`)}
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
                <div className="flex flex-row max-[767px]:w-11/12 md:flex-col lg:flex-row md:ml-4 max-[767px]:mr-8 justify-center max-[767px]:items-center lg:items-center md:w-1/4 lg:w-1/2 min-[1280px]:w-2/5">
                    <Image
                        src="/logo2.png"
                        alt="logo2"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-24 h-28 md:h-20 lg:h-24 md:w-16 md:mb-2 lg:mb-0"
                    />
                    <article className="ml-auto md:ml-0 lg:ml-6 max-[767px]:w-8/12">
                        {t('footer:ourGoal')}
                    </article>
                </div>
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
                <div className="w-72 flex flex-col md:mr-4 order-3 max-[767px]:mt-4 ">
                    <section aria-labelledby="footer-contact">
                        <h2 id="footer-contact" className="text-xl">
                            {t('footer:contactUs')}
                        </h2>
                        <address className="mt-4 flex flex-col gap-y-1 not-italic">
                            <a
                                href="https://www.google.com/maps/place/Akaurta,+1100,+Bolnisi,+Georgia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:underline whitespace-nowrap"
                            >
                                <Image
                                    src="/iconLocation.png"
                                    alt="Location Icon"
                                    width={16}
                                    height={16}
                                    className="mr-2"
                                />
                                Akaurta, 1100, Bolnisi, Georgia
                            </a>
                            <a
                                href="tel:+995511277273"
                                className="flex items-center hover:underline"
                            >
                                <Image
                                    src="/iconWhatsapp.png"
                                    alt="WhatsApp Icon"
                                    width={16}
                                    height={16}
                                    className="mr-2"
                                />
                                (+995) 511 277 273
                            </a>
                            <a
                                href="mailto:saxliqartuli@gmail.com"
                                className="flex items-center hover:underline"
                            >
                                <Image
                                    src="/iconEmail.png"
                                    alt="Email Icon"
                                    width={16}
                                    height={16}
                                    className="mr-2"
                                />
                                saxliqartuli@gmail.com
                            </a>
                        </address>
                    </section>
                    <div className="mt-4 flex">
                        <a
                            href="https://www.facebook.com/georgian.house.fb/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/iconFacebook.svg"
                                alt="Facebook"
                                aria-label="Facebook"
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-10 h-10"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/georgianhouse"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/iconLinkedin.svg"
                                alt="LinkedIn"
                                aria-label="LinkedIn"
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-10 h-10"
                            />
                        </a>
                        <a
                            href="https://www.iso.org/iso-22000-food-safety-management.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto"
                        >
                            <Image
                                src="/ISO.png"
                                alt="ISO"
                                aria-label="ISOinfo"
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-28 h-10"
                            />
                        </a>
                    </div>
                </div>
            </nav>
            {/* TEXT FIELD */}
            <p className="mt-8 mx-4 text-center text-gray-400 text-sm">
                {t('common:footerFirstText')}
            </p>
            <p className="mx-4 text-center text-gray-400 text-sm">
                {t('common:footerSecondText')}
            </p>
            {/* COPYRIGHT */}
            <div className="h-10 flex items-center justify-center mt-4 bg-orange-900">
                <p className="text-center text-gray-800 font-mono">
                    Copyright © 2024 Georgian House LLC
                </p>
            </div>
        </footer>
    )
}

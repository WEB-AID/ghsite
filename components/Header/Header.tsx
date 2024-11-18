'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Overlay from '@/app/uikit/overlay'
import LanguageSelector from '../LanguageSelector'
import { useTranslation } from 'react-i18next'
import isActivePath from '../helpers/isActivePath'
import { Button } from '@/app/uikit/button'

export const menuItems = [
    { name: 'mainPage', path: '/' },
    { name: 'galery', path: '/galery' },
    { name: 'news', path: '/news', type: 'beforeLogo' },
    { name: 'pricing', path: '/pricing', type: 'afterLogo' },
    { name: 'about', path: '/about' },
    { name: 'contact', path: '/contact' },
]

export default function Header() {
    const [isBurgerOpen, setBurgerOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    const { t } = useTranslation()

    const toggleBurger = () => {
        setBurgerOpen((prev) => !prev)
    }

    const handleMenuItemClick = (path: string) => {
        router.push(path)
        setBurgerOpen(false)
    }

    const MenuItem = ({
        name,
        path,
        onClick,
        additionalClass,
    }: {
        name: string
        path: string
        onClick?: () => void
        additionalClass?: string
    }) => (
        <li
            className={`self-start cursor-pointer whitespace-nowrap ${additionalClass}`}
        >
            <Link
                href={path}
                onClick={onClick}
                className={`hover:text-orange-600 ${
                    isActivePath(path, pathname)
                        ? 'border-b-2 border-orange-300'
                        : ''
                }`}
            >
                {name}
            </Link>
        </li>
    )

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                isBurgerOpen &&
                !(event.target as HTMLElement).closest('.burger-menu')
            ) {
                setBurgerOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        if (isBurgerOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = ''
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.body.style.overflowY = ''
        }
    }, [isBurgerOpen])

    return (
        <header
            className={`w-full h-24 fixed lg:h-32 md:mr-10 bg-white shadow-inner-premium-gray text-black z-50`}
        >
            <div
                className={`h-full relative flex md:justify-center ${
                    isBurgerOpen ? 'items-start' : 'items-center'
                }`}
            >
                {/* LOGO */}
                <div className="absolute top-4 lg:top-6 max-[767px]:right-4 z-10 md:z-50">
                    <Link href="/">
                        <Image
                            src="/logo1.png"
                            alt="logo"
                            width="150"
                            height="150"
                            sizes="100vw"
                            className="w-28 lg:w-32"
                        />
                    </Link>
                </div>
                <nav
                    className={`w-64 h-full relative md:w-full max-[767px]:flex z-20`}
                    aria-label="Header navigation"
                >
                    {/* MOBILE BURGER BUTTON */}
                    <button
                        onClick={toggleBurger}
                        className={`ml-8 flex md:hidden my-auto ${
                            isBurgerOpen ? 'hidden' : ''
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                        >
                            <rect
                                x="3"
                                y="8"
                                width="42"
                                height="6"
                                rx="3"
                                fill="#F97316"
                            />
                            <rect
                                x="3"
                                y="21"
                                width="42"
                                height="6"
                                rx="3"
                                fill="#F97316"
                            />
                            <rect
                                x="3"
                                y="34"
                                width="42"
                                height="6"
                                rx="3"
                                fill="#F97316"
                            />
                        </svg>
                    </button>
                    {/* MOBILE BURGER MENU */}
                    <div
                        className={`burger-menu w-full absolute -translate-x-full transition-transform duration-1000 md:hidden opacity-0 bg-yellow-950 ${
                            isBurgerOpen ? 'translate-x-0 opacity-100' : ''
                        } flex shadow-outer-brown`}
                    >
                        <ul className="w-7/12 p-8 py-12 flex flex-col gap-12 text-slate-200">
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item.path}
                                    name={t(`headerMenu:${item.name}`)}
                                    path={item.path}
                                    onClick={() => {
                                        handleMenuItemClick(item.path)
                                        setBurgerOpen(false)
                                    }}
                                />
                            ))}
                        </ul>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={toggleBurger}
                            className="absolute top-4 -right-14 z-20"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="3" x2="21" y2="21" />
                                <line x1="21" y1="3" x2="3" y2="21" />
                            </svg>
                        </Button>
                        {/* USER LOGIN */}
                        <Link href="/login" passHref>
                            <Button
                                variant="outline"
                                onClick={toggleBurger}
                                className="p-3 absolute top-2 right-2 md:top-2 md:right-12 lg:right-64 border-0 bg-orange-800 text-gray-800 font-sans font-semibold"
                            >
                                {t('common:login')}
                            </Button>
                        </Link>
                        {/* LANGUAGE SELECTOR */}
                        <div className="absolute bottom-2 right-2 md:hidden md:right-8 font-sans">
                            <LanguageSelector />
                        </div>
                    </div>
                    {/* DESKTOP HEADER MENU */}
                    <div className="h-full flex items-center justify-center max-[767px]:hidden ">
                        <div className="w-full h-full grid grid-cols-[1fr_auto_1fr] items-center">
                            <ul className="hidden md:flex md:items-center md:justify-end md:gap-2 lg:gap-10 text-gray-900">
                                {menuItems
                                    .slice(0, Math.floor(menuItems.length / 2))
                                    .map((item) => (
                                        <MenuItem
                                            key={item.path}
                                            name={t(`headerMenu:${item.name}`)!}
                                            path={item.path}
                                        />
                                    ))}
                            </ul>
                            <div className="logoFieldReservation w-28 h-full mx-6 flex justify-center items-center lg:w-32 lg:mx-12"></div>
                            <ul className="hidden md:flex md:items-center md:justify-start md:gap-2 lg:gap-10 text-gray-900">
                                {menuItems
                                    .slice(Math.floor(menuItems.length / 2))
                                    .map((item) => (
                                        <MenuItem
                                            key={item.path}
                                            name={t(`headerMenu:${item.name}`)!}
                                            path={item.path}
                                        />
                                    ))}
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* LANGUAGE SELECTOR */}
                <div className="absolute bottom-2 right-2 max-[767px]:hidden lg:bottom-4 lg:right-4 z-20 text-gray-800">
                    <LanguageSelector />
                </div>
                {/* USER LOGIN */}
                <Link href="/login" passHref className="z-20">
                    <Button
                        variant="outline"
                        className="h-6 absolute top-2 right-2 max-[767px]:hidden lg:top-4 lg:right-64 bg-orange-800 text-gray-800"
                    >
                        {t('common:login')}
                    </Button>
                </Link>
            </div>
            {isBurgerOpen && <Overlay onClick={toggleBurger} />}
        </header>
    )
}

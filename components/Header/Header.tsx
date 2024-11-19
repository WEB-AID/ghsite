'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Overlay from '@/app/uikit/overlay'
import LanguageSelector from '../LanguageSelector'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import BurgerButton from '../BurgerButton/BurgerButton'
import LoginButton from '../LoginButton/LoginButton'

export default function Header() {
    const [isBurgerOpen, setBurgerOpen] = useState(false)
    const pathname = usePathname()

    const toggleBurger = () => {
        setBurgerOpen((prev) => !prev)
    }

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
            document.body.style.overflow = 'hidden'
            document.body.style.touchAction = 'none'
        } else {
            document.body.style.overflow = ''
            document.body.style.touchAction = ''
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.body.style.overflow = ''
            document.body.style.touchAction = ''
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
                            className="w-24 lg:w-32"
                        />
                    </Link>
                </div>
                {/* NAVIGATION */}
                <nav
                    className={`w-64 h-full relative md:w-full max-[767px]:flex z-20`}
                    aria-label="Header navigation"
                >
                    {/* BURGER MENU */}
                    <BurgerButton
                        toggleBurger={toggleBurger}
                        additionalClass={`${isBurgerOpen ? 'hidden' : ''}`}
                    />
                    <BurgerMenu
                        pathname={pathname}
                        isBurgerOpen={isBurgerOpen}
                        toggleBurger={toggleBurger}
                    />
                    {/* DESKTOP HEADER MENU */}
                    <HeaderMenu pathname={pathname} />
                </nav>
                {/* LANGUAGE SELECTOR */}
                <div className="absolute bottom-2 right-2 max-[767px]:hidden lg:bottom-4 lg:right-4 z-20 text-gray-800">
                    <LanguageSelector />
                </div>
                {/* USER LOGIN */}
                <div className="absolute top-2 right-2 max-[767px]:hidden lg:top-4 lg:right-64 z-20">
                    <LoginButton />
                </div>
            </div>
            {isBurgerOpen && <Overlay onClick={toggleBurger} />}
        </header>
    )
}

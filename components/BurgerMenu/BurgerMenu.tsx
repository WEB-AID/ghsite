import { Button } from '@/app/uikit/button'
import LanguageSelector from '../LanguageSelector'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import MenuItem from '../MenuItem/MenuItem'
import { menuItems } from '../HeaderMenu/HeaderMenu'
import LoginButton from '../LoginButton/LoginButton'

export default function BurgerMenu({
    pathname,
    isBurgerOpen,
    toggleBurger,
}: {
    pathname: string
    isBurgerOpen: boolean
    toggleBurger: () => void
}) {
    const { t } = useTranslation()
    const router = useRouter()

    const handleMenuItemClick = (path: string) => {
        router.push(path)
        toggleBurger()
    }

    return (
        <aside
            className={`burger-menu w-full flex absolute -translate-x-full transition-transform duration-1000 md:hidden opacity-0 bg-yellow-950 shadow-outer-brown ${
                isBurgerOpen ? 'translate-x-0 opacity-100' : ''
            }`}
        >
            <ul className="w-7/12 p-8 py-12 flex flex-col gap-12 text-slate-200">
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.path}
                        name={t(`headerMenu:${item.name}`)}
                        path={item.path}
                        pathname={pathname}
                        onClick={() => {
                            handleMenuItemClick(item.path)
                        }}
                    />
                ))}
            </ul>
            {/* USER LOGIN */}
            <div className="absolute top-2 right-2 md:top-2 md:right-12 lg:right-64">
                <LoginButton additionalClass="h-auto p-2 font-sans font-semibold" />
            </div>

            {/* LANGUAGE SELECTOR */}
            <div className="absolute bottom-2 right-2 md:hidden md:right-8">
                <LanguageSelector />
            </div>
            {/* CLOSE BUTTON */}
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
        </aside>
    )
}

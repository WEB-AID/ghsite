import { useTranslation } from 'react-i18next'
import MenuItem from '../MenuItem/MenuItem'

export const menuItems = [
    { name: 'mainPage', path: '/' },
    { name: 'galery', path: '/galery' },
    { name: 'news', path: '/news', type: 'beforeLogo' },
    { name: 'pricing', path: '/pricing', type: 'afterLogo' },
    { name: 'about', path: '/about' },
    { name: 'contact', path: '/contact' },
]

export default function HeaderMenu({ pathname }: { pathname: string }) {
    const { t } = useTranslation()

    return (
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
                                pathname={pathname}
                            />
                        ))}
                </ul>
                <div className="logoFieldReservation w-28 h-full mx-6 flex justify-center items-center lg:w-32 lg:mx-12" />
                <ul className="hidden md:flex md:items-center md:justify-start md:gap-2 lg:gap-10 text-gray-900">
                    {menuItems
                        .slice(Math.floor(menuItems.length / 2))
                        .map((item) => (
                            <MenuItem
                                key={item.path}
                                name={t(`headerMenu:${item.name}`)!}
                                path={item.path}
                                pathname={pathname}
                            />
                        ))}
                </ul>
            </div>
        </div>
    )
}

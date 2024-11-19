import Link from 'next/link'
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

export default function FooterMenu({
    additionalClass,
}: {
    additionalClass: string
}) {
    const { t } = useTranslation()

    return (
        <ul
            className={`grid grid-rows-4 grid-flow-col gap-y-4 gap-x-6 ${additionalClass}`}
        >
            {footerMenuItems.map((item) => (
                <li
                    key={item.name}
                    className="before:mr-1 before:content-['·'] before:text-orange-400"
                >
                    <Link href={item.path}>
                        <span className="hover:underline whitespace-nowrap">
                            {t(`footer:${item.name}`)}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

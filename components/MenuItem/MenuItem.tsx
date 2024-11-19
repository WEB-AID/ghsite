import Link from 'next/link'
import isActivePath from '../helpers/isActivePath'

export default function MenuItem({
    name,
    path,
    pathname,
    onClick,
}: {
    name: string
    path: string
    pathname: string
    onClick?: () => void
}) {
    return (
        <li className="cursor-pointer whitespace-nowrap" onClick={onClick}>
            <Link
                href={path}
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
}

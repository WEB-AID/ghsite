import { Button } from '@/app/uikit/button'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function LoginButton({
    additionalClass,
    onClick,
}: {
    additionalClass?: string
    onClick?: () => void
}) {
    const { t } = useTranslation()

    return (
        <Link href="/login" passHref>
            <Button
                variant="outline"
                className={`h-6 border-0 bg-orange-800 text-slate-200 ${additionalClass}`}
                onClick={onClick}
            >
                {t('common:login')}
            </Button>
        </Link>
    )
}

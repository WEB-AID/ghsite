import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function FooterInfo({
    additionalClass,
}: {
    additionalClass: string
}) {
    const { t } = useTranslation()

    return (
        <div
            className={`flex flex-row md:block lg:flex md:w-1/4 lg:w-1/2 min-[1280px]:w-2/5 md:flex-col lg:flex-row max-[767px]:items-center lg:items-center ${additionalClass}`}
        >
            <Image
                src="/logo2.png"
                alt="logo2"
                width="0"
                height="0"
                sizes="100vw"
                className="float-left w-24 h-28 md:h-14 md:w-12 md:mr-6 md:mb-2 lg:h-36 lg:w-32 lg:mb-0 lg:mr-0"
                style={{
                    filter: 'drop-shadow(0 0 15px rgba(255, 165, 0, 0.4))',
                }}
            />
            <article className="max-[767px]:ml-8 lg:ml-8 max-[767px]:w-8/12 ">
                {t('footer:ourGoal')}
            </article>
        </div>
    )
}

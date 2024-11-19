'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function PlantPhotoBlock() {
    const { t } = useTranslation()

    return (
        <div className="relative">
            <Image
                src="/plant1.jpg"
                alt="Plant logo"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-35vh md:h-50vh min-[1280px]:h-70vh"
            />
            <p className="w-1/2 py-2 absolute top-4 left-10 md:w-4/5 md:mt-8 md:top-10 lg:mt-4 lg:top-22 text-white text-xs md:text-lg lg:text-3xl font-bold">
                {t('plantPhotoText')}
            </p>
        </div>
    )
}

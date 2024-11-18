import Image from 'next/image'
import Greetings from '../../components/Greetings/Greetings'
import initTranslations, { i18nNamespaces } from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'

type HomeProps = { params: Promise<{ locale: string }> }

export default async function Home({ params }: HomeProps) {
    const { locale } = await params
    const { t, resources } = await initTranslations(locale, i18nNamespaces)

    return (
        <TranslationsProvider
            locale={locale}
            namespaces={i18nNamespaces}
            resources={resources}
        >
            <main className="flex flex-col">
                <div className="relative">
                    <Image
                        src="/plant1.jpg"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-35vh md:h-70vh"
                    />
                    <p className="w-1/2 py-2 absolute top-4 left-10 md:w-4/5 md:mt-8 md:top-10 lg:mt-4 lg:top-22 text-white text-xs md:text-lg lg:text-3xl font-bold">
                        {t('plantPhotoText')}
                    </p>
                </div>
                <Greetings />
            </main>
        </TranslationsProvider>
    )
}

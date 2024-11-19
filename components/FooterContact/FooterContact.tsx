import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function FooterContact({
    additionalClass,
}: {
    additionalClass: string
}) {
    const { t } = useTranslation()

    return (
        <div className={`w-60 flex flex-col ${additionalClass}`}>
            <section aria-labelledby="footer-contact" className="">
                <h2 id="footer-contact" className="text-lg text-orange-500">
                    {t('footer:contactUs')}
                </h2>
                <address className="mt-2 flex flex-col gap-y-1 not-italic font-sans font-medium">
                    <a
                        href="https://www.google.com/maps/place/Akaurta,+1100,+Bolnisi,+Georgia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline whitespace-nowrap"
                    >
                        <Image
                            src="/iconLocation.png"
                            alt="Location Icon"
                            width={16}
                            height={16}
                            className="mr-2"
                        />
                        Akaurta, 1100, Bolnisi, Georgia
                    </a>
                    <a
                        href="tel:+995511277273"
                        className="mr-auto flex items-center hover:underline"
                    >
                        <Image
                            src="/iconWhatsapp.png"
                            alt="WhatsApp Icon"
                            width={16}
                            height={16}
                            className="mr-2"
                        />
                        (+995) 511 277 273
                    </a>
                    <a
                        href="mailto:saxliqartuli@gmail.com"
                        className="mr-auto flex items-center hover:underline"
                    >
                        <Image
                            src="/iconEmail.png"
                            alt="Email Icon"
                            width={16}
                            height={16}
                            className="mr-2"
                        />
                        saxliqartuli@gmail.com
                    </a>
                </address>
            </section>
            <div className="mt-4 flex">
                <a
                    href="https://www.facebook.com/georgian.house.fb/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/iconFacebook.svg"
                        alt="Facebook"
                        aria-label="Facebook"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-10 h-10"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/company/georgianhouse"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/iconLinkedin.svg"
                        alt="LinkedIn"
                        aria-label="LinkedIn"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-10 h-10"
                    />
                </a>
                <a
                    href="https://www.iso.org/iso-22000-food-safety-management.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto"
                >
                    <Image
                        src="/ISO.png"
                        alt="ISO"
                        aria-label="ISOinfo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-28 h-10"
                    />
                </a>
            </div>
        </div>
    )
}

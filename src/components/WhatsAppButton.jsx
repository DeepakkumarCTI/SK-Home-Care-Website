import phoneIcon from '/images/icons/phone.png'

export default function WhatsAppButton() {
    return (
        <a
            href="tel:9944130912"
            aria-label="Call SK Home Care"
            className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-rose-900 px-4 py-4 text-sm font-bold text-white shadow-xl shadow-rose-950/25 transition hover:-translate-y-1 hover:bg-rose-800"
        >
            <img
                src={phoneIcon}
                alt=""
                className="h-6 w-6 object-contain"
            />

            <span className="hidden sm:inline">Call Now</span>
        </a>
    )
}
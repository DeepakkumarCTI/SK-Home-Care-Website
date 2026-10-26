
import { useState } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Send,
} from 'lucide-react'

const latitude = 11.020949
const longitude = 76.972702

const mapEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`
const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
const whatsappNumber = '919944130912'

const initialForm = {
    name: '',
    phone: '',
    location: '',
    service: '',
    timing: '',
    message: '',
}

export default function Contact() {
    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }))

        if (error) setError('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setError('')

        const phoneDigits = form.phone.replace(/\D/g, '')

        if (phoneDigits.length < 10 || phoneDigits.length > 15) {
            setError('Please enter a valid phone number.')
            return
        }

        if (!form.service) {
            setError('Please select the service you require.')
            return
        }

        const whatsappMessage = [
            'Hello SK Home Care!',
            '',
            'I would like to enquire about your home care services.',
            '',
            `Name: ${form.name.trim()}`,
            `Phone: ${form.phone.trim()}`,
            `Location: ${form.location.trim() || 'Not specified'}`,
            `Service Required: ${form.service}`,
            `Preferred Timing: ${form.timing || 'Not specified'}`,
            `Message: ${form.message.trim() || 'No additional message'}`,
            '',
            'Please contact me with further details.',
        ].join('\n')

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }

    const inputClass =
        'mt-1.5 w-full min-w-0 rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-xs text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-rose-800 focus:ring-2 focus:ring-rose-100 sm:mt-2 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm'

    return (
        <main className="min-h-screen overflow-hidden bg-white">
            {/* Contact Hero */}
        
            <section
                className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-7 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-14"
                style={{
                    backgroundImage: "url('/images/contact-bg.jpg')",
                }}
            >
                {/* Dark burgundy gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#241015]/90 via-[#241015]/75 to-[#241015]/40" />

                {/* Content */}
                <div className="relative z-10 mx-auto w-full max-w-7xl">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-amber-300 sm:text-xs sm:tracking-[0.2em]">
                        Get in touch
                    </p>

                    <h1 className="mt-2 text-2xl font-black sm:text-4xl lg:text-5xl">
                        Contact Us
                    </h1>

                    <p className="mt-2 max-w-2xl text-xs leading-5 text-white/90 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">
                        Have a home care requirement? Get in touch with SK Home Care.
                        We&apos;ll be happy to discuss your needs.
                    </p>
                </div>
            </section>
            
            {/* Contact Details and Form */}
            <section className="px-3 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
                    {/* Contact Information */}
                    <div className="min-w-0 rounded-2xl bg-[#faf7f3] p-4 sm:rounded-3xl sm:p-6 lg:p-8">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-amber-700 sm:text-xs sm:tracking-[0.18em]">
                            We&apos;re here to help
                        </p>

                        <h2 className="mt-1.5 text-lg font-black text-rose-950 sm:mt-2 sm:text-2xl lg:text-3xl">
                            Contact Address
                        </h2>

                        <div className="mt-4 space-y-4 sm:mt-7 sm:space-y-6">
                            {/* Address */}
                            <div className="flex min-w-0 items-start gap-2.5 sm:gap-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-900 text-white sm:h-11 sm:w-11 sm:rounded-2xl">
                                    <MapPin size={16} className="sm:hidden" />
                                    <MapPin size={21} className="hidden sm:block" />
                                </span>

                                <div className="min-w-0 flex-1">
                                    <h3 className="text-xs font-extrabold text-rose-950 sm:text-base">
                                        S.K. HOME CARE
                                    </h3>

                                    <p className="mt-1 text-[11px] leading-5 text-stone-600 sm:mt-2 sm:text-sm sm:leading-7">
                                        428, Malarvizhi Complex, 2nd Floor,
                                        <br />
                                        Bata Showroom Upstairs,
                                        <br />
                                        Near Apoorva Hotel, 100 Feet Road,
                                        <br />
                                        Gandhipuram, Coimbatore - 641012.
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex min-w-0 items-start gap-2.5 sm:gap-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-900 text-white sm:h-11 sm:w-11 sm:rounded-2xl">
                                    <Phone size={16} className="sm:hidden" />
                                    <Phone size={21} className="hidden sm:block" />
                                </span>

                                <div className="min-w-0 flex-1">
                                    <h3 className="text-xs font-extrabold text-rose-950 sm:text-base">
                                        Call Us
                                    </h3>

                                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-stone-600 sm:mt-2 sm:text-sm">
                                        <a
                                            href="tel:9944130912"
                                            className="font-bold hover:text-rose-900"
                                        >
                                            99441 30912
                                        </a>

                                        <span className="text-stone-400">|</span>

                                        <a
                                            href="tel:8643002560"
                                            className="font-bold hover:text-rose-900"
                                        >
                                            86430 02560
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex min-w-0 items-start gap-2.5 sm:gap-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-900 text-white sm:h-11 sm:w-11 sm:rounded-2xl">
                                    <Mail size={16} className="sm:hidden" />
                                    <Mail size={21} className="hidden sm:block" />
                                </span>

                                <div className="min-w-0 flex-1">
                                    <h3 className="text-xs font-extrabold text-rose-950 sm:text-base">
                                        Email
                                    </h3>

                                    <a
                                        href="mailto:homecarecoimbatore@gmail.com"
                                        className="mt-1 block break-all text-[11px] text-stone-600 hover:text-rose-900 sm:mt-2 sm:text-sm"
                                    >
                                        homecarecoimbatore@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                    'Hello SK Home Care! I would like to enquire about your services.'
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-rose-900 px-3 py-2.5 text-[11px] font-bold text-white transition hover:bg-rose-800 sm:w-auto sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
                            >
                                <MessageCircle size={15} />
                                Contact Us on WhatsApp
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="min-w-0 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6 lg:p-8">
                        <div className="mb-4 sm:mb-7">
                            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-amber-700 sm:text-xs sm:tracking-[0.18em]">
                                Send an enquiry
                            </p>

                            <h2 className="mt-1.5 text-lg font-black text-rose-950 sm:mt-2 sm:text-2xl lg:text-3xl">
                                How Can We Help You?
                            </h2>

                            <p className="mt-2 text-[11px] leading-5 text-stone-600 sm:text-sm sm:leading-6">
                                Fill in your details below. Your enquiry will open in WhatsApp
                                so you can send it directly to our team.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                            {/* Name and Phone */}
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                                <div className="min-w-0">
                                    <label
                                        htmlFor="name"
                                        className="text-[11px] font-bold text-stone-700 sm:text-sm"
                                    >
                                        Full Name <span className="text-rose-800">*</span>
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Enter your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className={inputClass}
                                        required
                                        maxLength={100}
                                    />
                                </div>

                                <div className="min-w-0">
                                    <label
                                        htmlFor="phone"
                                        className="text-[11px] font-bold text-stone-700 sm:text-sm"
                                    >
                                        Phone Number <span className="text-rose-800">*</span>
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        inputMode="tel"
                                        placeholder="Enter phone number"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className={inputClass}
                                        required
                                        maxLength={20}
                                    />
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <label
                                    htmlFor="location"
                                    className="text-[11px] font-bold text-stone-700 sm:text-sm"
                                >
                                    Your Location
                                </label>

                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    autoComplete="address-level2"
                                    placeholder="Enter your area or city"
                                    value={form.location}
                                    onChange={handleChange}
                                    className={inputClass}
                                    maxLength={150}
                                />
                            </div>

                            {/* Service */}
                            <div>
                                <label
                                    htmlFor="service"
                                    className="text-[11px] font-bold text-stone-700 sm:text-sm"
                                >
                                    Service Required <span className="text-rose-800">*</span>
                                </label>

                                <select
                                    id="service"
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    className={inputClass}
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="Housemaid Services">Housemaid Services</option>
                                    <option value="Cooking Services">Cooking Services</option>
                                    <option value="Babysitter Services">Babysitter Services</option>
                                    <option value="Home Nursing">Home Nursing</option>
                                    <option value="Elderly Care">Elderly Care</option>
                                    <option value="Patient Caretaker">Patient Caretaker</option>
                                    <option value="Other Home Care Services">
                                        Other Home Care Services
                                    </option>
                                </select>
                            </div>

                            {/* Preferred Timing */}
                            <div>
                                <label
                                    htmlFor="timing"
                                    className="text-[11px] font-bold text-stone-700 sm:text-sm"
                                >
                                    Preferred Timing
                                </label>

                                <select
                                    id="timing"
                                    name="timing"
                                    value={form.timing}
                                    onChange={handleChange}
                                    className={inputClass}
                                >
                                    <option value="">Select preferred timing</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Day shift">Day shift</option>
                                    <option value="Night shift">Night shift</option>
                                    <option value="Flexible">Flexible</option>
                                </select>
                            </div>

                            {/* Additional Requirements */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="text-[11px] font-bold text-stone-700 sm:text-sm"
                                >
                                    Additional Requirements
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    placeholder="Tell us more about your requirements..."
                                    value={form.message}
                                    onChange={handleChange}
                                    className={`${inputClass} resize-y`}
                                    maxLength={1000}
                                />
                            </div>

                            {/* Error Message */}
                            {error && (
                                <p
                                    role="alert"
                                    className="rounded-lg bg-rose-50 px-3 py-2 text-[11px] font-medium text-rose-800 sm:text-sm"
                                >
                                    {error}
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-rose-900 px-3 py-3 text-xs font-bold text-white transition hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-800 focus:ring-offset-2 sm:gap-2 sm:px-5 sm:py-3.5 sm:text-base"
                            >
                                <Send size={15} />
                                Submit Enquiry via WhatsApp
                                <ArrowUpRight size={15} />
                            </button>

                            <p className="text-center text-[9px] leading-4 text-stone-500 sm:text-xs sm:leading-5">
                                WhatsApp will open with your enquiry details. Review the
                                message and press Send to submit it.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Google Maps */}
            <section className="px-3 pb-6 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 sm:rounded-3xl">
                    <iframe
                        title="SK Home Care location map"
                        src={mapEmbedUrl}
                        className="h-52 w-full border-0 sm:h-80 lg:h-[420px]"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />

                    <div className="flex flex-col justify-between gap-2 bg-white p-3 sm:flex-row sm:items-center sm:gap-3 sm:p-5">
                        <div>
                            <p className="text-xs font-extrabold text-rose-950 sm:text-base">
                                Where to Find Us?
                            </p>

                            <p className="mt-1 text-[10px] text-stone-500 sm:text-sm">
                                Gandhipuram, Coimbatore - 641012
                            </p>
                        </div>

                        <a
                            href={mapOpenUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-fit items-center gap-1 rounded-full border border-rose-200 px-3 py-2 text-[11px] font-bold text-rose-900 transition hover:bg-rose-50 sm:px-4 sm:text-sm"
                        >
                            Open in Google Maps
                            <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Areas Covered */}
            <section className="bg-amber-50 px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
                <div className="mx-auto max-w-7xl text-center">
                    <h2 className="text-lg font-black text-rose-950 sm:text-2xl lg:text-3xl">
                        Areas Covered
                    </h2>

                    <p className="mx-auto mt-2 max-w-5xl text-[11px] leading-6 text-stone-700 sm:mt-3 sm:text-sm sm:leading-8 lg:text-base">
                        Coimbatore, Erode, Tirupur, Madurai, Pollachi, Gobi, Trichy,
                        Chennai, Karur, Salem, Sathyamangalam, Mangalore, all over
                        Tamilnadu and Bengaluru.
                    </p>
                </div>
            </section>
        </main>
    )
}


import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Logo image
const logoImage = '/images/sk-home-care-logo.png'

// Local image paths.
// Ensure these files exist in public/images/icons/.
const iconImages = {
  whatsapp: '/images/icons/whatsapp.png',
  facebook: '/images/icons/facebook.png',
  youtube: '/images/icons/youtube.png',
  sms: '/images/icons/sms.png',
  location: '/images/icons/location.png',
  phone: '/images/icons/phone.png',
  email: '/images/icons/email.png',
  clock: '/images/icons/clock.png',
  privacy: '/images/icons/privacy.png',
  terms: '/images/icons/terms.png',
}

// Social media links
const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919944130912',
    image: iconImages.whatsapp,
    color: 'hover:bg-[#25D366]',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    image: iconImages.facebook,
    color: 'hover:bg-[#1877F2]',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    image: iconImages.youtube,
    color: 'hover:bg-[#FF0000]',
  },
  {
    name: 'SMS',
    href: 'sms:9944130912',
    image: iconImages.sms,
    color: 'hover:bg-amber-500',
  },
]

// Privacy Policy content
const privacySections = [
  {
    title: 'Information We Receive',
    text: 'When you contact SK Home Care, you may choose to provide details such as your name, phone number, email address, location, and care service requirements.',
  },
  {
    title: 'How Information Is Used',
    text: 'Information you provide may be used to respond to enquiries, understand your requirements, discuss available services, and communicate with you about your request.',
  },
  {
    title: 'Information Sharing',
    text: 'Personal information should only be shared when reasonably necessary to respond to your request, provide the requested service, or comply with applicable legal requirements.',
  },
  {
    title: 'Data Protection',
    text: 'We aim to handle personal information responsibly. Please avoid sending sensitive personal, medical, identity, or financial information through general enquiry channels unless it is necessary and an appropriate method has been provided.',
  },
  {
    title: 'Third-Party Services',
    text: 'Our website may link to external services, such as telephone, email, WhatsApp, or map services. Their use may be subject to the respective providers’ privacy policies.',
  },
  {
    title: 'Policy Updates and Contact',
    text: 'This policy may be updated when our practices change. For questions about privacy or personal information, please contact SK Home Care using the contact details provided on this website.',
  },
]

// Terms and Conditions content
const termsSections = [
  {
    title: 'Use of This Website',
    text: 'You may use this website to learn about SK Home Care and enquire about domestic care, cooking, babysitting, home nursing, elderly care, and patient care services.',
  },
  {
    title: 'Service Enquiries',
    text: 'Submitting an enquiry or contacting us does not automatically confirm a booking, guarantee candidate availability, or establish a service agreement. Details must be discussed and confirmed directly with SK Home Care.',
  },
  {
    title: 'Availability and Service Locations',
    text: 'Services and candidate availability may vary depending on the requested role, location, schedule, and other requirements. Service availability should be confirmed before making arrangements.',
  },
  {
    title: 'Information Accuracy',
    text: 'Visitors should provide accurate information when making enquiries. We aim to keep website information useful and current, but service details may change and should be confirmed directly.',
  },
  {
    title: 'External Links and Communication',
    text: 'This website may provide links to external platforms, including WhatsApp, email, telephone, and map services. Those platforms operate independently and may have their own terms and policies.',
  },
  {
    title: 'Changes and Contact',
    text: 'Website content and these terms may be updated when necessary. Please contact SK Home Care to clarify service details, arrangements, or questions before proceeding with a service.',
  },
]

// Reusable image-based icon.
// Images are constrained to their containers to prevent oversized icons.
  
function IconImage({ src, alt = '', className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden="true"
      className={`block h-5 w-5 shrink-0 object-contain ${ className } `}
      onError={(event) => {
        console.error('Image failed to load:', event.currentTarget.src)
      }}
    />
  )
}


// Privacy Policy / Terms and Conditions modal
function PolicyModal({ type, onClose }) {
  const isPrivacy = type === 'privacy'
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'
  const sections = isPrivacy ? privacySections : termsSections
  const icon = isPrivacy ? iconImages.privacy : iconImages.terms

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
        className="flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:max-h-[85vh] sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex shrink-0 items-center justify-between gap-3 bg-rose-950 px-4 py-3 text-white sm:px-6 sm:py-4">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/10 p-1 sm:h-10 sm:w-10 sm:rounded-xl">
              <IconImage
                src={icon}
                alt=""
                className="h-full w-full"
              />
            </span>

            <div className="min-w-0">
              <h2
                id="policy-modal-title"
                className="text-base font-bold sm:text-xl"
              >
                {title}
              </h2>

              <p className="mt-0.5 text-[11px] text-rose-100/75 sm:text-xs">
                SK Home Care
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close popup"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xl font-semibold text-white transition hover:bg-white/10"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-6">
          <p className="mb-4 text-xs leading-5 text-stone-600 sm:mb-5 sm:text-sm sm:leading-6">
            {isPrivacy
              ? 'This notice explains how information provided through enquiries to SK Home Care may be handled.'
              : 'Please read these general website terms before enquiring about or arranging services with SK Home Care.'}
          </p>

          <div className="space-y-4 sm:space-y-5">
            {sections.map((section, index) => (
              <div key={section.title}>
                <h3 className="text-sm font-bold leading-5 text-rose-950 sm:text-base">
                  {index + 1}. {section.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-stone-600 sm:text-sm sm:leading-6">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Notice */}
          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-3 sm:mt-6 sm:p-4">
            <p className="text-xs leading-5 text-stone-700 sm:text-sm sm:leading-6">
              <span className="font-bold text-rose-950">
                Need clarification?
              </span>{' '}
              Contact SK Home Care at{' '}
              <a
                href="tel:9944130912"
                className="font-semibold text-rose-900 underline underline-offset-2"
              >
                99441 30912
              </a>{' '}
              or email{' '}
              <a
                href="mailto:homecarecoimbatore@gmail.com"
                className="break-all font-semibold text-rose-900 underline underline-offset-2"
              >
                homecarecoimbatore@gmail.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex shrink-0 justify-end border-t border-stone-100 bg-white px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-lg bg-rose-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-rose-800 sm:w-auto"
          >
            Close
          </button>
        </div>
      </section>
    </div>
  )
}

// Main Footer
export default function Footer() {
  const [activePolicy, setActivePolicy] = useState(null)

  return (
    <>
      <footer className="overflow-hidden bg-[#24151b] text-white">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 px-4 py-8 min-[420px]:px-5 sm:px-6 sm:py-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8">

          {/* Brand and Description */}
          <div className="min-w-0 lg:col-span-2">
            <Link
              to="/"
              className="inline-flex max-w-full items-center gap-3"
            >
              <img
                src={logoImage}
                alt="SK Home Care logo"
                className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain p-1 sm:h-14 sm:w-14 sm:rounded-xl sm:p-1.5"
              />

              <span className="text-xl font-black tracking-tight min-[420px]:text-2xl sm:text-3xl">
                SK HOME CARE
              </span>
            </Link>

           

            

            
            {/* Social Links */}
            <div className="mt-5 sm:mt-6">
              <h3 className="text-sm font-bold text-white sm:text-base">
                Connect With Us
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                {socialLinks.map(({ name, href, image, color }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    title={name}
                    target={name === 'SMS' ? undefined : '_blank'}
                    rel={name === 'SMS' ? undefined : 'noopener noreferrer'}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white p-2 transition duration-300 hover:-translate-y-1 hover:border-transparent ${color}`}
                  >
                    <img
                      src={image}
                      alt={name}
                      onError={(event) => {
                        console.error(
                          `Failed to load ${name} icon:`,
                          event.currentTarget.src
                        )
                      }}
                      className="block h-6 w-6 shrink-0 object-contain"
                    />
                  </a>
                ))}
              </div>

              <p className="mt-2 text-[11px] leading-5 text-rose-100/55 sm:text-xs">
                WhatsApp, Facebook, YouTube and SMS
              </p>
            </div>
            
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-white sm:text-base">
              Quick Links
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-rose-100/75 sm:grid-cols-1 sm:text-sm">
              <Link to="/" className="w-fit transition hover:text-amber-300">
                Home
              </Link>

              <Link
                to="/about"
                className="w-fit transition hover:text-amber-300"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="w-fit transition hover:text-amber-300"
              >
                Our Services
              </Link>

              <Link
                to="/contact"
                className="w-fit transition hover:text-amber-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-white sm:text-base">
              Contact Address
            </h3>

            <div className="mt-3 space-y-3 text-xs leading-5 text-rose-100/75 sm:space-y-3.5 sm:text-sm sm:leading-6">

              {/* Address */}
              <p className="flex items-start gap-2">
                <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center overflow-hidden sm:mt-1">
                  <IconImage
                    src={iconImages.location}
                    alt=""
                    className="h-full w-full"
                  />
                </span>

                <span>
                  428, Malarvizhi Complex, 2nd Floor, Bata Showroom Upstairs,
                  Near Apoorva Hotel, 100 Feet Road, Gandhipuram, Coimbatore -
                  641012.
                </span>
              </p>

              {/* Phone Numbers */}
              <p className="flex items-start gap-2">
                <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center overflow-hidden sm:mt-1">
                  <IconImage
                    src={iconImages.phone}
                    alt=""
                    className="h-full w-full"
                  />
                </span>

                <span className="flex min-w-0 flex-wrap gap-x-1.5">
                  <a
                    href="tel:9944130912"
                    className="transition hover:text-amber-300"
                  >
                    99441 30912
                  </a>

                  <span>/</span>

                  <a
                    href="tel:8643002560"
                    className="transition hover:text-amber-300"
                  >
                    86430 02560
                  </a>
                </span>
              </p>

              {/* Email */}
              <p className="flex items-start gap-2">
                <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center overflow-hidden sm:mt-1">
                  <IconImage
                    src={iconImages.email}
                    alt=""
                    className="h-full w-full"
                  />
                </span>

                <a
                  href="mailto:homecarecoimbatore@gmail.com"
                  className="min-w-0 break-all transition hover:text-amber-300"
                >
                  homecarecoimbatore@gmail.com
                </a>
              </p>

              {/* Availability */}
              <p className="flex items-start gap-2">
                <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center overflow-hidden sm:mt-1">
                  <IconImage
                    src={iconImages.clock}
                    alt=""
                    className="h-full w-full"
                  />
                </span>

                <span>Full-time and part-time options</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
            <p className="text-[10px] leading-5 text-rose-100/60 min-[420px]:text-xs">
              Copyright © 2026 SK Homecare. Designed by Cyber Web Service.
            </p>

            {/* Policy Popup Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-semibold min-[420px]:gap-x-4 min-[420px]:text-xs sm:justify-end sm:gap-x-5 sm:text-sm">
              <button
                type="button"
                onClick={() => setActivePolicy('privacy')}
                className="inline-flex items-center gap-1.5 transition hover:text-amber-300"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden">
                  <IconImage
                    src={iconImages.privacy}
                    alt=""
                    className="h-full w-full"
                  />
                </span>

                Privacy Policy
              </button>

              <span className="text-white/25">|</span>

              <button
                type="button"
                onClick={() => setActivePolicy('terms')}
                className="inline-flex items-center gap-1.5 transition hover:text-amber-300"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden">
                  <IconImage
                    src={iconImages.terms}
                    alt=""
                    className="h-full w-full"
                  />
                </span>

                Terms &amp; Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Popup */}
      {activePolicy && (
        <PolicyModal
          type={activePolicy}
          onClose={() => setActivePolicy(null)}
        />
      )}
    </>
  )
}

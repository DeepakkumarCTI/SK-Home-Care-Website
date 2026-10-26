
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  ShieldCheck,
  UsersRound,
  PhoneCall,
} from 'lucide-react'

import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/content'

import { useState } from 'react'

import homepage from '../assets/images/homepage.jpg'

export default function Home() {

  const [activeImage, setActiveImage] = useState(0)

 
  return (
    <main className="min-h-screen overflow-hidden bg-white">
     
      
      {/* Hero Section */}
    
      
      <section className="relative isolate min-h-[480px] overflow-hidden bg-[#2a171e] text-center text-white sm:min-h-[560px] lg:min-h-[650px] xl:min-h-[700px] flex items-center justify-center">
        {/* Background Video */}
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/home-care-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Burgundy Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#241219]/80 via-[#381a27]/60 to-[#381a27]/55" />

        <div className="mx-auto flex w-full max-w-[1750px] flex-col items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          {/* Experience Badge */}
          <div className="inline-flex items-center justify-center gap-1.5 rounded-full border border-amber-200/30 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-amber-200 sm:gap-2 sm:px-4 sm:py-2 sm:text-xs sm:tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300 sm:h-2 sm:w-2" />
            Since 1995 · Coimbatore
          </div>

          {/* Main Heading */}
          <h1 className="mt-5 w-full text-2xl font-black leading-tight tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
            Home Care Services{' '}
            <span className="text-amber-300">in Coimbatore</span>
          </h1>

          {/* Service Description */}
          <p className="mt-4 max-w-6xl text-xs font-semibold leading-6 text-white/90 sm:text-base sm:leading-7 lg:text-xl">
            Background-Verified Housemaids, Home Cooks, Babysitters &amp; 24/7
            Home Nurses
          </p>

          {/* About Description */}
          <p className="mt-3 max-w-5xl text-xs leading-6 text-white/80 sm:text-sm sm:leading-7 lg:text-base">
            SK Home Care is one of the most trusted and experienced home care
            service agencies in Coimbatore, bringing over two decades of
            dedicated service to families across the city.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 min-[420px]:flex-row sm:w-auto sm:gap-4">
            <Link
              to="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-xs font-extrabold text-rose-950 transition hover:bg-amber-200 min-[420px]:w-auto sm:px-7 sm:text-sm"
            >
              Explore Our Services
              <ArrowRight size={16} />
            </Link>

            <a
              href="tel:9944130912"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/20 min-[420px]:w-auto sm:px-7 sm:text-sm"
            >
              <PhoneCall size={16} />
              99441 30912
            </a>
          </div>

          {/* Trust Features */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[10px] font-semibold text-white/85 sm:gap-x-6 sm:text-sm">
            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
              <ShieldCheck
                size={15}
                className="shrink-0 text-amber-300 sm:h-[18px] sm:w-[18px]"
              />
              Background-checked staff
            </span>

            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Clock3
                size={15}
                className="shrink-0 text-amber-300 sm:h-[18px] sm:w-[18px]"
              />
              Full &amp; part time
            </span>
          </div>
        </div>
      </section>
      
      
      {/* Tamil Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-50 via-white to-amber-100 px-3 py-5 sm:px-6 sm:py-9">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="relative overflow-hidden rounded-xl border border-amber-200 bg-white px-4 py-5 shadow-md shadow-amber-900/5 sm:rounded-2xl sm:px-8 sm:py-8 lg:px-12">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amber-100/70 sm:h-40 sm:w-40" />
            <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-rose-50 sm:h-36 sm:w-36" />

            <div className="relative flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-between lg:gap-10 lg:text-left">
              {/* Tamil Content */}
              <div className="min-w-0 max-w-4xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-rose-900 sm:gap-2 sm:px-4 sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 sm:h-2 sm:w-2" />
                  SK HOME CARE · SINCE 1995
                </span>

                <h2
                  lang="ta"
                  className="mt-3 text-xl font-black leading-snug text-rose-950 sm:mt-4 sm:text-3xl lg:text-4xl"
                >
                  வீட்டு வேலைக்கு ஆட்கள் தேவையா?
                </h2>

                <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-amber-500 sm:w-20 lg:mx-0" />

                <p
                  lang="ta"
                  className="mt-3 text-xs leading-6 text-stone-600 sm:mt-4 sm:text-base sm:leading-8"
                >
                  எங்களிடம் வீட்டு வேலைகள், குழந்தை பராமரிப்பு, சமையல், வீட்டு
                  நர்சிங், நோயாளி பராமரிப்பு ஆகியவற்றிற்கான நல்ல அனுபவமுள்ள
                  ஊழியர்கள் உள்ளனர்.
                </p>
              </div>

              {/* Call to Action */}
              <div className="flex w-full shrink-0 flex-col items-center gap-2.5 sm:w-auto sm:gap-3">
                <p
                  lang="ta"
                  className="text-xs font-semibold text-stone-600 sm:text-sm"
                >
                  தொடர்புக்கு இந்த எண்ணை அழைக்கவும்
                </p>

                <a
                  href="tel:9944130912"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-900 px-4 py-3 text-white shadow-lg shadow-rose-900/20 transition duration-300 hover:-translate-y-1 hover:bg-rose-800 hover:shadow-xl sm:min-w-[245px] sm:gap-3 sm:px-6 sm:py-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 transition group-hover:bg-white/25 sm:h-11 sm:w-11">
                    <PhoneCall size={19} className="sm:h-6 sm:w-6" />
                  </span>

                  <span className="text-left">
                    <span className="block text-[10px] font-medium text-rose-100 sm:text-xs">
                      Call us today
                    </span>
                    <span className="mt-0.5 block text-base font-extrabold tracking-wide sm:text-xl">
                      99441 30912
                    </span>
                  </span>
                </a>

                <p
                  lang="ta"
                  className="text-[10px] font-medium text-amber-800 sm:text-xs"
                >
                  உங்கள் தேவைக்கு எங்களைத் தொடர்புகொள்ளுங்கள்
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Experience Section */}
      <section className="bg-[#f8f5f1] px-3 py-7 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-5 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl sm:rounded-[2rem]">
            <img
              src={homepage}
              alt="Comfortable family home"
              loading="lazy"
              className="h-52 w-full object-cover sm:h-[350px] lg:h-[440px]"
            />
          </div>

          {/* About Content */}
          <div className="min-w-0">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-amber-700 sm:text-xs sm:tracking-[.2em]">
              Pioneers since 1995
            </p>

            <h2 className="mt-2 text-xl font-black leading-snug text-rose-950 sm:mt-3 sm:text-3xl lg:text-4xl">
              Pioneers in Domestic &amp; Elderly Care Services in Coimbatore
              Since 1995
            </h2>

            <p className="mt-3 text-xs leading-6 text-stone-600 sm:mt-4 sm:text-sm sm:leading-7 lg:text-base lg:leading-8">
              Whether you need full-time live-in assistance or part-time help,
              we specialize in placing thoroughly background-verified and
              experienced staff tailored to your household&apos;s needs.
            </p>

            {/* Experience Statistics */}
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-4">
              <div className="min-w-0 rounded-xl bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4">
                <UsersRound
                  className="text-amber-700"
                  size={21}
                />

                <p className="mt-2 text-xl font-black text-rose-950 sm:mt-3 sm:text-2xl">
                  10,000+
                </p>

                <p className="mt-1 text-[10px] text-stone-600 sm:text-sm">
                  Placements
                </p>
              </div>

              <div className="min-w-0 rounded-xl bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4">
                <BadgeCheck
                  className="text-amber-700"
                  size={21}
                />

                <p className="mt-2 text-sm font-black leading-5 text-rose-950 sm:mt-3 sm:text-lg">
                  Background-Checked
                </p>

                <p className="mt-1 text-[10px] text-stone-600 sm:text-sm">
                  Staff verification
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold leading-5 text-rose-900 transition hover:text-amber-700 sm:mt-6 sm:gap-2 sm:text-sm"
            >
              Read more about our journey and values
              <ArrowRight size={16} className="shrink-0 sm:h-[18px] sm:w-[18px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Call-to-Action */}
      <section className="bg-rose-950 px-4 py-7 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start justify-between gap-4 sm:gap-5 md:flex-row md:items-center">
          <div className="min-w-0">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-amber-300 sm:text-xs sm:tracking-[.2em]">
              We are here to help
            </p>

            <h2 className="mt-2 text-xl font-black leading-tight sm:text-3xl">
              Looking for home care support?
            </h2>

            <p className="mt-2 text-xs leading-6 text-white/70 sm:text-sm sm:leading-7">
              Contact us to discuss your household&apos;s requirements.
            </p>
          </div>

          <a
            href="tel:9944130912"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-xs font-extrabold text-rose-950 transition hover:bg-amber-200 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
          >
            <PhoneCall size={16} />
            Call 99441 30912
          </a>
        </div>
      </section>
    </main>
  )
}

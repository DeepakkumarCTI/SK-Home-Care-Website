
import {
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'

import SectionHeading from '../components/SectionHeading'

export default function About() {
  const trustCards = [
    {
      icon: UsersRound,
      title: 'Appointed 10,000+',
      text: 'Over 10,000 employees provided to customers.',
    },
    {
      icon: ShieldCheck,
      title: 'Background Checks',
      text: 'Candidate background and ID proof verification.',
    },
    {
      icon: HeartHandshake,
      title: 'Replacement Support',
      text: 'Replacement of candidates up to four times if clients are not satisfied.',
    },
    {
      icon: BadgeCheck,
      title: 'Since 1995',
      text: 'Experienced home care services in Coimbatore.',
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* About Hero Section */}
      
    
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-7 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-14"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
        }}
      >
        {/* Dark charcoal-burgundy overlay */}
        <div className="absolute inset-0 bg-[#241015]/50" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-amber-300 sm:text-xs sm:tracking-[0.2em]">
            About Us
          </p>

          <h1 className="mt-2 text-2xl font-black leading-tight sm:text-4xl lg:text-5xl">
            HOME CARE Since 1995
          </h1>

          <p className="mt-3 max-w-3xl text-xs leading-6 text-white/90 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            SK Home Care was established in the year 1995 at 428, Malarvizhi
            Complex, Coimbatore. This is the first company in Coimbatore
            exclusively for home care services.
          </p>
        </div>
      </section>
      

      {/* Our Journey Section */}
      <section className="px-3 py-7 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Company Information */}
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Our journey"
              title="Care, trust and experience"
            />

            <p className="mt-4 text-xs leading-6 text-stone-600 sm:text-sm sm:leading-7 lg:text-base lg:leading-8">
              We provide experienced candidates for elderly people (male /
              female), who can stay at the employers place and take care of
              them. We provide cooks, who can cook from morning till end of
              the day. They can also stay at the employer&apos;s house and
              cook as per the requirement of the employer. We can also provide
              domestic help and cooking assistants to various households.
            </p>

            <p className="mt-3 text-xs leading-6 text-stone-600 sm:mt-4 sm:text-sm sm:leading-7 lg:text-base lg:leading-8">
              We do a complete back ground check of our candidates and cross
              verify their ID Proofs and make sure that they are Clean,
              Hygienic, Presentable and are fully qualified for the required
              job before we place them. The candidates age group will be
              within 30 to 50 years. If our clients are not satisfied with
              the candidate we will be able to replace the candidates up to
              four times.
            </p>

            <p
              lang="ta"
              className="mt-3 text-xs leading-7 text-stone-600 sm:mt-4 sm:text-sm sm:leading-8 lg:text-base"
            >
              வீட்டு வேலையாட்கள், முழு நேர மற்றும் பகுதி நேர சமையல்காரர்கள்,
              சைவ சமையல்காரர்கள் , குழந்தை பராமரிப்பாளர்கள், வயதானவர்களுக்கு
              (ஆண் / பெண்) அவர்கள் இடத்தில் தங்கி அவர்களை கவனித்துக்கொள்ள
              அனுபவம் வாய்ந்த பணியாளர்களை நாங்கள் வழங்குகிறோம்.
            </p>
          </div>

          {/* Trust and Experience Cards */}
          <div className="grid content-start grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
            {trustCards.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="min-w-0 rounded-2xl border border-stone-100 bg-[#faf7f3] p-4 transition-shadow hover:shadow-md sm:rounded-3xl sm:p-5 lg:p-6"
                >
                  <Icon
                    size={22}
                    className="text-amber-700 sm:h-7 sm:w-7"
                  />

                  <h3 className="mt-3 text-sm font-extrabold leading-5 text-rose-950 sm:mt-4 sm:text-base lg:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-5 text-stone-600 sm:mt-2 sm:text-xs sm:leading-6 lg:text-sm">
                    {item.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Areas Covered Section */}
      <section className="bg-amber-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto w-full max-w-[1600px] text-center">
          <h2 className="text-lg font-black text-rose-950 sm:text-2xl lg:text-3xl">
            Areas Covered
          </h2>

          <p className="mx-auto mt-2 max-w-5xl text-[11px] leading-6 text-stone-700 sm:mt-3 sm:text-sm sm:leading-7 lg:text-base lg:leading-8">
            Coimbatore, Erode, Tirupur, Madurai, Pollachi, Gobi, Trichy,
            Chennai, Karur, Salem, Sathyamangalam, Mangalore, all over
            Tamilnadu and Bengaluru.
          </p>
        </div>
      </section>
    </main>
  )
}

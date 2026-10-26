
import { services } from '../data/content'

export default function Services() {
  console.log('Services data:', services)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-10 text-white sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url('/images/services-bg.jpg')",
        }}
      >
        {/* Dark burgundy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#241015]/90 via-[#241015]/75 to-[#241015]/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1600px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            Our Services
          </p>

          <h1 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
            Home Care Services in Coimbatore
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-white/90 sm:text-lg">
            Our services are arranged to suit your household&apos;s
            requirements, with full-time and part-time options depending on
            availability.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        {Array.isArray(services) && services.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.id || service.title || index}
                className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Service Image */}
                  <div className="h-64 overflow-hidden bg-stone-100 sm:h-full sm:min-h-72">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title || 'SK Home Care service'}
                        className="h-full w-full object-cover"
                        onError={(event) => {
                          console.error(
                            'Service image failed to load:',
                            service.title,
                            service.image
                          )
                          event.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="flex h-full min-h-64 items-center justify-center p-4 text-center text-sm text-stone-500">
                        Service image unavailable
                      </div>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
                      SK Home Care
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold text-rose-950">
                      {service.title || 'Home Care Service'}
                    </h2>

                    {service.subtitle && (
                      <p className="mt-2 font-semibold text-amber-700">
                        {service.subtitle}
                      </p>
                    )}

                    <p className="mt-4 text-sm leading-7 text-stone-600">
                      {service.description || ''}
                    </p>

                    {Array.isArray(service.details) &&
                      service.details.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {service.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="text-sm leading-6 text-stone-600"
                            >
                              <span className="mr-2 font-bold text-amber-700">
                                •
                              </span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center">
            <h2 className="text-xl font-bold text-rose-950">
              Services could not be loaded
            </h2>

            <p className="mt-2 text-stone-600">
              Please check the services export in src/data/content.js.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
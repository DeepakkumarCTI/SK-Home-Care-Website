
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ service }) {
  if (!service) return null

  return (
    <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-950/10">
      {/* Service Image */}
      <div className="flex h-56 items-center justify-center overflow-hidden bg-stone-50">
        <img
          src={service.image}
          alt={service.subtitle || service.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      {/* Service Details */}
      <div className="p-6">
        <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
          SK Home Care
        </p>

        <h3 className="mt-2 text-xl font-extrabold text-rose-950">
          {service.title}
        </h3>

        <p className="mt-3 line-clamp-4 text-sm leading-6 text-stone-600">
          {service.description}
        </p>

        <Link
          to="/services"
          className="mt-5 inline-flex items-center gap-2 font-bold text-rose-900 transition-colors hover:text-amber-700"
        >
          Read more
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  )
}

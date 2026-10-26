export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center"><p className={`mb-3 text-xs font-extrabold uppercase tracking-[.22em] ${light ? 'text-amber-300' : 'text-amber-700'}`}>{eyebrow}</p><h2 className={`text-3xl font-black tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-rose-950'}`}>{title}</h2>{description && <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 ${light ? 'text-rose-100/75' : 'text-stone-600'}`}>{description}</p>}</div>
}

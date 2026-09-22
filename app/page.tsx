import {
  ArrowUpRight,
  Mail,
  Play,
} from 'lucide-react'

const socials = [
  // { name: 'TikTok', mark: 'TT', handle: '@yourhandle', description: 'Short ideas, big energy.', className: 'bg-[#111827] text-white', href: 'https://tiktok.com' },
  // { name: 'Instagram', mark: 'IG', handle: '@yourhandle', description: 'Visual notes & daily life.', className: 'bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white', href: 'https://instagram.com' },
  { name: 'ហាងលក់ម៉ូតូ RPRU', mark: 'f', handle: 'ហាងលក់ម៉ូតូ RPRU', description: 'បង់រំលស់សុទ្ធ ទិញដាច់ វ៉ៃដូរ ទំនុកចិត្ត១០០%', className: 'bg-[#1877f2] text-white', href: 'https://www.facebook.com/profile.php?id=61571429474635' },
  { name: 'ហាងលក់ម៉ូតូ អភីអយូ', mark: 'f', handle: 'ហាងលក់ម៉ូតូ អភីអយូ', description: 'បង់រំលស់សុទ្ធ ទិញដាច់ វ៉ៃដូរ ទំនុកចិត្ត១០០%', className: 'bg-[#1877f2] text-white', href: 'https://www.facebook.com/profile.php?id=61590567216678' },
  { name: 'RPRU លក់ម៉ូតូគ្រប់ប្រភេទ', mark: 'f', handle: 'RPRU លក់ម៉ូតូគ្រប់ប្រភេទ', description: 'បង់រំលស់សុទ្ធ ទិញដាច់ វ៉ៃដូរ ទំនុកចិត្ត១០០%', className: 'bg-[#1877f2] text-white', href: 'https://www.facebook.com/profile.php?id=61594326855111' },
  // { name: 'YouTube', mark: 'YT', handle: 'Your Channel', description: 'Watch, learn, and explore.', className: 'bg-[#ff0033] text-white', href: 'https://youtube.com' },
  // { name: 'LinkedIn', mark: 'in', handle: 'Your Name', description: 'Work, ideas & progress.', className: 'bg-[#0a66c2] text-white', href: 'https://linkedin.com' },
  // { name: 'X / Twitter', mark: 'X', handle: '@yourhandle', description: 'Thoughts in real time.', className: 'bg-[#111827] text-white', href: 'https://x.com' },
]

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7fbfa] text-slate-950">
      <div className="pointer-events-none absolute -left-32 -top-40 size-[28rem] rounded-full bg-emerald-200/45 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-24 size-[30rem] rounded-full bg-sky-200/50 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-7 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Go to top">
            <span className="grid size-10 place-items-center rounded-2xl border-r-gray-950 text-sm font-bold text-black shadow-lg shadow-slate-900/10">RPRU</span>
            <span className="text-sm font-semibold tracking-tight">RPRU Social Link</span>
          </a>
          <a href="mailto:hello@example.com" className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur transition hover:border-emerald-300 hover:text-emerald-700 sm:flex">
            <Mail className="size-4" />
            RURP Company
          </a>
        </header>

        <section id="top" className="mx-auto flex w-full max-w-3xl flex-col items-center pb-14 pt-20 text-center sm:pt-28">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-emerald-500" />
            Let&apos;s connect
          </div>
          <h1 className="max-w-2xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-slate-950 sm:text-7xl">
            RPRU <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">Pawn Shop</span>
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
            ក្រុមហ៊ុន RPRU Pawn Shop ចុចខាងក្រោមលីងដើម្បី Like & Follow❤️🙏 </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
            <div className="flex -space-x-2">
              <span className="grid size-8 place-items-center rounded-full border-2 border-[#f7fbfa] bg-emerald-500 text-[10px] font-bold text-white">IG</span>
              <span className="grid size-8 place-items-center rounded-full border-2 border-[#f7fbfa] bg-sky-500 text-[10px] font-bold text-white">TT</span>
              <span className="grid size-8 place-items-center rounded-full border-2 border-[#f7fbfa] bg-slate-900 text-[10px] font-bold text-white">YT</span>
            </div>
            <span>RPRU Pawn Shop</span>
          </div>
        </section>

        <section aria-labelledby="social-links-heading" className="pb-20">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">My spaces</p>
              <h2 id="social-links-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Choose your platform</h2>
            </div>
            {/* <span className="hidden text-sm text-slate-400 sm:block">6 places to connect</span> */}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socials.map((social) => {
              return (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="group flex min-h-44 flex-col justify-between rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-5 shadow-sm shadow-slate-900/[0.03] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/[0.08]">
                  <div className="flex items-start justify-between">
                    <span className={`grid size-11 place-items-center rounded-2xl text-sm font-bold shadow-sm ${social.className}`}>{social.mark}</span>
                    <ArrowUpRight className="size-5 text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">{social.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{social.description}</p>
                    <p className="mt-3 text-xs font-semibold text-emerald-600">{social.handle}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        <footer className="mt-auto flex flex-col gap-3 border-t border-slate-200/80 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 RPRU Social Link</span>
          <span className="flex items-center gap-2"><Play className="size-3 fill-emerald-500 text-emerald-500" /> ចុចលីងដើម្បី Like & Follow</span>
        </footer>
      </div>
    </main>
  )
}

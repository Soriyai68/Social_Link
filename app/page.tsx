import {
  ArrowUpRight,
  Mail,
  Play,
} from 'lucide-react'

const socials = [
  {
    name: 'ហាងលក់ម៉ូតូ RPRU',
    platform: 'facebook',
    mark: '/images/rpru-moto.png',
    handle: 'ហាងលក់ម៉ូតូ RPRU',
    description: 'បង់រំលស់សុទ្ធ ទិញដាច់ វ៉ៃដូរ ទំនុកចិត្ត១០០%',
    href: 'https://www.facebook.com/profile.php?id=61571429474635',
  },

  {
    name: 'ហាងលក់ម៉ូតូ អភីអយូ',
    platform: 'facebook',
    mark: '/images/apiu-moto.png',
    handle: 'ហាងលក់ម៉ូតូ អភីអយូ',
    description: 'បង់រំលស់សុទ្ធ ទិញដាច់ វ៉ៃដូរ ទំនុកចិត្ត១០០%',
    href: 'https://www.facebook.com/profile.php?id=61590567216678',
  },

  {
    name: 'RPRU លក់ម៉ូតូគ្រប់ប្រភេទ',
    platform: 'facebook',
    mark: '/images/rpru-all-moto.png',
    handle: 'RPRU លក់ម៉ូតូគ្រប់ប្រភេទ',
    description: 'បង់រំលស់សុទ្ធ ទិញដាច់ វ៉ៃដូរ ទំនុកចិត្ត១០០%',
    href: 'https://www.facebook.com/profile.php?id=61594326855111',
  },

  {
    name: 'ប្រេង កន្ទក់ សុខៈ អភីអយូ ឯ.ក',
    platform: 'facebook',
    mark: '/images/sokhak-oil.png',
    handle: 'ប្រេង កន្ទក់ សុខៈ អភីអយូ ឯ.ក',
    description: 'រោងចក្រប្រេងកន្ទក់ ខេត្តបាត់ដំបង (កម្ពុជា)',
    href: 'https://www.facebook.com/profile.php?id=61557318112205',
  },

  {
    name: 'ប្រេងកន្ទក់សុខៈ អភីអយូ',
    platform: 'facebook',
    mark: '/images/sokhak-oil-2.png',
    handle: 'ប្រេងកន្ទក់សុខៈ អភីអយូ',
    description: 'រោងចក្រប្រេងកន្ទក់ ខេត្តបាត់ដំបង (កម្ពុជា)',
    href: 'https://www.facebook.com/profile.php?id=61590380654532',
  },

  {
    name: 'Sokhak Rice Bran Oil',
    platform: 'facebook',
    mark: '/images/sokhak-rice-bran-oil.png',
    handle: 'Sokhak Rice Bran Oil',
    description: 'រោងចក្រប្រេងកន្ទក់ ខេត្តបាត់ដំបង (កម្ពុជា)',
    href: 'https://www.facebook.com/profile.php?id=61590593855380',
  },

  {
    name: 'ប្រេងកន្ទក់សុខៈ អភីអយូ ឯ.ក',
    platform: 'tiktok',
    mark: '/images/sokhak-tiktok.png',
    handle: 'ប្រេងកន្ទក់សុខៈ អភីអយូ ឯ.ក',
    description: 'រោងចក្រប្រេងកន្ទក់ ខេត្តបាត់ដំបង (កម្ពុជា)',
    href: 'https://www.tiktok.com/@prengkanthuksokhak',
  },

  {
    name: 'sokhakoilcambodia',
    platform: 'instagram',
    mark: '/images/sokhak-instagram.png',
    handle: 'sokhakoilcambodia',
    description: 'រោងចក្រប្រេងកន្ទក់ ខេត្តបាត់ដំបង (កម្ពុជា)',
    href: 'https://www.instagram.com/sokhakoilcambodia/',
  },

  {
    name: 'ប្រេងកន្ទក់សុខៈអភីអយូ Official',
    platform: 'youtube',
    mark: '/images/sokhak-youtube.png',
    handle: 'ប្រេងកន្ទក់សុខៈអភីអយូ Official',
    description: 'រោងចក្រប្រេងកន្ទក់ ខេត្តបាត់ដំបង (កម្ពុជា)',
    href: 'https://youtube.com/channel/UCUY4ZTOOpiCYDM6yrQwJFRg',
  },

  {
    name: 'RPRU Pawn Shop Co.,Ltd',
    platform: 'facebook',
    mark: '/images/rpru-pawn.png',
    handle: 'RPRU Pawn Shop Co.,Ltd',
    description:
      'ក្រុមហ៊ុន អភីអយូ ផន សប ឯ.ក ខេត្តបាត់ដំបង (កម្ពុជា)',
    href: 'https://www.facebook.com/profile.php?id=61586799414222',
  },

  {
    name: 'RPRU Pawn Shop Co.,Ltd',
    platform: 'tiktok',
    mark: '/images/rpru-pawn-tiktok.png',
    handle: 'RPRU Pawn Shop Co.,Ltd',
    description:
      'ក្រុមហ៊ុន អភីអយូ ផន សប ឯ.ក ខេត្តបាត់ដំបង (កម្ពុជា)',
    href: 'https://www.tiktok.com/@rpru_pawn_shop',
  },
]

/*
|--------------------------------------------------------------------------
| Platform Icons
|--------------------------------------------------------------------------
*/

const platformIcons = {
  facebook: '/icons/facebook.svg',
  tiktok: '/icons/tiktok.svg',
  instagram: '/icons/instagram.svg',
  youtube: '/icons/youtube.svg',
}


const platformNames = {
  facebook: 'Facebook',
  tiktok: 'TikTok',
  instagram: 'Instagram',
  youtube: 'YouTube',
}

export default function Page() {
  return (
    <main
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#f7fbfa] text-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-40 size-[28rem] rounded-full bg-emerald-200/45 blur-3xl" />

      <div className="pointer-events-none absolute right-[-10rem] top-24 size-[30rem] rounded-full bg-sky-200/50 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-7 sm:px-8 lg:px-12">

        <header className="flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Go to top"
          >
            {/* <span className="grid size-10 place-items-center rounded-2xl bg-white text-sm font-bold text-black shadow-lg shadow-slate-900/10">
              RPRU
            </span> */}

            <span className="grid size-10 place-items-center rounded-2xl shadow-lg shadow-slate-900/10">
              <img
                src="/rpru-pawn.png"
                alt="RPRU Logo"
              // className="size-6 rounded-2xl object-cover"
              />
            </span>


            <span className="text-sm font-semibold tracking-tight">
              RPRU Social Link
            </span>
          </a>

          <a
            href="mailto:hello@example.com"
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur transition hover:border-emerald-300 hover:text-emerald-700 sm:flex"
          >
            <Mail className="size-4" />
            RPRU Company
          </a>
        </header>

        <section
          id="hero"
          className="mx-auto flex w-full max-w-3xl flex-col items-center pb-14 pt-20 text-center sm:pt-28"
        >
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-emerald-500" />

            Let's connect
          </div>

          {/* Title */}
          <h1 className="max-w-2xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-slate-950 sm:text-7xl">
            RPRU{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
              Pawn Shop
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
            ក្រុមហ៊ុន RPRU Pawn Shop ចុចលីងខាងក្រោមដើម្បី Like & Follow ❤️🙏
          </p>

          {/* Small platform indicators */}
          <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
            <div className="flex -space-x-2">
              <span className="grid size-8 place-items-center rounded-full border-2 border-[#f7fbfa]font-bold text-white">
                <image src="/icons/facebook.svg" alt="Facebook" className="size-4 object-contain" />
              </span>

              <span className="grid size-8 place-items-center rounded-full border-2 border-[#f7fbfa] text-[10px] font-bold text-white">
                <image src="/icons/instagram.svg" alt="Instagram" className="size-4 object-contain" />

              </span>

              <span className="grid size-8 place-items-center rounded-full border-2 border-[#f7fbfa] text-[10px] font-bold text-white">
                <image src="/icons/youtube.svg" alt="YouTube" className="size-4 object-contain" />
              </span>
            </div>

            <span>RPRU Pawn Shop Co.,Ltd </span>
          </div>
        </section>

        {/* =========================================================
            SOCIAL LINKS
        ========================================================= */}

        <section
          aria-labelledby="social-links-heading"
          className="pb-20"
        >
          {/* Section heading */}
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
                {/* My spaces */}
                បណ្តាញសង្គម
              </p>

              <h2
                id="social-links-heading"
                className="mt-2 text-2xl font-semibold tracking-tight text-slate-900"
              >
                {/* Choose your platform */}
                សូមជ្រើសរើសបណ្តាញសង្គមខាងក្រោម
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socials.map((social, index) => {
              const platformIcon =
                platformIcons[social.platform]

              const platformName =
                platformNames[social.platform]

              return (
                <a
                  key={`${social.name}-${social.platform}-${index}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${social.name} on ${platformName}`}
                  className="group flex min-h-44 flex-col justify-between rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-5 shadow-sm shadow-slate-900/[0.03] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/[0.08]"
                >

                  {/* =====================================================
                      CARD TOP
                  ===================================================== */}

                  <div className="flex items-start justify-between">

                    {/* Image + platform icon */}
                    <div className="relative size-16">

                      {/* Main image */}
                      <div className="h-full w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/70">
                        <img
                          src={social.mark}
                          alt={social.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>

                      {/* Center platform icon */}
                      <div className="absolute inset-0 grid place-items-center">
                        {/* <div className="grid size-9 place-items-center rounded-full bg-white/95 shadow-lg ring-2 ring-white/80 backdrop-blur">

                          <img
                            src={platformIcon}
                            alt={platformName}
                            className="size-5 object-contain"
                          />

                        </div> */}
                      </div>

                    </div>

                    {/* Arrow */}
                    <ArrowUpRight className="size-5 text-slate-300 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-500" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">

                      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                        {social.name}
                      </h3>

                    </div>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {social.description}
                    </p>

                    <div className="mt-3 flex items-center gap-2">

                      {/* Small platform icon */}
                      <img
                        src={platformIcon}
                        alt=""
                        className="size-4 object-contain"
                      />

                      <p className="text-xs font-semibold text-emerald-600">
                        {social.handle}
                      </p>

                    </div>
                  </div>

                </a>
              )
            })}
          </div>
        </section>

        <footer className="mt-auto flex flex-col gap-3 border-t border-slate-200/80 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © 2026 RPRU Social Link
          </span>

          <span className="flex items-center gap-2">
            <Play className="size-3 fill-emerald-500 text-emerald-500" />

            ចុចលីងដើម្បី Like & Follow
          </span>

        </footer>

      </div>
    </main>
  )
}


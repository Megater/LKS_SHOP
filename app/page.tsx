import Image from 'next/image';
import Link from 'next/link';
import { teko, inder } from '@/app/fonts';
import { client } from '@/sanity/lib/client';
import {
  Users,
  Trophy,
  Target,
  Shield,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Award,
  Activity,
  CheckCircle2,
  ShoppingBag,
  TrendingUp,
  MapPin,
  Clock,
  Layers,
  Smartphone,
  Flame,
  Calendar,
} from 'lucide-react';

export const revalidate = 60; // Odświeżanie danych z Sanity co minutę

interface HeroEvent {
  title?: string;
  badge?: string;
  season?: string;
  description?: string;
  isActive?: boolean;
}

async function getHeroEvent(): Promise<HeroEvent | null> {
  try {
    const query = `coalesce(
      *[_id in ["heroEvent", "drafts.heroEvent"]][0],
      *[_type == "heroEvent"] | order(_updatedAt desc)[0]
    ) {
      title,
      badge,
      season,
      description,
      isActive
    }`;
    const data = await client.fetch<HeroEvent | null>(query);
    return data;
  } catch (error) {
    console.error('Błąd pobierania wydarzenia z Sanity:', error);
    return null;
  }
}

export default async function Home() {
  const sanityHeroEvent = await getHeroEvent();

  const hasActiveEvent = Boolean(
    sanityHeroEvent &&
    sanityHeroEvent.isActive !== false &&
    sanityHeroEvent.title &&
    sanityHeroEvent.title.trim().length > 0
  );

  const heroEvent = hasActiveEvent
    ? {
        badge: sanityHeroEvent?.badge || 'Ważne wydarzenie',
        season: sanityHeroEvent?.season || '',
        title: sanityHeroEvent?.title || '',
        description: sanityHeroEvent?.description || '',
      }
    : null;

  const teams = [
    {
      name: 'Rocznik 2011/12',
      coach: 'Norbert Korczak',
      role: 'Trener główny',
      players: 21,
      badge: 'U-14 / U-13',
    },
    {
      name: 'Rocznik 2013/14',
      coach: 'Sebastian Kruszewski',
      role: 'Trener główny',
      players: 16,
      badge: 'U-12 / U-11',
    },
    {
      name: 'Rocznik 2015/16',
      coach: 'Norbert Korczak',
      role: 'Trener główny',
      players: 20,
      badge: 'U-10 / U-9',
    },
    {
      name: 'Rocznik 2016/17',
      coach: 'Piotr Wacławek',
      role: 'Trener główny',
      players: 24,
      badge: 'U-9 / U-8',
    },
    {
      name: 'Rocznik 2018',
      coach: 'Sebastian Korczak',
      assistant: 'Mikołaj Tomaszewski (asystent)',
      role: 'Trener główny + Asystent',
      players: 20,
      badge: 'U-7',
    },
    {
      name: 'Rocznik 2019',
      coach: 'Sebastian Korczak',
      role: 'Trener główny',
      players: 15,
      badge: 'U-6',
    },
    {
      name: 'Rocznik 2020/21 A',
      coach: 'Łukasz Dusza',
      role: 'Trener główny',
      players: 11,
      badge: 'Skrzaty A',
    },
    {
      name: 'Rocznik 2020/21 B',
      coach: 'Łukasz Dusza',
      role: 'Trener główny',
      players: 13,
      badge: 'Skrzaty B',
    },
  ];

  const leadership = [
    {
      title: 'Skarbnik Klubu',
      name: 'Justyna Płodzik',
      desc: 'Finanse, budżet oraz nadzór nad stabilnością ekonomiczną',
      accent: 'border-green-500/50',
    },
    {
      title: 'Prezes Klubu',
      name: 'Jacek Kuczek',
      desc: 'Zarządzanie strategiczne i reprezentacja stowarzyszenia',
      accent: 'border-red-500/50',
    },
    {
      title: 'Koordynator Szkolenia',
      name: 'Norbert Korczak',
      desc: 'Kierunek szkoleniowy, organizacja struktur i metodyka akademii',
      accent: 'border-green-500/50',
    },
  ];

  const coaches = [
    {
      name: 'Norbert Korczak',
      roles: ['Koordynator', 'Trener zespołów 2011/12 i 2015/16'],
      highlight: true,
    },
    {
      name: 'Sebastian Kruszewski',
      roles: ['Trener zespołu 2013/14'],
      highlight: false,
    },
    {
      name: 'Piotr Wacławek',
      roles: ['Trener zespołu 2016/17'],
      highlight: false,
    },
    {
      name: 'Sebastian Korczak',
      roles: ['Trener zespołów 2018 i 2019'],
      highlight: false,
    },
    {
      name: 'Łukasz Dusza',
      roles: ['Trener zespołów 2020 i 2021'],
      highlight: false,
    },
    {
      name: 'Eryk Mazek',
      roles: ['Trener bramkarzy'],
      highlight: false,
    },
    {
      name: 'Mikołaj Tomaszewski',
      roles: ['Trener asystent rocznika 2018'],
      highlight: false,
    },
  ];

  const growthItems = [
    {
      title: 'Grupy treningowe',
      before: '2 grupy',
      now: '8 grup treningowych',
      icon: Users,
    },
    {
      title: 'Liczba zawodników',
      before: '30 zawodników',
      now: '140 zawodników i zawodniczek',
      icon: Activity,
    },
    {
      title: 'Sztab trenerski',
      before: '2 trenerów',
      now: '7 wykwalifikowanych trenerów',
      icon: Award,
    },
    {
      title: 'Zespoły ligowe',
      before: '1 zespół ligowy',
      now: '7 zespołów ligowych',
      icon: Trophy,
    },
    {
      title: 'System komunikacji',
      before: 'Zwykły komunikator',
      now: 'Dedykowana strona internetowa',
      icon: Smartphone,
    },
    {
      title: 'Infrastruktura boiskowa',
      before: '1 boisko w słabym stanie',
      now: 'Świetna murawa główna + boisko boczne (żak 5v5)',
      icon: Layers,
    },
  ];

  const timelineEvents = [
    {
      year: '2003',
      title: 'Powstanie Klubu',
      desc: 'Za rok założenia klubu uznaje się 2003 rok. Był to początek piłkarskiej tradycji LKS Pniewy i budowy tożsamości sportowej w gminie.',
      badge: 'Początki',
    },
    {
      year: '2006/07 – 2014/15',
      title: 'Rozgrywki Seniorskie ROZPN',
      desc: 'Wieloletnie regularne występy drużyny seniorskiej w oficjalnych rozgrywkach ligowych Radomskiego Okręgowego Związku Piłki Nożnej.',
      badge: 'Liga ROZPN',
    },
    {
      year: '2010/11',
      title: 'Historyczny Awans do Klasy A',
      desc: 'Świetny sezon i upragniony awans z Klasy B do Klasy A, który wywołał falę entuzjazmu wśród lokalnej społeczności.',
      badge: 'Awans',
    },
    {
      year: '2011/12',
      title: 'Wicemistrzostwo i Baraże o Ligę Okręgową',
      desc: 'Wicemistrzostwo Klasy A i pasjonujące baraże o wejście do ligi okręgowej. Zacięte mecze utrzymały zespół na szczeblu Klasy A.',
      badge: 'Baraże',
    },
    {
      year: '2014/15',
      title: 'Zawieszenie Sekcji Seniorskiej',
      desc: 'Drużyna seniorów po sezonie 2014/15 zakończyła występy ligowe. Klub skupił się na przetrwaniu i prowadzeniu sekcji juniorskich.',
      badge: 'Przełom',
    },
    {
      year: '2022',
      title: 'Nowa Era i Eksplozja Młodzieży',
      desc: 'Prawdziwy renesans piłki młodzieżowej! Przebudowa struktur, powiększenie sztabu, skok z 30 do 140 dzieci i profesjonalizacja.',
      badge: 'Renesans',
    },
    {
      year: '2027',
      title: 'Wielki Powrót Seniorów & Rozbudowa Bazy',
      desc: 'Po 12 latach przerwy powrót do ligi seniorskiej! Jednocześnie baza w Załężu Dużym zyska Orlik, boisko wielofunkcyjne i nowe szatnie.',
      badge: 'Przyszłość',
    },
  ];

  const futureGoals = [
    {
      number: '01',
      title: 'Zdrowie i sprawność dzieci z Gminy Pniewy',
      text: 'Chcemy dbać o zdrowie, kondycję i harmonijny rozwój najmłodszych mieszkańców poprzez profesjonalne treningi piłki nożnej, ćwiczenia wzmacniające, ogólnorozwojowe i przede wszystkim radość ze sportu.',
      icon: Activity,
    },
    {
      number: '02',
      title: 'Czołowe środowisko rozwoju i trampolina do akademii',
      text: 'Budujemy jedno z najlepszych środowisk piłkarskiego rozwoju w regionie. Dążymy do roli klubu przejściowego, który przygotowuje i wprowadza najzdolniejszych zawodników prosto do największych akademii w Polsce.',
      icon: Target,
    },
    {
      number: '03',
      title: 'Seniorska piłka oparta na własnych wychowankach',
      text: 'Nasz powrót do rozgrywek seniorskich po 12 latach przerwy oprzemy głównie na młodych, ambitnych piłkarzach z naszej gminy, tworząc naturalną ścieżkę awansu od skrzata do seniora.',
      icon: Trophy,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0C10] text-neutral-100 selection:bg-green-500 selection:text-black">
      
      {/* Subtelne tło ze stadionowym światłem */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-green-500/10 blur-[150px]" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-red-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10">

        {/* ===================== HERO SECTION (STYL FOOTY LIVE) ===================== */}
        <section className="relative overflow-hidden border-b border-white/10 pt-10 pb-16 sm:pt-14 sm:pb-24">
          
          {/* Zdjęcie stadionu w tle z dynamiczną ciemną nakładką */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/galeria/IMG20260929163155.jpg"
              alt="Boisko główne LKS Pniewy"
              fill
              priority
              className="object-cover object-center opacity-30 filter brightness-90"
              sizes="100vw"
            />
            {/* Wektorowy gradient SVG - zabezpieczenie dla trybów ciemnych */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="hero-footy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0A0C10" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#0A0C10" stopOpacity="0.80" />
                  <stop offset="100%" stopColor="#0A0C10" stopOpacity="0.92" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" fill="url(#hero-footy-grad)" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              
              {/* Herb - na telefonie na samej górze (order-1), na komputerze po prawej (lg:order-2) */}
              <div className="order-1 flex items-center justify-center lg:order-2 lg:col-span-5">
                <div className="relative flex flex-col items-center rounded-2xl border border-white/10 bg-[#11141C]/90 backdrop-blur-md p-6 sm:p-10 shadow-2xl transition-all duration-300">
                  
                  {/* Efekt poświaty herbu */}
                  <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-500/20 via-transparent to-red-500/20 blur-xl opacity-75" />

                  <div className="relative h-40 w-40 sm:h-52 sm:w-52 drop-shadow-2xl transition-transform duration-300">
                    <Image
                      src="/herb.png"
                      alt="Herb LKS Pniewy"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>

                  <div className="mt-5 text-center relative z-10">
                    <div className={`${teko.className} flex items-center justify-center gap-2 text-3xl sm:text-4xl font-black tracking-wider uppercase leading-none`}>
                      <span className="text-green-400">LKS</span>
                      <span className="text-red-500">PNIEWY</span>
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-neutral-400 font-bold">
                      Duma Gminy Pniewy • Od 2003
                    </p>
                    <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold text-neutral-300">
                      <MapPin className="h-3.5 w-3.5 text-red-500" />
                      <span>Baza: Załęże Duże</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tekst - na telefonie pod herbem (order-2), na komputerze po lewej (lg:order-1) */}
              <div className="order-2 space-y-6 text-center lg:order-1 lg:col-span-7 lg:text-left">
                
                {/* Klubowy tag */}
                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-1.5 shadow-xs">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-green-300">
                    GMINNY KLUB PIŁKARSKI • ROK ZAŁ. 2003
                  </span>
                </div>

                {/* Tytuł główny w stylu FOOTY LIVE */}
                <div className="space-y-1">
                  <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-400">
                    PASJA. CHARAKTER. DUMA.
                  </span>
                  <h1 className={`${teko.className} text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-md`}>
                    LUDOWY KLUB SPORTOWY <span className="text-green-400">LKS </span><span className="text-red-500">PNIEWY</span>
                  </h1>
                </div>

                <p className={`${inder.className} max-w-2xl text-sm sm:text-base text-neutral-300 leading-relaxed mx-auto lg:mx-0`}>
                  LKS Pniewy to serce sportowej pasji w naszej gminie. Szkolimy{' '}
                  <strong className="text-white font-bold">140 młodych zawodników i zawodniczek</strong> z roczników{' '}
                  <strong className="text-green-400 font-bold">2011–2021</strong> w 8 prężnie rozwijających się grupach.
                </p>

                {/* Wyróżniony komunikat / Ważne wydarzenie (zarządzane z Sanity CMS) */}
                {heroEvent && (
                  <div className="group relative overflow-hidden rounded-2xl border border-red-500/30 bg-[#12151D] p-5 shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-md">
                        <Flame className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          {heroEvent.badge && (
                            <span className="inline-block rounded-md bg-red-600 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
                              {heroEvent.badge}
                            </span>
                          )}
                          {heroEvent.season && (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-400">
                              {heroEvent.season}
                            </span>
                          )}
                        </div>
                        <h3 className={`${teko.className} text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-1 leading-tight`}>
                          {heroEvent.title}
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                          {heroEvent.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Przyciski w stylu FOOTY LIVE (zielony pill button) */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <Link
                    href="/sklep"
                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-black shadow-lg shadow-green-500/20 transition-all hover:bg-green-400 hover:scale-105 active:scale-95"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Oficjalny Sklep Klubowy</span>
                  </Link>

                  <a
                    href="#druzyny"
                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
                  >
                    <span>Zobacz Roczniki</span>
                    <ChevronRight className="h-4 w-4 text-green-400" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ===================== KLUCZOWE LICZBY (MATCH SPOTLIGHT STATS) ===================== */}
        <section className="border-b border-white/10 bg-[#0C0E14] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              
              {/* Liczba 1 */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#11141C] p-6 text-center shadow-lg transition-all hover:border-green-500/40">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                  <Users className="h-5 w-5" />
                </div>
                <span className={`${teko.className} text-5xl sm:text-6xl font-black text-green-400 leading-none`}>
                  140
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white mt-1">
                  Zawodników
                </span>
                <span className="text-[11px] text-neutral-400 mt-0.5">Wzrost z 30 w 2022 roku</span>
              </div>

              {/* Liczba 2 */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#11141C] p-6 text-center shadow-lg transition-all hover:border-white/30">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white">
                  <Trophy className="h-5 w-5" />
                </div>
                <span className={`${teko.className} text-5xl sm:text-6xl font-black text-white leading-none`}>
                  8
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white mt-1">
                  Grup Wychowawczych
                </span>
                <span className="text-[11px] text-neutral-400 mt-0.5">Roczniki od 2011 do 2021</span>
              </div>

              {/* Liczba 3 */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#11141C] p-6 text-center shadow-lg transition-all hover:border-red-500/40">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Flame className="h-5 w-5" />
                </div>
                <span className={`${teko.className} text-5xl sm:text-6xl font-black text-red-500 leading-none`}>
                  2027
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white mt-1">
                  Powrót Seniorów
                </span>
                <span className="text-[11px] text-neutral-400 mt-0.5">Po 12 latach przerwy</span>
              </div>

              {/* Liczba 4 */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#11141C] p-6 text-center shadow-lg transition-all hover:border-yellow-500/40">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                  <Clock className="h-5 w-5" />
                </div>
                <span className={`${teko.className} text-5xl sm:text-6xl font-black text-yellow-400 leading-none`}>
                  2003
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white mt-1">
                  Rok Założenia
                </span>
                <span className="text-[11px] text-neutral-400 mt-0.5">Ponad 20 lat tradycji</span>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== DYNAMICZNY ROZWÓJ KLUBU (2022 vs 2026 + 2027) ===================== */}
        <section id="rozwoj" className="border-b border-white/10 bg-[#080A0F] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Nagłówek sekcji z liniami w stylu FOOTY LIVE */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="h-px w-10 sm:w-16 bg-green-500/50" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-green-400">
                  SKOK JAKOŚCIOWY I ORGANIZACYJNY
                </span>
                <div className="h-px w-10 sm:w-16 bg-green-500/50" />
              </div>
              <h2 className={`${teko.className} text-4xl sm:text-6xl font-black uppercase tracking-tight text-white`}>
                ROZWÓJ KLUBU NA KAŻDYM POLU
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400">
                Od 2022 roku LKS Pniewy przeszedł bezprecedensowy rozwój. Zobacz, jak wzrosła nasza społeczność, zaplecze i poziom szkolenia.
              </p>
            </div>

            {/* Karty porównawcze 2022 -> 2026 w stylu FOOTY LIVE Match Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {growthItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#11141C] p-5 shadow-lg transition-all hover:border-green-500/40 hover:bg-[#141822]"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                          {item.title}
                        </span>
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-green-400">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="mt-4 space-y-2.5">
                        {/* 2022 */}
                        <div className="flex items-center justify-between rounded-xl bg-black/40 px-3.5 py-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                            Stan w 2022
                          </span>
                          <span className="text-xs font-semibold text-neutral-400">
                            {item.before}
                          </span>
                        </div>

                        {/* Strzałka w dół */}
                        <div className="flex justify-center text-green-400">
                          <ChevronRight className="h-4 w-4 rotate-90" />
                        </div>

                        {/* 2026 */}
                        <div className="flex items-center justify-between rounded-xl border border-green-500/30 bg-green-950/25 px-3.5 py-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-green-400">
                            Stan w 2026
                          </span>
                          <span className="text-xs font-extrabold text-white text-right">
                            {item.now}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inwestycja 2027: Baza w Załężu Dużym */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#11141C] p-6 sm:p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-green-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    Inwestycje w Infrastrukturę • Rok 2027
                  </div>
                  <h3 className={`${teko.className} text-3xl sm:text-4xl font-black uppercase tracking-tight text-white`}>
                    Nowa Baza Sportowa w Załężu Dużym
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
                    Nie zwalniamy tempa. W 2027 roku baza klubowa LKS Pniewy w Załężu Dużym zostanie znacząco rozbudowana, oferując naszym młodym adeptom oraz seniorom warunki na najwyższym poziomie:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                      <span className="block text-white font-extrabold text-sm sm:text-base">Boisko Orlik</span>
                      <span className="text-[11px] text-neutral-400 mt-1 block">Nowoczesna sztuczna nawierzchnia do całorocznych treningów</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                      <span className="block text-white font-extrabold text-sm sm:text-base">Wielofunkcyjne</span>
                      <span className="text-[11px] text-neutral-400 mt-1 block">Boisko wielofunkcyjne do wszechstronnego rozwoju ruchowego</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                      <span className="block text-white font-extrabold text-sm sm:text-base">Nowe Szatnie</span>
                      <span className="text-[11px] text-neutral-400 mt-1 block">Komfortowe zaplecze szatniowo-sanitarne dla drużyn i gości</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 text-center">
                  <span className={`${teko.className} text-6xl sm:text-7xl font-black text-red-500 leading-none`}>
                    2027
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white mt-1">
                    Rok Nowej Infrastruktury
                  </span>
                  <span className="text-xs text-neutral-400 mt-2 max-w-xs leading-relaxed">
                    Nowoczesny kompleks piłkarski stworzony z myślą o przyszłych pokoleniach sportowców.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===================== DRUŻYNY I ROCZNIKI ===================== */}
        <section id="druzyny" className="border-b border-white/10 bg-[#0C0E14] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-4 w-4 text-red-500" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-red-500">
                    Młodzieżowa Akademia LKS Pniewy
                  </span>
                </div>
                <h2 className={`${teko.className} text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-1`}>
                  Nasze Roczniki i Drużyny
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-2xl">
                  8 grup wiekowych zrzeszających 140 młodych adeptów piłki nożnej pod okiem wykwalifikowanej kadry.
                </p>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-400">
                  Łącznie: 140 zawodników
                </span>
              </div>
            </div>

            {/* Siatka roczników w stylu FOOTY LIVE Match Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {teams.map((t, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#11141C] p-5 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-500/50 hover:bg-[#141822]"
                >
                  {/* Górny pasek karty */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="rounded-md border border-white/10 bg-black/50 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-yellow-400">
                        {t.badge}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-extrabold text-neutral-300 bg-white/5 px-2 py-0.5 rounded-md">
                        <Users className="h-3 w-3 text-green-400" />
                        {t.players} graczy
                      </span>
                    </div>

                    <h3 className={`${teko.className} text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-3 leading-tight group-hover:text-green-400 transition-colors`}>
                      {t.name}
                    </h3>

                    <div className="mt-3 space-y-1">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 block">
                        Sztab szkoleniowy:
                      </span>
                      <p className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        {t.coach}
                      </p>
                      {t.assistant && (
                        <p className="text-[11px] text-neutral-400 pl-3">
                          {t.assistant}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Dolny pasek */}
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-500 font-bold uppercase tracking-wider">
                    <span>LKS Pniewy</span>
                    <span className="text-green-400">Akademia</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Zdjęcie młodzieży w akcji pod tęczą */}
            <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#11141C] shadow-2xl">
              <div className="group relative h-64 sm:h-80 md:h-[420px] w-full overflow-hidden">
                <Image
                  src="/galeria/tencza_boisko.jpg"
                  alt="Młodzi zawodnicy LKS Pniewy grający mecz na boisku w Załężu Dużym pod tęczą"
                  fill
                  className="object-cover object-center transition-transform duration-700 filter brightness-95"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />

                {/* Wektorowy gradient SVG - ochrona dla Dark Readera */}
                <svg
                  className="absolute inset-0 h-full w-full pointer-events-none"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <linearGradient id="youth-overlay-footy" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#0A0C10" stopOpacity="0.95" />
                      <stop offset="45%" stopColor="#0A0C10" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0A0C10" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <rect width="100" height="100" fill="url(#youth-overlay-footy)" />
                </svg>
                
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                    <Sparkles className="h-3.5 w-3.5 text-green-400" />
                    Młodzi Zawodnicy LKS Pniewy
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="max-w-xl">
                    <h3 className={`${teko.className} text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white drop-shadow-md leading-none`}>
                      Pasja, walka i uśmiech na boisku
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Każdy mecz i trening na naszym boisku w Załężu Dużym to sportowe emocje, rozwój charakteru i budowanie wspaniałej piłkarskiej przyjaźni.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-400 shadow-md">
                      <Users className="h-4 w-4" />
                      140 zawodników w 8 rocznikach
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===================== NASZ DOM / BOISKO W ZAŁĘŻU DUŻYM ===================== */}
        <section id="stadion" className="border-b border-white/10 bg-[#080A0F] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Zdjęcie z lotu ptaka */}
              <div className="lg:col-span-6">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#11141C] p-2 shadow-2xl">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                    <Image
                      src="/galeria/boisko_gora.jpg"
                      alt="Główne boisko trawiaste LKS Pniewy w Załężu Dużym z lotu ptaka"
                      fill
                      className="object-cover transition-transform duration-500 filter brightness-95"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    
                    {/* Wektorowy gradient SVG */}
                    <svg
                      className="absolute inset-0 h-full w-full pointer-events-none"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <linearGradient id="stadium-footy-grad" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#0A0C10" stopOpacity="0.85" />
                          <stop offset="35%" stopColor="#0A0C10" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#0A0C10" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <rect width="100" height="100" fill="url(#stadium-footy-grad)" />
                    </svg>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        <MapPin className="h-3.5 w-3.5 text-red-500" />
                        Załęże Duże, Gmina Pniewy
                      </span>
                      <p className="mt-1.5 text-xs text-neutral-300 font-medium">
                        Główne boisko z naturalną murawą – widok z lotu ptaka
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Treść sekcji stadionu */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-xs font-extrabold uppercase tracking-widest text-green-400">
                      Nasz Dom & Tradycja
                    </span>
                  </div>
                  <h2 className={`${teko.className} text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1`}>
                    Stadion LKS Pniewy w Załężu Dużym
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    To tutaj od początku istnienia klubu bije sportowe serce naszej gminy. Na naszym tradycyjnym boisku swoje mecze ligowe rozgrywają młodzi adepci LKS Pniewy, a już wkrótce zagra tu reaktywowana drużyna seniorów.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-[#11141C] p-4">
                    <div className="flex items-center gap-2 text-green-400 font-bold text-xs uppercase tracking-wide">
                      <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
                      <span>Boisko Główne</span>
                    </div>
                    <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                      Pełnowymiarowa, naturalna murawa do rozgrywania meczów ligowych i codziennych treningów.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#11141C] p-4">
                    <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wide">
                      <CheckCircle2 className="h-4 w-4 text-red-400 shrink-0" />
                      <span>Boisko Boczne</span>
                    </div>
                    <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                      Dedykowane do zaciętych rozgrywek i turniejów najmłodszych w kategorii Żak (5vs5).
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    <strong className="text-white">Lokalizacja bazy:</strong> Załęże Duże, Gmina Pniewy. Obiekt tętni życiem od poniedziałku do weekendu dzięki treningom 8 grup młodzieżowych.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== WŁADZE KLUBU & KADRA TRENERSKA ===================== */}
        <section id="kadra" className="border-b border-white/10 bg-[#0C0E14] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* 1. Zarząd / Najważniejsze osoby */}
            <div className="mb-16">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="h-px w-10 sm:w-16 bg-neutral-600" />
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    Reprezentacja i Zarządzanie
                  </span>
                  <div className="h-px w-10 sm:w-16 bg-neutral-600" />
                </div>
                <h2 className={`${teko.className} text-4xl sm:text-5xl font-black uppercase tracking-tight text-white`}>
                  Władze Klubu LKS Pniewy
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                  Osoby odpowiedzialne za rozwój, wizję oraz codzienne funkcjonowanie klubu.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {leadership.map((person, idx) => (
                  <div
                    key={idx}
                    className={`relative rounded-2xl border ${person.accent} bg-[#11141C] p-6 shadow-lg text-center transition-all hover:bg-[#141822]`}
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/50 border border-white/10 text-neutral-300">
                      <Shield className="h-6 w-6 text-green-400" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-500">
                      {person.title}
                    </span>
                    <h3 className={`${teko.className} text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1 leading-tight`}>
                      {person.name}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400">
                      {person.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Sztab Trenerski */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="h-px w-10 sm:w-16 bg-green-500/50" />
                  <span className="text-xs font-bold uppercase tracking-widest text-green-400">
                    Sztab Szkoleniowy
                  </span>
                  <div className="h-px w-10 sm:w-16 bg-green-500/50" />
                </div>
                <h2 className={`${teko.className} text-4xl sm:text-5xl font-black uppercase tracking-tight text-white`}>
                  Nasi Trenerzy
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                  Wykwalifikowana kadra trenerska dbająca o rozwój sportowy i wychowawczy dzieci.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {coaches.map((c, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-[#11141C] p-4 transition-all hover:border-green-500/40 hover:bg-[#141822]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/50 border border-white/10 text-green-400 font-black text-sm">
                      {c.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className={`${teko.className} text-xl sm:text-2xl font-bold uppercase tracking-tight text-white leading-tight`}>
                        {c.name}
                      </h4>
                      <div className="mt-0.5 space-y-0.5">
                        {c.roles.map((r, rIdx) => (
                          <span key={rIdx} className="block text-[11px] text-neutral-400">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ===================== HISTORIA KLUBU (TIMELINE) ===================== */}
        <section id="historia" className="border-b border-white/10 bg-[#080A0F] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="h-px w-10 sm:w-16 bg-neutral-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Ponad dwie dekady tradycji
                </span>
                <div className="h-px w-10 sm:w-16 bg-neutral-600" />
              </div>
              <h2 className={`${teko.className} text-4xl sm:text-6xl font-black uppercase tracking-tight text-white`}>
                Historia LKS Pniewy
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                Za rok założenia klubu uznaje się rok 2003. Przez ten okres klub przeżywał wiele wzlotów i upadków, by dziś przeżywać swój największy rozkwit.
              </p>
            </div>

            {/* Oś czasu w stylu FOOTY LIVE */}
            <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
              {timelineEvents.map((evt, idx) => (
                <div key={idx} className="relative group">
                  {/* Kropka na linii */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#080A0F] bg-green-500 shadow-md group-hover:bg-red-500 transition-colors" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                    <span className={`${teko.className} text-3xl sm:text-4xl font-black tracking-tight text-red-500 leading-none`}>
                      {evt.year}
                    </span>
                    <span className="inline-block rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-neutral-300 w-fit">
                      {evt.badge}
                    </span>
                  </div>

                  <h3 className={`${teko.className} text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-green-400 transition-colors uppercase`}>
                    {evt.title}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
                    {evt.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ===================== CELE NA PRZYSZŁOŚĆ ===================== */}
        <section id="cele" className="border-b border-white/10 bg-[#0C0E14] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="h-px w-10 sm:w-16 bg-green-500/50" />
                <span className="text-xs font-bold uppercase tracking-widest text-green-400">
                  Kierunek i Wizja
                </span>
                <div className="h-px w-10 sm:w-16 bg-green-500/50" />
              </div>
              <h2 className={`${teko.className} text-4xl sm:text-6xl font-black uppercase tracking-tight text-white`}>
                Cele na Przyszłość
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                Konkretne filary, którymi kierujemy się każdego dnia, budując silną społeczność sportową w Gminie Pniewy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {futureGoals.map((g, idx) => {
                const Icon = g.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#11141C] p-6 shadow-lg transition-all hover:border-green-500/50 hover:bg-[#141822]"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-white/10">
                        <span className={`${teko.className} text-4xl font-black text-red-500 leading-none`}>
                          {g.number}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-green-400">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className={`${teko.className} text-2xl font-bold uppercase tracking-tight text-white mt-4 leading-tight`}>
                        {g.title}
                      </h3>

                      <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                        {g.text}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-green-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Priorytet strategiczny</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ===================== BANER SKLEPU KLUBOWEGO (JOIN THE FAN ZONE STYLE) ===================== */}
        <section className="bg-[#080A0F] py-16 sm:py-20 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#11141C] p-8 sm:p-14 text-white shadow-2xl isolate"
              style={{ backgroundColor: '#0a0c10', colorScheme: 'dark' }}
              data-darkreader-ignore=""
            >
              {/* Tło ze zdjęciem drużyny */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/galeria/druzyna.jpg"
                  alt="Drużyna LKS Pniewy"
                  fill
                  className="object-cover object-[center_45%] transition-transform duration-700 group-hover:scale-105 opacity-35 filter brightness-90"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  data-darkreader-ignore=""
                />
                
                {/* Wektorowy gradient SVG - zabezpieczenie przed Dark Readerem */}
                <svg
                  className="absolute inset-0 h-full w-full pointer-events-none"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <linearGradient id="shop-banner-footy" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0a0c10" stopOpacity="0.95" />
                      <stop offset="55%" stopColor="#0a0c10" stopOpacity="0.80" />
                      <stop offset="100%" stopColor="#0a0c10" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <rect width="100" height="100" fill="url(#shop-banner-footy)" />
                </svg>
              </div>

              <div className="relative z-10 max-w-2xl space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-green-400">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  OFICJALNE BARWY KLUBOWE
                </span>

                <h2 className={`${teko.className} text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none drop-shadow-md`}>
                  Ubierz się w barwy <span className="text-green-400">LKS </span><span className="text-red-500">PNIEWY</span>!
                </h2>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
                  Odwiedź nasz oficjalny sklep klubowy. Znajdziesz w nim dedykowane stroje meczowe, dresy, bluzy oraz klubowe akcesoria przygotowane z myślą o zawodnikach i dumnych rodzicach.
                </p>

                <div className="pt-3">
                  <Link
                    href="/sklep"
                    className="inline-flex items-center gap-2.5 rounded-full bg-green-500 px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-black shadow-lg shadow-green-500/20 transition-all hover:bg-green-400 hover:scale-105 active:scale-95"
                    data-darkreader-ignore=""
                  >
                    <span>Wejdź do sklepu</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== STOPKA (FOOTER W STYLU FOOTY LIVE) ===================== */}
        <footer className="bg-[#050608] text-neutral-400 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
              
              {/* Kolumna 1: O klubie */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11">
                    <Image
                      src="/herb.png"
                      alt="Herb LKS Pniewy"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className={`${teko.className} text-3xl font-black uppercase tracking-wider leading-none`}>
                    <span className="text-green-400">LKS </span>
                    <span className="text-red-500">PNIEWY</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
                  Gminny klub piłkarski zrzeszający 140 młodych zawodników i zawodniczek. Rozwijamy pasję, kształtujemy charaktery i reprezentujemy Gminę Pniewy.
                </p>
                <div className="flex items-center gap-2 pt-1 text-xs font-bold uppercase tracking-wider text-neutral-300">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Zielono-Czerwoni • Załęże Duże</span>
                </div>
              </div>

              {/* Kolumna 2: Szybkie linki */}
              <div className="md:col-span-3 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Nawigacja
                </h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <a href="#druzyny" className="hover:text-white transition-colors">
                      Roczniki i Trenerzy
                    </a>
                  </li>
                  <li>
                    <a href="#rozwoj" className="hover:text-white transition-colors">
                      Rozwój Klubu (2022–2026)
                    </a>
                  </li>
                  <li>
                    <a href="#stadion" className="hover:text-white transition-colors">
                      Stadion w Załężu Dużym
                    </a>
                  </li>
                  <li>
                    <a href="#kadra" className="hover:text-white transition-colors">
                      Władze i Kadra
                    </a>
                  </li>
                  <li>
                    <a href="#historia" className="hover:text-white transition-colors">
                      Historia Klubu
                    </a>
                  </li>
                  <li>
                    <a href="#cele" className="hover:text-white transition-colors">
                      Cele na przyszłość
                    </a>
                  </li>
                  <li>
                    <Link href="/sklep" className="text-red-400 hover:text-red-300 transition-colors font-bold">
                      Sklep Klubowy →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Kolumna 3: Baza sportowa */}
              <div className="md:col-span-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Lokalizacja & Baza
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  <strong className="text-white">Baza Główna:</strong> Załęże Duże, Gmina Pniewy
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Główne boisko z naturalną murawą oraz boczne boisko do rozgrywek w kategorii żak (5vs5). W 2027 planowane otwarcie kompleksu Orlik z szatniami.
                </p>
              </div>

            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
              <p>© {new Date().getFullYear()} LKS Pniewy. Wszelkie prawa zastrzeżone.</p>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Duma Gminy Pniewy</span>
                <span className="h-2 w-2 rounded-full bg-red-500" />
              </div>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}

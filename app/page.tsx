import Image from 'next/image';
import Link from 'next/link';
import { inder } from '@/app/fonts';
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
  Camera,
} from 'lucide-react';

export default function Home() {
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
      accent: 'border-green-600',
    },

    {
      title: 'Prezes Klubu',
      name: 'Jacek Kuczek',
      desc: 'Zarządzanie strategiczne i reprezentacja stowarzyszenia',
      accent: 'border-red-600',
    },
    
    {
      title: 'Koordynator Szkolenia',
      name: 'Norbert Korczak',
      desc: 'Kierunek szkoleniowy, organizacja struktur i metodyka akademii',
      accent: 'border-green-600',
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
      now: 'Dedykowana aplikacja do zarządzania klubem',
      icon: Smartphone,
    },
    {
      title: 'Infrastruktura boiskowa',
      before: '1 boisko w słabym stanie',
      now: 'Świetna murawa na głównym boisku + naturalne boisko boczne (żak 5vs5)',
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

  const galleryPhotos = [
    {
      src: '/galeria/IMG20251030160618.jpg',
      alt: 'Tęcza nad stadionem LKS Pniewy w Załężu Dużym',
      title: 'Tęcza nad stadionem w Załężu Dużym',
      tag: 'Nasza Baza',
      desc: 'Niezwykły widok podczas jesiennego treningu młodzieży LKS Pniewy na płycie głównej.',
      featured: true,
    },
    {
      src: '/galeria/IMG-20251108-WA0009.jpg',
      alt: '1. miejsce w turnieju Europokolenie - Mazowiecki ZPN',
      title: '1. Miejsce w Turnieju Europokolenie',
      tag: 'Triumf',
      desc: 'Złote medale i okazały puchar Mazowieckiego ZPN wywalczony przez naszych zawodników.',
      featured: false,
    },
    {
      src: '/galeria/IMG-20260329-WA0005.jpg',
      alt: 'Młodzi zawodnicy z szalikiem LKS Pniewy',
      title: 'Duma z Barw LKS Pniewy',
      tag: 'Klubowe Barwy',
      desc: 'Nasi piłkarze z klubowym szalikiem, medalami i pucharami po udanych zawodach.',
      featured: false,
    },
    {
      src: '/galeria/IMG20261011113619.jpg',
      alt: 'Mecz ligowy LKS Pniewy w Załężu Dużym',
      title: 'Ligowe Zmagania na Murawie',
      tag: 'Mecze Ligowe',
      desc: 'Pamiątkowe zdjęcie po zaciętym meczu ligowym rozegranym na boisku w Załężu Dużym.',
      featured: false,
    },
    {
      src: '/galeria/IMG-20250908-WA0002.jpg',
      alt: 'Widok z drona na stadion i boisko w Załężu Dużym',
      title: 'Dom LKS Pniewy z Lotu Ptaka',
      tag: 'Infrastruktura',
      desc: 'Kompleks boisk otoczony zielenią sadów – idealne miejsce do rozwoju talentów.',
      featured: false,
    },
    {
      src: '/galeria/IMG-20251118-WA0000.jpg',
      alt: 'Rocznik skrzatów z trenerem i medalami',
      title: 'Radość Najmłodszych Adeptów',
      tag: 'Akademia',
      desc: 'Uśmiech i duma po turnieju halowym pod okiem trenera w klubowej bluzie.',
      featured: false,
    },
    {
      src: '/galeria/IMG-20250908-WA0009.jpg',
      alt: 'Trening piłkarski na płycie głównej w Załężu Dużym',
      title: 'Szkolenie i Pasja na Treningach',
      tag: 'Treningi',
      desc: 'Ćwiczenia z piłkami, drabinkami i pachołkami budujące technikę i sprawność fizyczną.',
      featured: false,
    },
    {
      src: '/galeria/IMG20260912104530.jpg',
      alt: 'Drużyna LKS Pniewy po meczu ligowym',
      title: 'Sportowy Szacunek i Fair Play',
      tag: 'Drużyna',
      desc: 'Wspólna fotografia zawodników LKS Pniewy w zielonych trykotach i gości po meczu.',
      featured: false,
    },
  ];

  return (
    <main className={`${inder.className} min-h-screen bg-white text-neutral-900`}>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-white py-12 md:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            
            {/* Tekst lewa strona */}
            <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
              {/* Klubowy tag */}
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 shadow-2xs">
                <span className="h-2.5 w-2.5 rounded-full bg-green-600 animate-pulse" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-700">
                  Gminny Klub Piłkarski • Rok Zał. 2003
                </span>
              </div>

              {/* Tytuł główny */}
              <div className="space-y-2">
                <span className="block text-sm sm:text-base font-semibold uppercase tracking-widest text-neutral-500">
                  Ludowy Klub Sportowy
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-neutral-900 leading-none">
                  <span className="text-green-600">LKS </span>
                  <span className="text-red-600">PNIEWY</span>
                </h1>
              </div>

              <p className="max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed mx-auto lg:mx-0">
                LKS Pniewy to serce sportowej pasji w naszej gminie. Szkolimy{' '}
                <strong className="text-neutral-900 font-bold">140 młodych zawodników i zawodniczek</strong> z roczników{' '}
                <strong className="text-green-700 font-bold">2011–2021</strong> w 8 prężnie rozwijających się grupach.
              </p>

              {/* Wyróżniony komunikat o powrocie do rozgrywek seniorskich */}
              <div className="group relative overflow-hidden rounded-2xl border border-red-200 bg-red-50/40 p-5 shadow-2xs transition-all hover:border-red-300">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-xs">
                    <Flame className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="inline-block rounded-md bg-red-600 px-2 py-0.5 text-xs font-black uppercase tracking-wider text-white">
                        Ważne wydarzenie
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        Przełomowy sezon
                      </span>
                    </div>
                    <h3 className="mt-1 text-base sm:text-lg font-bold text-neutral-900">
                      Po 12 latach przerwy wracamy do rozgrywek seniorskich!
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                      W przyszłym roku LKS Pniewy wystawi pierwszą drużynę seniorów, stawiając na utalentowaną młodzież z terenu Gminy Pniewy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Przyciski CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/sklep"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-red-700 active:scale-95"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Oficjalny Sklep Klubowy</span>
                </Link>

                <a
                  href="#druzyny"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-7 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-800 transition-all hover:border-green-600 hover:text-green-700 active:scale-95"
                >
                  <span>Poznaj Drużyny</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Herb / Prawa strona */}
            <div className="flex items-center justify-center lg:col-span-5">
              <div className="relative flex flex-col items-center rounded-2xl border border-neutral-200 bg-neutral-50/60 p-8 sm:p-10 shadow-xs">
                <div className="relative h-44 w-44 sm:h-52 sm:w-52 drop-shadow-xs transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/herb.png"
                    alt="Herb LKS Pniewy"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xl sm:text-2xl font-black tracking-wider uppercase">
                    <span className="text-green-600">LKS</span>
                    <span className="text-red-600">PNIEWY</span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                    Duma Gminy Pniewy
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-neutral-600">
                    <MapPin className="h-3.5 w-3.5 text-red-600" />
                    <span>Baza sportowa: Załęże Duże</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== KLUCZOWE LICZBY (STATS) ===================== */}
      <section className="border-b border-neutral-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            
            <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 text-center shadow-2xs transition-all hover:border-green-600 hover:bg-green-50/30">
              <span className="text-4xl sm:text-5xl font-black text-green-600">140</span>
              <span className="mt-1 text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-900">
                Zawodników
              </span>
              <span className="text-xs text-neutral-500">chłopcy i dziewczęta (2011–2021)</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 text-center shadow-2xs transition-all hover:border-red-600 hover:bg-red-50/30">
              <span className="text-4xl sm:text-5xl font-black text-red-600">8</span>
              <span className="mt-1 text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-900">
                Grup Treningowych
              </span>
              <span className="text-xs text-neutral-500">w tym 7 zespołów ligowych</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 text-center shadow-2xs transition-all hover:border-green-600 hover:bg-green-50/30">
              <span className="text-4xl sm:text-5xl font-black text-green-600">7</span>
              <span className="mt-1 text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-900">
                Trenerów
              </span>
              <span className="text-xs text-neutral-500">w tym trener bramkarzy i koordynator</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 text-center shadow-2xs transition-all hover:border-red-600 hover:bg-red-50/30">
              <span className="text-4xl sm:text-5xl font-black text-red-600">2003</span>
              <span className="mt-1 text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-900">
                Rok Założenia
              </span>
              <span className="text-xs text-neutral-500">ponad dwie dekady tradycji</span>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== DYNAMICZNY ROZWÓJ KLUBU (2022 vs 2026 + 2027) ===================== */}
      <section id="rozwoj" className="border-b border-neutral-200 bg-neutral-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Nagłówek sekcji */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-green-700">
              <TrendingUp className="h-4 w-4" />
              Skok Jakościowy i Organizacyjny
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900">
              Rozwój Klubu na Każdym Polu
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600">
              Od 2022 roku LKS Pniewy przeszedł bezprecedensowy rozwój. Zobacz, jak wzrosła nasza społeczność, zaplecze i poziom szkolenia.
            </p>
          </div>

          {/* Karty porównawcze 2022 -> 2026 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                      <span className="text-base font-bold uppercase tracking-wider text-neutral-900">
                        {item.title}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800">
                        <Icon className="h-5 w-5 text-neutral-700" />
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {/* 2022 */}
                      <div className="flex items-center justify-between rounded-xl bg-neutral-100/70 px-3.5 py-2.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                          Stan w 2022
                        </span>
                        <span className="text-sm font-semibold text-neutral-700">
                          {item.before}
                        </span>
                      </div>

                      {/* Strzałka w dół */}
                      <div className="flex justify-center text-green-600">
                        <ChevronRight className="h-5 w-5 rotate-90" />
                      </div>

                      {/* 2026 */}
                      <div className="flex items-center justify-between rounded-xl bg-green-50 border border-green-200/80 px-3.5 py-2.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-green-800">
                          Stan w 2026
                        </span>
                        <span className="text-sm font-extrabold text-green-900 text-right">
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
          <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-xs transition-all hover:border-neutral-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-green-700">
                  <Sparkles className="h-3.5 w-3.5 text-green-600" />
                  Inwestycje w Infrastrukturę • Rok 2027
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900">
                  Nowa Baza Sportowa w Załężu Dużym
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
                  Nie zwalniamy tempa. W 2027 roku baza klubowa LKS Pniewy w Załężu Dużym zostanie znacząco rozbudowana, oferując naszym młodym adeptom oraz seniorom warunki na najwyższym poziomie:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 transition-colors hover:border-green-300 hover:bg-green-50/30">
                    <span className="block text-neutral-900 font-extrabold text-base sm:text-lg">Boisko Orlik</span>
                    <span className="text-xs text-neutral-600 mt-1 block">Nowoczesna sztuczna nawierzchnia do całorocznych treningów</span>
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 transition-colors hover:border-green-300 hover:bg-green-50/30">
                    <span className="block text-neutral-900 font-extrabold text-base sm:text-lg">Wielofunkcyjne</span>
                    <span className="text-xs text-neutral-600 mt-1 block">Boisko wielofunkcyjne do wszechstronnego rozwoju ruchowego</span>
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 transition-colors hover:border-green-300 hover:bg-green-50/30">
                    <span className="block text-neutral-900 font-extrabold text-base sm:text-lg">Nowe Szatnie</span>
                    <span className="text-xs text-neutral-600 mt-1 block">Komfortowe zaplecze szatniowo-sanitarne dla drużyn i gości</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-neutral-200 pt-6 lg:pt-0 lg:pl-8 text-center">
                <span className="text-5xl sm:text-6xl font-black text-red-600">2027</span>
                <span className="text-sm font-bold uppercase tracking-wider text-neutral-900 mt-1">
                  Rok Nowej Infrastruktury
                </span>
                <span className="text-xs text-neutral-500 mt-2 max-w-xs leading-relaxed">
                  Nowoczesny kompleks piłkarski stworzony z myślą o przyszłych pokoleniach sportowców.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===================== DRUŻYNY I ROCZNIKI ===================== */}
      <section id="druzyny" className="border-b border-neutral-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-red-600">
                <Shield className="h-4 w-4" />
                Młodzieżowa Akademia LKS Pniewy
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900">
                Nasze Roczniki i Drużyny
              </h2>
              <p className="mt-2 text-base text-neutral-600 max-w-2xl">
                8 grup wiekowych zrzeszających 140 młodych adeptów piłki nożnej pod okiem wykwalifikowanej kadry.
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <span className="rounded-full bg-neutral-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-700">
                Łącznie: 140 zawodników
              </span>
            </div>
          </div>

          {/* Siatka roczników */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((t, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-green-600 hover:shadow-md"
              >
                {/* Górny pasek karty */}
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <span className="rounded-lg bg-neutral-100 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider text-neutral-700 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      {t.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-extrabold text-neutral-900 bg-neutral-50 px-2 py-1 rounded-md border border-neutral-200">
                      <Users className="h-3.5 w-3.5 text-green-600" />
                      {t.players} graczy
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold uppercase tracking-tight text-neutral-900">
                    {t.name}
                  </h3>

                  <div className="mt-4 space-y-1">
                    <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block">
                      Sztab szkoleniowy:
                    </span>
                    <p className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-600" />
                      {t.coach}
                    </p>
                    {t.assistant && (
                      <p className="text-xs text-neutral-600 pl-3.5 pt-0.5">
                        {t.assistant}
                      </p>
                    )}
                  </div>
                </div>

                {/* Dolny pasek */}
                <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>LKS Pniewy</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== GALERIA ZDJĘĆ ===================== */}
      <section id="galeria" className="border-b border-neutral-200 bg-neutral-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-green-700">
                <Camera className="h-4 w-4" />
                Fotorelacje & Wydarzenia
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900">
                Z Życia LKS Pniewy
              </h2>
              <p className="mt-2 text-base text-neutral-600 max-w-2xl">
                Zobacz chwile pełne pasji, sukcesów i sportowych emocji – od codziennych treningów w Załężu Dużym po puchary zdobywane na turniejach.
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-700 shadow-2xs">
                Aktualności z boiska
              </span>
            </div>
          </div>

          {/* Siatka galerii */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((item, idx) => (
              <div
                key={idx}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xs${
                  item.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Zdjęcie */}
                <div
                  className={`relative overflow-hidden bg-neutral-100 ${
                    item.featured ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500"
                  />
                  {/* Badge na zdjęciu */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md bg-white/95 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-xs backdrop-blur-xs">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Opis zdjęcia */}
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== WŁADZE KLUBU & KADRA TRENERSKA ===================== */}
      <section id="kadra" className="border-b border-neutral-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* 1. Zarząd / Najważniejsze osoby */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500">
                Reprezentacja i Zarządzanie
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
                Władze Klubu LKS Pniewy
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-600">
                Osoby odpowiedzialne za rozwój, wizję oraz codzienne funkcjonowanie klubu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadership.map((person, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl border-2 ${person.accent} bg-white p-6 shadow-sm text-center`}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800">
                    <Shield className="h-7 w-7 text-neutral-700" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    {person.title}
                  </span>
                  <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-neutral-900">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {person.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Kadra Trenerska */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-green-700">
                Sztab Szkoleniowy
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
                Kadra Trenerska
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-600">
                7 pasjonatów i wykwalifikowanych szkoleniowców dbających o postępy każdego z naszych podopiecznych.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coaches.map((coach, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-5 transition-all bg-white shadow-2xs hover:shadow-md ${
                    coach.highlight
                      ? 'border-green-600/60 bg-gradient-to-br from-green-50/40 via-white to-white'
                      : 'border-neutral-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white font-black text-lg">
                      {coach.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold uppercase tracking-tight text-neutral-900">
                        {coach.name}
                      </h4>
                      <div className="mt-1.5 space-y-1">
                        {coach.roles.map((r, rIdx) => (
                          <div key={rIdx} className="flex items-center gap-1.5 text-xs text-neutral-700 font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===================== HISTORIA KLUBU (TIMELINE) ===================== */}
      <section id="historia" className="border-b border-neutral-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500">
              <Clock className="h-4 w-4" />
              Ponad dwie dekady tradycji
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900">
              Historia LKS Pniewy
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Za rok założenia klubu uznaje się rok 2003. Przez ten okres klub przeżywał wiele wzlotów i upadków, by dziś przeżywać swój największy rozkwit.
            </p>
          </div>

          {/* Oś czasu */}
          <div className="relative border-l-2 border-neutral-200 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative group">
                {/* Kropka na linii */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-green-600 shadow-xs group-hover:bg-red-600 transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-red-600">
                    {evt.year}
                  </span>
                  <span className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-neutral-700 w-fit">
                    {evt.badge}
                  </span>
                </div>

                <h3 className="mt-1 text-lg sm:text-xl font-bold text-neutral-900">
                  {evt.title}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  {evt.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== CELE NA PRZYSZŁOŚĆ ===================== */}
      <section id="cele" className="border-b border-neutral-200 bg-neutral-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-green-700">
              <Target className="h-4 w-4" />
              Kierunek i Wizja
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900">
              Cele na Przyszłość
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Konkretne filary, którymi kierujemy się każdego dnia, budując silną społeczność sportową w Gminie Pniewy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureGoals.map((g, idx) => {
              const Icon = g.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-7 shadow-2xs transition-all hover:border-green-600 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between pb-5 border-b border-neutral-100">
                      <span className="text-3xl font-black text-red-600">
                        {g.number}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-neutral-900 leading-snug">
                      {g.title}
                    </h3>

                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                      {g.text}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-700">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Priorytet strategiczny</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================== BANER SKLEPU KLUBOWEGO (CTA) ===================== */}
      <section className="bg-white py-16 sm:py-20 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-r from-red-600 to-red-700 p-8 sm:p-12 text-white shadow-sm">
            {/* Tło herbowe */}
            <div className="pointer-events-none absolute -right-12 -bottom-12 h-72 w-72 opacity-15">
              <Image
                src="/herb.png"
                alt=""
                fill
                className="object-contain filter invert"
              />
            </div>

            <div className="relative max-w-2xl space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                <ShoppingBag className="h-3.5 w-3.5" />
                Oficjalne Barwy Klubowe
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight text-white">
                Ubierz się w barwy <span className="text-green-300">LKS</span> PNIEWY!
              </h2>

              <p className="text-sm sm:text-base text-white/95 leading-relaxed">
                Odwiedź nasz oficjalny sklep klubowy. Znajdziesz w nim dedykowane stroje meczowe, dresy, bluzy oraz klubowe akcesoria przygotowane z myślą o zawodnikach i dumnych rodzicach.
              </p>

              <div className="pt-2">
                <Link
                  href="/sklep"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-wider text-red-700 shadow-xs transition-all hover:bg-neutral-100 active:scale-95"
                >
                  <span>Przejdź do sklepu</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STOPKA (FOOTER) ===================== */}
      <footer className="bg-neutral-950 text-neutral-400 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-neutral-800">
            
            {/* Kolumna 1: O klubie */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12">
                  <Image
                    src="/herb.png"
                    alt="Herb LKS Pniewy"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-2xl font-black uppercase tracking-wider">
                  <span className="text-green-500">LKS </span>
                  <span className="text-red-500">PNIEWY</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
                Gminny klub piłkarski zrzeszający 140 młodych zawodników i zawodniczek. Rozwijamy pasję, kształtujemy charaktery i reprezentujemy Gminę Pniewy.
              </p>
            </div>

            {/* Kolumna 2: Szybkie linki */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Nawigacja
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#rozwoj" className="hover:text-white transition-colors">
                    Rozwój Klubu (2022–2026)
                  </a>
                </li>
                <li>
                  <a href="#druzyny" className="hover:text-white transition-colors">
                    Roczniki i Trenerzy
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="hover:text-white transition-colors">
                    Galeria zdjęć
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
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Lokalizacja & Baza
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                <strong className="text-white">Baza Główna:</strong> Załęże Duże, Gmina Pniewy
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Główne boisko z naturalną murawą oraz boczne boisko do rozgrywek w kategorii żak (5vs5). W 2027 planowane otwarcie kompleksu Orlik z szatniami.
              </p>
            </div>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
            <p>© {new Date().getFullYear()} LKS Pniewy. Wszelkie prawa zastrzeżone.</p>
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span>Zielono-Czerwoni</span>
              <span className="h-2 w-2 rounded-full bg-red-600" />
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

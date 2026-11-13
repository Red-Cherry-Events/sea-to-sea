// Everything a non-developer is likely to change lives here.
// null values show as "TBC" / "to be confirmed" on the site until you fill them in.

export const site = {
  name: 'JBFE Sea to Sea',
  teamsMax: 60,
  teamSize: '2 to 25 riders',
  avgDayKm: 80,
  riderHubUrl: 'https://riderapp.redcherryevents.co.za/',
  loginUrl: 'https://entries.redcherryevents.co.za/registrations',
  entriesHome: 'https://entries.redcherryevents.co.za/',
  fieldsPdf: '/docs/entry-fields.pdf',
  videoId: '82LaaA-cggw',
  rideInfoVideoId: 'St3qMOi5bKU',
};

export const contact = {
  phone: '(041) 581 5335',
  phoneHref: 'tel:+27415815335',
  email: 'team@redcherryevents.co.za',
  address: ['156 Villers Road, Walmer', 'Port Elizabeth', 'South Africa'],
  hours: [
    ['Mon – Thu', '8am – 5pm'],
    ['Fri', '8am – 3pm'],
    ['Sat – Sun', 'Closed'],
  ],
  hoursShort: 'Mon–Thu 8am–5pm · Fri 8am–3pm',
  facebook: 'https://www.facebook.com/seatoseaepic',
  instagram: 'https://www.instagram.com/sea_to_sea_za/',
  organiser: 'https://www.redcherryevents.co.za/',
};

/* ---------- The two editions ---------- */

export type RideDay = {
  n: number; date: string | null; from: string; to: string; km: number | null;
  refuel: string; lunch: string; routes: string; img: string; alt: string; body: string[];
};

export type Edition = {
  id: 'south' | 'north';
  name: string; short: string; href: string;
  year: number | null;
  dates: string | null;       // "7–11 May"
  datesLong: string | null;   // "Fri 7 – Tue 11 May 2027"
  start: string | null; end: string | null; // ISO, for search engines
  dayDates: (string | null)[]; // arrival, day 1, day 2, day 3, departure
  startHotel: string; midHotel: string; region: string;
  totalKm: number | null;
  entriesOpen: boolean; enterUrl: string;
  racePackCloses: string | null;
  summary: string; intro: string[];
  hero: string; heroAlt: string;
  hotels: { name: string; when: string; body: string; imgs: { name: string; alt: string }[] }[];
  days: RideDay[];
  videos: { id: string; title: string; poster: string }[];
  registration: { when: string; where: string };
  gpsSent: string | null;
  refunds: [string, string][] | null;
};

export const editions: Record<'south' | 'north', Edition> = {
  south: {
    id: 'south', name: 'JBFE Sea to Sea South', short: 'South', href: '/south/',
    year: 2027, dates: '7–11 May', datesLong: 'Fri 7 – Tue 11 May 2027',
    start: '2027-05-07', end: '2027-05-11',
    dayDates: ['Fri 7 May', 'Sat 8 May', 'Sun 9 May', 'Mon 10 May', 'Tue 11 May'],
    startHotel: 'Trennerys Hotel (Seagulls)', midHotel: 'Kob Inn', region: 'the southern Wild Coast',
    totalKm: 237,
    entriesOpen: true,
    enterUrl: 'https://entries.redcherryevents.co.za/events/84861',
    racePackCloses: null,
    summary: 'From the southernmost hotels in the Transkei, north along the Wild Coast to Kob Inn and back.',
    intro: [
      'JBFE Sea to Sea South starts at the southernmost hotels in the Transkei, Trennerys and Seagulls. From there you head north through some of the best-known river crossings, deep valleys and remote trails on the Wild Coast.',
      'Two nights at Kob Inn means no packing up on Day 2. Day 3 brings you back down the coast to the finish arch, a cold beer and your medal.',
      'Take the Gold route for a proper test. Take Silver for a steadier pace, with time for a photo or a cold one at a local shebeen. The Adventure route keeps the big bikes in on the fun.',
    ],
    hero: 'sunset-coast', heroAlt: 'Sunset over the southern Wild Coast, with the river mouth and beach below',
    hotels: [
      {
        name: 'Trennerys and Seagulls', when: 'Registration night and the night after Day 3',
        body: 'Riders and supporters stay in a combination of Trennerys and Seagulls on the first night. Room numbers for all 4 nights are handed out at registration with your race pack. You finish back here after Day 3: a bar on the beach, plenty of war stories, prize-giving, and your car parked safely where you left it.',
        imgs: [
          { name: 'trennerys-aerial', alt: 'Trennerys and Seagulls from the air at sunrise, in the trees above the beach and river mouth' },
          { name: 'trennerys-arch', alt: 'The Sea to Sea arch set up in the garden at Trennerys for registration' },
          { name: 'trennerys-room', alt: 'A double room at Trennerys' },
        ],
      },
      {
        name: 'Kob Inn', when: 'The nights after Day 1 and Day 2',
        body: 'The finest hotel on the Wild Coast, on the banks of the Qora River. Each team is allocated a room to share and everyone gets their own bed. Some of the larger family units mean teams may share, so tell us if you’re entering as a group. You can book your own room during registration for an extra fee.',
        imgs: [
          { name: 'kob-units', alt: 'Thatched units at Kob Inn on the lawn above the sea' },
          { name: 'kob-reception', alt: 'Dirt bikes parked beside the Kob Inn reception sign' },
          { name: 'kob-room', alt: 'A room at Kob Inn with doors opening onto the lawn and the sea' },
        ],
      },
    ],
    days: [
      {
        n: 1, date: 'Sat 8 May', from: 'Trennerys', to: 'Kob Inn', km: 85,
        refuel: '1 refuel point', lunch: '1 lunch stop', routes: '3 Mild and Wild splits, 1 Adventure route',
        img: 'river-cliff', alt: 'A river winding to the sea below forested cliffs',
        body: [
          'We leave Seagulls and ride inland up the Qolora River valley, keeping the sea on our left, then head up the coast to the magnificent Kob Inn on the banks of the Qora River.',
          'The route crosses the Kobonqaba, Cebe and Qolora rivers, and each crossing comes with some of the finest enduro riding on the planet. Boulders, The Gorge and Coconuts are all on the menu.',
          'The last big challenge of the day is the mighty Qora Gorge, between Mazeppa Bay and Kob Inn. Luggage moves today.',
        ],
      },
      {
        n: 2, date: 'Sun 9 May', from: 'Kob Inn', to: 'Kob Inn', km: 60,
        refuel: '1 refuel point', lunch: '1 lunch stop, 2 water points', routes: '3 Mild and Wild splits, 1 Adventure route',
        img: 'river-crossing', alt: 'A rider splashing through a rocky river crossing',
        body: [
          'Two nights at Kob Inn means no packing up, and that makes for an easier start.',
          'We carry on up the coast across the Jujura, Ngadla and Shixini rivers, then turn inland at the mighty Nqabara River. Riding inland has its own challenges as we navigate the sled and single-track paths through each river on the way.',
          'Most riders should be home by lunch, with the afternoon for the pool, the beach or a few cold ones at the bar.',
        ],
      },
      {
        n: 3, date: 'Mon 10 May', from: 'Kob Inn', to: 'Trennerys', km: 92,
        refuel: '1 refuel point', lunch: '1 lunch stop', routes: '2 Mild and Wild splits, 1 Adventure route',
        img: 'beach-ride', alt: 'A rider on the hard sand of a Wild Coast beach',
        body: [
          'The coastal ride back to Trennerys leaves the best for last. Day 3 has to be the most insane day you could wish for on a motorcycle.',
          'It’s a day you don’t want to race. Take in the views of the Wild Coast. The finish line is at Boulders, where the JBFE Sea to Sea arch and a cold beer wait for you, then it’s a 5-minute tar ride to Trennerys.',
          'JBFE Sea to Sea South… Done and Dusted! Luggage moves today.',
        ],
      },
    ],
    videos: [
      { id: 'G2_grtw-Ou8', title: 'Day 3, Sea to Sea South 2025', poster: 'beach-surf' },
      { id: 'WBAWFe604Bs', title: 'Day 2, Sea to Sea South 2025', poster: 'river-bend' },
      { id: '7y2TuVIxAss', title: 'Highlights from Sea to Sea South 2024', poster: 'estuary-sun' },
    ],
    registration: { when: 'Fri 7 May, 14:00 – 19:00', where: 'Trennerys Hotel (Seagulls)' },
    gpsSent: null,
    refunds: null,
  },
  north: {
    id: 'north', name: 'JBFE Sea to Sea North', short: 'North', href: '/north/',
    year: null, dates: null, datesLong: null, start: null, end: null,
    dayDates: [null, null, null, null, null],
    startHotel: 'Ocean View Hotel', midHotel: 'The Haven Hotel', region: 'Coffee Bay and the Dwesa Nature Reserve',
    totalKm: 201,
    entriesOpen: false,
    enterUrl: 'https://entries.redcherryevents.co.za/',
    racePackCloses: null,
    summary: 'Coffee Bay to the Mbashee River mouth and back, past Hole in the Wall.',
    intro: [
      'JBFE Sea to Sea North shows 100 riders one of the finest coastlines in the world.',
      'We start at Ocean View Hotel in Coffee Bay, spend two evenings at The Haven Hotel in the Dwesa Nature Reserve, and ride back to Ocean View. This is dirt bike heaven: Mdumbi, Mpuzi, Mpami, Lapanzi and Hole in the Wall are all part of three days of riding.',
      'With Gold and Silver options every day, and an Adventure route for the big bikes, this is a ride for all.',
    ],
    hero: 'hole-in-wall', heroAlt: 'Two riders and their bikes on the grass in front of Hole in the Wall',
    hotels: [
      {
        name: 'Ocean View Hotel', when: 'Registration night and the night after Day 3',
        body: 'Coffee Bay. Register on the front lawn, park your vehicle and trailer securely inside for the trip, and finish Day 3 at a bar overlooking the beach.',
        imgs: [
          { name: 'ov-aerial', alt: 'Ocean View Hotel from the air, right on the beach at Coffee Bay' },
          { name: 'ov-room', alt: 'A hotel room at Ocean View with a double bed and sea-facing doors' },
          { name: 'ov-bar', alt: 'The bar at Ocean View Hotel' },
        ],
      },
      {
        name: 'The Haven Hotel', when: 'The nights after Day 1 and Day 2',
        body: 'On the banks of the Mbashee River, inside the Dwesa Nature Reserve. A lively bar, great grub, a pool and the beach. Two nights here means no packing up.',
        imgs: [
          { name: 'haven-aerial', alt: 'The Haven Hotel from the air, set in green hills near the river mouth' },
          { name: 'haven-sign', alt: 'The painted Welcome to the Haven Hotel sign' },
          { name: 'dinner', alt: 'Riders at dinner on the terrace at The Haven' },
        ],
      },
    ],
    days: [
      {
        n: 1, date: null, from: 'Ocean View Hotel', to: 'The Haven Hotel', km: 75,
        refuel: '1 refuel point', lunch: '1 lunch stop', routes: 'Gold and Silver splits, 1 Adventure route',
        img: 'coast-aerial', alt: 'The Wild Coast from the air, with a track running along the cliffs',
        body: [
          'The stretch of coastline between Coffee Bay and The Haven Hotel at the Mbashee River mouth is, without a doubt, the finest piece of dirt bike heaven.',
          'We head north first, up to the cliffs of Mpuzi, and navigate all the way to the Mthatha River mouth. The route then tracks through the state forest to Hole in the Wall and crosses the Mbolompo River to the fishing village of Mpami and Bulls Inn, where a snack lunch is on offer.',
          'It just gets better as we drop down to the Xora River, then hug the beaches all the way past the magnificent Ntlotonyane and into the Dwesa Nature Reserve. The Haven Hotel, with a lively bar and great grub, is home for the next two nights.',
        ],
      },
      {
        n: 2, date: null, from: 'The Haven', to: 'The Haven', km: 52,
        refuel: 'No refuel needed', lunch: 'Lunch at The Haven Hotel', routes: 'Gold and Silver splits, 1 Adventure route',
        img: 'track', alt: 'A jeep track winding across green hills towards the sea',
        body: [
          'Two nights at The Haven means no packing up, and that makes for an easier start.',
          'The hotel sits on the banks of the Mbashee River, and the Mbashee valley is a playground second to none. Riding inland has its own challenges as we navigate the sled and single-track paths through each river on the way.',
          'Most riders should be home by lunch and can spend the afternoon at the pool, on the beach or having a few cold ones at the bar. There are Silver and Gold options, so pick your poison and decide how much work you want to do.',
        ],
      },
      {
        n: 3, date: null, from: 'The Haven Hotel', to: 'Ocean View Hotel', km: 74,
        refuel: '1 refuel point', lunch: '1 lunch stop', routes: 'Gold and Silver splits, 1 Adventure route',
        img: 'finish-arch', alt: 'The JBFE Sea to Sea finish arch',
        body: [
          'The coastal ride to Coffee Bay leaves the best for last. It’s a day you don’t want to race. Take in the views from the grassy hills over the warm Indian Ocean.',
          'The finish line on the cliffs above Coffee Bay, with the JBFE Sea to Sea arch and a cold beer, brings the journey to an end. Done and Dusted!',
          'The final evening is rounded off with a medal handout and some fines. You sleep at Ocean View Hotel and head home after breakfast.',
        ],
      },
    ],
    videos: [
      { id: 'buvMPIk9lSc', title: 'Sea to Sea North 2026: on-bike highlights', poster: 'hole-in-wall' },
      { id: 'IztEg2E2-ls', title: 'It doesn’t happen overnight: Sea to Sea North', poster: 'coast-aerial' },
    ],
    registration: { when: 'Arrival day, 14:00 – 19:00', where: 'The front lawn at Ocean View Hotel' },
    gpsSent: null,
    // Refund cut-offs as published for the October ride.
    refunds: [
      ['Before 1 June', '75% of the entry fee back, less the deposit'],
      ['Before 1 July', '50% of the entry fee back, less the deposit'],
      ['Before 1 August', '25% of the entry fee back, less the deposit'],
      ['After 2 August', 'No refund, but you still get your goody bag'],
    ],
  },
};
export const next = editions.south; // the edition the home page leads with

/* ---------- Schedule: the same rhythm for both editions ---------- */
export const schedule = (e: Edition) => [
  { label: 'Arrival day', date: e.dayDates[0], rows: [
    ['12:00 – 18:00', `Arrive at ${e.startHotel}, register and get your goodie bag`],
    ['19:00', 'Dinner. A delicious meal awaits.'],
    ['20:00', 'Riders’ briefing: what lies ahead'],
    ['20:30', 'Night caps. A few quiet ones in the pub. Take it easy, a long day awaits.'],
  ]},
  { label: 'Day 1', date: e.dayDates[1], rows: [
    ['06:30', 'Breakfast'], ['07:30', 'Luggage and fuel drop at the truck'], ['08:00', 'Riders depart'],
    ['15:00', `Chill time at ${e.midHotel}`], ['19:00', 'Dinner'], ['20:30', 'Riders’ briefing'],
  ]},
  { label: 'Day 2', date: e.dayDates[2], rows: [
    ['06:30', 'Breakfast'], ['08:00', 'Riders depart'], ['15:00', `Back at ${e.midHotel}`],
    ['16:00', 'Beer O’Clock'], ['19:00', 'Dinner'], ['20:30', 'Riders’ briefing'],
  ]},
  { label: 'Day 3', date: e.dayDates[3], rows: [
    ['06:30', 'Breakfast'], ['07:30', 'Luggage and fuel drop at the truck'], ['08:00', 'Riders depart'],
    ['15:00', `Arrive at ${e.startHotel}`], ['19:00', 'Dinner'], ['20:30', 'Prize-giving and finishers’ medals'],
  ]},
  { label: 'Departure', date: e.dayDates[4], rows: [
    ['06:30', 'Breakfast'], ['08:30', 'Riders depart for home'],
  ]},
];

/* ---------- Entries ---------- */
export const packages = [
  {
    id: 'rider', name: 'Rider entry', price: 12650 as number | null, unit: 'per person',
    note: '1 to 25 riders per team',
    items: [
      '4 nights’ accommodation in hotels',
      '12 meals over 4 days',
      'Transport of your luggage and fuel',
      'Water points each day',
      'Sea to Sea apparel',
      'Full medical backup and chopper standby',
      '3 days of great riding',
      'Free beers on the finish line each day',
    ],
  },
  {
    id: 'supporter', name: 'Supporter entry', price: 11450 as number | null, unit: 'per supporter',
    note: 'No riding. Max 2 per team.',
    items: [
      '4 nights’ accommodation in hotels',
      '12 meals over 4 days',
      'Sea to Sea supporters’ apparel',
    ],
  },
];
export const deposit = 5000 as number | null;
export const swapFee = 50;

export const entryFields = ['Name', 'Email', 'ID number', 'Phone number', 'Gender', 'Team name', 'Emergency contact person', 'Emergency contact phone number', 'T-shirt size', 'Sock size', 'Medical aid provider', 'Medical aid number', 'Dietary requirements'];

/* ---------- Routes ---------- */
export const grades = [
  {
    id: 'gold', name: 'Gold', dots: '●●●',
    who: 'Hard enduro, for riders who love a challenge.',
    body: 'For hard-enduro riders who love a little challenge and are ready for some teamwork to get home. The difficulty is about the level of a Bronze Roof rider. Jumping across to the easier Silver route is easy: 75% of Gold and Silver is shared, so you’re never far from an escape.',
    img: 'climb', alt: 'A rider climbing a rocky track through coastal bush',
  },
  {
    id: 'silver', name: 'Silver', dots: '●●○',
    who: 'For weekend warriors who just want to have fun.',
    body: 'For many riders this is their first event, and every year more women ride Silver. Riders on 65s with long-range tanks take it on too. If things get a little too tough, jump onto the Adventure route for a quick way home.',
    img: 'speed', alt: 'A rider at speed on a dirt road across green hills',
  },
  {
    id: 'adventure', name: 'Adventure', dots: '●○○',
    who: 'Twisty gravel for the big adventure bikes.',
    body: 'Built for the T7, 790 and Africa Twin. Skilled riders could tackle it on a 1290 or 1250. Mostly twisty gravel roads, with friendly jeep track and single track thrown in. About 120 km a day.',
    img: 'villages', alt: 'Gravel roads and rondavels on the hills above the sea',
  },
];

export const included = [
  { icon: 'hotel', h: '4 nights in hotels', p: 'No camping. Hotels only, every night.' },
  { icon: 'medic', h: 'Backup', p: 'Sweeps, medics and recovery vehicles on route, with full medical backup and chopper standby.' },
  { icon: 'fuel', h: 'Fuel transport', p: 'The team moves your fuel from water point to water point each day.' },
  { icon: 'truck', h: 'Luggage moved', p: 'No support driver needed. Your bags are waiting in your room when you arrive.' },
  { icon: 'meals', h: '12 meals over 4 days', p: 'Breakfast, lunch and supper, with the water points set up and manned by the Red Cherry team.' },
  { icon: 'shirt', h: 'JBFE Sea to Sea apparel', p: 'A jacket and T-shirt for every entry in before the race-pack cut-off.' },
  { icon: 'flag', h: 'Goodie bag and medal', p: 'A goodie bag at registration and a finisher’s medal on the last night.' },
  { icon: 'beer', h: 'Free beers at the finish', p: 'On the finish line, every day.' },
];

export const testimonials = [
  { quote: 'Such a great scenic ride, awesome accommodation and even better food. A journey that took us all to places we never thought could have existed.', name: '' },
  { quote: 'Thanks bru for getting me on this ride! Was absolutely stunning and great to finish after 3 long days!', name: '' },
  { quote: 'The best thing I’ve probably ever done in my life.', name: '' },
  { quote: 'Recently did my first event with them. Unbelievable. Truly, these guys have mastered every detail! Mike Glover sets up some of the most unbelievable riding. 10/10, will be doing a lot more of their events!', name: '' },
];

export const sponsors = {
  title: { name: 'JBFE', href: 'https://www.jbfe.co.za/' },
  supporters: [
    { name: 'Supermoist', href: 'https://supermoist.co.za/', logo: '/logos/smoist.png' },
    { name: 'Green Motion', href: null as string | null, logo: '/logos/gmotion.png' },
    { name: 'Eastern Cape Motors', href: 'https://easterncapemotors.co.za/', logo: '/logos/ecmp.png' },
    { name: 'Oxygen Tyres', href: null as string | null, logo: '/logos/otyres.png' },
  ],
};

export const otherEvents = [
  { name: 'Dirt Bike Tours', href: 'http://www.dirtbiketours.co.za/', logo: '/logos/dbt.png' },
  { name: 'Sea to Ski', href: 'http://www.seatoski.co.za/', logo: '/logos/seatoski.png' },
  { name: 'Inner City Enduro', href: 'https://innercityenduro.co.za/', logo: '/logos/ice.png' },
  { name: 'Rallye Raid', href: 'https://www.rallyeraid.co.za/', logo: '/logos/rallyeraid.png' },
];

export const films = {
  main: { id: '82LaaA-cggw', title: 'JBFE Sea to Sea South 2024', poster: 'lagoon' },
  more: [
    { id: '7y2TuVIxAss', title: 'Highlights from Sea to Sea South 2024', poster: 'estuary-sun' },
    { id: 'buvMPIk9lSc', title: 'Sea to Sea North 2026: on-bike highlights', poster: 'hole-in-wall' },
    { id: 'ijrwd36K5t4', title: 'Come riding with us on the Wild Side', poster: 'beach-ride' },
  ],
  journey: [
    { id: 'ijrwd36K5t4', title: 'Come riding with us on the Wild Side', poster: 'dune-climb' },
    { id: 'G2_grtw-Ou8', title: 'Day 3, Sea to Sea South 2025', poster: 'beach-surf' },
  ],
  rideInfo: { id: 'St3qMOi5bKU', title: 'JBFE Sea to Sea ride info', poster: 'rider-ktm' },
  enter: { id: 'WBAWFe604Bs', title: 'Day 2, Sea to Sea South 2025', poster: 'river-bend' },
};

// Photo sets (names in /public/img). The coastline first.
export const coastGallery = [
  { name: 'lagoon', alt: 'A still lagoon reflecting the sky, winding out to the sea between green hills', size: 'big' },
  { name: 'beach-ride', alt: 'A rider crossing a wide, empty beach' },
  { name: 'gorge', alt: 'A river cutting through a deep forested gorge, from the air' },
  { name: 'sunset-coast', alt: 'The sun setting over the Wild Coast and a river mouth', size: 'wide' },
  { name: 'river-crossing', alt: 'A rider splashing through a rocky river crossing' },
  { name: 'rock-coast', alt: 'Riders stopped on the grass above a rocky shoreline and breaking waves', size: 'wide' },
  { name: 'aerial-village', alt: 'A coastal village in the trees above the beach, from the air' },
  { name: 'dune-climb', alt: 'A rider climbing a steep sandy bank' },
  { name: 'river-bend', alt: 'A wide river bend running to the sea between grassy hills', size: 'wide' },
  { name: 'cold-beers', alt: 'Two cold beers on ice at the finish line' },
  { name: 'cliff-path', alt: 'A rider coming up a sandy cliff path above the sea' },
];

export const rand = (n: number | null) =>
  n == null ? 'Price TBC' : 'R' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const when = (e: Edition) => (e.dates ? `${e.dates} ${e.year}` : 'Dates to be confirmed');

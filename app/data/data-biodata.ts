export type MemberRole =
  | "Founder"
  | "Streamer"
  | "Musisi"
  | "DJ"
  | "Konten Kreator"
  | "Atlet Esports"
  | "Aktor"
  | "MC";

export interface Member {
  id: number;
  slug: string;
  namaLengkap: string;
  namaPanggung: string;
  tanggalLahir: string | null;   // ISO format YYYY-MM-DD, null jika tidak diketahui
  tempatLahir: string | null;
  pekerjaan: MemberRole[];
  grup: string | null;           // grup musik / esports / duo
  instagram: string;             // tanpa @
  bio: string;
  isFounder: boolean;
  imagePosition?: string;        // CSS object-position, e.g. "center top"
}

export const AAA_CLAN_MEMBERS: Member[] = [
  {
    id: 1,
    slug: "reza-arap",
    namaLengkap: "Reza Oktovian",
    namaPanggung: "Reza Arap / YB",
    tanggalLahir: "1987-10-15",
    tempatLahir: "Jakarta",
    pekerjaan: ["Founder", "Streamer", "Musisi", "Aktor"],
    grup: "Weird Genius",
    instagram: "ybrap",
    bio: "Pelopor AAA CLAN dan penggagas Marapthon. Mulai berkarier sebagai YouTuber gaming sejak 2013. Sempat memberikan channel YouTube-nya untuk yayasan kanker anak, lalu comeback dengan channel baru pada 2018. Bersama Eka Gustiwana dan Billy Taner, ia membentuk grup elektronik Weird Genius pada 2016 yang telah berkolaborasi dengan musisi internasional.",
    isFounder: true,
  },
  {
    id: 2,
    slug: "garry-ang",
    namaLengkap: "Garry Andriawan Ang",
    namaPanggung: "Garry Ang",
    tanggalLahir: null,
    tempatLahir: null,
    pekerjaan: ["DJ", "Konten Kreator"],
    grup: null,
    instagram: "grryang",
    bio: "Sosok multitalenta yang dikenal sebagai DJ dan konten kreator. Aktif mengikuti lari maraton dan mendaki gunung — rekornya di dunia lari sempat membuat Dokter Tirta angkat topi. Di Marapthon, Garry sering mengambil alih dapur untuk menyajikan makanan kepada seluruh member.",
    isFounder: false,
  },
  {
    id: 3,
    slug: "tierison",
    namaLengkap: "George Andika Tierison",
    namaPanggung: "Tierison / Jot",
    tanggalLahir: null,
    tempatLahir: null,
    pekerjaan: ["Konten Kreator", "Atlet Esports"],
    grup: "BOOM Esports",
    instagram: "tierison",
    bio: "Berasal dari dunia gaming seperti Reza Arap. Membuka channel YouTube sejak 2015 dengan konten gaming, vlog, dan lifestyle. Pada 2019 melebarkan sayap ke dunia esports sebagai pro player Call of Duty: Mobile bersama BOOM Esports. Dikenal di komunitas dengan julukan Si Raja Gacha.",
    isFounder: false,
  },
  {
    id: 4,
    slug: "aloy",
    namaLengkap: "Aldy Renaldi",
    namaPanggung: "Aloy / Mister Aloy / King Aloy",
    tanggalLahir: "1998-07-19",
    tempatLahir: "Tangerang, Banten",
    pekerjaan: ["Konten Kreator", "DJ", "Aktor", "MC"],
    grup: "DNA",
    instagram: "mister.aloy",
    bio: "Salah satu member yang popularitasnya melejit berkat Marapthon. Setelah tampil di acara tersebut, Aloy mulai diundang ke podcast, acara TV, hingga bermain film. Sebelumnya dikenal sebagai konten kreator, MC, dan DJ. Tergabung dalam grup duo DJ bernama DNA bersama DJ Djayjax.",
    isFounder: false,
  },
  {
    id: 5,
    slug: "yukatheo",
    namaLengkap: "Yukatheo Glen Widjaja",
    namaPanggung: "Yukatheo / You_K",
    tanggalLahir: "1998-07-22",
    tempatLahir: null,
    pekerjaan: ["Atlet Esports", "Konten Kreator"],
    grup: null,
    instagram: "yukatheo",
    bio: "Dikenal di dunia gaming sebagai pro player Dota 2 sejak 2018 hingga 2022. Setelah pensiun dari esports profesional, ia aktif membuat konten gaming dan kehidupan sehari-hari di YouTube. Di AAA CLAN, Yuka dikenal sebagai member yang pendiam namun sangat bisa diandalkan.",
    isFounder: false,
  },
  {
    id: 6,
    slug: "tepe46",
    namaLengkap: "Teguh Prakoso",
    namaPanggung: "Tepe / Tepe46",
    tanggalLahir: "1991-01-27",
    tempatLahir: "Jember, Jawa Timur",
    pekerjaan: ["Konten Kreator"],
    grup: null,
    instagram: "_tepe46",
    bio: "Salah satu konten kreator YouTube senior Indonesia. Akun YouTube-nya telah aktif sejak 2007 dan masih berjalan hingga kini. Kontennya beragam — mulai dari game, vlog, podcast, hingga karya musik buatannya sendiri.",
    isFounder: false,
  },
  {
    id: 7,
    slug: "dj-bravy",
    namaLengkap: "Bravyson",
    namaPanggung: "Vconk / DJ Bravy",
    tanggalLahir: "1988-12-10",
    tempatLahir: "Jakarta",
    pekerjaan: ["DJ"],
    grup: null,
    instagram: "bravyson.vconk",
    bio: "DJ yang juga menguasai fotografi dan desain grafis. Pernah bekerja sebagai marketing manager sejak 2014 di beberapa perusahaan kuliner. Di luar panggung, sempat menjadi perhatian publik karena kisah asmaranya dengan aktris Erika Carlina.",
    isFounder: false,
  },
  {
    id: 8,
    slug: "niko-junius",
    namaLengkap: "Niko Junius",
    namaPanggung: "Niko",
    tanggalLahir: "1997-06-02",
    tempatLahir: "Jakarta",
    pekerjaan: ["Konten Kreator", "Streamer"],
    grup: null,
    instagram: "nikojuniuss",
    bio: "YouTuber yang sudah berkiprah sejak 2015. Merupakan salah satu orang yang sudah berada di lingkaran dekat Reza Arap sejak lama. Channel YouTube-nya banyak menampilkan konten gaming dan kehidupan keseharian bersama para sahabat. Terlibat di Marapthon dari musim pertama hingga musim ketiga.",
    isFounder: false,
  },
  {
    id: 9,
    slug: "ibot",
    namaLengkap: "Ade Ariyanto",
    namaPanggung: "Ibot",
    tanggalLahir: "1996-04-27",
    tempatLahir: "Bekasi",
    pekerjaan: ["Atlet Esports", "Konten Kreator", "Streamer"],
    grup: "Dominator Esports",
    instagram: "ibotttt",
    bio: "Memulai karier di dunia gaming profesional sejak 2015 sebagai pemain Dota 2. Kini menjabat sebagai Wakil Presiden di Dominator Esports. Aktif sebagai konten kreator dan streamer dengan konten andalan live in real life (IRL).",
    isFounder: false,
  },
];

// ─── Helper utils ────────────────────────────────────────────────────────────

/** Cari member berdasarkan slug */
export const getMemberBySlug = (slug: string): Member | undefined =>
  AAA_CLAN_MEMBERS.find((m) => m.slug === slug);

/** Filter member berdasarkan role */
export const getMembersByRole = (role: MemberRole): Member[] =>
  AAA_CLAN_MEMBERS.filter((m) => m.pekerjaan.includes(role));

/** Hitung umur dari tanggal lahir */
export const getAge = (tanggalLahir: string): number => {
  const today = new Date();
  const birth = new Date(tanggalLahir);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
};

/** Ambil nama file gambar member berdasarkan slug */
export const getMemberImage = (slug: string): string => {
  const imageMap: Record<string, string> = {
    "reza-arap": "yb.jpg",
    "garry-ang": "garry.png",
    "tierison": "jot.webp",
    "aloy": "aloy.png",
    "yukatheo": "yuka.png",
    "tepe46": "tepe.png",
    "dj-bravy": "bravy.png",
    "niko-junius": "niko.png",
    "ibot": "ibot.png",
  };
  return imageMap[slug] || `${slug}.webp`;
};
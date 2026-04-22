export interface Module {
  id: string;
  title: string;
  videoId?: string;
  duration: string;
  category: string;
  thumb?: string;
  isOptional?: boolean;
  isWajib?: boolean;
  isPraktik?: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  modules: Module[];
}

export interface Track {
  id: string;
  title: string;
  description: string;
  isLocked: boolean;
  chapters: Chapter[];
}

export const MATERIALS_DATA: Track[] = [
  {
    id: "CORE",
    title: "Fase CORE",
    description: "Foundational basics for every IT Club member.",
    isLocked: false,
    chapters: [
      {
        id: "core-ch-1",
        title: "BAB 1: PERANGKAT KERAS & SISTEM OPERASI",
        modules: [
          {
            id: "core-1",
            title: "Mengenal Komponen pada Komputer (Wajib)",
            videoId: "2tQtnxGo1eE",
            duration: "07:00",
            category: "Hardware & OS",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/2tQtnxGo1eE/0.jpg"
          },
          {
            id: "core-2",
            title: "Alur Pengiriman Data pada Komputer (Wajib)",
            videoId: "9GMVO6zADpw",
            duration: "14:26",
            category: "Hardware & OS",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/9GMVO6zADpw/0.jpg"
          },
          {
            id: "core-3",
            title: "Sistem Bus pada Komputer (Opsional)",
            videoId: "AJ2j9_f26I0",
            duration: "09:23",
            category: "Hardware & OS",
            isOptional: true,
            thumb: "https://img.youtube.com/vi/AJ2j9_f26I0/0.jpg"
          },
          {
            id: "core-4",
            title: "Apa itu Binary Code? (Opsional)",
            videoId: "1BaaIfoguBY",
            duration: "05:28",
            category: "Hardware & OS",
            isOptional: true,
            thumb: "https://img.youtube.com/vi/1BaaIfoguBY/0.jpg"
          },
          {
            id: "core-5",
            title: "Merakit Komputer dari Nol (Opsional & Praktik)",
            videoId: "yx7n_MsHqF0",
            duration: "12:57",
            category: "Hardware & OS",
            isOptional: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/yx7n_MsHqF0/0.jpg"
          },
          {
            id: "core-6",
            title: "Penjelasan Sistem Operasi Komputer (Wajib)",
            videoId: "rRFZ5hExKI8",
            duration: "06:31",
            category: "Hardware & OS",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/rRFZ5hExKI8/0.jpg"
          },
          {
            id: "core-7",
            title: "Apa itu Virtualisasi (Wajib)",
            videoId: "fckgHc2JwQs",
            duration: "08:27",
            category: "Hardware & OS",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/fckgHc2JwQs/0.jpg"
          },
          {
            id: "core-8",
            title: "Instalasi Linux Ubuntu pada VirtualBox (Wajib & Praktik)",
            videoId: "JuTncGcT7Ug",
            duration: "10:50",
            category: "Hardware & OS",
            isWajib: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/JuTncGcT7Ug/0.jpg"
          },
          {
            id: "core-9",
            title: "Penjelasan Setiap Distro Linux (Opsional)",
            videoId: "QFzXQNZ6zvQ",
            duration: "13:55",
            category: "Hardware & OS",
            isOptional: true,
            thumb: "https://img.youtube.com/vi/QFzXQNZ6zvQ/0.jpg"
          },
          {
            id: "core-10",
            title: "Cara Install Ulang OS Komputer (Opsional & Praktik)",
            videoId: "SOxURzYOhns",
            duration: "17:43",
            category: "Hardware & OS",
            isOptional: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/SOxURzYOhns/0.jpg"
          }
        ]
      },
      {
        id: "core-ch-2",
        title: "BAB 2: DASAR-DASAR JARINGAN KOMPUTER",
        modules: [
          {
            id: "core-11",
            title: "Konsep Jaringan Komputer (Wajib)",
            videoId: "xT58k6AB7gk",
            duration: "07:03",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/xT58k6AB7gk/0.jpg"
          },
          {
            id: "core-12",
            title: "Sejarah Singkat Internet (Opsional)",
            videoId: "xAgC3hDTw3Q",
            duration: "11:35",
            category: "Networking",
            isOptional: true,
            thumb: "https://img.youtube.com/vi/xAgC3hDTw3Q/0.jpg"
          },
          {
            id: "core-13",
            title: "Kayak Gimana Bentuk Internet Sebenernya? (Wajib)",
            videoId: "_fl7wWbV604",
            duration: "04:13",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/_fl7wWbV604/0.jpg"
          },
          {
            id: "core-14",
            title: "Mekanisme Dibalik Cara Kerja Internet (Opsional)",
            videoId: "dPM3O5SmzhA",
            duration: "11:50",
            category: "Networking",
            isOptional: true,
            thumb: "https://img.youtube.com/vi/dPM3O5SmzhA/0.jpg"
          },
          {
            id: "core-15",
            title: "Penjelasan OSI Model / OSI Layer (Wajib)",
            videoId: "lWSqQb9KdVQ",
            duration: "11:41",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/lWSqQb9KdVQ/0.jpg"
          },
          {
            id: "core-16",
            title: "Konsep TCP/IP (Wajib)",
            videoId: "nLF53fEFCC4",
            duration: "16:30",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/nLF53fEFCC4/0.jpg"
          },
          {
            id: "core-17",
            title: "Konsep UDP (Wajib)",
            videoId: "8lKExTlK_f4",
            duration: "10:32",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/8lKExTlK_f4/0.jpg"
          },
          {
            id: "core-18",
            title: "Konsep IP Address (Wajib)",
            videoId: "6YbdN0ubdHk",
            duration: "05:59",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/6YbdN0ubdHk/0.jpg"
          },
          {
            id: "core-19",
            title: "Konsep MAC Address (Wajib)",
            videoId: "uisOBGDy64A",
            duration: "07:58",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/uisOBGDy64A/0.jpg"
          },
          {
            id: "core-20",
            title: "IP Address Private & Public (Wajib)",
            videoId: "J07fBEEl__s",
            duration: "07:03",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/J07fBEEl__s/0.jpg"
          },
          {
            id: "core-21",
            title: "IP Address Statis & Dinamis (Wajib)",
            videoId: "GrqgeOj-CAs",
            duration: "05:25",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/GrqgeOj-CAs/0.jpg"
          },
          {
            id: "core-22",
            title: "Penjelasan Lengkap IP Address (Wajib)",
            videoId: "mn-RzvOPv68",
            duration: "10:00",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/mn-RzvOPv68/0.jpg"
          },
          {
            id: "core-23",
            title: "Konsep Subnetting (Wajib)",
            videoId: "B0LjevM22XE",
            duration: "29:16",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/B0LjevM22XE/0.jpg"
          },
          {
            id: "core-24",
            title: "Apa itu DHCP? (Wajib)",
            videoId: "EhR8GLt_roA",
            duration: "06:19",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/EhR8GLt_roA/0.jpg"
          },
          {
            id: "core-25",
            title: "Apa itu Port? (Wajib)",
            videoId: "wqe_YPhcfAw",
            duration: "10:33",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/wqe_YPhcfAw/0.jpg"
          },
          {
            id: "core-26",
            title: "Jenis Perangkat Keras Jaringan Komputer (Wajib)",
            videoId: "N2CNS1N9gZo",
            duration: "07:10",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/N2CNS1N9gZo/0.jpg"
          },
          {
            id: "core-27",
            title: "Tutorial Crimping Kabel LAN RJ45 (Opsional & Praktik)",
            videoId: "JDiybTG9dGY",
            duration: "06:54",
            category: "Networking",
            isOptional: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/JDiybTG9dGY/0.jpg"
          },
          {
            id: "core-28",
            title: "Simulasi Cisco Packet Tracer (Opsional & Praktik)",
            videoId: "CAWjdVqXd1I",
            duration: "10:02",
            category: "Networking",
            isOptional: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/CAWjdVqXd1I/0.jpg"
          },
          {
            id: "core-29",
            title: "Cara Install Cisco Packet Tracer (Opsional & Praktik)",
            videoId: "XIo3oNFHFAo",
            duration: "11:12",
            category: "Networking",
            isOptional: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/XIo3oNFHFAo/0.jpg"
          },
          {
            id: "core-30",
            title: "Konfigurasi Dasar IP Address di Windows (Wajib & Praktik)",
            videoId: "P3yoSI4NygI",
            duration: "05:01",
            category: "Networking",
            isWajib: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/P3yoSI4NygI/0.jpg"
          },
          {
            id: "core-31",
            title: "Konfigurasi Dasar IP Address di Linux (Opsional & Praktik)",
            videoId: "TG5BkpmAP3A",
            duration: "18:52",
            category: "Networking",
            isOptional: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/TG5BkpmAP3A/0.jpg"
          },
          {
            id: "core-32",
            title: "Apa itu Server (Wajib)",
            videoId: "83_6oQNm_b8",
            duration: "08:03",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/83_6oQNm_b8/0.jpg"
          },
          {
            id: "core-33",
            title: "Apa itu DNS dan Bagaimana Cara Kerjanya? (Wajib)",
            videoId: "2tBYH2yX9tI",
            duration: "06:59",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/2tBYH2yX9tI/0.jpg"
          },
          {
            id: "core-34",
            title: "Mengenal Router (Wajib)",
            videoId: "PP_hmimimxI",
            duration: "08:39",
            category: "Networking",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/PP_hmimimxI/0.jpg"
          }
        ]
      },
      {
        id: "core-ch-3",
        title: "BAB 3: DASAR COMMAND LINE INTERFACE",
        modules: [
          {
            id: "core-35",
            title: "Perbedaan CLI & GUI (Wajib)",
            videoId: "T0NGgVO_suQ",
            duration: "04:15",
            category: "CLI",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/T0NGgVO_suQ/0.jpg"
          },
          {
            id: "core-36",
            title: "Perintah Dasar Linux (Wajib & Praktik)",
            videoId: "ClbWfffCYf4",
            duration: "15:03",
            category: "CLI",
            isWajib: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/ClbWfffCYf4/0.jpg"
          },
          {
            id: "core-37",
            title: "Perintah Dasar Linux - Jaringan (Part 1) (Wajib & Praktik)",
            videoId: "p6nrkK9ySyM",
            duration: "07:45",
            category: "CLI",
            isWajib: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/p6nrkK9ySyM/0.jpg"
          },
          {
            id: "core-38",
            title: "Perintah Dasar Linux - Jaringan (Part 2) (Wajib & Praktik)",
            videoId: "bged7SRX2fw",
            duration: "18:12",
            category: "CLI",
            isWajib: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/bged7SRX2fw/0.jpg"
          },
          {
            id: "core-39",
            title: "Perbedaan Telnet dan SSH (Wajib)",
            videoId: "UxqlqjrAmaQ",
            duration: "04:46",
            category: "CLI",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/UxqlqjrAmaQ/0.jpg"
          },
          {
            id: "core-40",
            title: "Mengenal Secure Shell (SSH) (Wajib)",
            videoId: "HlSktNwxCW8",
            duration: "13:20",
            category: "CLI",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/HlSktNwxCW8/0.jpg"
          }
        ]
      },
      {
        id: "core-ch-4",
        title: "BAB 4: DASAR-DASAR TEKNOLOGI WEBSITE",
        modules: [
          {
            id: "core-41",
            title: "Konsep Client - Server (Wajib)",
            videoId: "7TiVd8MYsIs",
            duration: "03:58",
            category: "Web",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/7TiVd8MYsIs/0.jpg"
          },
          {
            id: "core-42",
            title: "Memahami URL Secara Cepat (Wajib)",
            videoId: "5Jr-_Za5yQM",
            duration: "02:27",
            category: "Web",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/5Jr-_Za5yQM/0.jpg"
          },
          {
            id: "core-43",
            title: "Penjelasan URL & Parameter (Wajib)",
            videoId: "DtJxopj_fzA",
            duration: "00:00",
            category: "Web",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/DtJxopj_fzA/0.jpg"
          },
          {
            id: "core-44",
            title: "Penjelasan Domain (Wajib)",
            videoId: "NXT0d3J-yz4",
            duration: "02:05",
            category: "Web",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/NXT0d3J-yz4/0.jpg"
          },
          {
            id: "core-45",
            title: "Bagaimana Cara Kerja Domain? (Wajib)",
            videoId: "7e93UHZHkUc",
            duration: "01:39",
            category: "Web",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/7e93UHZHkUc/0.jpg"
          },
          {
            id: "core-46",
            title: "Apa itu HTTP dan HTTPS? (Wajib)",
            videoId: "sqiO0Jdkwoo",
            duration: "08:48",
            category: "Web",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/sqiO0Jdkwoo/0.jpg"
          },
          {
            id: "core-47",
            title: "Mengenal Cookies Browser (Wajib)",
            videoId: "TAmlkdCbflU",
            duration: "09:38",
            category: "Web",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/TAmlkdCbflU/0.jpg"
          },
          {
            id: "core-48",
            title: "Membangun Web Server dengan Nginx (Opsional & Praktik)",
            videoId: "cOCTuDrQb1c",
            duration: "17:09",
            category: "Web",
            isOptional: true,
            isPraktik: true,
            thumb: "https://img.youtube.com/vi/cOCTuDrQb1c/0.jpg"
          },
          {
            id: "core-49",
            title: "Apa itu Database? (Wajib)",
            videoId: "OgEy9OZEwBs",
            duration: "01:35",
            category: "Web",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/OgEy9OZEwBs/0.jpg"
          },
          {
            id: "core-50",
            title: "Mengenal API (Application Programming Interface) (Wajib)",
            videoId: "EGG0iHWf23E",
            duration: "07:02",
            category: "Web",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/EGG0iHWf23E/0.jpg"
          },
          {
            id: "core-51",
            title: "Apa itu JSON? (Wajib)",
            videoId: "Vn_kxudkF4Y",
            duration: "05:51",
            category: "Web",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/Vn_kxudkF4Y/0.jpg"
          },
          {
            id: "core-52",
            title: "Konsep Mesin Pencari (Search Engine) (Wajib)",
            videoId: "M0KuYE2tN-M",
            duration: "02:18",
            category: "Web",
            isWajib: true,
            thumb: "https://img.youtube.com/vi/M0KuYE2tN-M/0.jpg"
          }
        ]
      }
    ]
  },
  {
    id: "IOT",
    title: "Internet of Things",
    description: "Deep dive into hardware, sensors, and connectivity.",
    isLocked: true,
    chapters: [
      {
        id: "iot-ch-1",
        title: "Getting Started with Arduino",
        modules: [
          { id: "iot-1", title: "Arduino Basics", duration: "15:00", category: "IoT" },
          { id: "iot-2", title: "Sensor Integration", duration: "20:00", category: "IoT" }
        ]
      }
    ]
  },
  {
    id: "CYSEC",
    title: "Cyber Security",
    description: "Learn to defend systems and understand attacks.",
    isLocked: true,
    chapters: [
      {
        id: "cysec-ch-1",
        title: "Ethical Hacking Intro",
        modules: [
          { id: "cysec-1", title: "SQL Injection Mastery", duration: "25:00", category: "Security" },
          { id: "cysec-2", title: "Penetration Testing Basics", duration: "30:00", category: "Security" }
        ]
      }
    ]
  }
];

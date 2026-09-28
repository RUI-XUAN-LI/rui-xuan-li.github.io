/**
 * General website content.
 *
 * Edit this file to update the profile, news, selected publications,
 * reviewing service, projects, or the "Last modified" text.
 * Rich text fields are arrays: use a string for plain text and
 * { text: "Link label", url: "https://..." } for a link.
 */
window.SITE_DATA = {
  profile: {
    name: "Ruixuan Li",
    affiliation: "Tsinghua University",
    avatar: "info/images/myfig3.jpg",
    email: "lirx25 [at] mails.tsinghua.edu.cn",
    location: "FIT 1-213, Tsinghua University, Beijing 100084, P.R.China",
    scholarUrl: "https://scholar.google.com/citations?hl=zh-CN&user=toOP7VMAAAAJ",
    about: [
      [
        "I am a second year PhD student at ",
        { text: "Network and Information Security Lab (NISL)", url: "https://netsec.ccert.edu.cn/chs/" },
        " of Tsinghua University. My supervisor is Associate Professor ",
        { text: "Baojun Liu", url: "https://www.liubaojun.org/" },
        "."
      ],
      [
        "My research focuses on network security and Internet measurement, with particular interests in security of DNS and Email."
      ],
      [
        "I obtained my Bachelor’s and Master’s degrees from Zhejiang Gongshang University in 2021 and 2024 respectively (advised by Professor ",
        { text: "Jun Shao", url: "https://junshao81.github.io/index.html" },
        "). In 2025, I worked as a network security engineer at Tsinghua University."
      ]
    ]
  },

  news: [
      {
      date: "September 2026",
      content: ["Our paper about email account compromise was accepted to ", { text: "NDSS 2027", url: "https://www.ndss-symposium.org/ndss2027/" }, "!"]
    },
      {
      date: "August 2026",
      content: ["Our paper about email delivery retry was accepted to ", { text: "IMC 2026", url: "https://conferences.sigcomm.org/imc/2026/" }, "!"]
    },
    {
      date: "June 2026",
      content: ["I was invited to serve as ", { text: "USENIX Security 2027", url: "https://www.usenix.org/conference/usenixsecurity27" }, " PC."]
    },
    {
      date: "May 2026",
      content: ["Our paper about domain takeover was accepted to ", { text: "USENIX Security 2026", url: "https://www.usenix.org/conference/usenixsecurity26" }, "!"]
    },
    {
      date: "May 2026",
      content: ["Our paper about Traffic shadowing was accepted to ", { text: "TON 2026", url: "https://www.comsoc.org/publications/journals/ieee-tnet" }, "! Congrats to Yunpeng!"]
    },
    {
      date: "April 2026",
      content: ["Our paper about DNS task queue was accepted to ", { text: "CCS 2026", url: "https://www.sigsac.org/ccs/CCS2026/" }, "! Congrats to Shiming and Yunyi!"]
    },
    {
      date: "January 2026",
      content: ["Our paper about Iran Internet shutdown was accepted to ", { text: "WWW 2026", url: "https://www2026.thewebconf.org/" }, "! Congrats to Shibo!"]
    },
    {
      date: "October 2025",
      content: ["Our paper about email amplification attack was accepted to ", { text: "NDSS 2026", url: "https://www.ndss-symposium.org/ndss2026/" }, "!"]
    },
    {
      date: "August 2025",
      content: ["Our paper about email intermediate delivery path was accepted to ", { text: "IMC 2025", url: "https://conferences.sigcomm.org/imc/2025/" }, "!"]
    },
    {
      date: "July 2025",
      content: ["Our paper about email invisible HTML settings was accepted to ", { text: "ESORICS 2025", url: "https://esorics2025.sciencesconf.org/" }, "! Congrats to Bingyang and Mingxuan!"]
    },
    {
      date: "September 2024",
      content: ["Our paper about email blocklist manipulation risk was accepted to ", { text: "NDSS 2025", url: "https://www.ndss-symposium.org/ndss2025/" }, "!"]
    },
    {
      date: "August 2024",
      content: ["Our paper about email bounces was accepted to ", { text: "IMC 2024", url: "https://conferences.sigcomm.org/imc/2024/" }, "!"]
    },
    {
      date: "September 2024",
      content: ["Our paper about ticket grabbing apps was accepted to ", { text: "USENIX Security 2024", url: "https://www.usenix.org/conference/usenixsecurity24" }, "! Congrats to Yijing!"]
    },
    {
      date: "September 2024",
      content: ["Our paper about encrypted DNS reachability was accepted to ", { text: "WWW 2024", url: "https://www2024.thewebconf.org/" }, "!"]
    }
  ],

  reviewers: [
    { label: "USENIX Security 2027", url: "https://www.usenix.org/conference/usenixsecurity27" }
  ],

  projects: [
    {
      title: "Encrypted DNS Query",
      url: "https://doe.seclab.tech/",
      image: "info/images/projects/doe-query.jpg",
      imageAlt: "Encrypted DNS Query",
      date: "January, 2023",
      datetime: "2023-01-01",
      description: "Support querying five (encrypted) DNS services to obtain function, configuration, location of the target IP/Domain on the specified port."
    }
  ],

  lastModified: "September 18, 2026"
};

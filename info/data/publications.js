/**
 * Publication list.
 *
 * Add a new object anywhere in this array. The page groups entries by year,
 * sorts years from newest to oldest, and creates the year navigator for you.
 * Link labels can be Paper, Cite, Slides, Poster, Video, Data, Website, etc.
 */
window.PUBLICATIONS = [
    {
    year: 2027,
    title: "Tracking the Shadows: A Longitudinal, End-to-End Analysis of the Criminal Ecosystem for Email Account Compromise",
    venue: "Proceedings of the 32nd Network and Distributed System Security (NDSS) Symposium, Seoul, Republic of Korea, March 2027",
    authors: ["Ruixuan Li", "Liying Duan", "Yunyi Zhang", "Mingxuan Liu", "Baojun Liu", "Qingfeng Pan"],
    links: [
    ]
  },
  {
    year: 2026,
    title: "When Delivery Meets Error: Exploring Email Delivery Retry Strategies and Defects",
    venue: "Proceedings of ACM Internet Measurement Conference (IMC), Karlsruhe, Germany, October 2026",
    authors: ["Ruixuan Li", "Enlong Li", "Mingxuan Liu", "Baojun Liu", "Haixin Duan", "Qingfeng Pan"],
    links: [
      { label: "Paper", url: "info/paper/2026/2026-IMC.pdf" },
    ]
  },
  {
    year: 2026,
    title: "Alias Equals Zone? Large-Scale and Stealthy Takeover of Domain Hosting Service via CNAME-Following Cross-Domain Verification",
    venue: "Proceedings of 35th USENIX Security Symposium (USENIX Security), Baltimore, MD, USA, August 2026",
    authors: ["Ruixuan Li", "Xingyu Zhao", "Yunyi Zhang", "Baojun Liu", "Jun Shao"],
    selected: { order: 1, venue: "USENIX Security 2026", url: "https://www.usenix.org/conference/usenixsecurity26" },
    links: [
      { label: "Paper", url: "info/paper/2026/2026-USENIX.pdf" },
      { label: "Slide", url: "info/paper/2026/2026-USENIX-Slides.pdf" },
      { label: "Poster", url: "info/paper/2026/2026-USENIX-Poster.pdf" }
    ]
  },
  {
    year: 2026,
    title: "Traffic Shadowing: A Global Investigation of Internet Traffic Observation and User Data Reutilization",
    venue: "Proceedings of IEEE/ACM Transactions on Networking (TON), 2026",
    authors: ["Yunpeng Xing", "Chaoyi Lu", "Baojun Liu", "Ruixuan Li", "Haixin Duan"],
    links: [{ label: "Paper", url: "info/paper/2026/2026-TON.pdf" }]
  },
  {
    year: 2026,
    title: "The Trade-off Between Performance and Security: Exploring Vulnerabilities in DNS Task Queue Scheduling",
    venue: "Proceedings of ACM SIGSAC Conference on Computer and Communications Security (CCS), Hague, Netherlands, November 2026",
    authors: ["*Shiming Liu", "*Yunyi Zhang", "Ruixuan Li", "Shiyao Guo", "Baojun Liu", "Donghong Sun", "Yong Ma", "Linjian Song"],
    links: []
  },
  {
    year: 2026,
    title: "Characterizing Iran's Phased National Internet Shutdown in 2025: A Progressive and Distributed Action",
    venue: "Proceedings of ACM Web Conference (WWW), Dubai, United Arab Emirates, April 2026",
    authors: ["Shibo Cui", "Mingxuan Liu", "Baojun Liu", "Haixin Duan", "Ruixuan Li", "Chaoyi Lu", "Jin Zhang", "Zhicheng Wang and Jinghua Bai"],
    links: [{ label: "Paper", url: "info/paper/2026/2026-WWW.pdf" }]
  },
  {
    year: 2026,
    title: "CoordMail: Exploiting SMTP Timeout and Command Interaction to Coordinate Email Middleware for Convergence Amplification Attack",
    venue: "Proceedings of the 33rd Network and Distributed System Security (NDSS) Symposium, San Diego, CA, USA, February 2026",
    authors: ["Ruixuan Li", "Chaoyi Lu", "Baojun Liu", "Yanzhong Lin", "Qingfeng Pan", "Jun Shao"],
    links: [
      { label: "Paper", url: "info/paper/2026/2026-NDSS.pdf" },
      { label: "Slide", url: "info/paper/2026/2026-NDSS-Slides.pdf" },
      { label: "Data", url: "https://github.com/RUI-XUAN-LI/CoordMail" }
    ]
  },
  {
    year: 2025,
    title: "Understanding and Characterizing Intermediate Paths of Email Delivery: The Hidden Dependencies",
    venue: "Proceedings of ACM Internet Measurement Conference (IMC), Madison, Wisconsin, USA, October 2025",
    authors: ["Ruixuan Li", "Chaoyi Lu", "Baojun Liu", "Yanzhong Lin", "Haixin Duan", "Qingfeng Pan", "Jun Shao"],
    selected: { order: 3, venue: "IMC 2025", url: "https://conferences.sigcomm.org/imc/2025/" },
    links: [
      { label: "Paper", url: "info/paper/2025/2025-IMC.pdf" },
      { label: "Slide", url: "info/paper/2025/2025-IMC-Slides.pdf" },
      { label: "Data", url: "https://github.com/RUI-XUAN-LI/Email_Path" }
    ]
  },
  {
    year: 2025,
    title: "Email Cloaking: Deceiving Users and Spam Email Detectors with Invisible HTML Settings",
    venue: "Proceedings of the 30th European Symposium on Research in Computer Security (ESORICS), Toulouse, France, September, 2025",
    authors: ["*Bingyang Guo", "*Mingxuan Liu", "Yihui Ma", "Ruixuan Li", "Fan Shi", "Min Zhang", "Baojun Liu", "Chengxi Xu", "Haixin Duan", "Geng Hong", "Min Yang", "Qingfeng Pan"],
    links: [
      { label: "Paper", url: "info/paper/2025/2025-ESORICS.pdf" },
      { label: "Data", url: "https://github.com/MingxuanLiu/Cloaked_Spam_Email-ESORICS25/tree/main" }
    ]
  },
  {
    year: 2025,
    title: "HADES Attack: Understanding and Evaluating Manipulation Risks of Email Blocklists",
    venue: "Proceedings of the 32nd Network and Distributed System Security (NDSS) Symposium, San Diego, CA, USA, February 2025",
    authors: ["Ruixuan Li", "Chaoyi Lu", "Baojun Liu", "Yunyi Zhang", "Geng Hong", "Haixin Duan", "Yanzhong Lin", "Qingfeng Pan", "Min Yang", "Jun Shao"],
    selected: { order: 2, venue: "NDSS 2025", url: "https://www.ndss-symposium.org/ndss2025/" },
    links: [
      { label: "Paper", url: "info/paper/2025/2025-NDSS.pdf" },
      { label: "Cite", url: "info/paper/2025/2025-NDSS-bib.txt" },
      { label: "Slide", url: "info/paper/2025/2025-NDSS-Slides.pdf" },
      { label: "Poster", url: "info/paper/2025/2025-NDSS-Poster.pdf" }
    ]
  },
  {
    year: 2024,
    title: "Bounce in the Wild: A Deep Dive into Email Delivery Failures from a Large Email Service Provider",
    venue: "Proceedings of ACM Internet Measurement Conference (IMC), Madrid, Spain, November 2024",
    authors: ["Ruixuan Li", "Shaodong Xiao", "Baojun Liu", "Yanzhong Lin", "Haixin Duan", "Qingfeng Pan", "Jianjun Chen", "Jia Zhang", "Ximeng Liu", "Xiuqi Lu", "Jun Shao"],
    links: [
      { label: "Paper", url: "info/paper/2024/2024-IMC.pdf" },
      { label: "Cite", url: "info/paper/2024/2024-IMC-bib.txt" },
      { label: "Slide", url: "info/paper/2024/2024-IMC-Slides.pdf" }
    ]
  },
  {
    year: 2024,
    title: "Tickets or Privacy? Understand the Ecosystem of Chinese Ticket Grabbing Apps",
    venue: "Proceedings of 33rd USENIX Security Symposium (USENIX Security), Philadelphia, PA, USA, August 2024",
    authors: ["*Yijing Liu", "Yiming Zhang", "Baojun Liu", "Haixin Duan", "Qiang Li", "Mingxuan Liu", "Ruixuan Li", "Jia Yao"],
    links: [{ label: "Paper", url: "info/paper/2024/2024-USENIX.pdf" }]
  },
  {
    year: 2024,
    title: "A Worldwide View on the Reachability of Encrypted DNS Services",
    venue: "Proceedings of ACM Web Conference (WWW), Singapore, May 2024",
    authors: ["Ruixuan Li", "Baojun Liu", "Chaoyi Lu", "Haixin Duan", "Jun Shao"],
    links: [
      { label: "Paper", url: "info/paper/2024/2024-WWW.pdf" },
      { label: "Cite", url: "info/paper/2024/2024-WWW-bib.txt" },
      { label: "Slide", url: "info/paper/2024/2024-WWW-Slides.pdf" },
      { label: "Video", url: "https://www.youtube.com/watch?v=AD_lFVZk_dQ" },
      { label: "Data", url: "https://port-53.info/data/open-encrypted-dns-servers/" },
      { label: "Website", url: "https://doe-query.info/" }
    ]
  },
  {
    year: 2023,
    title: "A Longitudinal and Comprehensive Measurement of DNS Strict Privacy",
    venue: "Proceedings of IEEE/ACM Transactions on Networking (TON), 2023",
    authors: ["Ruixuan Li", "Xiaofeng Jia", "Zhenyong Zhang", "Jun Shao", "Rongxing Lu", "Jingqiang Lin", "Xiaoqi Jia", "Guiyi Wei"],
    links: [
      { label: "Paper", url: "info/paper/2023/2023-TON.pdf" },
      { label: "Cite", url: "info/paper/2023/2023-TON-bib.txt" },
      { label: "Website", url: "https://lrxgoat.github.io/" }
    ]
  },
  {
    year: 2023,
    title: "The Potential Harm of Email Delivery: Investigating the HTTPS configurations of Webmail Services",
    venue: "Proceedings of IEEE Transactions on Dependable and Secure Computing (TDSC), 2023",
    authors: ["Ruixuan Li", "Zhenyong Zhang", "Jun Shao", "Rongxing Lu", "Xiaoqi Jia", "Guiyi Wei"],
    links: [
      { label: "Paper", url: "info/paper/2023/2023-TDSC.pdf" },
      { label: "Cite", url: "info/paper/2023/2023-TDSC-bib.txt" }
    ]
  }
];

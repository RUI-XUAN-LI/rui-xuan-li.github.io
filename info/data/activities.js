/**
 * Activity cards and detail pages.
 *
 * Add one object to create a home-page card. Detail fields are rendered by
 * info/js/render-talk.js. Existing detail-page URLs are kept as thin shells.
 */
window.ACTIVITIES = [
  {
    id: "2024-imc",
    title: "Internet Measurement Conference (IMC) 2024",
    description: "Bounce in the Wild: A Deep Dive into Email Delivery Failures from a Large Service Provider",
    location: "Madrid, Spain",
    date: "November 6, 2024",
    datetime: "2024-11-06",
    image: "info/images/talks/2024-IMC.jpg",
    imageAlt: "IMC 2024",
    url: "info/talks/2024-IMC.html",
    detail: {
      en: {
        pageTitle: "IMC 2024",
        heading: "IMC 2024",
        intro: "In the 2024 Internet Measurement Conference (IMC), I presented one paper “Bounce in the Wild: A Deep Dive into Email Delivery Failures from a Large Email Service Provider” to the audiences.",
        heroImage: "info/images/talks/2024-IMC.jpg",
        heroAlt: "Internet Measurement Conference (IMC) 2024",
        imageLayout: "full",
        labels: { date: "Date", event: "Event", location: "Location", abstract: "Abstract" },
        dateRange: "November 4 - 6, 2024",
        event: {
          text: "24th ACM Internet Measurement Conference 2024",
          url: "https://conferences.sigcomm.org/imc/2024/"
        },
        venueAddress: "ESPACIO Fundación Telefónica, Calle Fuencarral, 3, Centro, 28004 Madrid, Spain",
        abstract: [
          "Abnormal email bounces seriously disrupt user lives and company transactions. Proliferating security protocols and protection strategies have made email delivery increasingly complex. A natural question is how and why email delivery fails in the wild. Filling this knowledge gap requires a representative global email delivery dataset, which is rarely disclosed by email service providers (ESPs).",
          "In this paper, we first systematically reveal the scale and root causes of email bounces, and evaluate the email squatting risk in the real world. Through a 15-month passive dataset from a large ESP, we present a unique global view of 298M emails delivered to 3M receiver mail servers in 169 countries. We find that 38M (12.93%) emails fail to be delivered in the first attempt, about one-third of which could be successfully delivered after retrying, while the rest are permanently undeliverable. Delving deeper into bounce reasons, we observe that poor server reputation and network communication quality are significant factors leading to temporary email bounces. In particular, spam blocklists affect many normal email deliveries. The misconfiguration of authentication mechanisms and email address typos result in many permanently undeliverable emails. More seriously, many email addresses with significant residual value can be exploited by squatting attackers. Overall, we call for the community to revisit email delivery failures, especially to improve standards for email bounce reporting and resolution."
        ],
        resources: [
          { label: "Paper", url: "info/paper/2024/2024-IMC.pdf" },
          { label: "Cite", url: "info/paper/2024/2024-IMC-bib.txt" },
          { label: "Slides", url: "info/paper/2024/2024-IMC-Slides.pdf" }
        ]
      },
      zh: {
        pageTitle: "IMC 2024",
        heading: "Internet Measurement Conference (IMC) 2024",
        intro: "在 2024 年 Internet Measurement Conference (IMC) 会议上，我分享了一篇论文，名为 Bounce in the Wild: A Deep Dive into Email Delivery Failures from a Large Email Service Provider。",
        heroImage: "info/images/talks/2024-IMC.jpg",
        heroAlt: "Internet Measurement Conference (IMC) 2024",
        imageLayout: "full",
        labels: { date: "日期", event: "活动", location: "地点", abstract: "摘要" },
        dateRange: "2024年11月4日-6日",
        event: {
          text: "24th ACM Internet Measurement Conference 2024",
          url: "https://conferences.sigcomm.org/imc/2024/"
        },
        venueAddress: "ESPACIO Fundación Telefónica, Calle Fuencarral, 3, Centro, 28004 Madrid, Spain",
        abstract: [
          "Abnormal email bounces seriously disrupt user lives and company transactions. Proliferating security protocols and protection strategies have made email delivery increasingly complex. A natural question is how and why email delivery fails in the wild. Filling this knowledge gap requires a representative global email delivery dataset, which is rarely disclosed by email service providers (ESPs).",
          "In this paper, we first systematically reveal the scale and root causes of email bounces, and evaluate the email squatting risk in the real world. Through a 15-month passive dataset from a large ESP, we present a unique global view of 298M emails delivered to 3M receiver mail servers in 169 countries. We find that 38M (12.93%) emails fail to be delivered in the first attempt, about one-third of which could be successfully delivered after retrying, while the rest are permanently undeliverable. Delving deeper into bounce reasons, we observe that poor server reputation and network communication quality are significant factors leading to temporary email bounces. In particular, spam blocklists affect many normal email deliveries. The misconfiguration of authentication mechanisms and email address typos result in many permanently undeliverable emails. More seriously, many email addresses with significant residual value can be exploited by squatting attackers. Overall, we call for the community to revisit email delivery failures, especially to improve standards for email bounce reporting and resolution."
        ],
        resources: [
          { label: "论文", url: "info/paper/2024/2024-IMC.pdf" },
          { label: "引用", url: "info/paper/2024/2024-IMC-bib.txt" },
          { label: "幻灯片", url: "info/paper/2024/2024-IMC-Slides.pdf" }
        ]
      }
    }
  },
  {
    id: "2025-ndss",
    title: "Network and Distributed System Security (NDSS) 2025",
    description: "HADES Attack: Understanding and Evaluating Manipulation Risks of Email Blocklists",
    location: "San Diego, USA",
    date: "February 26, 2025",
    datetime: "2025-02-26",
    image: "info/images/talks/2025-NDSS.jpg",
    imageAlt: "NDSS 2025",
    url: "info/talks/2025-NDSS.html",
    detail: {
      en: {
        pageTitle: "NDSS 2025",
        heading: "NDSS 2025",
        intro: "In the 2025 Network and Distributed System Security (NDSS), I presented one paper \"HADES Attack: Understanding and Evaluating Manipulation Risks of Email Blocklists\" to the audiences.",
        heroImage: "info/images/talks/2025-NDSS-1.jpg",
        heroAlt: "Network and Distributed System Security (NDSS) 2025",
        imageLayout: "compact",
        labels: { date: "Date", event: "Event", location: "Location", abstract: "Abstract" },
        dateRange: "February 24 - 28, 2025",
        event: {
          text: "32nd Network and Distributed System Security (NDSS) 2025",
          url: "https://www.ndss-symposium.org/ndss2025/"
        },
        venueAddress: "Wyndham San Diego Bayside, 1355 N Harbor Drive, San Diego, CA 92101",
        abstract: [
          "DNS-Based Blocklist (DNSBL) has been a longstanding, effective mitigation against malicious emails. While works have focused on evaluating the quality of such blocklists, much less is known about their adoption, end-to-end operation, and security problems. Powered by industrial datasets of nondelivery reports within 15 months, this paper first performs largescale measurements on the adoption of DNSBLs, reporting their prevalent usage by busy email servers. From an empirical study on the end-to-end operation of 29 DNSBL providers, we find they heavily rely on capture servers, concealed infrastructure to lure blind senders of spam, in generating blocklists. However, we find such capture servers can be exploited and report the HADES attack, where non-abusive email servers are deliberately injected into popular DNSBLs. Legitimate emails from victims will then be broadly rejected by their peers. Through field tests, we demonstrate the attack is effective at low costs: we successfully inject our experimental email servers into 14 DNSBLs, within a time frame ranging from as fast as three minutes to no longer than 24 hours. Practical assessment also uncovers significant attack potential targeting high-profile victims, e.g., large email service providers and popular websites. Upon responsible disclosure, five DNSBL providers have acknowledged the issue, and we also propose possible mitigation. Findings of this paper highlight the need for revisiting DNSBL security and guidelines in its operation."
        ],
        resources: [
          { label: "Paper", url: "info/paper/2025/2025-NDSS.pdf" },
          { label: "Slides", url: "info/paper/2025/2025-NDSS-Slides.pdf" }
        ]
      }
    }
  }
];

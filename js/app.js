new Vue({
  el: '#app',
  data: {
    products: [
      {
        name: "Incogni",
        url: "https://incogni.com/",
        rating: "⭐⭐⭐⭐",
        recurring: true,
        price: "$8.29 /mo (billed annually)",
        summary: "Automated opt-outs at scale. Clean UX, trusted (backed by Surfshark).",
        quotes: [
          "I used Incogni… it removed me from everywhere.",
          "Backed by Surfshark, so they’re likely in it for the long haul."
        ]
      },
      {
        name: "Kanary",
        url: "https://www.kanary.com/",
        rating: "⭐⭐⭐⭐",
        recurring: true,
        price: "$14.99 /mo",
        summary: "Deep broker coverage with high-accuracy detection. Offers manual controls.",
        quotes: [
          "They cover the largest list of brokers & offer the highest number of accurate exposures.",
          "Free trial was a plus for testing it out."
        ]
      },
      {
        name: "DeleteMe",
        url: "https://joindeleteme.com/",
        rating: "⭐⭐⭐⭐⭐",
        recurring: true,
        price: "$8.71 /mo",
        summary: "The original big name. Easy setup, though some users report missed listings or slow updates.",
        quotes: [
          "I’ve used DeleteMe for 2+ years… aside from voter records, nothing is out there anymore.",
          "Seems to miss a few data broker sites and takes a while to report."
        ]
      },
      {
        name: "Optery",
        url: "https://www.optery.com/",
        rating: "⭐⭐⭐",
        recurring: true,
        price: "$3.99 /mo",
        summary: "Free scan available. Mix of manual and automated removals based on tier.",
        quotes: [
          "Removaly found 6 hits… Optery found zero.",
          "They support both manual and automated options depending on tier."
        ]
      },
      {
        name: "Aura",
        url: "https://www.aura.com/",
        rating: "⭐⭐⭐",
        recurring: false,
        price: "$12 /mo",
        summary: "Part of a broader security suite—strong UX and robust spam- and phishing-protection, plus a family-plan option, but it lacks automated recurring broker purges.",
        quotes: [
          "Strong user interface and threat protection.",
          "Great family-plan access, but no automated recurring removals."
        ]
      },
      {
        name: "Dataseal.io",
        url: "https://dataseal.io/",
        rating: "⭐⭐⭐",
        recurring: true,
        price: "$12.99 /mo",
        summary: "Intuitive dashboard, top-notch support, highly rated for ease of use.",
        quotes: [
          "Very thorough and informative! Super easy to navigate!",
          "Their support actually replied to a removal follow-up I sent."
        ]
      }
    ]
  }
});
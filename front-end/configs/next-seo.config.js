const NextSeoConfig = {
  title: null,
  titleTemplate: "%s | GALAXY CASINO MACAU",
  defaultTitle: "GALAXY CASINO MACAU",
  description: "GALAXY CASINO MACAU - Hệ thống casino trực tuyến",
  additionalMetaTags: [
    {
      property: "keywords",
      content: "megalott, xo so, xoso, keno, keno 1p, keno 3p, keno 5p, keno online",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/images/logo.png",
    },
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: process.env.NEXTAUTH_URL,
    siteName: "GALAXY CASINO MACAU",
    description: "GALAXY CASINO MACAU",
    images: [
      {
        url: "/assets/images/logo33.png",
        width: 1200,
        height: 628,
      },
    ],
  },
  facebook: {
    appId: process.env.FACEBOOK_APPID,
  },
  twitter: {
    handle: "@GALAXY",
    site: "@GALAXY",
    cardType: "summary_large_image",
  },
};
export default NextSeoConfig;

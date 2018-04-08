const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Africa Farmers Club Guide", // <title>
  shortSiteTitle: "Africa Farmers Club Guide", // <title> ending for posts and pages
  siteDescription: "A guide for AFC members",
  siteUrl: "https://africafarmersclub.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Africa Farmers Club",
  authorTwitterAccount: "greglobinski",
  // info
  infoTitle: "Dairy Guide",
  infoTitleNote: "Africa Farmers Club",
  // manifest.json
  manifestName: "AfcGuide - guide for AFC members",
  manifestShortName: "AfcGuide", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/greglobinski" },
    { name: "twitter", url: "https://twitter.com/greglobinski" },
    { name: "facebook", url: "http://facebook.com/greglobinski" }
  ]
};

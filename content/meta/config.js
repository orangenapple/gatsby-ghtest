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
  authorTwitterAccount: "africafarmersclub",
  // info
  infoTitle: "Dairy Guide",
  infoTitleNote: "AFC",
  // manifest.json
  manifestName: "Dairy Guide - for AFC members",
  manifestShortName: "AFC-dairy", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "facebook", url: "https://www.facebook.com/groups/africafarmers/" }
  ]
};

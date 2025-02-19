const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdx: {
    remarkPlugins: [require("@theguild/remark-npm2yarn")],
  },
});

module.exports = withNextra();

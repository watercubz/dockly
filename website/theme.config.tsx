import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Dockly</span>,
  project: {
    link: "https://github.com/watercubz/dockly",
  },
  faviconGlyph: "🐳",
  banner: {
    text: "Dockly is in beta. Please report any issues you find.",
  },
  footer: {
    text: "MIT 2025 © Dockly",
  },
};

export default config;

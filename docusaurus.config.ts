// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "Shadow's Dash",
  tagline: "The only client panel you'll ever need. A simple, yet powerful client panel for your hosting business.",
  url: "https://docs.shadowsdash.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "shadowsdash", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/shadowsdash/docs",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Shadow's Dash",
        logo: {
          alt: "Shadow's Dash",
          src: "https://shadowsdash.com/logo.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/blog/tags/changelog", label: "Changelog", position: "left" },
          {
            label: "Docs",
            position: "left",
            to: "/docs/intro",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Welcome page",
                to: "/docs/intro",
              },
              {
                label: "Admin docs",
                to: "/docs/admin",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/TbVfgymJD8",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Changelog",
                to: "/blog/tags/changelog",
              },
              {
                label: "GitHub",
                href: "https://github.com/shadowsdash",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ctrl Alt Cat (944 012 988 00019) - Maxim Lucas E.I.`,
      },
      prism: {
        additionalLanguages: [
          "ruby",
          "csharp",
          "php",
          "java",
          "powershell",
          "json",
          "bash",
          "dart",
          "objectivec",
          "r",
        ],
      },
      languageTabs: [
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "bash",
          language: "curl",
          logoClass: "curl",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
        {
          highlight: "dart",
          language: "dart",
          logoClass: "dart",
        },
        {
          highlight: "javascript",
          language: "javascript",
          logoClass: "javascript",
        },
        {
          highlight: "c",
          language: "c",
          logoClass: "c",
        },
        {
          highlight: "objective-c",
          language: "objective-c",
          logoClass: "objective-c",
        },
        {
          highlight: "ocaml",
          language: "ocaml",
          logoClass: "ocaml",
        },
        {
          highlight: "r",
          language: "r",
          logoClass: "r",
        },
        {
          highlight: "swift",
          language: "swift",
          logoClass: "swift",
        },
        {
          highlight: "kotlin",
          language: "kotlin",
          logoClass: "kotlin",
        },
        {
          highlight: "rust",
          language: "rust",
          logoClass: "rust",
        },
      ],
    } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          petstore: {
            specPath: "schemas/shadowsdash.json",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "@dipakparmar/docusaurus-plugin-umami",
      /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
      {
        websiteID: "e86719cd-c80a-4b3a-9f7d-5b525ff92548",
        analyticsDomain: "umami.maximlucas.dev",
      }
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}

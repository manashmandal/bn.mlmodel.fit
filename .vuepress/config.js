module.exports = {
  title: "মেশিন লার্নিং ও বিভিন্ন প্রোগ্রামিং ল্যাঙ্গুয়েজে ইম্প্লিমেন্টেশন",
  description: "বাংলায় মেশিন লার্নিং সহজ শিক্ষা",
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-task-lists"));
    },
  },
  themeConfig: {
    sidebar: [
      {
        title: "ভূমিকা",
        collapsible: true,
        children: ["/"],
        sidebarDepth: 0,
      },
      {
        title: "মেশিন লার্নিংয়ের জন্য প্রস্তুতি",
        collapsible: true,
        children: ["/ml-prep/", "/ml-prep/python-package-install/"],
        sidebarDepth: 0,
      },
      {
        title: "মেশিন লার্নিং টুলবক্স",
        collapsible: true,
        children: ["/toolbox/", "/toolbox/jupyter-notebook/"],
        sidebarDepth: 0,
      },
      {
        title: "মেশিন লার্নিংয়ে কাজের ধারা",
        collapsible: true,
        children: [
          "/workflow/",
          "/workflow/howto-ask-question/",
          "/workflow/data-processing/",
          "/workflow/data-preprocessing-last/",
          "/workflow/algorithm-selection/",
          "/workflow/model-training/",
          "/workflow/performance-testing/",
          "/workflow/performance-testing-last/",
        ],
        sidebarDepth: 0,
      },
    ],
  },
  plugins: [
    [
      "vuepress-plugin-mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times",
        },
      },
    ],
    ["element-ui"],
  ],
};

module.exports = {
  title: "মেশিন লার্নিং ও বিভিন্ন প্রোগ্রামিং ল্যাঙ্গুয়েজে ইম্প্লিমেন্টেশন",
  description: "বাংলায় মেশিন লার্নিং সহজ শিক্ষা",
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
        title: "মেশিন লার্নিংয়ে কাজের ধারা",
        collapsible: true,
        children: ["/workflow/"],
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

module.exports = {
  // base: "/bn.mlmodel.fit/",
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
      {
        title: "লিনিয়ার রিগ্রেশন",
        collapsible: true,
        children: [
          "/linear-regression/",
          "/linear-regression/gradient-descent/",
          "/linear-regression/multivariable-lr/",
          "/linear-regression/practical-lr/",
          "/linear-regression/gradient-descent-varieties/",
          "/linear-regression/gradient-descent-normal-form/",
        ],
        sidebarDepth: 0,
      },
      {
        title: "লজিস্টিক রিগ্রেশন",
        collapsible: true,
        sidebarDepth: 0,
        children: [
          "/logistic-regression/",
          "/logistic-regression/bernoulli-distribution/",
          "/logistic-regression/exponential-family/",
          "/logistic-regression/practical-implementation/",
        ],
      },
      {
        title: "মাল্টিক্লাস ক্লাসিফিকেশন",
        collapsible: true,
        sidebarDepth: 0,
        children: ["/softmax-regression/"],
      },
      {
        title: "ন্যাচারল ল্যাঙ্গুয়েজ প্রসেসিং",
        collapsible: true,
        sidebarDepth: 0,
        children: ["/nlp/", "/nlp/bangla-blog-classification/"],
      },
      {
        title: "পরিশিষ্ট",
        collapsible: true,
        sidebarDepth: 0,
        children: ["/appendix/", "/appendix/numpy/"],
      },
    ],
  },
  plugins: [
    [
      "@maginapp/vuepress-plugin-katex",
      {
        delimiters: "dollars",
      },
    ],
    ["element-ui"],
    [
      "disqus",
      {
        shortname: "bn-mlmodel-fit",
      },
    ],
    ["@vuepress/back-to-top"],
    ["@vuepress/nprogress"],
    ["@vuepress/last-updated"],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-168753184-1",
      },
    ],
    ["@vuepress/medium-zoom"],
    ["reading-progress"],
  ],
};

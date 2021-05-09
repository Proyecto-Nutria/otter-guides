module.exports = {
  interviewer: [
    {
      type: "category",
      label: "Getting Started",
      items: ["interviewer/installation", "interviewer/configuration"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Usage",
      items: [
        "interviewer/clone",
        "interviewer/test",
        "interviewer/debug",
        "interviewer/submit",
        "interviewer/add-test-case",
        "interviewer/create",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Contributing",
      items: [
        "interviewer/add-editor-support",
        "interviewer/add-language-support",
        "interviewer/add-online-judge-support",
      ],
      collapsed: false,
    },
  ],
  interviewee: [
    {
      type: "category",
      label: "Introduction",
      items: ["interviewee/about", "interviewee/cheatsheet"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Extras",
      items: ["interviewee/vim", "interviewee/fromv1"],
      collapsed: false,
    },
  ],
};

module.exports = {
  title: "我自人间浪漫",
  description: "",
  theme: "reco",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // logo: "./log.jpg",
    nav: [
      { text: "Home", link: "/" },
      { text: "前端", link: "/1" },
      { text: "后端", link: "/2" },
    ],
    sidebar: [
      {
        title: "javaScript",
        children: [
          "../javaScript/数据类型.md",
          "../javaScript/继承.md",
          "../javaScript/变量.md",
          "../javaScript/预编译.md",
          "../javaScript/类型转换.md",
          "../javaScript/this的指向.md",
          "../javaScript/作用域与作用域链.md",
          "../javaScript/原型与原型链.md",
          "../javaScript/事件循环.md",
          "../javaScript/回调函数.md",
          "../javaScript/Promise.md",
          "../javaScript/宏任务与微任务.md",
          "../javaScript/高阶函数.md",
          "../javaScript/闭包.md",
          "../javaScript/偏函数.md",
          "../javaScript/柯里化函数.md",
        ],
        initialOpenGroupIndex: 1,
      },
      {
        title: "Vue",
        children: [],
        initialOpenGroupIndex: 1,
      },
      {
        title: "React",
        children: [],
        initialOpenGroupIndex: 1,
      },
    ],
  },
};

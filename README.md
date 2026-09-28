# Ruixuan Li Academic Website

这是一个直接部署到 GitHub Pages 的纯静态学术主页。页面没有构建步骤，可直接修改数据文件并提交。

## 日常修改入口

| 要修改的内容 | 文件 |
| --- | --- |
| 个人信息、简介、新闻、审稿服务、项目、更新时间 | `info/data/site-data.js` |
| 论文、论文附件链接、Selected Publications | `info/data/publications.js` |
| 活动卡片、活动详情、活动资源 | `info/data/activities.js` |
| 页面结构 | `index.html` |
| 网站定制样式 | `info/css/custom.css` |

通常只需要编辑 `info/data/` 中的文件，不需要修改 HTML、CSS 或渲染脚本。

## 添加论文

1. 把论文、Slides、BibTeX 等文件放入 `info/paper/<年份>/`。
2. 在 `info/data/publications.js` 的数组中增加一个对象：

```js
{
  year: 2027,
  title: "Paper title",
  venue: "Conference or journal information",
  authors: ["Ruixuan Li", "Coauthor A", "Coauthor B"],
  links: [
    { label: "Paper", url: "info/paper/2027/2027-PAPER.pdf" },
    { label: "Slides", url: "info/paper/2027/2027-PAPER-Slides.pdf" }
  ]
}
```

年份分组和右侧年份导航会自动生成。作者数组中的 `Ruixuan Li` 会自动高亮。

如果需要同时显示在首页的 Selected Publications 中，给论文增加：

```js
selected: {
  order: 1,
  venue: "USENIX Security 2027",
  url: "https://conference.example.org/"
}
```

`order` 决定 Selected Publications 中的排列顺序，不能重复。不需要入选时不要填写 `selected`。

## 删除论文

从 `info/data/publications.js` 删除对应的整个对象即可。论文附件可以保留，也可以确认不再需要后单独删除。

## 添加新闻

在 `info/data/site-data.js` 的 `news` 数组开头增加：

```js
{
  date: "August 2027",
  content: [
    "Our paper was accepted to ",
    { text: "Conference 2027", url: "https://conference.example.org/" },
    "!"
  ]
}
```

`content` 中的普通字符串会显示为文字，带 `text` 和 `url` 的对象会显示为链接。

## 添加活动

1. 把活动图片放入 `info/images/talks/`。
2. 在 `info/data/activities.js` 中增加活动对象。
3. 推荐将活动 URL 设置为通用详情页：

```js
url: "info/talks/activity.html?id=2027-example"
```

其中 `id` 必须与活动对象的 `id` 完全相同。详情页标题、介绍、日期、地点、摘要和附件都写在该对象的 `detail.en` 中，因此无需创建新的 HTML 文件。

中文详情可以增加 `detail.zh`，并使用：

```text
info/talks/activity.html?id=2027-example&lang=zh
```

现有 `2024-IMC.html`、`2024-IMC-cn.html` 和 `2025-NDSS.html` 为兼容旧链接而保留。

## 添加项目

在 `info/data/site-data.js` 的 `projects` 数组中增加：

```js
{
  title: "Project name",
  url: "https://project.example.org/",
  image: "info/images/projects/project-image.jpg",
  imageAlt: "Project image description",
  date: "January, 2027",
  datetime: "2027-01-01",
  description: "Short project description."
}
```

## 修改个人信息和更新时间

编辑 `info/data/site-data.js` 中的：

- `profile`：姓名、单位、头像、邮箱、地址、Google Scholar 和个人简介；
- `reviewers`：审稿或 PC 服务；
- `lastModified`：页面底部更新时间。

## 修改后的检查

内容检查不需要安装依赖：

```bash
node scripts/validate-content.mjs
```

本地预览：

```bash
python3 -m http.server 8000
```

然后打开 `http://127.0.0.1:8000/`。不要直接双击活动通用详情页，因为它需要 URL 中的 `?id=` 参数。

## 代码分层

- `info/data/`：唯一的可变内容来源；
- `info/js/render-home.js`：把数据渲染成主页内容；
- `info/js/render-talk.js`：把活动数据渲染成详情页；
- `info/js/script.js`：侧边栏、栏目切换和论文年份导航；
- `info/css/style.css`：原始模板设计系统；
- `info/css/custom.css`：本网站使用的定制样式。

除非需要改变页面结构或视觉设计，否则不要修改渲染脚本和 CSS。

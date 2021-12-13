const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");
const cheerio = require("cheerio");
const md = new markdownIt();
const baseDir = path.resolve(__dirname, "./src");
const distDir = path.resolve(__dirname, "./dist");

build();

function build() {
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
  const fileList = getAllMd(baseDir);
  fileList.forEach((item) => {
    const fileName = path.basename(item, ".md");
    const str = md.render(fs.readFileSync(item, { encoding: "utf-8" }));
    fs.writeFileSync(path.join(distDir, fileName + ".html"), str, {
      encoding: "utf-8",
    });
  });
  creatIndexFile(fileList);
}

function creatIndexFile(fileList) {
  const names = fileList.map((item) => path.basename(item, ".md"));
  const indexFile = fs.readFileSync(
    path.resolve(__dirname, "./src/static/index.html"),
    { encoding: "utf-8" }
  );
  const links = names.map((name) => {
    return `<a href="./${name}.html">${name}</a><br />`;
  });
  const $ = cheerio.load(indexFile);
  $("body").html(`<div style="text-align: center;">${links.join("")}</div>`);
  const str = $.html();
  fs.writeFileSync(path.resolve(__dirname, "./dist/index.html"), str, {
    encoding: "utf-8",
  });
}

function getAllMd(dirDath) {
  let res = [];
  const list = fs.readdirSync(dirDath);
  list.forEach((item) => {
    const newPath = path.join(dirDath, item);
    const fStat = fs.statSync(newPath);
    if (fStat.isDirectory()) {
      res = res.concat(getAllMd(newPath));
    } else {
      if (item.endsWith(".md")) res.push(newPath);
    }
  });
  return res;
}

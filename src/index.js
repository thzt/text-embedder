const log = require('./util/log');

const sort = require('./sort');
const embed = require('./embed');

/*
  向文本中嵌入内容

  config: {text, embeds: [{insert, replace, content}]}

    file:      原始文本
    insert:    在当前行前面插入 content
    replace:   把多行替换为 content
    content:   嵌入的内容

  insert 与 replace 优先使用 insert
*/
const embedder = config => {
  log('开始执行');
  const { text, embeds } = config;

  log('排序并校验各个修改位置');
  const sortedEmbeds = sort(embeds);

  log('做出修改');
  const modifiedText = embed(text, sortedEmbeds);

  log('执行完毕');
  return modifiedText;
};

module.exports = embedder;

const log = require('./util/log');
const insertItem = require('./util/insert-item');
const replaceItem = require('./util/replace-item');

// 向文本中嵌入内容
const embed = (text, embeds) => {
  // 按换行符分割
  const lines = text.split('\n');

  let offset = 0;
  for (const item of embeds) {
    const { insert, replace, content } = item;

    // 优先判断 insert
    const isInsertMode = insert != null;
    if (isInsertMode) {
      log('嵌入内容，在第 %s 行之前', insert);
      offset = insertItem(lines, offset, insert, content);
      continue;
    }

    const [from, to] = replace;
    log('替换内容，从第 %s 行到第 %s 行', from, to);
    offset = replaceItem(lines, offset, replace, content);
  }

  const modifiedText = lines.join('\n');
  return modifiedText;
};

module.exports = embed;

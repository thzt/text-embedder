const lineEmbedder = require('line-embedder');
const log = require('./log');

/**
 * 向文本中嵌入内容
 * 
 * @param text 原始文本
 * @param embeds [{insert,replace,content}] 
 * + insert 在当前行前面插入 content  
 * + replace 把多行替换为 content  
 * + content 嵌入的内容  
 * 
 * insert 与 replace 优先使用 insert
 * 
 * @return 修改后的文本
 */
const main = ({ text, embeds }, newline = '\n') => {
  log('开始执行');

  const lines = text.split(newline);
  lineEmbedder({
    lines,
    embeds: embeds.map(({ insert, replace, content }) => ({
      insert,
      replace,
      line: content,
    })),
    beforeEmbed: ({ mode, args }) => {
      if (mode === 'insert') {
        const insert = args;
        log('嵌入内容，在第 %s 行之前', insert);
        return;
      }

      // replace mode
      const [from, to] = args;
      log('替换内容，从第 %s 行到第 %s 行', from, to);
    },
  });

  const modifiedText = lines.join(newline);

  log('执行完毕');
  return modifiedText;
};

module.exports = main;

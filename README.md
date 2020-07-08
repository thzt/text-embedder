# text-embedder

向文本中嵌入内容

```
const embedder = require('text-embedder');

embedder({
  text,                  // 原始文本
  embeds: [
    {
      insert: N,         // 在第 N 行之前，插入 content
      content: ...,      // 插入的内容
    },
    {
      replace: [X, Y],   // 从第 X 行到第 Y 行，替换为 content
      content: ...,      // 替换的内容
    },
    {
      insert: N,         // 优先使用 insert
      replace: [X, Y]    // replace 不起作用
      content: ...,
    },
  ],
});
```

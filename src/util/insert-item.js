// 在第 insert 行之前嵌入 content
// 返回插入操作之后的 offset
const insertItem = (lines, offset, insert, content) => {
  // -1 是因为 index 要从 0 开始，而 insert 是从第一行开始的
  const index = insert - 1;
  // 影响 0 行，表示在前面插入一行
  const count = 0;

  // 修改 lines 数组
  lines.splice(index + offset, count, content);

  // lines 数组会先删除 count 个记录，然后再加入 content 这一个记录
  offset += -count + 1;
  return offset;
};

module.exports = insertItem;

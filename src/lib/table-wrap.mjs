/**
 * Sätteri hast plugin. Wraps every <table> in <div class="table-wrap"> so wide
 * tables scroll inside their own container instead of the page (SPEC 4,
 * responsive behaviour).
 */
export const tableWrap = {
  name: 'table-wrap',
  element: {
    filter: ['table'],
    visit(node, ctx) {
      ctx.wrapNode(node, {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-wrap'] },
        children: [],
      });
    },
  },
};

/**
 * Wraps each top-level <h2> and everything after it (up to the next <h2>) in
 *   <section class="row"><h2>…</h2><div class="row-body">…</div></section>
 * so a project's Markdown renders in the same label-column rows as the homepage.
 * Content before the first <h2> is left as it is.
 */
export default function rehypeSections() {
  return (tree) => {
    const out = [];
    let body = null;

    for (const node of tree.children) {
      if (node.type === 'element' && node.tagName === 'h2') {
        body = { type: 'element', tagName: 'div', properties: { className: ['row-body'] }, children: [] };
        out.push({
          type: 'element',
          tagName: 'section',
          properties: { className: ['row'] },
          children: [node, body],
        });
      } else if (body) {
        body.children.push(node);
      } else {
        out.push(node);
      }
    }

    tree.children = out;
  };
}

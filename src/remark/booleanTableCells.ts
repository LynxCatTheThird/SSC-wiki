type MarkdownNode = {
  type?: string;
  value?: string;
  children?: MarkdownNode[];
  data?: {
    hProperties?: Record<string, unknown>;
  };
};

function textContent(node: MarkdownNode): string {
  if (typeof node.value === 'string') return node.value;
  return (node.children ?? []).map(textContent).join('');
}

function visit(node: MarkdownNode): void {
  if (node.type === 'tableCell') {
    const value = textContent(node).trim();
    if (value === '是' || value === '否') {
      node.data ??= {};
      node.data.hProperties ??= {};
      node.data.hProperties.className = [
        'boolean-cell',
        value === '是' ? 'boolean-cell-yes' : 'boolean-cell-no',
      ];
    }
  }

  for (const child of node.children ?? []) visit(child);
}

export default function remarkBooleanTableCells() {
  return (tree: MarkdownNode) => visit(tree);
}

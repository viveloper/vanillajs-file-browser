(function () {
  const initialData = {
    type: 'folder',
    name: 'root',
    children: [
      {
        type: 'folder',
        name: 'folder1',
        children: [
          {
            type: 'file',
            name: 'abc.js',
          },
          {
            type: 'file',
            name: 'def.js',
          },
        ],
      },
      {
        type: 'folder',
        name: 'folder2',
        children: [
          {
            type: 'folder',
            name: 'folder3',
            children: [
              {
                type: 'file',
                name: 'test.txt',
              },
              {
                type: 'file',
                name: 'image.jpg',
              },
            ],
          },
          {
            type: 'file',
            name: 'util.js',
          },
        ],
      },
      {
        type: 'file',
        name: 'index.html',
      },
      {
        type: 'file',
        name: 'app.js',
      },
    ],
  };

  const fileBrowserEl = document.getElementById('file-browser');

  dfs(initialData, fileBrowserEl, 0);

  function dfs(node, parentEl) {
    if (node.type === 'file') {
      createFile(node.name, parentEl);
      return;
    }

    const { childrenEl } = createFolder(node.name, parentEl);
    node.children?.forEach((child) => {
      dfs(child, childrenEl);
    });
  }

  function createFile(name, parentEl) {
    const nodeEl = document.createElement('div');
    nodeEl.className = 'node';

    const nodeNameEl = document.createElement('div');
    nodeNameEl.className = 'node-name';
    nodeNameEl.innerHTML = name;
    nodeEl.appendChild(nodeNameEl);

    parentEl.appendChild(nodeEl);

    return nodeEl;
  }

  function createFolder(name, parentEl) {
    const nodeEl = createFile(name, parentEl);

    const childrenEl = document.createElement('div');
    childrenEl.className = `children`;
    childrenEl.style.paddingLeft = '24px';
    nodeEl.appendChild(childrenEl);

    return { nodeEl, childrenEl };
  }
})();

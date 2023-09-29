(function () {
  const initialData = {
    type: 'folder',
    title: 'root',
    entries: [
      {
        type: 'folder',
        title: 'folder1',
        entries: [
          {
            type: 'file',
            title: 'abc.js',
          },
          {
            type: 'file',
            title: 'def.js',
          },
        ],
      },
      {
        type: 'folder',
        title: 'folder2',
        entries: [
          {
            type: 'folder',
            title: 'folder3',
            entries: [
              {
                type: 'file',
                title: 'test.txt',
              },
              {
                type: 'file',
                title: 'image.jpg',
              },
            ],
          },
          {
            type: 'file',
            title: 'util.js',
          },
        ],
      },
      {
        type: 'file',
        title: 'index.html',
      },
      {
        type: 'file',
        title: 'app.js',
      },
    ],
  };

  const fileBrowserEl = document.getElementById('file-browser');

  dfs(initialData, fileBrowserEl, 0);

  function dfs(entry, parentEl) {
    if (entry.type === 'file') {
      createFile(entry.title, parentEl);
      return;
    }

    const { entriesEl } = createFolder(entry.title, parentEl);
    entry.entries?.forEach((child) => {
      dfs(child, entriesEl);
    });
  }

  function createFile(name, parentEl) {
    const entryEl = document.createElement('div');
    entryEl.className = 'entry';

    const titleEl = document.createElement('div');
    titleEl.className = 'title';
    titleEl.innerHTML = name;
    entryEl.appendChild(titleEl);

    parentEl.appendChild(entryEl);

    return entryEl;
  }

  function createFolder(name, parentEl) {
    const entryEl = createFile(name, parentEl);

    const entriesEl = document.createElement('div');
    entriesEl.className = `entries`;
    entriesEl.style.paddingLeft = '24px';
    entryEl.appendChild(entriesEl);

    return { entryEl, entriesEl };
  }
})();

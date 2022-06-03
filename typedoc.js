module.exports = {
  entryPoints: ['src/index.ts'],
  out: 'docs',
  includes: 'manual',
  categorizeByGroup: true,
  readme: 'manual/README.md',
  pluginPages: {
    source: 'manual',
    pages: [
      {
        title: 'Guides',
        childrenDir: 'guide',
        children: [{ title: 'Getting started', source: 'getting-started.md' }],
      },
    ],
  },
}

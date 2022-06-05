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
        children: [
          { title: 'Getting started', source: 'getting-started.md' },
          {
            title: 'Setting the Center and Zoom Level',
            source: 'center-and-zoom-level.md',
          },
          { title: 'Overlay Layer', source: 'overlay-layer.md' },
          { title: 'Interaction', source: 'interaction.md' },
          { title: 'Hooks', source: 'hooks.md' },
        ],
      },
    ],
  },
}

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
          { title: 'Tile Provider', source: 'tile-provider.md' },
          { title: 'Attribution Layer', source: 'attribution-layer.md' },
          { title: 'Overlay Layer', source: 'overlay-layer.md' },
          { title: 'Interaction', source: 'interaction.md' },
          { title: 'GeoJSON Layer', source: 'geojson-layer.md' },
        ],
      },
    ],
  },
}

import { Coordinate } from './types'

export const LOCATIONS: { [place: string]: Coordinate } = {
  northWest: {
    latitude: 90,
    longitude: -180,
  },
  southEast: {
    latitude: -90,
    longitude: 180,
  },
  southWest: {
    latitude: -90,
    longitude: -180,
  },
  northEast: {
    latitude: 90,
    longitude: 180,
  },
  greenwichObservatory: {
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
  },
  empireStateBuilding: {
    latitude: 40.748585815569854,
    longitude: -73.9856543574467,
  },
  newYork: {
    latitude: 40.7128,
    longitude: -74.006,
  },
  london: {
    latitude: 51.5072,
    longitude: -0.1276,
  },
  tokyo: {
    latitude: 35.6762,
    longitude: 139.6503,
  },
  sydney: {
    latitude: -33.8688,
    longitude: 151.2093,
  },
  buenoAires: {
    latitude: -34.6037,
    longitude: -58.816,
  },
}

export const DEFAULTS = {
  zoom: 12,
  width: '600px',
  height: '400px',
}

export const CLASS_NAMES = {
  primary: 'jetblack-map',
  draggable: 'draggable',
  zoomable: 'zoomable',
  clickable: 'clickable',
}

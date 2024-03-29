import { LOCATIONS } from '../src/constants'
import {
  coordinateToTilePoint,
  tilePointToCoordinate,
  recenterScreenPoint,
  screenPointToCoordinate,
  limitCoordinate,
} from '../src/tileMath'
import { Coordinate, Point, Size } from '../src/types'

describe('tileMath', () => {
  const coordinateOrigin: Coordinate = {
    latitude: 0,
    longitude: 0,
  }
  const coordinateNewYork: Coordinate = {
    latitude: 40.7128,
    longitude: -74.006,
  }
  const coordinateLondon: Coordinate = {
    latitude: 51.5072,
    longitude: -0.1276,
  }
  const coordinateTokyo: Coordinate = {
    latitude: 35.6762,
    longitude: 139.6503,
  }
  const coordinateSydney: Coordinate = {
    latitude: -33.8688,
    longitude: 151.2093,
  }
  const coordinateBuenoAires = {
    latitude: -34.6037,
    longitude: -58.816,
  }
  const screenSize: Size = { width: 600, height: 400 }
  const tileSize: Size = { width: 256, height: 256 }

  describe('coordinateToTilePoint', () => {
    it('should calculate tile point origin at zoom 0', () => {
      const tilePoint = coordinateToTilePoint(coordinateOrigin, 0)
      expect(tilePoint).toStrictEqual({ x: 0.5, y: 0.5 })
    })
    it('should calculate tile point origin at zoom 1', () => {
      const tilePoint = coordinateToTilePoint(coordinateOrigin, 1)
      expect(tilePoint).toStrictEqual({ x: 1, y: 1 })
    })
    it('should calculate tile point origin at zoom 2', () => {
      const tilePoint = coordinateToTilePoint(coordinateOrigin, 2)
      expect(tilePoint).toStrictEqual({ x: 2, y: 2 })
    })
    it('should calculate tile point origin at zoom 3', () => {
      const tilePoint = coordinateToTilePoint(coordinateOrigin, 3)
      expect(tilePoint).toStrictEqual({ x: 4, y: 4 })
    })
    it('should calculate tile point for New York', () => {
      const tilePoint = coordinateToTilePoint(coordinateNewYork, 3)
      expect(tilePoint.x).toBeCloseTo(2.355422, 6)
      expect(tilePoint.y).toBeCloseTo(3.007846, 6)
    })
    it('should calculate tile point for London', () => {
      const tilePoint = coordinateToTilePoint(coordinateLondon, 3)
      expect(tilePoint.x).toBeCloseTo(3.997164, 6)
      expect(tilePoint.y).toBeCloseTo(2.660211, 6)
    })
    it('should calculate tile point for Tokyo', () => {
      const tilePoint = coordinateToTilePoint(coordinateTokyo, 3)
      expect(tilePoint.x).toBeCloseTo(7.10334, 6)
      expect(tilePoint.y).toBeCloseTo(3.1503618, 6)
    })
    it('should calculate tile point for Sydney', () => {
      const tilePoint = coordinateToTilePoint(coordinateSydney, 3)
      expect(tilePoint.x).toBeCloseTo(7.3602066, 6)
      expect(tilePoint.y).toBeCloseTo(4.800738, 6)
    })
    it('should calculate tile point for Buenos Aires', () => {
      const tilePoint = coordinateToTilePoint(coordinateBuenoAires, 3)
      expect(tilePoint.x).toBeCloseTo(2.6929777, 6)
      expect(tilePoint.y).toBeCloseTo(4.820492, 6)
    })
  })

  describe('tilePointToCoordinate', () => {
    it('should calculate coordinate origin at zoom 0', () => {
      const tilePoint: Point = { x: 0.5, y: 0.5 }
      const coordinate = tilePointToCoordinate(tilePoint, 0)
      expect(coordinate).toStrictEqual({ latitude: 0, longitude: 0 })
    })
    it('should calculate coordinate origin at zoom 1', () => {
      const tilePoint: Point = { x: 1, y: 1 }
      const coordinate = tilePointToCoordinate(tilePoint, 1)
      expect(coordinate).toStrictEqual({ latitude: 0, longitude: 0 })
    })
    it('should calculate coordinate origin at zoom 2', () => {
      const tilePoint: Point = { x: 2, y: 2 }
      const coordinate = tilePointToCoordinate(tilePoint, 2)
      expect(coordinate).toStrictEqual({ latitude: 0, longitude: 0 })
    })
    it('should calculate coordinate origin at zoom 3', () => {
      const tilePoint: Point = { x: 4, y: 4 }
      const coordinate = tilePointToCoordinate(tilePoint, 3)
      expect(coordinate).toStrictEqual({ latitude: 0, longitude: 0 })
    })
    it('should calculate coordinate New York at zoom 3', () => {
      const tilePoint: Point = { x: 2.355422, y: 3.007846 }
      const coordinate = tilePointToCoordinate(tilePoint, 3)
      expect(coordinate.latitude).toBeCloseTo(coordinateNewYork.latitude)
      expect(coordinate.longitude).toBeCloseTo(coordinateNewYork.longitude)
    })
    it('should calculate coordinate London at zoom 3', () => {
      const tilePoint: Point = { x: 3.997164, y: 2.660211 }
      const coordinate = tilePointToCoordinate(tilePoint, 3)
      expect(coordinate.latitude).toBeCloseTo(coordinateLondon.latitude)
      expect(coordinate.longitude).toBeCloseTo(coordinateLondon.longitude)
    })
    it('should calculate coordinate Tokyo at zoom 3', () => {
      const tilePoint: Point = { x: 7.10334, y: 3.1503618 }
      const coordinate = tilePointToCoordinate(tilePoint, 3)
      expect(coordinate.latitude).toBeCloseTo(coordinateTokyo.latitude)
      expect(coordinate.longitude).toBeCloseTo(coordinateTokyo.longitude)
    })
    it('should calculate coordinate Sydney at zoom 3', () => {
      const tilePoint: Point = { x: 7.3602066, y: 4.800738 }
      const coordinate = tilePointToCoordinate(tilePoint, 3)
      expect(coordinate.latitude).toBeCloseTo(coordinateSydney.latitude)
      expect(coordinate.longitude).toBeCloseTo(coordinateSydney.longitude)
    })
    it('should calculate coordinate Buenos Aires at zoom 3', () => {
      const tilePoint: Point = { x: 2.6929777, y: 4.820492 }
      const coordinate = tilePointToCoordinate(tilePoint, 3)
      expect(coordinate.latitude).toBeCloseTo(coordinateBuenoAires.latitude)
      expect(coordinate.longitude).toBeCloseTo(coordinateBuenoAires.longitude)
    })
  })

  describe('recenterScreenPoint at zoom 4', () => {
    it('should calculate screen point for New York', () => {
      const screenPoint = recenterScreenPoint(
        coordinateNewYork,
        coordinateLondon,
        4,
        screenSize,
        tileSize
      )
      expect(screenPoint.x).toBeCloseTo(-540.5720177777778, 6)
      expect(screenPoint.y).toBeCloseTo(377.98915302061596, 6)
    })
    it('should calculate screen point for London', () => {
      const screenPoint = recenterScreenPoint(
        coordinateLondon,
        coordinateLondon,
        4,
        screenSize,
        tileSize
      )
      expect(screenPoint.x).toBeCloseTo(300, 6)
      expect(screenPoint.y).toBeCloseTo(200, 6)
    })
    it('should calculate screen point for Tokyo', () => {
      const screenPoint = recenterScreenPoint(
        coordinateTokyo,
        coordinateLondon,
        4,
        screenSize,
        tileSize
      )
      expect(screenPoint.x).toBeCloseTo(1890.3618844444445, 6)
      expect(screenPoint.y).toBeCloseTo(450.9570607998462, 6)
    })
    it('should calculate screen point for Sydney', () => {
      const screenPoint = recenterScreenPoint(
        coordinateSydney,
        coordinateLondon,
        4,
        screenSize,
        tileSize
      )
      expect(screenPoint.x).toBeCloseTo(2021.8776177777777, 6)
      expect(screenPoint.y).toBeCloseTo(1295.9496653309598, 6)
    })
    it('should calculate screen point for Buenos Aires', () => {
      const screenPoint = recenterScreenPoint(
        coordinateBuenoAires,
        coordinateLondon,
        4,
        screenSize,
        tileSize
      )
      expect(screenPoint.x).toBeCloseTo(-367.7435733333334, 6)
      expect(screenPoint.y).toBeCloseTo(1306.0638404602564, 6)
    })
  })

  describe('screenPointToCoordinate at zoom 4', () => {
    it('should calculate screen point for New York', () => {
      const screenPoint = screenPointToCoordinate(
        { x: -540.5720177777778, y: 377.98915302061596 },
        coordinateLondon,
        4,
        screenSize,
        tileSize
      )
      expect(screenPoint.latitude).toBeCloseTo(coordinateNewYork.latitude, 6)
      expect(screenPoint.longitude).toBeCloseTo(coordinateNewYork.longitude, 6)
    })
    it('should calculate screen point for London', () => {
      const screenPoint = screenPointToCoordinate(
        { x: 300, y: 200 },
        coordinateLondon,
        4,
        screenSize,
        tileSize
      )
      expect(screenPoint.latitude).toBeCloseTo(coordinateLondon.latitude, 6)
      expect(screenPoint.longitude).toBeCloseTo(coordinateLondon.longitude, 6)
    })
    it('should calculate screen point for Tokyo', () => {
      const screenPoint = screenPointToCoordinate(
        { x: 1890.3618844444445, y: 450.9570607998462 },
        coordinateLondon,
        4,
        screenSize,
        tileSize
      )
      expect(screenPoint.latitude).toBeCloseTo(coordinateTokyo.latitude, 6)
      expect(screenPoint.longitude).toBeCloseTo(coordinateTokyo.longitude, 6)
    })
    it('should calculate screen point for Sydney', () => {
      const screenPoint = screenPointToCoordinate(
        { x: 2021.8776177777777, y: 1295.9496653309598 },
        coordinateLondon,
        4,
        screenSize,
        tileSize
      )
      expect(screenPoint.latitude).toBeCloseTo(coordinateSydney.latitude, 6)
      expect(screenPoint.longitude).toBeCloseTo(coordinateSydney.longitude, 6)
    })
    it('should calculate screen point for Buenos Aires', () => {
      const screenPoint = screenPointToCoordinate(
        { x: -367.7435733333334, y: 1306.0638404602564 },
        coordinateLondon,
        4,
        screenSize,
        tileSize
      )
      expect(screenPoint.latitude).toBeCloseTo(coordinateBuenoAires.latitude, 6)
      expect(screenPoint.longitude).toBeCloseTo(coordinateBuenoAires.longitude, 6)
    })
  })

  describe('recenterScreenPoint at zoom 0', () => {
    it('should calculate screen point for New York', () => {
      const screenPoint = recenterScreenPoint(
        coordinateNewYork,
        coordinateLondon,
        0,
        screenSize,
        tileSize
      )
      expect(screenPoint.x).toBeCloseTo(247.4642488888889, 6)
      expect(screenPoint.y).toBeCloseTo(211.1243220637885, 6)
    })
    it('should calculate screen point for London', () => {
      const screenPoint = recenterScreenPoint(
        coordinateLondon,
        coordinateLondon,
        0,
        screenSize,
        tileSize
      )
      expect(screenPoint.x).toBeCloseTo(300, 6)
      expect(screenPoint.y).toBeCloseTo(200, 6)
    })
    it('should calculate screen point for Tokyo', () => {
      const screenPoint = recenterScreenPoint(
        coordinateTokyo,
        coordinateLondon,
        0,
        screenSize,
        tileSize
      )
      expect(screenPoint.x).toBeCloseTo(399.3976177777778, 6)
      expect(screenPoint.y).toBeCloseTo(215.6848162999904, 6)
    })
    it('should calculate screen point for Sydney', () => {
      const screenPoint = recenterScreenPoint(
        coordinateSydney,
        coordinateLondon,
        0,
        screenSize,
        tileSize
      )
      expect(screenPoint.x).toBeCloseTo(407.61735111111113, 6)
      expect(screenPoint.y).toBeCloseTo(268.496854083185, 6)
    })
    it('should calculate screen point for Buenos Aires', () => {
      const screenPoint = recenterScreenPoint(
        coordinateBuenoAires,
        coordinateLondon,
        0,
        screenSize,
        tileSize
      )
      expect(screenPoint.x).toBeCloseTo(258.2660266666667, 6)
      expect(screenPoint.y).toBeCloseTo(269.128990028766, 6)
    })
  })

  describe('screenPointToCoordinate at zoom 6', () => {
    it('should calculate screen point for New York', () => {
      const screenPoint = screenPointToCoordinate(
        { x: 247.4642488888889, y: 211.1243220637885 },
        coordinateLondon,
        0,
        screenSize,
        tileSize
      )
      expect(screenPoint.latitude).toBeCloseTo(coordinateNewYork.latitude, 6)
      expect(screenPoint.longitude).toBeCloseTo(coordinateNewYork.longitude, 6)
    })
    it('should calculate screen point for London', () => {
      const screenPoint = screenPointToCoordinate(
        { x: 300, y: 200 },
        coordinateLondon,
        0,
        screenSize,
        tileSize
      )
      expect(screenPoint.latitude).toBeCloseTo(coordinateLondon.latitude, 6)
      expect(screenPoint.longitude).toBeCloseTo(coordinateLondon.longitude, 6)
    })
    it('should calculate screen point for Tokyo', () => {
      const screenPoint = screenPointToCoordinate(
        { x: 399.3976177777778, y: 215.6848162999904 },
        coordinateLondon,
        0,
        screenSize,
        tileSize
      )
      expect(screenPoint.latitude).toBeCloseTo(coordinateTokyo.latitude, 6)
      expect(screenPoint.longitude).toBeCloseTo(coordinateTokyo.longitude, 6)
    })
    it('should calculate screen point for Sydney', () => {
      const screenPoint = screenPointToCoordinate(
        { x: 407.61735111111113, y: 268.496854083185 },
        coordinateLondon,
        0,
        screenSize,
        tileSize
      )
      expect(screenPoint.latitude).toBeCloseTo(coordinateSydney.latitude, 6)
      expect(screenPoint.longitude).toBeCloseTo(coordinateSydney.longitude, 6)
    })
    it('should calculate screen point for Buenos Aires', () => {
      const screenPoint = screenPointToCoordinate(
        { x: 258.2660266666667, y: 269.128990028766 },
        coordinateLondon,
        0,
        screenSize,
        tileSize
      )
      expect(screenPoint.latitude).toBeCloseTo(coordinateBuenoAires.latitude, 6)
      expect(screenPoint.longitude).toBeCloseTo(coordinateBuenoAires.longitude, 6)
    })
  })

  describe('limitCoordinate', () => {
    it('should limit with defaults', () => {
      const limitedNegative = limitCoordinate({
        latitude: -100,
        longitude: -200,
      })
      expect(limitedNegative).toEqual(LOCATIONS.southWest)

      const limitedPositive = limitCoordinate({
        latitude: 100,
        longitude: 200,
      })
      expect(limitedPositive).toEqual(LOCATIONS.northEast)
    })
  })
})

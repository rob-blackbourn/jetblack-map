import { coordinateToTilePoint, tilePointToCoordinate } from '../src/tileMath'
import { Coordinate, Point } from '../src/types'

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
})

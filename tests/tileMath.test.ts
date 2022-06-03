import { coordinateToTilePoint, tilePointToCoordinate } from '../src/tileMath'
import { Coordinate } from '../src/types'

describe('tileMath', () => {
  describe('coordinateToTilePoint', () => {
    it('should calculate origin', () => {
      const center: Coordinate = {
        latitude: 0,
        longitude: 0,
      }
      const tilePoint0 = coordinateToTilePoint(center, 0)
      expect(tilePoint0).toStrictEqual({ x: 0.5, y: 0.5 })
    })
  })
})

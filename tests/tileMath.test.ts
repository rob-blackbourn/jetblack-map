import { toDegrees, toRadians, lng2tile, lat2tile, tile2lng, tile2lat } from '../src/tileMath'

describe('tileMath2', () => {
  describe('toDegrees', () => {
    it('should convert 0 degrees to 0 radians', () => {
      const actual = toDegrees(0)
      expect(actual).toBeCloseTo(0, 6)
    })
    it('should convert PI radians to 180 degrees', () => {
      const actual = toDegrees(Math.PI)
      expect(actual).toBeCloseTo(180, 6)
    })
    it('should handle -PI radians to -180 degrees', () => {
      const actual = toDegrees(-Math.PI)
      expect(actual).toBeCloseTo(-180, 6)
    })
  })

  describe('toRadians', () => {
    it('should convert 0 degrees to 0 radians', () => {
      const actual = toRadians(0)
      expect(actual).toBeCloseTo(0, 6)
    })
    it('should convert 180 degrees to PI radians', () => {
      const actual = toRadians(180)
      expect(actual).toBeCloseTo(Math.PI, 6)
    })
    it('should handle -180 degrees to -PI radians', () => {
      const actual = toRadians(-180)
      expect(actual).toBeCloseTo(-Math.PI, 6)
    })
  })

  describe('lng2tile', () => {
    it('should convert longitude 0, zoom 0', () => {
      const actual = lng2tile(0, 0)
      expect(actual).toBeCloseTo(0.5, 6)
    })
    it('should convert longitude -180, zoom 0', () => {
      const actual = lng2tile(-180, 0)
      expect(actual).toBeCloseTo(0, 6)
    })
    it('should convert longitude 180, zoom 0', () => {
      const actual = lng2tile(180, 0)
      expect(actual).toBeCloseTo(1, 6)
    })
    it('should convert longitude -90, zoom 0', () => {
      const actual = lng2tile(-90, 0)
      expect(actual).toBeCloseTo(0.25, 6)
    })
    it('should convert longitude 90, zoom 0', () => {
      const actual = lng2tile(90, 0)
      expect(actual).toBeCloseTo(0.75, 6)
    })
    it('should convert longitude -360, zoom 0', () => {
      const actual = lng2tile(-360, 0)
      expect(actual).toBeCloseTo(-0.5, 6)
    })
    it('should convert longitude 360, zoom 0', () => {
      const actual = lng2tile(360, 0)
      expect(actual).toBeCloseTo(1.5, 6)
    })
  })

  describe('lat2tile', () => {
    it('should convert latitude 0, zoom 0', () => {
      const actual = lat2tile(0, 0)
      expect(actual).toBeCloseTo(0.5, 6)
    })
    it('should convert latitude -85.0511, zoom 0', () => {
      const actual = lat2tile(-85.0511, 0)
      expect(actual).toBeCloseTo(1, 5)
    })
    it('should convert latitude 85.0511, zoom 0', () => {
      const actual = lat2tile(85.0511, 0)
      expect(actual).toBeCloseTo(0, 5)
    })
    it('should convert latitude -90, zoom 0', () => {
      const actual = lat2tile(-90, 0)
      expect(Number.isFinite(actual)).toBeFalsy()
    })
    it('should convert latitude 90, zoom 0', () => {
      const actual = lat2tile(90, 0)
      expect(actual).toBeCloseTo(-5.551867, 5)
    })
  })

  describe('tile2lng', () => {
    it('should convert x=0, zoom 0', () => {
      const actual = tile2lng(0, 0)
      expect(actual).toBeCloseTo(-180, 6)
    })
    it('should convert x=0.5, zoom 0', () => {
      const actual = tile2lng(0.5, 0)
      expect(actual).toBeCloseTo(0, 6)
    })
    it('should convert x=1, zoom 0', () => {
      const actual = tile2lng(1, 0)
      expect(actual).toBeCloseTo(180, 6)
    })
    it('should convert x=-1, zoom 0', () => {
      const actual = tile2lng(-0.5, 0)
      expect(actual).toBeCloseTo(-360, 6)
    })
    it('should convert x=1.5, zoom 0', () => {
      const actual = tile2lng(1.5, 0)
      expect(actual).toBeCloseTo(360, 6)
    })
  })

  describe('tile2lat', () => {
    it('should convert y=0, zoom=0', () => {
      const actual = tile2lat(0, 0)
      expect(actual).toBeCloseTo(85.0511287798066, 9)
    })
    it('should convert y=0.5, zoom=0', () => {
      const actual = tile2lat(0.5, 0)
      expect(actual).toBeCloseTo(0, 6)
    })
    it('should convert y=1, zoom=0', () => {
      const actual = tile2lat(1, 0)
      expect(actual).toBeCloseTo(-85.0511287798066, 9)
    })
  })
})

import {
  calculateHp,
  calculateStr,
  calculateWeak,
  calculateDamage,
  convertStatusToWidth,
} from '../statusCalculator';

describe('statusCalculator', () => {
  describe('calculateHp()', () => {
    it('should return hp back as a number', () => {
      const result = calculateHp('50');

      expect(result).toEqual(50);
    });

    it('should return maximum hp as 100', () => {
      const result = calculateHp('150');

      expect(result).toEqual(100);
    });

    it('should return minimum hp as 0', () => {
      const result = calculateHp('-10');

      expect(result).toEqual(0);
    });
  });

  describe('calculateStr()', () => {
    it('should return str from the attackAmount multiply by 50', () => {
      const result = calculateStr(2);

      expect(result).toEqual(100);
    });

    it('should return maxmium str as 100', () => {
      const result = calculateStr(5);

      expect(result).toEqual(100);
    });

    it('should return 0 if no args', () => {
      const result = calculateStr();

      expect(result).toEqual(0);
    });
  });

  describe('calculateWeak()', () => {
    it('should return weak from the weaknesses amount multiply by 100', () => {
      const result = calculateWeak(1);

      expect(result).toEqual(100);
    });

    it('should return maxmium weak as 100', () => {
      const result = calculateWeak(5);

      expect(result).toEqual(100);
    });

    it('should return 0 if no args', () => {
      const result = calculateWeak();

      expect(result).toEqual(0);
    });
  });

  describe('calculateDamage()', () => {
    it('should extract number from damage string', () => {
      const result = calculateDamage([{ damage: '10x' }]);

      expect(result).toEqual(10);
    })

    it('should return sum of extract number from damage string', () => {
      const result = calculateDamage([{ damage: '10x' }, { damage: '20*' }, { damage: '30' }]);

      expect(result).toEqual(60);
    })
  });

  describe('convertStatusToWidth()', () => {
    it('should use rule of three in arithmetic to covert value from max scale 100 to defined scale', () => {
      const result = convertStatusToWidth(50, 400);

      expect(result).toEqual(200);
    });

    it('should return 0 if the value cannot convert to number', () => {
      const result = convertStatusToWidth("50+", "400x");

      expect(result).toEqual(0);
    });
  });
});

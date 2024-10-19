import { describe, expect, test } from 'vitest';
import before from './before';

describe('Rule "date"', () => {
  describe('set to date which matches the format', () => {
    const validate = before({ date: '2024-02-28', format: 'YYYY-MM-DD' });

    test('should pass with valid input', () => {
      expect(validate('2024-02-27')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('2024')).toBe(false);
      expect(validate('2024-02')).toBe(false);
      expect(validate('2024-02-28')).toBe(false);
      expect(validate('2024-02-29')).toBe(false);
      expect(validate('2024-02-30')).toBe(false);
    });
  });

  describe('set to date which does not match the format', () => {
    const validate = before({ date: '00:00:00', format: 'YYYY-MM-DD' });

    test('should throw an error', () => {
      expect(() => validate('2024-02-29')).toThrowError('Invalid date');
    });
  });
});

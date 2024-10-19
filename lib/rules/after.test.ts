import { describe, expect, test } from 'vitest';
import after from './after';

describe('Rule "date"', () => {
  describe('set to date which matches the format', () => {
    const validate = after({ date: '2024-02-28', format: 'YYYY-MM-DD' });

    test('should pass with valid input', () => {
      expect(validate('2024-02-29')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('2024')).toBe(false);
      expect(validate('2024-02')).toBe(false);
      expect(validate('2024-02-27')).toBe(false);
      expect(validate('2024-02-28')).toBe(false);
      expect(validate('2024-02-30')).toBe(false);
    });
  });

  describe('set to date which does not match the format', () => {
    const validate = after({ date: '2024', format: 'YYYY-MM-DD' });

    test('should throw an error', () => {
      expect(() => validate('2024-02-29')).toThrowError('Invalid date');
    });
  });
});

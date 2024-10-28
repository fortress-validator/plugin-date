import { describe, expect, test } from 'vitest';
import iso8601 from './iso8601';

describe('Rule "date"', () => {
  const validate = iso8601();

  test('should pass with valid input', () => {
    expect(validate('2024-02-29T12:00:00')).toBe(true);
    expect(validate('2024-02-29T12:00:00Z')).toBe(true);
    expect(validate('2024-02-29T12:00:00.000')).toBe(true);
    expect(validate('2024-02-29T12:00:00.000Z')).toBe(true);
    expect(validate('2024-02-29T12:00:00+08:00')).toBe(true);
    expect(validate('2024-02-29T12:00:00-08:00')).toBe(true);
    expect(validate('2024-02-29T12:00:00.000+08:00')).toBe(true);
    expect(validate('2024-02-29T12:00:00.000-08:00')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('2024')).toBe(false);
    expect(validate('2024-02')).toBe(false);
    expect(validate('2024-02-29')).toBe(false);
    expect(validate('2024-02-30T12:00:00')).toBe(false);
    expect(validate('2024-02-29T12:00:00Z+08:00')).toBe(false);
    expect(validate('2024-02-29T12:00:00.000Z+08:00')).toBe(false);
    expect(validate('2024-02-29T12:00:00+08:00Z')).toBe(false);
    expect(validate('2024-02-29T12:00:00.000+08:00Z')).toBe(false);
    expect(validate('2024-02-29T12:00:00.0')).toBe(false);
    expect(validate('2024-02-29T12:00:00.00')).toBe(false);
    expect(validate('2024-02-29T12:00:00.0Z')).toBe(false);
    expect(validate('2024-02-29T12:00:00.00Z')).toBe(false);
    expect(validate('2024/02/29T12:00:00')).toBe(false);
  });
});

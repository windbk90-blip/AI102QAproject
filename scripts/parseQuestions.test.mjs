import { describe, it, expect } from 'vitest';
import { parseAnswer } from './parseQuestions.mjs';

describe('parseAnswer', () => {
  describe('single-letter answers', () => {
    it('parses a bare letter', () => {
      expect(parseAnswer('B')).toEqual(['B', 'single']);
    });

    it('parses a letter with full-width parenthesis annotation', () => {
      expect(parseAnswer('B（1-是，2-否）')).toEqual(['B', 'single']);
    });

    it('parses a letter with half-width parenthesis annotation', () => {
      expect(parseAnswer('A(note)')).toEqual(['A', 'single']);
    });

    it('is case-insensitive and normalizes to uppercase', () => {
      expect(parseAnswer('c')).toEqual(['C', 'single']);
    });
  });

  describe('multi-letter answers', () => {
    it('parses 顿号-separated multi-select', () => {
      expect(parseAnswer('C、D、F')).toEqual([['C', 'D', 'F'], 'multiple']);
    });

    it('parses comma-separated multi-select', () => {
      expect(parseAnswer('A, B, D')).toEqual([['A', 'B', 'D'], 'multiple']);
    });
  });

  describe('arrow-sequence answers', () => {
    it('extracts letters from arrow sequence', () => {
      const [answer, type] = parseAnswer('A → B → C');
      expect(answer).toEqual(['A', 'B', 'C']);
      expect(type).toBe('multiple');
    });
  });

  describe('disputed / alternative answers (take first)', () => {
    it('takes first letter when separated by slash', () => {
      expect(parseAnswer('A / D')).toEqual(['A', 'single']);
    });

    it('takes first letter when separated by 或', () => {
      expect(parseAnswer('A 或 D')).toEqual(['A', 'single']);
    });
  });

  describe('invalid / edge cases', () => {
    it('returns [null, null] for empty string', () => {
      expect(parseAnswer('')).toEqual([null, null]);
    });

    it('returns [null, null] for null input', () => {
      expect(parseAnswer(null)).toEqual([null, null]);
    });

    it('returns [null, null] for undefined input', () => {
      expect(parseAnswer(undefined)).toEqual([null, null]);
    });

    it('returns [null, null] for text with no letters', () => {
      expect(parseAnswer('见解析')).toEqual([null, null]);
    });

    it('returns [null, null] for non-string input', () => {
      expect(parseAnswer(42)).toEqual([null, null]);
    });
  });
});

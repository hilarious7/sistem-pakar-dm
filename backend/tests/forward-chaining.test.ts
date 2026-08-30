import { describe, test, expect } from 'bun:test';
import { ForwardChainingService } from '../src/modules/diagnosis/forward-chaining.service';

const svc = new ForwardChainingService();

describe('Forward Chaining Service', () => {
  test('empty input returns empty hypotheses', async () => {
    const r = await svc.evaluate([]);
    expect(r.activeHypotheses).toEqual([]);
    expect(r.firedRules).toEqual([]);
  });

  test('unmatched gejala returned', async () => {
    const r = await svc.evaluate([1, 2, 3]);
    expect(r.unmatchedGejalaIds).toEqual([1, 2, 3]);
  });

  // TODO: test rule matching setelah knowledge base divalidasi pakar
  // TODO: test multiple rules fired
  // TODO: test operator AND/OR
});

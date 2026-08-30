import { describe, test, expect } from 'bun:test';
import { DempsterShaferService } from '../src/modules/diagnosis/dempster-shafer.service';

const svc = new DempsterShaferService();

describe('Dempster-Shafer Service', () => {
  test('empty evidence returns empty beliefs', async () => {
    const r = await svc.evaluate([]);
    expect(r.beliefs).toEqual([]);
    expect(r.conflictFactor).toBe(0);
  });

  test('intersect single hypothesis sets', () => {
    expect(svc.intersect('T1', 'T1')).toBe('T1');
    expect(svc.intersect('T1', 'T2')).toBe('');
  });

  test('intersect compound hypothesis sets', () => {
    expect(svc.intersect('T1,T2', 'T2,DMG')).toBe('T2');
    expect(svc.intersect('T1,T2', 'T1,T2')).toBe('T1,T2');
  });

  test('intersect with THETA', () => {
    expect(svc.intersect('THETA', 'T1')).toBe('T1');
    expect(svc.intersect('T2', 'THETA')).toBe('T2');
    expect(svc.intersect('THETA', 'THETA')).toBe('DMG,T1,T2');
  });

  test('intersect disjoint sets', () => {
    expect(svc.intersect('T1', 'DMG')).toBe('');
  });

  // TODO: test combine setelah mass functions divalidasi
  // TODO: test belief/plausibility calculation
  // TODO: test conflict factor
});

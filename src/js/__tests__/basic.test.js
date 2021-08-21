import checkHealth from '../app';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'заяц', health: 50 }, 'wounded'],
  [{ name: 'волк', health: 14 }, 'critical'],
])(
  ('should check healthy'), (item, expected) => {
    const result = checkHealth(item);
    expect(result).toBe(expected);
  },
);

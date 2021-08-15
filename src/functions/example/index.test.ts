describe('a test', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect.assertions(1);
    const i: number = 3;
    expect(i).toBe(3);
  });
});

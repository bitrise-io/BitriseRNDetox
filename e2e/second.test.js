describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have step 1 on screen', async () => {
    await expect(element(by.id('step1'))).toBeVisible();
  });

  it('should have step 2 on screen', async () => {
    await expect(element(by.id('step2'))).toBeVisible();
  });
});

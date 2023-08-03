describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have step 3 on screen', async () => {
    await expect(element(by.id('step3'))).toBeVisible();
  });

  it('should have step 4 on screen', async () => {
    await expect(element(by.id('step4'))).toBeVisible();
  });
});

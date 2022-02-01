describe("Basic test", () => {
  it("Page title should be displayed", async () => {
    await browser.get("https://www.porsche.com/uk/");
    let title = await browser.getTitle();
    expect(title).toEqual("Porsche Cars Great Britain - Dr. Ing. h.c. F. Porsche AG - Porsche Great Britain");
  });

  it('Page should have "Models" section', async () => {
    await browser.get("https://www.porsche.com/uk/");
    let modelSection = await element(by.xpath("/html/body/main/div[2]/div[1]/h2/span")).getText();
    expect(modelSection).toEqual("Models");
  });

  it("Should open Compare page", async () => {
    await browser.get("https://www.porsche.com/uk/");
    let btnCompare = element(by.css('a[href="https://www.porsche.com/uk/models/?compare="]'));
    await btnCompare.click();
    let titleComparePage = await element(by.xpath("//span[contains(text(),'Select up to 3 models for comparison:')]")).getText();
    expect(titleComparePage).toEqual("Select up to 3 models for comparison:");
  });

  it("Should open 718 model page", async () => {
    await browser.get("https://www.porsche.com/uk/");
    let btn718Model = element(by.css('div[data-range-name="718"] > a > div'));
    await btn718Model.click();
    let title718Model = await element(by.css("h1 > span")).getText();
    expect(title718Model).toEqual("All 718 Models");
  });
});

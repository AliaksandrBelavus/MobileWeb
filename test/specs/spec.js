describe('Basic test', () => {

    it('Should open Homepage', async () => {
        await browser.get('https://www.porsche.com/uk/');
        let title = await browser.getTitle();
        expect(title).toEqual('Porsche Cars Great Britain - Dr. Ing. h.c. F. Porsche AG - Porsche Great Britain')
    })

})
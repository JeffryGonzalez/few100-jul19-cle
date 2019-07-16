describe('data types', () => {
    describe('declaring variables', () => {
        it('using let', () => {
            let x: any;

            x = 'Blue';
            x = 19;

            expect(x).toBe(19);

            let y = 34;

            // y = 'tacos';

            expect(y).toBe(34);

        });
        it('using const', () => {
            const PI = 3.1415;

            // PI = 3;

            const favoriteColors = ['blue', 'red', 'green'];

            // favoriteColors = [];

            favoriteColors[0] = 'Purple';

            expect(favoriteColors[0]).toBe('Purple');



        });
    });
});
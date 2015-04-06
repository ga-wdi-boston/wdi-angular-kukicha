describe('palindrome', function() {
    describe('count(arr)', function() {
        it('phrases should contain 2 palidromes', function() {
            var phrases = ['JavaScript is fun', 'Evil olive', 'Never odd or even'];

            expect(palindrome.count(phrases)).toEqual(2);
        });

        it('phrases should not contain 3 palidromes', function() {
            var phrases = ['JavaScript is fun', 'Evil olive', 'Never odd or even'];

            expect(palindrome.count(phrases)).not.toEqual(3);
        });
    });
});
(function () {
    this.Palindrome = function (str) {
        this.str = str;
        this.foundPalindrome = [];
    };
    Palindrome.prototype.check = function () {
        if (this.str.length < 0) return [];
        this.str = this.str.replace(/\s/g, '');

        var strLen = this.str.length;
        for (var i = 0; i < Math.ceil(strLen / 2); i++) {
            if (isPalindrome(this.str) && this.str.length > 1) this.foundPalindrome.push(this.str);

            this.str = this.str.substring(1, this.str.length - 1);
        }
        return this.foundPalindrome;
    };

    function isPalindrome(str) {
        var len = str.length;
        for (var i = 0; i < Math.ceil(len / 2); i++) {
            if (str.charAt(i) != str.charAt(len - i - 1)) {
                return false;
            }
        }
        return true;
    }

    Palindrome.prototype.getLongest = function () {
        var maxLength = 0;
        var longestPal = '';
        for (var pal in this.foundPalindrome) {
            if (this.foundPalindrome[pal].length > maxLength) {
                maxLength = this.foundPalindrome[pal].length;
                longestPal = this.foundPalindrome[pal];
            }
        }
        return longestPal;
    }
}());
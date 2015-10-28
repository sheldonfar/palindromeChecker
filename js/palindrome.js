(function () {
    this.Palindrome = function (str) {
        this.str = str;
        this.foundPalindrome = [];
    };
    Palindrome.prototype.check = function (_str) {
        var strToCheck = this.str;
        if (_str !== undefined) {
            strToCheck = _str;
        }
        if (strToCheck.length < 0) return [];

        strToCheck = strToCheck.replace(/\s/g, '');
        var strLen = strToCheck.length;
        var strWithoutBegin, strWithoutEnd;
        for (var i = 0; i < Math.ceil(strLen / 2); i++) {
            strWithoutBegin = strToCheck.substring(1);
            strWithoutEnd = strToCheck.substring(0, strToCheck.length - 1);


            if (isPalindrome(strToCheck) && strToCheck.length > 1 && !this.checkPalindromeAlreadyFound(strToCheck))
                this.foundPalindrome.push(strToCheck);

            this.check(strWithoutBegin);
            this.check(strWithoutEnd);

            strToCheck = strToCheck.substring(1, strToCheck.length - 1);
        }

        this.sortPalindromeArray();
        return this.foundPalindrome;
    };

    Palindrome.prototype.checkPalindromeAlreadyFound = function (str) {
        if (typeof this.foundPalindrome !== 'undefined' && this.foundPalindrome.length > 0) {
            for (var i = 0, len = this.foundPalindrome.length; i < len; i++) {
                if (str === this.foundPalindrome[i]) {
                    return true;
                }
            }
        }
        return false;
    };

    Palindrome.prototype.sortPalindromeArray = function () {
        this.foundPalindrome.sort(function (a, b) {
            return b.length - a.length;
        });
    };

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
}());
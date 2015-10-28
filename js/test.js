var str = {
    str1: {
        fullStr: 'abxyzyxba',
        pals: ['abxyzyxba', 'bxyzyxb', 'xyzyx', 'yzy'],
        longest: 'abxyzyxba'
    },
    str2: {
        fullStr: 'abcde',
        pals: [],
        longest: ''
    },
    str3: {
        fullStr: 'rotator',
        pals: ['rotator', 'otato', 'tat'],
        longest: 'rotator'
    },
    str4: {
        fullStr: '',
        pals: [],
        longest: ''
    },
    str5: {
        fullStr: '1222212',
        pals: ['122221', '2222', '212', '222', '22'],
        longest: '122221'
    }
};
describe("check()", function () {
    for (var index in str) {
        var myPalindrome = new Palindrome(str[index].fullStr);
        var foundPalindromes = myPalindrome.check();
        it("Checks the input string \"" + str[index].fullStr + "\" to find all subpolindromes: " + str[index].pals, function () {
            assert.deepEqual(foundPalindromes, str[index].pals);
        });
    }
});

describe("getLongest()", function () {
    for (var index in str) {
        var myPalindrome = new Palindrome(str[index].fullStr);
        var foundPalindromes = myPalindrome.check();
        var longest = myPalindrome.getLongest();
        it("Returns the longest polindrome from string \"" + str[index].fullStr + "\": " + str[index].pals, function () {
            assert.deepEqual(longest, str[index].longest);
        });
    }
});
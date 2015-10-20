$(document).ready(function () {
    $('button.calc').click(function () {
        var result = $('.alert');
        var palindrome = $('.palindrome');
        result.removeClass('alert-danger').removeClass('alert-success');


        var myPalindrome = new Palindrome(palindrome.val());
        var foundPalindromes = myPalindrome.check();

        var longestPal = myPalindrome.getLongest();

        if (foundPalindromes.length > 1) {
            result.addClass('alert-success').html("Found palindromes:");

            foundPalindromes.forEach(function (pal) {
                if (pal == longestPal)
                    result.append("<li><strong>" + pal + "</strong></li");
                else
                    result.append("<li>" + pal + "</li>");
            });
            result.css('display', 'block');
        }
        else {
            result.addClass('alert-danger').css('display', 'block').html("Not a single palindrome found");
        }
    });
});
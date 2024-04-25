In the final stages of the project, the HTML and CSS are to be validated,
and the site is to be tested on different browsers and devices. 

The results of this validation, as well as remediation, are documented here.

# Manual Testing #
I have tested the site on the following browsers and devices:
    1. Firefox, Windows 10.                    Resolutions: 1920x1080 
                                                            1366x768         - issue discovered, see #1 in bug_tracker
    2. Firefox, Debian.                        Resolutions: 1920x1080 
                                                            1366x768
    3. Microsoft Edge, Windows 10.             Resolutions: 1920x1080 
                                                            1366x768
    4. Firefox, Galaxy Note 20 (EMULATED).     Resolution:  412x915
    5. Firefox, iPhone 11 Pro (EMULATED).      Resolution:  375x812          - issue discovered, see #4 in bug_tracker
    6. Firefox, Galaxy S21+.                   Resolution:  1080x2400

Besides minor adjustments to the css, no issues were discovered during testing. All pages are functional on both desktop and mobile,
including apply.html and findus.html.

The php functionality visible on apply.html was tested on Ubuntu Server 20.04.2 LTS, using Apache2 and PHP 8.2.0.
After ensuring that www-data had access to the folder we're trying to save data to, the form was tested and worked as intended.
Note that no security measures were implemented, as this is a simple test. You should probably not use it in a live environment on principle.

# HTML Validation via W3 Validator #
## index.html ##
The HTML of index.html was validated using the W3 Validator.
1. No language declaration was found.                       ✅
2. Button was incorrectly placed inside an a tag.           ✅
3. The YouTube videos had incorrect attributes.             ✅

## about.html ##
1. No language declaration was found.                       ✅
2. Button was incorrectly placed inside an a tag (seeing a pattern here?)   ✅
3. The YouTube videos had incorrect attributes (hm... it's almost like I copy-pasted the same code).    ✅ 

## curriculum.html ##
1. No language declaration was found.                       ✅
2. Button was incorrectly placed inside an a tag.           ✅
3. Unclosed article element!
4. Unclosed div!

## findus.html ##
1. No language declaration was found.                       ✅
2. Button was incorrectly placed inside an a tag.           ✅
3. Duplicate style attribute on line 59                     ✅
4. <\!-- was within a comment, which is not allowed         ✅

## apply.html ##
1. No language declaration was found.                       ✅
2. Button was incorrectly placed inside an a tag.           ✅

# CSS Validation via W3 Validator #
oh boy here we go

## style.css ##
No errors...? I'm not sure if I should be happy or worried. Is this thing working right?

## home.css ##
## about.css ##
## apply.css ##
## header-style.css ##
## curriculum.css ##
Also no errors? I'm starting to get suspicious.

## findus.css ##
Whoop, there it is.
".contact-info 	left is not a align-items value : left "    ✅

# Conclusion #
Most issues were superficial and have been fixed. The site is now fully functional and validated.
Time for the final cleanup!
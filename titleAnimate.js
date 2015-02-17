"use strict";
var currentContextObject = null;
var i  = 0;
var timedTitle = null;
var originalTitle = null;
var defaultSettings = null;
var interval = null;

(function ($) {
    $.fn.animateTitle =  function (options) {
        currentContextObject = this;
        originalTitle = $("title").text();
        defaultSettings =  $.extend({
            title: [originalTitle],
            duration : 2000,
            enabled : true
        }, options);
        if (defaultSettings.enabled === true) {
            interval = setInterval(timedTitle, defaultSettings.duration);
        } else {
            clearInterval(interval);
        }
    };
    timedTitle = function () {
        var titleLength = defaultSettings.title.length;
        currentContextObject.text(defaultSettings.title[i]);
        i = i + 1;
        if (i > titleLength) {
            i = 0;
        }
    }

}(jQuery));

// ==UserScript==
// @name         Steam Auto Queue
// @namespace    https://github.com/FiveElementNinja/Steam-Auto-Queue/
// @version      1.0
// @description  This script will automatically click through your discovery queue so you can get a sale card.
// @author       Five Element Ninja (Twitter: @FivElementNinja)
// @match        *://store.steampowered.com/app/*
// @match        *://store.steampowered.com/agecheck/app/*
// @updateURL    https://raw.githubusercontent.com/FiveElementNinja/Steam-Auto-Queue/master/steam-auto-queue.user.js
// @downloadURL  https://raw.githubusercontent.com/FiveElementNinja/Steam-Auto-Queue/master/steam-auto-queue.user.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
(function() {
    'use strict';

    console.log('Steam Auto Queue Loaded - Will try to click Next automatically...');
    
	try {
        if (window.location.pathname.indexOf('/agecheck') > -1) {
            var appid = window.location.pathname.replace('/agecheck', '').replace('/app/', '');
            HideAgeGate(appid);
        } else {
            $J('#next_in_queue_form').submit();
        }
	}
	catch(err) {
		console.log('Error clicking next.');
	}
})();

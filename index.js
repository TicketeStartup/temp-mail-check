"use strict";
const _ = require("underscore");
const _sourceDomains = require("./disposable-email-domains.json");

exports.checkEmail = function (email) {
    if (!email) return false;
    let _email = email.toLowerCase();
    let domain = _email.split("@")[1];
    if (_.contains(_sourceDomains, '' + domain)) return false;
    else return true
}

exports.findDomain = function (domain) {
    if (!domain) return false;
    if (_.contains(_sourceDomains, '' + domain)) return true;
    else return false
}

exports.getSource = function () {
    return _sourceDomains;
}

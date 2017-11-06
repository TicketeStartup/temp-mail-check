"use strict";

const _tempEmailCheck = require('./');
const chai = require('chai'),
    expect = chai.expect;

describe('.checkEmail()', function () {
    describe('# jay@tickete.it', function () {
        it('should return true when the email is valid', function () {
            expect(_tempEmailCheck.checkEmail("jay@tickete.it")).to.be.true;
            expect(_tempEmailCheck.checkEmail("andrea-giglio@live.it")).to.be.true;
        });
        it('should return false when the email is not valid', function () {
            expect(_tempEmailCheck.checkEmail("jay@0-mail.com")).to.be.false;
            expect(_tempEmailCheck.checkEmail("andrea@dx.ez.lv")).to.be.false;
        });
    });
});


describe('.findDomain()', function () {
    describe('#', function () {
        it('should return false when the domain is not in the source', function () {
            expect(_tempEmailCheck.findDomain("tickete.it")).to.be.false;
        });
        it('should return true when the domain is in source', function () {
            expect(_tempEmailCheck.findDomain("0-mail.com")).to.be.true;
        });
    });
});

describe('.getSource()', function () {
    describe('#', function () {
        it('should return Array Source', function () {
            expect(_tempEmailCheck.getSource()).to.be.a('array');
            expect(_tempEmailCheck.getSource()).to.have.length.greaterThan(0);
        });
    });
});

import { expect } from "chai";
import request from "request";

describe("Add Two Numbers", function () {
    var url = "http://localhost:3000/addTwoNumbers/3/5";

    it("Returns status 200 to check if api works", function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("Returns statusCode key in body to check if api give right result should be 200", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.statusCode).to.equal(200);
            done();
        });
    });

    it("Returns the result as number", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.be.a("number");
            done();
        });
    });

    it("Returns the result equal to 8", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.equal(8);
            done();
        });
    });

    it("Returns the result not equal to 15", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.not.equal(15);
            done();
        });
    });
});

describe("Add Two strings", function () {
    var url = "http://localhost:3000/addTwoNumbers/a/b";

    it("should not return status 200", function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.not.equal(200);
            done();
        });
    });

    it("returns statusCode key in body to check if API gives right result (should be 400)", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.statusCode).to.equal(400);
            done();
        });
    });

    it("returns the result as null", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.be.null;
            done();
        });
    });
});

const expect = require('chai').expect;
const request = require('request');
const { app, add } = require('../server');

const baseUrl = 'http://localhost:3000';
let server;

before(function (done) {
  server = app.listen(3000, done);
});

after(function (done) {
  server.close(done);
});


describe('Sum Calculator API', function () {

  it('returns status 200 to check if API works', function (done) {
    request.get(`${baseUrl}/add?a=1&b=2`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct sum for valid numbers', function (done) {
    request.get(`${baseUrl}/add?a=10&b=5`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      const data = JSON.parse(body);
      expect(data.result).to.equal(15);
      done();
    });
  });

  it('should return 400 for non-numeric input', function (done) {
    request.get(`${baseUrl}/add?a=hello&b=world`, function (error, response, body) {
      expect(response.statusCode).to.equal(400);
      done();
    });
  });

  it('should handle missing parameters gracefully', function (done) {
    request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
      expect(response.statusCode).to.equal(400);
      done();
    });
  });

});

describe('Calculation Functions', function () {

  it('add() should correctly add two positive numbers', function () {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('add() should handle negative numbers', function () {
    const result = add(-5, 3);
    expect(result).to.equal(-2);
  });

});
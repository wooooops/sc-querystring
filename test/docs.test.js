var should = require( "should" ),
  querystring = require( ".." );

var complexQueryString, testObject;

it( "Given the following data", function () {

  complexQueryString = "chicken=tasty&duck=delicious&key%20has%20a%20space=%7B%22value%22%3A%22is%20an%20object%22%2C%22deep%22%3A%7B%22values%22%3A%22are%20ok%22%7D%7D&number=-36.2&array=%5B%22one%22%2C2%2C%223%22%5D&boolean=false&date=2013-12-11T23%3A00%3A00.000Z";
  testObject = {
    chicken: "tasty",
    duck: "delicious",
    "key has a space": {
      value: "is an object",
      deep: {
        values: "are ok"
      }
    },
    number: -36.2,
    array: [ "one", 2, "3" ],
    boolean: false,
    date: new Date( 2013, 11, 11, 33, 0, 0 ),
  };

} );

describe( "querystring.stringify(object:Object)", function () {

  it( "should stringify a complex object to a querystring", function () {
    querystring.stringify( testObject ).should.equal( complexQueryString );
  } );

} );

describe( "querystring.parse(queryString:String)", function () {

  it( "should parse a complex querystring", function () {
    var parsedQuerystring = querystring.parse( complexQueryString );

    parsedQuerystring[ "chicken" ].should.equal( testObject[ "chicken" ] );
    parsedQuerystring[ "duck" ].should.equal( testObject[ "duck" ] );
    JSON.stringify( parsedQuerystring[ "key has a space" ] ).should.equal( JSON.stringify( testObject[ "key has a space" ] ) );
    parsedQuerystring[ "number" ].should.equal( testObject[ "number" ] );
    JSON.stringify( parsedQuerystring[ "array" ] ).should.equal( JSON.stringify( testObject[ "array" ] ) );
    parsedQuerystring[ "boolean" ].should.equal( testObject[ "boolean" ] );
    JSON.stringify( parsedQuerystring[ "date" ] ).should.equal( JSON.stringify( testObject[ "date" ] ) );
  } );

} );
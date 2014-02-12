var should = require( "should" ),
  querystring = require( ".." );

it( "should return an empty object if the querystring is invalid", function () {

  var invalidValues = [ "", "=", /f/, null, undefined, [], {} ];

  invalidValues.forEach( function ( invalidValue ) {
    should( querystring.parse( invalidValue ) ).be.empty;
    should( querystring.stringify( invalidValue ) ).be.empty;
  } );

  should( querystring.parse() ).be.empty;
  should( querystring.stringify() ).be.empty;

} );
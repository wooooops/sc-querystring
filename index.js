var is = require( "sc-is" );

exports.stringify = function ( data ) {
  var parameters = [];

  data = is.object( data ) ? data : {};

  Object.keys( data )
    .forEach( function ( key ) {
      var value = data[ key ],
        valueToEncode = value;

      switch ( true ) {
      case is.object( value ) || is.array( value ):
        valueToEncode = JSON.stringify( value );
        break;
      case is.date( value ):
        valueToEncode = JSON.stringify( value ).replace( /^"|"$/g, "" );
        break;
      }
      parameters.push( encodeURIComponent( key ) + "=" + encodeURIComponent( valueToEncode ) );
    } );

  return parameters.join( "&" );
};

exports.parse = function ( querystring ) {
  if ( is.not.a.string( querystring ) || querystring === "" ) {
    return {};
  }

  var data = {},
    querystringKeyValuesMatches = querystring.match( /(&?([^\s\?=]+=[^\s\?\&=]+))+/g ),
    querystringKeyValuesMatch = is.array( querystringKeyValuesMatches ) && is.string( querystringKeyValuesMatches[ 0 ] ) ? querystringKeyValuesMatches[ 0 ] : "",
    keyValues = querystringKeyValuesMatch.split( "&" );

  keyValues.forEach( function ( keyValueString ) {
    var keyValueArray = keyValueString.split( "=" ),
      key = decodeURIComponent( keyValueArray[ 0 ] ),
      value = decodeURIComponent( keyValueArray[ 1 ] );

    if ( key ) {
      try {
        data[ key ] = JSON.parse( value );
      } catch ( e ) {
        data[ key ] = value;
      }
    }

  } );

  return data;
};
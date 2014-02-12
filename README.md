# TOC
   - [querystring.stringify(object:Object)](#querystringstringifyobjectobject)
   - [querystring.parse(queryString:String)](#querystringparsequerystringstring)
<a name=""></a>
 
Given the following data.

```js
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
```

<a name="querystringstringifyobjectobject"></a>
# querystring.stringify(object:Object)
should stringify a complex object to a querystring.

```js
should( querystring.stringify( testObject ) ).equal( complexQueryString );
```

<a name="querystringparsequerystringstring"></a>
# querystring.parse(queryString:String)
should parse a complex querystring.

```js
var parsedQuerystring = querystring.parse( complexQueryString );
should.equal( parsedQuerystring[ "chicken" ], testObject[ "chicken" ] );
should.equal( parsedQuerystring[ "duck" ], testObject[ "duck" ] );
should.equal( JSON.stringify( parsedQuerystring[ "key has a space" ] ), JSON.stringify( testObject[ "key has a space" ] ) );
should.equal( parsedQuerystring[ "number" ], testObject[ "number" ] );
should.equal( JSON.stringify( parsedQuerystring[ "array" ] ), JSON.stringify( testObject[ "array" ] ) );
should.equal( parsedQuerystring[ "boolean" ], testObject[ "boolean" ] );
should.equal( JSON.stringify( parsedQuerystring[ "date" ] ), JSON.stringify( testObject[ "date" ] ) );
```


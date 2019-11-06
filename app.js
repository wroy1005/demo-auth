var express = require( 'express' );

const app = express();

app.use( express.static( 'public' ) )

app.get( '/*', handleAuth );

app.listen( 80, () => console.log( 'app starts at port 80' ) );

function handleAuth( req, res ) {
  const auth = req.get( 'authorization' );
  if ( !auth ) {
    res.set( 'WWW-Authenticate', `Basic realm="Access to the staging site", charset="UTF-8"` )
    res.status( 401 ).end();
  } else {
    handleOther( req, res );
  }
}

function handleOther( req, res ) {
  // if (req.params === 'test') 
  res.send( req.headers )
}
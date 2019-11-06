document.addEventListener( 'click', function( e ) {
  if ( e.target.tagName.toUpperCase() === 'H1' ) {
    sendTest();
  }
} )

function sendTest() {
  var url = '/test';
  var xhr = new XMLHttpRequest();
  xhr.open( 'get', url );
  xhr.onload = () => {

  }
  xhr.send( null );
}
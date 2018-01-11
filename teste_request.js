  let num = 73
  const host = 'http://atlas.wolfram.com'
  const path = '/01/01/' + 
               num +
               '/01_01_106_' + 
               num +
               '.html'

  const url = host + path 

  // Create the XHR object.
  function createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest() 
    if ("withCredentials" in xhr) {
      console.log('request', xhr)
    // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
    // CORS not supported.
      xhr = null;
    }
    return xhr;
  }
 
  let xhr = createCORSRequest('GET', url);

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    console.log('resposta', text) 
    // teste = extractRuleFromDOMBody(text)
  } 

  xhr.onerror = () => {
    console.log('Woops, there was an error making the request.')
    console.log('erro', xhr)
  }

  xhr.onreadystatechange = function() {
    if(this.readyState == this.HEADERS_RECEIVED) {

      //
      // RAW STRING OF HEADERS
      //
      var headers = request.getAllResponseHeaders(); 
      console.log(headers); 

      //
      // ARRAY OF HEADERS
      //
      var arr = headers.trim().split(/[\r\n]+/);


      //
      // MAP OF HEADERS
      //
      var map = {};
      arr.forEach(function (line) {
        var parts = line.split(': ');
        var header = parts.shift();
        var value = parts.join(': ');
        map[header] = value;
      });

    }
  }
  xhr.withCredentials = true; 
  xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true')
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
  xhr.setRequestHeader('Vary', '*');  
  xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  xhr.setRequestHeader('Access-Control-Allow-Headers', '*');  
  xhr.send(null);
define(function() {

  // method could be: 'GET', 'POST', 'DELETE', etc.
  function asyncRequest(url, payload, method) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open(method, url, true);
      req.onload = function() {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        } else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };
      // Handle network errors
      req.onerror = function() {
        reject(Error("Network Error"));
      };
      // Make the request
      req.send(payload);
    });
  }

  function asyncGet(url) {
    return asyncRequest(url, null, 'GET');
  }

  return {
    asyncRequest : asyncRequest,
    asyncGet : asyncGet
  };

});

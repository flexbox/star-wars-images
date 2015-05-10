(function() {
  $(function() {
    var req;
    console.log('Master the force you should');
    req = jQuery.ajax({
      type: 'GET',
      url: 'http://92.243.14.65:1337/getMessages'
    });
    return req.done(function(data) {
      var counter, i, jsonData;
      jsonData = JSON.parse(data);
      i = 0;
      while (i < jsonData.counters.length) {
        counter = jsonData.counters[i];
        console.log(counter.name);
        i++;
      }
    });
  });

}).call(this);

$(function() {
  $.getJSON(`config.json?ts=${Math.floor(Date.now() / 1000)}`, function(res) {
    var data = (res.data || []).sort(function(a, b) { return b.timestamp - a.timestamp; });
    if (!data.length) {
      $('#no-events').show();
      return;
    }
    $(data).each(function(_, datum) {
      $('#events tbody').append(`<tr><td>${datum.event}</td><td>${moment.unix(datum.timestamp).fromNow()}</td></tr>`);
    });
    $('#events').show();
  });
});

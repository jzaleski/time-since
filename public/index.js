function reload() {
  window.location.reload();
}

$(function() {
  $.getJSON('/config.json', function(res) {
    var data = res.data || [];
    data.sort(function(a, b) { return b.timestamp - a.timestamp; });
    $(data).each(function(_, datum) {
      $('#events tbody').append(`<tr><td>${datum.event}</td><td>${moment.unix(datum.timestamp).fromNow()}</td></tr>`);
    });
  });
});

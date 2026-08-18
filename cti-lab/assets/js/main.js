/* =============================================================
   CTI Lab — site behaviour
   - mobile navigation toggle
   - publication type filter
   ============================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  var navList = document.getElementById('nav-list');

  if (burger && navList) {
    burger.addEventListener('click', function () {
      var open = navList.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- publication filter ---------- */
  var buttons = document.querySelectorAll('.filter-btn');
  var emptyMsg = document.querySelector('.empty-msg');
  if (!buttons.length) return;

  function applyFilter(type) {
    var anyVisible = false;

    document.querySelectorAll('.year-group').forEach(function (group) {
      var shown = 0;

      group.querySelectorAll('.pub').forEach(function (pub) {
        var tag = pub.querySelector('.tag');
        var match = (type === 'all') || (tag && tag.classList.contains(type));
        pub.hidden = !match;
        if (match) shown++;
      });

      group.hidden = (shown === 0);
      if (shown > 0) anyVisible = true;
    });

    if (emptyMsg) emptyMsg.hidden = anyVisible;
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });

  applyFilter('all');
});

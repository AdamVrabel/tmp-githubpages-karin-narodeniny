(function () {
  var app = document.getElementById('app');
  if (!window.CARD_ID) {
    app.innerHTML = '<p class="status">Chýba CARD_ID.</p>';
    return;
  }

  var jsonUrl = '../../data/' + window.CARD_ID + '.json?_=' + Date.now();

  fetch(jsonUrl, { cache: 'no-store' })
    .then(function (r) {
      if (!r.ok) throw new Error('config not found');
      return r.json();
    })
    .then(function (cfg) {
      app.innerHTML = '';

      if (!cfg.file) {
        app.innerHTML = '<p class="status">Obsah čoskoro pribudne ✨</p>';
        return;
      }

      var mediaUrl = '../../media/' + cfg.file + '?_=' + Date.now();
      var type = (cfg.type || '').toLowerCase();

      if (type === 'video') {
        var v = document.createElement('video');
        v.src = mediaUrl;
        v.controls = true;
        v.autoplay = true;
        v.loop = true;
        v.muted = true;
        v.playsInline = true;
        app.appendChild(v);
      } else {
        // image alebo gif - obe sa zobrazujú ako <img>
        var img = document.createElement('img');
        img.src = mediaUrl;
        img.alt = cfg.caption || '';
        app.appendChild(img);
      }

      if (cfg.caption) {
        var p = document.createElement('p');
        p.className = 'caption';
        p.textContent = cfg.caption;
        app.appendChild(p);
      }
    })
    .catch(function () {
      app.innerHTML = '<p class="status">Obsah čoskoro pribudne ✨</p>';
    });
})();

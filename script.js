// ── WhatsApp links (number protected) ──
(function(){
  const d="5517", n="992136581";
  const msg = encodeURIComponent("Olá! Vim pelo site da WashGo e quero agendar um serviço.");
  const msgL = encodeURIComponent("Olá! Vim pelo site. Quero garantir minha vaga com o desconto LANÇAMENTO.");
  const wa = "https://wa.me/"+d+n+"?text="+msg;
  const waL = "https://wa.me/"+d+n+"?text="+msgL;
  ["nav-wa","hero-btn","nav-cta","servicos-btn","cta-final-btn","footer-wa","footer-wa2"].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.href = wa;
  });
  var ob = document.getElementById("oferta-btn");
  if(ob) ob.href = waL;
})();


// ── Mobile menu toggle ──
(function(){
  var toggle = document.getElementById("menuToggle");
  var menu = document.getElementById("mobileMenu");
  var body = document.body;

  toggle.addEventListener("click", function(){
    var isOpen = menu.classList.toggle("open");
    body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
    menu.setAttribute("aria-hidden", !isOpen);
    // manage tabindex
    menu.querySelectorAll("a").forEach(function(a){
      a.tabIndex = isOpen ? 0 : -1;
    });
  });

  // Close menu on link click
  menu.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){
      menu.classList.remove("open");
      body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
    });
  });
})();



// ── Before / after sliders ──
(function(){
  document.querySelectorAll('.before-after').forEach(function(slider){
    var input = slider.querySelector('input[type="range"]');
    if(!input) return;

    function update(){
      slider.style.setProperty('--pos', input.value + '%');
    }

    input.addEventListener('input', update);
    input.addEventListener('change', update);
    update();
  });
})();

// ── Scroll reveal ──
(function(){
  if(!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("visible"); });
    return;
  }
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold:0.12, rootMargin:"0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(function(el){ obs.observe(el); });
})();

// ── Active nav link on scroll ──
(function(){
  var sections = document.querySelectorAll("section[id], div[id='inicio']");
  var navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        navLinks.forEach(function(a){
          a.style.color = a.getAttribute("href") === "#"+e.target.id ? "var(--text)" : "";
        });
      }
    });
  }, { threshold:0.3 });
  sections.forEach(function(s){ obs.observe(s); });
})();
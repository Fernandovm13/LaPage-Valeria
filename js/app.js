// ============================================================================
//  LOGICA DE INTERACTIVIDAD Y RENDERIZADO — PORTAFOLIO (VERSIÓN CON REDES Y DANZA)
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderContent();
  initNavbar();
  initScrollReveal();
  initMarquee();
  initContactForm();
  initKeyboardEvents();
});

// ----------------------------------------------------------------------------
// 1. RENDERIZADO DINÁMICO DE CONTENIDOS
// ----------------------------------------------------------------------------
function renderContent() {
  // Hero
  document.getElementById("hero-origin").textContent = artist.origen;
  document.getElementById("hero-name").innerHTML = `Karla<br><em>Valeria</em><br>Sotelo`;
  document.getElementById("hero-titulo").textContent = artist.titulo;
  document.getElementById("hero-statement").textContent = artist.statement;
  const heroImg = document.getElementById("hero-artwork");
  heroImg.src = heroArtwork;
  heroImg.style.cursor = "pointer";
  heroImg.onclick = () => openLightbox(heroArtwork, "ECO", "2026 · Óleo sobre lienzo · 30 × 40 cm");

  // About
  const aboutImg = document.getElementById("about-portrait");
  aboutImg.src = artistPortrait;
  aboutImg.style.cursor = "pointer";
  aboutImg.onclick = () => openLightbox(artistPortrait, artist.nombre, artist.titulo);
  document.getElementById("about-origin").textContent = artist.origen;
  document.getElementById("about-name").textContent = artist.nombre;
  document.getElementById("about-titulo").textContent = artist.titulo;
  document.getElementById("about-bio").textContent = artist.bio;
  document.getElementById("about-statement").textContent = `"${artist.statement}"`;

  // About Tags
  const tagsContainer = document.getElementById("about-tags");
  tagsContainer.innerHTML = artist.intereses
    .map(tag => `<span class="about-tag">${tag}</span>`)
    .join("");

  // About Facts
  const factsContainer = document.getElementById("about-facts");
  factsContainer.innerHTML = `
    <div class="about-fact">
      <p class="about-fact-label">Disciplina</p>
      <p class="about-fact-value">${artist.destacados.disciplina}</p>
    </div>
    <div class="about-fact">
      <p class="about-fact-label">Técnicas</p>
      <p class="about-fact-value">${artist.destacados.tecnicas}</p>
    </div>
    <div class="about-fact">
      <p class="about-fact-label">Ubicación</p>
      <p class="about-fact-value">${artist.destacados.ubicacion}</p>
    </div>
    <div class="about-fact">
      <p class="about-fact-label">Nivel</p>
      <p class="about-fact-value">${artist.destacados.trayectoria}</p>
    </div>
  `;

  // Education Grados
  document.getElementById("edu-grados").innerHTML = formacion
    .map(
      item => `
    <div class="edu-item reveal">
      <p class="edu-period">${item.inicio} — ${item.fin}</p>
      <p class="edu-degree">${item.grado}</p>
      <p class="edu-school">${item.institucion}</p>
      <p class="edu-spec">${item.especialidad}</p>
    </div>
  `
    )
    .join("");

  // Education Cursos
  document.getElementById("edu-cursos").innerHTML = cursos
    .map(
      item => `
    <div class="edu-item reveal">
      <p class="edu-period">${item.anio}</p>
      <p class="edu-degree">${item.nombre}</p>
      <p class="edu-school">${item.institucion}</p>
    </div>
  `
    )
    .join("");

  // Colectivos
  const colectivosList = document.getElementById("colectivos-list");
  if (colectivos.length === 0) {
    colectivosList.innerHTML = `
      <div class="colectivo-item reveal">
        <p class="colectivo-rol" style="color:var(--grey); font-style:italic;">
          Actualmente enfocada en la producción individual y formación académica. No pertenezco a colectivos independientes por el momento.
        </p>
      </div>
    `;
  } else {
    colectivosList.innerHTML = colectivos
      .map(
        item => `
      <div class="colectivo-item reveal">
        <div>
          <p class="colectivo-name">${item.nombre}</p>
          <p class="colectivo-rol">${item.rol}</p>
        </div>
        <p class="colectivo-period">${item.periodo}</p>
      </div>
    `
      )
      .join("");
  }

  // Trayectoria
  document.getElementById("trayectoria-list").innerHTML = trayectoria
    .map(
      item => `
    <div class="traj-item reveal">
      <div class="traj-year">${item.anio}</div>
      <div>
        <p class="traj-activity">${item.actividad}</p>
        <p class="traj-title">${item.descripcion}</p>
        <p class="traj-place">${item.lugar}</p>
      </div>
    </div>
  `
    )
    .join("");

  // Exposiciones (Individuales)
  const indList = exposiciones.filter(e => e.tipo === "individual");
  document.getElementById("expo-individuales").innerHTML = indList.length > 0
    ? indList.map(renderExpoRow).join("")
    : `<p class="reveal" style="color:var(--grey); font-style:italic; padding-block:1rem;">Proyectos individuales en proceso de desarrollo y montaje académico.</p>`;

  // Exposiciones (Colectivas)
  const colList = exposiciones.filter(e => e.tipo === "colectiva");
  document.getElementById("expo-colectivas").innerHTML = colList.length > 0
    ? colList.map(renderExpoRow).join("")
    : `<p class="reveal" style="color:var(--grey); font-style:italic; padding-block:1rem;">Sin exposiciones colectivas adicionales registradas.</p>`;

  // Obras / Gallery
  document.getElementById("gallery-grid").innerHTML = obras
    .map(
      item => `
    <div class="gallery-item" onclick="openLightbox('${item.url}', '${escapeHtml(item.titulo)}', '${item.anio} · ${escapeHtml(item.tecnica)} · ${item.dimensiones}')">
      <img src="${item.url}" alt="${escapeHtml(item.titulo)}" loading="lazy" />
      <div class="gallery-overlay">
        <div class="gallery-info">
          <h3>${item.titulo}</h3>
          <p>${item.anio} · ${item.tecnica} · ${item.dimensiones}</p>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Danza Folclórica Gallery
  document.getElementById("danza-grid").innerHTML = danzaFotos
    .map(
      item => `
    <div class="gallery-item" onclick="openLightbox('${item.url}', '${escapeHtml(item.titulo)}', '${escapeHtml(item.desc)}')">
      <img src="${item.url}" alt="${escapeHtml(item.titulo)}" loading="lazy" />
      <div class="gallery-overlay">
        <div class="gallery-info">
          <h3>${item.titulo}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Reconocimientos
  document.getElementById("awards-grid").innerHTML = reconocimientos
    .map(
      item => `
    <div class="award-item reveal">
      <div class="award-icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
      </div>
      <div>
        <p class="award-year">${item.anio}</p>
        <h3 class="award-name">${item.nombre}</h3>
        <p class="award-inst">${item.institucion}</p>
        <p class="award-desc">${item.descripcion}</p>
      </div>
    </div>
  `
    )
    .join("");

  // Técnicas
  document.getElementById("tech-grid").innerHTML = tecnicas
    .map(item => `<span class="tech-tag">${item}</span>`)
    .join("");

  // Documentos
  document.getElementById("docs-grid").innerHTML = documentos
    .map(
      item => `
    <div class="doc-card reveal" onclick="${item.videoUrl ? `openVideoModal('${item.videoUrl}', '${escapeHtml(item.nombre)}', '${item.tipo} · ${item.anio}', '${item.posterUrl || item.url || ''}')` : `openLightbox('${item.url}', '${escapeHtml(item.nombre)}', '${item.tipo} · ${item.anio}')`}">
      <div class="doc-img" style="position:relative;">
        <img src="${item.posterUrl || item.url}" alt="${escapeHtml(item.nombre)}" loading="lazy" />
        ${item.videoUrl ? `
          <div style="position:absolute;inset:0;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><circle cx="12" cy="12" r="10" fill="rgba(59,31,80,0.7)" stroke="none"/><polygon points="10 8 16 12 10 16 10 8" fill="#fff"/></svg>
          </div>
        ` : ''}
      </div>
      <div class="doc-info">
        <p class="doc-type">${item.tipo}</p>
        <p class="doc-name">${item.nombre}</p>
        <p class="doc-year">${item.anio}</p>
      </div>
    </div>
  `
    )
    .join("");

  // Prensa & Medios
  const prensaGrid = document.getElementById("prensa-grid");
  if (prensaGrid) {
    prensaGrid.innerHTML = prensa
      .map(item => {
        let mediaHtml = "";
        if (item.tipo === "youtube" && item.src) {
          const ytId = getYouTubeId(item.src);
          mediaHtml = `<iframe class="prensa-video" src="https://www.youtube.com/embed/${ytId}" frameborder="0" allowfullscreen></iframe>`;
        } else {
          mediaHtml = `
            <video class="prensa-video" controls poster="img/hero-obra.jpg">
              <source src="${item.src}" type="video/mp4">
              Tu navegador no soporta la reproducción de video.
            </video>
          `;
        }
        return `
          <div class="prensa-card reveal">
            <div class="prensa-media-wrap">
              ${mediaHtml}
            </div>
            <div class="prensa-info">
              <p class="prensa-medio">${item.medio} · ${item.anio}</p>
              <h3 class="prensa-title font-serif">${item.titulo}</h3>
              <p class="prensa-desc">${item.descripcion}</p>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // Contacto con íconos de WhatsApp, Instagram, Facebook, Correo, Teléfono y Dirección
  document.getElementById("contact-items").innerHTML = `
    <a class="contact-item" href="mailto:${contacto.email}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      <div>
        <p class="contact-item-label">Correo</p>
        <p class="contact-item-value">${contacto.email}</p>
      </div>
    </a>
    <a class="contact-item" href="${contacto.whatsapp}" target="_blank" rel="noreferrer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.32 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.9a16 16 0 006.16 6.16l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
      <div>
        <p class="contact-item-label">WhatsApp / Teléfono</p>
        <p class="contact-item-value">${contacto.telefono}</p>
      </div>
    </a>
    <a class="contact-item" href="${contacto.instagram}" target="_blank" rel="noreferrer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      <div>
        <p class="contact-item-label">Instagram</p>
        <p class="contact-item-value">${contacto.instagram_handle}</p>
      </div>
    </a>
    <a class="contact-item" href="${contacto.facebook}" target="_blank" rel="noreferrer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      <div>
        <p class="contact-item-label">Facebook</p>
        <p class="contact-item-value">${contacto.facebook_handle}</p>
      </div>
    </a>
    <div class="contact-item" style="cursor:default">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
      <div>
        <p class="contact-item-label">Dirección Fiscal / Ubicación</p>
        <p class="contact-item-value">${contacto.direccion}</p>
      </div>
    </div>
  `;

  // Footer
  document.getElementById("footer-logo").textContent = artist.firma;
  document.getElementById("footer-copy").textContent = `© ${new Date().getFullYear()} ${artist.nombre}. Todos los derechos reservados.`;
  document.getElementById("footer-email").href = `mailto:${contacto.email}`;
  document.getElementById("footer-ig").href = contacto.instagram;
  document.getElementById("footer-fb").href = contacto.facebook;
}

function renderExpoRow(item) {
  return `
    <div class="expo-row reveal">
      <span class="expo-year">${item.anio}</span>
      <div>
        <h3 class="expo-title">${item.nombre}</h3>
        <p class="expo-desc">${item.descripcion}</p>
      </div>
      <div class="expo-loc">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${item.lugar} · ${item.ciudad}, ${item.estado}</span>
      </div>
      <button class="expo-btn" onclick="openExpoModal('${item.id}')">
        Ver evidencia
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </button>
    </div>
  `;
}

// ----------------------------------------------------------------------------
// 2. NAVEGACIÓN Y NAVBAR
// ----------------------------------------------------------------------------
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    iconMenu.style.display = isOpen ? "none" : "";
    iconClose.style.display = isOpen ? "" : "none";
  });

  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-to]");
    if (btn) {
      const targetId = btn.getAttribute("data-to");
      scrollToSection(targetId);

      if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        iconMenu.style.display = "";
        iconClose.style.display = "none";
      }
    }
  });

  document.getElementById("nav-logo").addEventListener("click", () => scrollToSection("inicio"));
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const offset = 80;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
}

// ----------------------------------------------------------------------------
// 3. ANIMACIONES DE DESPLAZAMIENTO (SCROLL REVEAL)
// ----------------------------------------------------------------------------
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  document.querySelectorAll(".hero .reveal").forEach((el, index) => {
    setTimeout(() => el.classList.add("visible"), 150 + index * 100);
  });
}

// ----------------------------------------------------------------------------
// 4. MARQUEE EDITORIAL
// ----------------------------------------------------------------------------
function initMarquee() {
  const track = document.getElementById("marquee-track");
  const items = [...marqueeItems, ...marqueeItems];
  track.innerHTML = items
    .map(
      text => `
    <span class="marquee-item">
      ${text}
      <span class="marquee-dot" aria-hidden="true"></span>
    </span>
  `
    )
    .join("");
}

// ----------------------------------------------------------------------------
// 5. MODAL DE EXPOSICIONES Y LIGHTBOX
// ----------------------------------------------------------------------------
function openExpoModal(id) {
  const item = exposiciones.find(e => e.id === id);
  if (!item) return;

  const content = document.getElementById("modal-content");
  content.innerHTML = `
    <p class="modal-eyebrow">Evidencia · ${item.tipo} · ${item.anio}</p>
    <h2 class="modal-title" id="modal-title-text">${item.nombre}</h2>
    <p class="modal-place">${item.lugar} · ${item.ciudad}, ${item.estado}</p>
    <p class="modal-body">${item.descripcion}</p>

    <div class="modal-images">
      ${item.evidencias
        .map(
          ev => `
        <div class="modal-img-wrap">
          <img src="${ev.url}" alt="${escapeHtml(item.nombre)}" onclick="openLightbox('${ev.url}', '${escapeHtml(item.nombre)}', '${ev.tipo}')" />
          <p class="modal-img-tipo">${ev.tipo}</p>
        </div>
      `
        )
        .join("")}
    </div>

    <div class="modal-resena">
      <p class="modal-resena-label">Reseña</p>
      <p>${item.resena}</p>
    </div>
  `;

  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";

  document.getElementById("modal-close-btn").onclick = closeExpoModal;
  overlay.onclick = e => {
    if (e.target === overlay) closeExpoModal();
  };
}

function closeExpoModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function openVideoModal(videoUrl, title, desc, posterUrl) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  
  img.style.display = "none";
  let videoEl = document.getElementById("lightbox-video");
  if (!videoEl) {
    videoEl = document.createElement("video");
    videoEl.id = "lightbox-video";
    videoEl.controls = true;
    videoEl.autoplay = true;
    videoEl.style.maxWidth = "90vw";
    videoEl.style.maxHeight = "80vh";
    videoEl.style.borderRadius = "2px";
    img.parentNode.insertBefore(videoEl, img);
  }
  if (posterUrl) {
    videoEl.poster = posterUrl;
  }
  videoEl.style.display = "block";
  videoEl.src = videoUrl;

  document.getElementById("lightbox-title").textContent = title;
  document.getElementById("lightbox-desc").textContent = desc;

  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";

  document.getElementById("lightbox-close-btn").onclick = closeLightbox;
  lightbox.onclick = e => {
    if (e.target === lightbox) closeLightbox();
  };
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const videoEl = document.getElementById("lightbox-video");
  if (videoEl) {
    videoEl.pause();
    videoEl.style.display = "none";
  }
  const img = document.getElementById("lightbox-img");
  if (img) img.style.display = "block";

  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

// ----------------------------------------------------------------------------
// 6. FORMULARIO DE CONTACTO (INTEGRACIÓN REAL CON FORMSUBMIT Y WHATSAPP)
// ----------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById("contact-form");
  const btn = document.getElementById("btn-send");

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const nombre = document.getElementById("f-nombre").value.trim();
    const email = document.getElementById("f-email").value.trim();
    const mensaje = document.getElementById("f-mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      showToast("Por favor completa todos los campos del formulario.", "error");
      return;
    }

    btn.disabled = true;
    btn.textContent = "Enviando...";

    try {
      // Envío real mediante FormSubmit directamente a tu correo de Gmail
      const response = await fetch(`https://formsubmit.co/ajax/${contacto.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nombre: nombre,
          Correo: email,
          Mensaje: mensaje,
          _subject: `Nuevo mensaje de contacto en Portafolio - ${nombre}`
        })
      });

      if (response.ok) {
        showToast("¡Mensaje enviado exitosamente! Te responderé pronto.", "success");
        form.reset();
      } else {
        // Enlace alternativo directo por mailto si la red o servicio bloquea
        window.location.href = `mailto:${contacto.email}?subject=Contacto%20Portafolio%20-${encodeURIComponent(nombre)}&body=${encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`)}`;
        showToast("Se abrió tu aplicación de correo para enviar el mensaje.", "success");
        form.reset();
      }
    } catch (err) {
      // Si falla la red, redirigir a mailto
      window.location.href = `mailto:${contacto.email}?subject=Contacto%20Portafolio%20-${encodeURIComponent(nombre)}&body=${encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`)}`;
      showToast("Se abrió tu aplicación de correo para enviar el mensaje.", "success");
      form.reset();
    } finally {
      btn.disabled = false;
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Enviar mensaje
      `;
    }
  });
}

function showToast(msg, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = msg;

  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// ----------------------------------------------------------------------------
// 7. EVENTOS DE TECLADO
// ----------------------------------------------------------------------------
function initKeyboardEvents() {
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeLightbox();
      closeExpoModal();
    }
  });
}

function escapeHtml(str) {
  return str.replace(/'/g, "\\'");
}

function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : "";
}

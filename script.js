const paineis = document.querySelectorAll(".painel");
const formas = document.querySelectorAll(".forma");
const menu = document.querySelector(".menu");
const botaoMobile = document.getElementById("botaoMobile");
const menuMobile = document.getElementById("menuMobile");

window.addEventListener("scroll", () => {

  // MENU GLASS
  if (window.scrollY > 60) {
    menu.classList.add("ativo");
  } else {
    menu.classList.remove("ativo");
  }

  paineis.forEach(painel => {
    const retangulo = painel.getBoundingClientRect();
    const alturaJanela = window.innerHeight;

    const progresso = Math.min(
      Math.max((alturaJanela - retangulo.top) / alturaJanela, 0),
      1
    );

    // CURVATURA
    if (painel.classList.contains("curvado")) {
      const raio = 260 - progresso * 260;
      painel.style.borderTopLeftRadius = raio + "px";
      painel.style.borderTopRightRadius = raio + "px";
    }

    // PARALLAX DO CONTEÚDO
    const conteudo = painel.querySelector(".conteudo");
    if (conteudo) {
      conteudo.style.transform = `translateY(${40 - progresso * 40}px)`;
    }
  });

  // PARALLAX DAS FORMAS
  formas.forEach((forma, index) => {
    const velocidade = (index + 1) * 12;
    forma.style.transform = `translateY(${window.scrollY / velocidade}px)`;
  });
});

// MENU MOBILE
botaoMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("ativo");
});

menuMobile.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("ativo");
  });
});


// FAQ DE ATUAÇÕES
const areas = document.querySelectorAll(".area");

areas.forEach(area => {
  const cabecalho = area.querySelector(".area-cabecalho");

  cabecalho.addEventListener("click", () => {
    areas.forEach(item => {
      if (item !== area) {
        item.classList.remove("ativa");
      }
    });

    area.classList.toggle("ativa");
  });
});

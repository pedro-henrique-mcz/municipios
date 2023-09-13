document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".contato-dropdown");

  dropdown.addEventListener("click", function () {
    if (dropdown.classList.contains("ativo")) {
      dropdown.classList.remove("ativo");
      dropdown.classList.add("desativado");
    } else {
      dropdown.classList.remove("desativado");
      dropdown.classList.add("ativo");
    }
    const dropDownContent = document.querySelector(".contato-dropdown-list");
    const imgDropDown = document.querySelector(".imgdropdown");
    if (dropDownContent.classList.contains("none")) {
      dropDownContent.classList.remove("none");
      imgDropDown.src = "img/icons/contato-dropdown-up.png";
    } else {
      dropDownContent.classList.add("none");
      imgDropDown.src = "img/icons/contato-drop-down.png";
    }
  });

  const cards = document.querySelectorAll(".cards li");

  /*cards.forEach((card) => {
    if (card.classList.contains("dropdown-card")) {
      card.addEventListener("click", function () {
        if(card.if e)
      });
    }
  });*/

  $(function () {
    var availableTags = [
      {
        label: "covid",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=combate_COVID_19",
      },
      {
        label: "Leis",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=leis",
      },
      {
        label: "Decretos",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=decretos",
      },
      {
        label: "Portarias",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=portarias",
      },
      {
        label: "CACS",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=cacs-fundeb",
      },
      {
        label: "FUNDEB",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=cacs-fundeb",
      },
      {
        label: "CACS-FUNDEB",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=cacs-fundeb",
      },
      {
        label: "CMAS",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=cmas",
      },
      {
        label: "CMCDA",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=cmdca",
      },
      {
        label: "Gesta Democratica",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=gestao-democratica",
      },
      {
        label: "Receitas",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=receitas",
      },
      {
        label: "Despesas",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=despesas",
      },
      {
        label: "Servidores",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=espelhoponto",
      },
      {
        label: "Ponto Eletronico",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=espelhoponto",
      },
      {
        label: "Convenio",
        value:
          "http://www.portaldatransparencia.gov.br/convenios/consulta?paginacaoSimples=true&tamanhoPagina=&offset=&direcaoOrdenacao=asc&periodoVigenciaDe=01%2F01%2F2014&periodoVigenciaAte=31%2F01%2F2020&municipio=18655&colunasSelecionadas=linkDetalhamento%2CnumeroConvenio%2CnumeroOriginal%2Cuf%2CmunicipioConvenente%2Cobjetivo%2CorgaoSuperior%2Corgao%2Cconcedente%2Cconvenente%2CvalorConveniado",
      },
      {
        label: "Contratos",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=contratosaditivos",
      },
      {
        label: "Licitacoes",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=licitacoes",
      },
      {
        label: "RREO",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=rreo",
      },
      {
        label: "RGF",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=rgf",
      },
      {
        label: "SIOPE",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=siope",
      },
      {
        label: "SIOPS",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=siops",
      },
      {
        label: "PPA",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=ppa",
      },
      {
        label: "LDO",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=ldo",
      },
      {
        label: "QDD",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=qdd",
      },
      {
        label: "LOA",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=loa",
      },
      {
        label: "Diarias",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=diarias",
      },
      {
        label: "Passagens",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=passagens",
      },
      {
        label: "Estrutura Organizacional",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=estrutura",
      },
      {
        label: "Relatorio De Gestao",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=contaspublicas",
      },
      {
        label: "Prestacao de Contas",
        value:
          "http://www.maribondo.al.gov.br/online/transparencia/index.php?index=prestacaoconta",
      },
    ];

    $("#searchInput").autocomplete({
      source: availableTags,
      select: function (event, ui) {
        $("#searchInput").val(ui.item.label);

        window.location.href = ui.item.value;

        event.preventDefault();
      },
      autoFocus: true,
    });
  });
});

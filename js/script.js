// Página de agendamento - Cadastro
const setActive = (el, active) => {
    const formField = el.parentNode.parentNode;
    if (active) {
      formField.classList.add("form-field--is-active");
    } else {
      formField.classList.remove("form-field--is-active");
      el.value === ""
        ? formField.classList.remove("form-field--is-filled")
        : formField.classList.add("form-field--is-filled");
    }
  };
  
  [].forEach.call(
    document.querySelectorAll(".form-field__input, .form-field__textarea"),
    (el) => {
      el.onblur = () => {
        setActive(el, false);
      };
      el.onfocus = () => {
        setActive(el, true);
      };
    }
  );

// Pagina de Contato - Mapa
function initMap() {
  // The location of Uluru
  const uluru = { lat: -22.825293308582246, lng: -43.34719376562585 }; 
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

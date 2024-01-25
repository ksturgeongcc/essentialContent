const hide__show = () => {
    let mapElement = document.getElementById('map__hidden');
    if (mapElement.style.display === "none") {
        mapElement.style.display = "flex";
    } else {
        mapElement.style.display = "none";
    }
  }
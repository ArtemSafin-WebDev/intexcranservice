document.addEventListener("DOMContentLoaded", () => {
  ymaps.ready(initMap);

  function initMap() {
    const elements = Array.from(document.querySelectorAll(".js-map"));

    elements.forEach(async (element) => {
      const mapElement = element.querySelector(".contacts__map-element");

      const center = [55.796554, 49.104752];

      const mapInstance = new ymaps.Map(mapElement, {
        center: center,
        zoom: 10,
        controls: [],
      });
      mapInstance.behaviors.disable("scrollZoom");

      const zoomControl = new ymaps.control.ZoomControl({
        options: {
          size: "small",
          position: {
            right: 20,
            bottom: 60,
          },
        },
      });

      mapInstance.controls.add(zoomControl);

      const objectManager = new ymaps.ObjectManager({
        clusterize: false,
        clusterHasBalloon: false,
        geoObjectOpenBalloonOnClick: true,
      });

      mapInstance.geoObjects.add(objectManager);

      const tabs = Array.from(
        element.querySelectorAll(".contacts__map-offices-tabs-item")
      );

      const addresses = Array.from(
        element.querySelectorAll(".contacts__map-offices-addresses-link")
      );

      const pinUrl = element.getAttribute("data-pin-url");

      const pin = {
        iconLayout: "default#image",
        iconImageHref: pinUrl,
        iconImageSize: [48, 48],
        iconImageOffset: [-24, -24],
      };

      if (!tabs.length) return;

      function setActiveCity(tab) {
        objectManager.removeAll();
        const items = Array.from(
          tab?.querySelectorAll(".contacts__map-offices-addresses-link")
        )
          ?.map((item) => item.getAttribute("data-coords"))
          ?.map((coords) => {
            const [lat, lng] = coords.split(",");
            return [Number(lat), Number(lng)];
          });

        if (!items?.length) return;
        console.log("Current items", items);

        items.forEach((item) => {
          const objectToAdd = {
            id: item.join("-"),
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: item,
            },
            options: {
              ...pin,
            },
          };
          objectManager.add(objectToAdd);
        });

        console.log("Bounds", objectManager.getBounds());

        mapInstance.setBounds(objectManager.getBounds(), {
          duration: 600,
          zoomMargin: 2,
          checkZoomRange: true,
        });
      }

      setActiveCity(tabs[0]);

      document.addEventListener("tabchange", (event) => {
        const {
          detail: { tab },
        } = event;

        setActiveCity(tab);
      });

      addresses.forEach((address) =>
        address.addEventListener("click", (event) => {
          event.preventDefault();
          const [lat, lng] = address.getAttribute("data-coords").split(",");
          mapInstance.setCenter([lat, lng], 19, {
            duration: 300,
          });
        })
      );
    });
  }
});

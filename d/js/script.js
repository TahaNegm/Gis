

require(["esri/config", "esri/Map", "esri/views/MapView","esri/WebMap","esri/widgets/Legend","esri/widgets/Search","esri/layers/FeatureLayer","esri/PopupTemplate","esri/widgets/BasemapGallery"], function (esriConfig, Map, MapView, WebMap, Legend, Search, FeatureLayer, PopupTemplate ,BasemapGallery) {

    esriConfig.apiKey = "AAPKa040f34aef5c443bb6c3822f9eaed1f1tFj3CqX-6la2ZTevLK83UHmYHF1k0HvQ3t0yzdINzBBxmJqivJa-koG0Qx8A3A1H";

    const view = new MapView({
        container: "viewDiv", // Div element
        center: [31.23, 30.04], // Longitude, latitude
        zoom: 14, // Zoom level
        map: new WebMap({
            portalItem: {
                id: "3efe1042196942c49db9f1a9aa7f8865"
            }
        })
    });

    const legendWidget = new Legend({
        view: view,
    });
    view.ui.add(legendWidget, 'bottom-left');

    view.popup = null; // يجب وضع هذا بعد تعريف view

    const searchWidget = new Search({
        view: view
    });
    // Adds the search widget below other elements in
    // the top left corner of the view
    view.ui.add(searchWidget, {
        position: "top-right",
        index: 2
    });

    const popupTemplate = new PopupTemplate({
        // define your popup template properties here
    });

    const featureLayer = new FeatureLayer({
        // define your feature layer properties here
        popupTemplate: popupTemplate
    });
    const basemapGalleryWidget = new BasemapGallery({
        view: view
    });
    view.ui.add(basemapGalleryWidget, {
        position: "top-right",
        index: 2
    });
    

});




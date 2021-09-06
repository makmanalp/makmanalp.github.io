var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_ThomasLoganSurvey1813_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thomas Logan Survey (1813)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThomasLoganSurvey1813_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-829817.107494, 6991545.763471, -824465.863715, 6996378.939264]
                            })
                        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ThomasLoganSurvey1813_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ThomasLoganSurvey1813_1];

var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoVITrechoaSudestedareaB_1 = new ol.format.GeoJSON();
var features_AnexoVITrechoaSudestedareaB_1 = format_AnexoVITrechoaSudestedareaB_1.readFeatures(json_AnexoVITrechoaSudestedareaB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVITrechoaSudestedareaB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVITrechoaSudestedareaB_1.addFeatures(features_AnexoVITrechoaSudestedareaB_1);
var lyr_AnexoVITrechoaSudestedareaB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVITrechoaSudestedareaB_1, 
                style: style_AnexoVITrechoaSudestedareaB_1,
                popuplayertitle: "Anexo VI - Trecho a Sudeste da Área B",
                interactive: true,
                title: '<img src="styles/legend/AnexoVITrechoaSudestedareaB_1.png" /> Anexo VI - Trecho a Sudeste da Área B'
            });
var format_AnexoVLote08Estacionamento_2 = new ol.format.GeoJSON();
var features_AnexoVLote08Estacionamento_2 = format_AnexoVLote08Estacionamento_2.readFeatures(json_AnexoVLote08Estacionamento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVLote08Estacionamento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVLote08Estacionamento_2.addFeatures(features_AnexoVLote08Estacionamento_2);
var lyr_AnexoVLote08Estacionamento_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVLote08Estacionamento_2, 
                style: style_AnexoVLote08Estacionamento_2,
                popuplayertitle: "Anexo V - Lote 08 (Estacionamento)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVLote08Estacionamento_2.png" /> Anexo V - Lote 08 (Estacionamento)'
            });
var format_AnexoIVLote03_3 = new ol.format.GeoJSON();
var features_AnexoIVLote03_3 = format_AnexoIVLote03_3.readFeatures(json_AnexoIVLote03_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVLote03_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVLote03_3.addFeatures(features_AnexoIVLote03_3);
var lyr_AnexoIVLote03_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVLote03_3, 
                style: style_AnexoIVLote03_3,
                popuplayertitle: "Anexo IV - Lote 03",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVLote03_3.png" /> Anexo IV - Lote 03'
            });
var format_AnexoIIILote02_4 = new ol.format.GeoJSON();
var features_AnexoIIILote02_4 = format_AnexoIIILote02_4.readFeatures(json_AnexoIIILote02_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIILote02_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIILote02_4.addFeatures(features_AnexoIIILote02_4);
var lyr_AnexoIIILote02_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIILote02_4, 
                style: style_AnexoIIILote02_4,
                popuplayertitle: "Anexo III - Lote 02",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIILote02_4.png" /> Anexo III - Lote 02'
            });
var format_AnexoIILote01_5 = new ol.format.GeoJSON();
var features_AnexoIILote01_5 = format_AnexoIILote01_5.readFeatures(json_AnexoIILote01_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIILote01_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIILote01_5.addFeatures(features_AnexoIILote01_5);
var lyr_AnexoIILote01_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIILote01_5, 
                style: style_AnexoIILote01_5,
                popuplayertitle: "Anexo II - Lote 01",
                interactive: true,
                title: '<img src="styles/legend/AnexoIILote01_5.png" /> Anexo II - Lote 01'
            });
var format_AnexoIPogonoPrincipal_6 = new ol.format.GeoJSON();
var features_AnexoIPogonoPrincipal_6 = format_AnexoIPogonoPrincipal_6.readFeatures(json_AnexoIPogonoPrincipal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIPogonoPrincipal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPogonoPrincipal_6.addFeatures(features_AnexoIPogonoPrincipal_6);
var lyr_AnexoIPogonoPrincipal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPogonoPrincipal_6, 
                style: style_AnexoIPogonoPrincipal_6,
                popuplayertitle: "Anexo I - Poígono Principal",
                interactive: true,
                title: '<img src="styles/legend/AnexoIPogonoPrincipal_6.png" /> Anexo I - Poígono Principal'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoVITrechoaSudestedareaB_1.setVisible(true);lyr_AnexoVLote08Estacionamento_2.setVisible(true);lyr_AnexoIVLote03_3.setVisible(true);lyr_AnexoIIILote02_4.setVisible(true);lyr_AnexoIILote01_5.setVisible(true);lyr_AnexoIPogonoPrincipal_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoVITrechoaSudestedareaB_1,lyr_AnexoVLote08Estacionamento_2,lyr_AnexoIVLote03_3,lyr_AnexoIIILote02_4,lyr_AnexoIILote01_5,lyr_AnexoIPogonoPrincipal_6];
lyr_AnexoVITrechoaSudestedareaB_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVLote08Estacionamento_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVLote03_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIILote02_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIILote01_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPogonoPrincipal_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVITrechoaSudestedareaB_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVLote08Estacionamento_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVLote03_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIILote02_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIILote01_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPogonoPrincipal_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVITrechoaSudestedareaB_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVLote08Estacionamento_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVLote03_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIILote02_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIILote01_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPogonoPrincipal_6.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPogonoPrincipal_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
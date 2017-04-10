
import * as ol from 'openlayers'


//////////////////////////////  STYLES  //////////////////////////////



const styleFunctionAsset = function(feature) {
	let color = feature.get('_color');
	// if(color===undefined || color===null){
		color= [63, 229, 244, 0.9];
	// }
	return new ol.style.Style({
		stroke: new ol.style.Stroke({
			//rgba
			// color: [0xdd, 0x44, 0, 0.5],
			color: color,
			width: 4
		}),
		
		fill: new ol.style.Fill({
			// color: 'rgba(255, 63, 0, 0.1)'
			color: 'rgba(200, 229, 244, 0.5)'
		}),
		zIndex: 1
	})
};
const styleFunctionNode = function(feature, resolution) {
	
	/*new ol.style.Style({
	 image: new ol.style.Icon({
	 anchor: [0.5, 1],
	 src: 'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
	 })
	 })*/
	const fill =  new ol.style.Fill({color: 'rgba(8, 73, 79, 0.2)'});
	const stroke= new ol.style.Stroke({color: [8, 73, 79], width: 2});
	if(resolution<0.6)
		return	new ol.style.Style({
			stroke: stroke,
			image: new ol.style.Circle({
				// radius: 15/resolution*0.3,
				radius: 15,
				snapToPixel: false,
				fill: fill,
				stroke: stroke
			}),
			zIndex: 2
		});
	else if(resolution<2 || 1) {
		return new ol.style.Style({
			image: new ol.style.Circle({
				radius: 6,
				snapToPixel: false,
				fill: fill,
				stroke: stroke
			}),
			zIndex: 2
		})
	}
	return ;
};

const styleFunctionEdge = function(feature) {
	var geometry = feature.getGeometry();
	var styles = [
		// linestring
		new ol.style.Style({
			stroke: new ol.style.Stroke({
				color: '#ffcc33',
				width: 2
			}),
			zIndex: 3
		})
	];
	
	geometry.forEachSegment(function(start, end) {
		var dx = end[0] - start[0];
		var dy = end[1] - start[1];
		var rotation = Math.atan2(dy, dx);
		// arrows
		styles.push(new ol.style.Style({
			geometry: new ol.geom.Point(end),
			image: new ol.style.Icon({
				src: 'https://openlayers.org/en/v4.0.1/examples/data/arrow.png',
				anchor: [0.75, 0.5],
				rotateWithView: true,
				rotation: -rotation
			})
		}));
	});
	
	return styles;
};


//////////////////////////////  STYLES  //////////////////////////////








var fill = new ol.style.Fill({
	color: 'rgba(255,255,255,0.4)'
});
var stroke = new ol.style.Stroke({
	color: '#3399CC',
	width: 1.25
});
var styles = [
	new ol.style.Style({
		image: new ol.style.Circle({
			fill: fill,
			stroke: stroke,
			radius: 5
		}),
		fill: fill,
		stroke: stroke
	})
];

var white = [255, 255, 255, 1];
var blue = [0, 153, 255, 1];
var width = 3;

/*styles[ol.geom.GeometryType.POLYGON] = [
 new ol.style.Style({
 fill: new ol.style.Fill({
 color: [255, 255, 255, 0.5]
 })
 })
 ];
 styles[ol.geom.GeometryType.MULTI_POLYGON] =
 styles[ol.geom.GeometryType.POLYGON];
 styles[ol.geom.GeometryType.LINE_STRING] = [
 new ol.style.Style({
 stroke: new ol.style.Stroke({
 color: white,
 width: width + 2
 })
 }),
 new ol.style.Style({
 stroke: new ol.style.Stroke({
 color: blue,
 width: width
 })
 })
 ];
 styles[ol.geom.GeometryType.MULTI_LINE_STRING] =
 styles[ol.geom.GeometryType.LINE_STRING];*/
styles['POINT'] = [
	new ol.style.Style({
		image: new ol.style.Circle({
			radius: width * 2,
			fill: new ol.style.Fill({
				color: blue
			}),
			stroke: new ol.style.Stroke({
				color: white,
				width: width / 2
			})
		}),
		zIndex: Infinity
	})
];/*
 styles[ol.geom.GeometryType.MULTI_POINT] =
 styles[ol.geom.GeometryType.POINT];
 styles[ol.geom.GeometryType.GEOMETRY_COLLECTION] =
 styles[ol.geom.GeometryType.POLYGON].concat(
 styles[ol.geom.GeometryType.POINT]
 );
 */






















export {styleFunctionAsset, styleFunctionEdge, styleFunctionNode};
export {styles};
/* eslint-disable */


//size problem

import * as ol from 'openlayers'
import React, { Component } from 'react'
// import React, { Component, PropTypes } from 'react'

import { MessageWrapper } from './messageWrapper'
import { ButtonWrapper } from './buttonWrapper'
import { PolygonOperationWrapper } from './polygonOperationWrapper'

import * as interactions from './mapInteractions'
import * as styles from './featureStyles'

import { ConcretePolygonFactory } from '../../../DeGeOP/store/polygon/concretePolygonFactory';
import { Coordinate } from '../../../DeGeOP/store/polygon/coordinate';

/*
 getViewport()
 forEachFeatureAtPixel
 */



/**
 * @author Leonardo Brutesco
 * @description componente contenente la mappa di openlayers, controlli, buttonWrapper, msgWrapper e polyWrapper
 */
class MapWrapper extends React.Component {
	// 19 campi dati
	constructor(props) {
		super(props);
		this.handleChange = props.handleChange;
		this.changeSidebarType = props.changeSidebarType;
		// this.setDefaultState({...props, cose:null})
		this.state = {
			msg: '',
			editing: false,
			fitFeature: props.fitFeature,
			sidebarType: props.sidebarType,
			showAddButton: true,
			assets : null,
			nodes: null,
			edges: null,
		};
		this.requestUpdate = false;
		
		this.setupVecsAndLayers();
		this.buildMap();
		this.bindThings();
		this.setupInteractions();
		
		// undo last point in adding asset
		// da togliere
		setTimeout( ()=>{ this.changeSidebarType('DEFAULT');	}, 500);
		setTimeout( ()=>{this.updateLayers();}, 500 );
		// setTimeout( ()=>{this.selectedFeature = undefined;}, 500 );
		
		// this.redrawAssetInt = new interactions.DrawAsset({
		// 	tmpVec: this.tmpVec,
		// 	addAsset: this.giveAssetCoordinates,
		// });
		// this.map.addInteraction(this.addAssetInt);
		
		
		this.inactivateInteractions();
		this.selectAneInt.setActive(true);
		
		setTimeout(()=>{ this.fitViewToAllAssets(); }, 500 );
		
	}
	/**
	 * @return {void} crea le risorse vettori e i layers per la mappa
	 */
	setupVecsAndLayers() {
		const wrapX = false;
		this.AssetsVec = new ol.source.Vector({WrapX: wrapX});
		this.NodesVec = new ol.source.Vector({WrapX: wrapX});
		this.EdgesVec = new ol.source.Vector({WrapX: wrapX});
		this.tmpVec = new ol.source.Vector({WrapX: wrapX});
		
		this.osmLayer =new ol.layer.Tile({
			source: new ol.source.OSM({
				attribution: ol.source.OSM.ATTRIBUTION,
				wrapX: false,
			})
		});
		this.AssetsLayer = new ol.layer.Vector({
			source: this.AssetsVec,
			style: styles.styleFunctionAsset,
		});
		this.NodesLayer = new ol.layer.Vector({
			source: this.NodesVec,
			style: styles.styleFunctionNode,
		});
		this.EdgesLayer = new ol.layer.Vector({
			source: this.EdgesVec,
			style: styles.styleFunctionEdge,
		});
		this.DrawLayer = new ol.layer.Vector({
			source: this.tmpVec, //cose to draw
			// style: styleFunctionDraw,
		});
	}
	
	/**
	 * @description  cose cose csjoajaogjisgo aaaaaaaaaaa
	 * @return {void} costruisce la mappa
	 */
	buildMap(){
		this.view = new ol.View({
			center: MapWrapper.lonlat2proj([12.123468, 45.432933]),
			center:	[559444.98742898,
				3896182.1777645755],
			enableRotation: false,
			// extent: undefined,//[1, 2, 3, 4,],
			maxZoom: 21,
			minZoom: 2,
			zoom: 19.55,
			zoom: 3
		});
		this.map = new ol.Map({
			target: '',
			layers: [
				this.osmLayer,
				this.AssetsLayer,
				this.NodesLayer,
				this.EdgesLayer,
				this.DrawLayer,
			],
			view: this.view,
			controls: ol.control.defaults({
				attribution: false,
				attributionOptions: {	collapsible: true,	}
			})
		});
		this.map.addControl(new ol.control.ZoomSlider());
		// da togliere
		// this.map.addControl(new ol.control.MousePosition({projection: 'EPSG:4326'}));
		//map.setSize([400, 300])
	}
	
	/**
	 * @return {void} crea le risorse vettori e i layers per la mappa
	 */
	setupInteractions(){
		this.selectAneInt = new interactions.SelectAne({
			selectFeat: this.changeSidebarSelect
		});
		this.map.addInteraction(this.selectAneInt);
		
		this.addAssetInt = new interactions.DrawAsset({
			tmpVec: this.tmpVec,
			addAsset: this.giveAssetCoordinates,
		});
		this.map.addInteraction(this.addAssetInt);
		
		this.addNodeInt = new interactions.AddNode({
			tmpVec: this.tmpVec,
			assetsFeats: this.AssetsVec,
			addNode: this.giveNodeCoordinates,
		});
		this.map.addInteraction(this.addNodeInt);
		
		this.addEdgeInt = new interactions.AddEdge({
			NodesLayer: this.NodesLayer,
			addEdge: this.giveEdgeNodes,
		});
		this.map.addInteraction(this.addEdgeInt);
		
		this.moveNodeInt = new interactions.MoveNode({
			features: this.selectAneInt.getFeatures(),
			updateNodeCoords: this.updateNodeCoordinates,
		});
		this.map.addInteraction(this.moveNodeInt);
	}
	componentDidMount(){
		this.map.setTarget(this.mapDiv);
	}
	componentWillUnmount(){
		this.map.setTarget(undefined);
	}
	
	
	
	
	giveNodeCoordinates(coord){
		// console.log('giving node to ', ' at ', coord);
		const c=MapWrapper.proj2lonlat(coord);
		this.requestUpdate = true;
		this.handleChange('node', 'coordinates', new Coordinate({x:c[0], y:c[1]}));
		// this.updateLayers();
	}
	giveEdgeNodes(feat1, feat2){
		// console.log('giving edge to ', feat1, ' and ', feat2);
		// const node1=feat1.get('_node');
		// const node2=feat2.get('_node');
		const uuid1=feat1.get('_uuid');
		const uuid2=feat2.get('_uuid');
		// console.log('give edge ... ', node1, node2)
		
		this.requestUpdate = true;
		this.handleChange('edge', 'nodeStart', uuid1);
		this.handleChange('edge', 'nodeEnd', uuid2);
		// this.updateLayers();
	}
	giveAssetCoordinates(coords) {
		// console.log('giving asset at ', coords);
		const c=coords[0].map(MapWrapper.proj2lonlat);
		this.requestUpdate = true;
		this.handleChange('asset', 'coordinates', c);
		// this.updateLayers();
	}
	
	updateNodeCoordinates(start, end, feat){
		this.deltaCoord = (start, end) =>{
			const delta=[	end[0]-start[0],
				end[1]-start[1],	];
			return delta;
		}
		// const d=this.deltaCoord(proj2lonlat(start), proj2lonlat(end));
		feat.get('_node').coordinates=MapWrapper.proj2lonlat(end);
		this.giveNodeCoordinates(end);
	}
	
	updateLayers(what='assets'){
		this.tmpVec.clear();
		const { store } = this.context;
		const state = store.getState();
		this.loadAssets(this.AssetsVec, state.assets);
		this.loadNodes(this.NodesVec, state.nodes);
		this.loadEdges(this.EdgesVec, state.edges, state.nodes);
		// setTimeout(()=>{this.updateLayers()}, 1000)
	}
	loadAssets(vec, assets){
		vec.clear();
		const feats=assets.map((el)=>{
			const coords=el.polygon.coordinates.map((el)=>{return MapWrapper.lonlat2proj([el.x, el.y])});
			const feat=new ol.Feature(new ol.geom.Polygon([ coords ]));
			feat.set('_type', 'asset');
			feat.set('_uuid', el.uuid);
			feat.set('_color', el.color);
			return feat;
		});
		vec.addFeatures(feats)
	}
	loadNodes(vec, nodes){
		vec.clear();
		const feats = nodes.map((el) => {
			const feat = new ol.Feature(
				new ol.geom.Point(MapWrapper.lonlat2proj([el.coordinates.x, el.coordinates.y]))
			);
			feat.set('_type', 'node');
			feat.set('_uuid', el.uuid);
			return feat;
		});
		vec.addFeatures(feats);
	}
	/**
	 * @param {Array} coord1
	 * @param {Array} coord2
	 * @param {float} percent
	 * @description  costruisce una linea
	 * @return {Array} restituisce un array di coordinate
	 */
	static newSemiLine(coord1, coord2, percent){
		const c1 = coord1;
		const c2 = coord2;
		const dx2 = ((c2[0] - c1[0]) / 2);
		const dy2 = ((c2[1] - c1[1]) / 2);
		const cx = c1[0] + dx2;
		const cy = c1[1] + dy2;
		const diff = [dx2 * percent, dy2 * percent];
		const start = [cx - diff[0], cy - diff[1]];
		const end = [cx + diff[0], cy + diff[1]];
		return [start, end];
	}
	/**
	 * @param {Array} vec vettore da riempire degli edges
	 * @param {Array} edges store degli edges
	 * @param {float} nodes store dei nodes
	 * @description  costruisce una linea
	 * @return {void}
	 */
	loadEdges(vec, edges, nodes) {
		vec.clear();
		const feats = edges.map((el) => {
			let n1 = nodes.find((n) => {
				if (n.uuid === el.nodeStart)	return true;
			});
			let n2 = nodes.find((n) => {
				if (n.uuid === el.nodeEnd)	return true;
			});
			const feat = new ol.Feature(
				new ol.geom.LineString(MapWrapper.newSemiLine(
					MapWrapper.lonlat2proj([n1.coordinates.x, n1.coordinates.y]),
					MapWrapper.lonlat2proj([n2.coordinates.x, n2.coordinates.y]),
					47/50))
			);
			feat.set('_type', 'edge');
			feat.set('_uuid', el.uuid);
			return feat;
		});
		vec.addFeatures(feats);
	}
	
	
	// moveAsset(uuid, coords){
	// 	const addVec = (oldV, newV) => {
	// 		return [oldV[0] + newV[0],oldV[1] + newV[1]]
	// 	};
	// 	let as=null;
	// 	assets.some((a)=>{if(a.uuid===uuid){as=a;return true;}});
	// 	this.editAsset(uuid, addVec(as.ccordinates, coords));
	// }
	
	
	
	changeSidebarSelect(feat){	//el : feature
		let str="DEFAULT";
		this.selectedFeature=feat;
		if(feat!==null && feat!==undefined) {
			const t=feat.get('_type');
			const u=feat.get('_uuid');
			str = 'VIEW_' + (t.toUpperCase());
			console.log('select:',t, u);
			this.handleChange(t, 'uuid', u);
		}
		this.changeSidebarType(str);
	}
	componentWillReceiveProps(props){
		const {store} = this.context;
		
		if(props.fitFeature!==this.state.fitFeature ){	// check conn state
			if(this.selectedFeature!==undefined)
				this.fitViewToFeature(this.selectedFeature);
		}
		// (VIEW|EDIT|INSERT)_(ASSET|NODE|EDGE)
		if(props.sidebarType!==this.state.sidebarType){
			console.log('sidebar: ', props.sidebarType);
			this.inactivateInteractions();
			const reVIEW =new RegExp('VIEW');
			const reEDIT=new RegExp('VIEW');
			if((reVIEW).test(props.sidebarType)>=1){
				this.selectAneInt.setActive(true);
				this.showAddButton(false);
			}
			this.updateLayers();
			switch (props.sidebarType){
				case 'DEFAULT':
					this.selectAneInt.setActive(true);
					this.selectAneInt.getFeatures().clear();
					if(this.requestUpdate === true) {
						this.updateLayers();
						this.requestUpdate = false;
					}
					this.showAddButton(true);
					break;
				case 'EDIT_ASSET':
					break;
				case 'EDIT_NODE':
					this.moveNodeInt.setActive(true);
					break;
				case 'EDIT_EDGE':
					break;
				case 'INSERT_ASSET':
					console.log('ASSEEEEEEEEEEEEEEEEET')
					this.addAssetInt.setActive(true);
					this.showAddButton(false);
					break;
				case 'INSERT_NODE':
					console.log('NODOOOOOOOOOOOOOOOOOO')
					this.addNodeInt.setActive(true);
					this.showAddButton(false);
					break;
				case 'INSERT_EDGE':
					this.addEdgeInt.setActive(true);
					this.showAddButton(false);
					break;
				default:	break;
			}
			this.setState({sidebarType:props.sidebarType});
		}
	}
	inactivateInteractions(deactivateSelect=true) {
		if (deactivateSelect === true){
			// this.selectedFeature = undefined;
			this.selectAneInt.setActive(false);
		}
		this.addAssetInt.setActive(false);
		this.addNodeInt.setActive(false);
		this.addEdgeInt.setActive(false);
		this.moveNodeInt.setActive(false);
	}
	set selectedFeature(sf){
		// console.log('setter:', sf);
		this._selectedFeature  = sf;
	}
	get selectedFeature(){
		// console.log(this._selectedFeature);
		return this._selectedFeature;
	}
	
	render() {
		return <div id="MapWrapper" className="openlayers-map" ref={(el) => this.mapDiv = el}>
			<MessageWrapper msg={this.state.msg} />
			<ButtonWrapper addAsset={() => {this.startAddAsset()} }
						   addNode={() => {this.startAddNode()} }
						   addEdge={() => {this.startAddEdge()} }
						   showAddButton={this.state.showAddButton}
			/>
			<PolygonOperationWrapper />
			
		</div>;
	}
// <div style={{float: 'left', padding: '2px', background: 'lightgreen', display:'none'}}>
// <a href="#" onClick={ () => {this.fitViewToAllAssets()} }>FitAll</a><br/>
// <a href="#" onClick={ () => {this.editAn()			} }>Edit</a><br/>
// <a href="#" onClick={ () => {this.fitViewToFeature(this.selectedFeature);	} }>Fit</a>
// </div>
	/*{this.props.children}*/

//////////////////////////////  ¿DONE?  //////////////////////////////
	
	/**
	 * @return {void} binda i metodi che verranno passati come props ai figli
	 */
	bindThings(){
		this.changeSidebarSelect= this.changeSidebarSelect.bind(this);
		this.giveAssetCoordinates= this.giveAssetCoordinates.bind(this);
		this.giveNodeCoordinates = this.giveNodeCoordinates.bind(this);
		this.giveEdgeNodes = this.giveEdgeNodes.bind(this);
		this.updateNodeCoordinates = this.updateNodeCoordinates.bind(this);
	}
	
	startAddAsset(){
		console.log('start add asset');
		this.changeSidebarType('INSERT_ASSET');
	}
	startAddNode(){
		console.log('start add node');
		this.changeSidebarType('INSERT_NODE');
	}
	startAddEdge(){
		console.log('start add edge');
		this.changeSidebarType('INSERT_EDGE');
	}
	showAddButton(show){
		if(this.state.showAddButton===show)
			return;
		this.setState({showAddButton: show})
	}
	/**
	 * @param {number} animDuration durata dell'animazione
	 * @return {tipo_ritorno_metodo} descrizione_e_POST-condizione
	 */
	fitViewToAllAssets(animDuration=3000) {
		const assets=this.AssetsVec.getFeatures();
		if(assets.length>0) {
			let ext=ol.extent.createEmpty();
			assets.forEach((a)=>{
				ext=ol.extent.extend(ext, a.getGeometry().getExtent())
			});
			this.view.fit(ext, {duration: animDuration})
		}
	}
	
	/**
	 * @param {ol.feat.Feature} animDuration durata dell'animazione
	 * @param {number} animDuration durata dell'animazione
	 * @return {tipo_ritorno_metodo} descrizione_e_POST-condizione
	 */
	fitViewToFeature(feat, animDuration=3000) {
		const ext=feat.getGeometry().getExtent();
		this.view.fit(ext, {duration: animDuration})
	}
	
	static lonlat2proj(coord){    //
		return ol.proj.transform(coord, 'EPSG:4326', 'EPSG:3857');
	}
	static proj2lonlat(coord){
		return ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
	}
	
}

export { MapWrapper };

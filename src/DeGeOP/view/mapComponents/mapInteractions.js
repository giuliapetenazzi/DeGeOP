/* eslint-disable */

import * as ol from 'openlayers'

import styles from './featureStyles'



class SelectAne extends ol.interaction.Select{
	constructor(params){
		super({	//una sola feature alla volta
			toggleCondition: ol.events.condition.never
		});
		this.selectFeat= params.selectFeat;
		this.setActive(false);
		this.onFeatureSelect=this.onFeatureSelect.bind(this);
		this.on('select', this.onFeatureSelect)
	}
	onFeatureSelect(ev){
		// console.log('__', this.getFeatures().getLength())
		if(this.getFeatures().getLength()>=1) {
			const feat = this.getFeatures().item(0);
			this.selectFeat(feat);
		}else{
			this.selectFeat(undefined);
		}
	}
	setActive(active){
		if(active===false){
			// this.getFeatures().clear();
			// cursor:'pointer';
		}else{
			// cursor:'crosshair';
		}
		super.setActive(active);
	}
}


class DrawAsset extends ol.interaction.Draw {
	constructor(params) {	/** controlla interazione coi bordi dell'asset */
		super({
			type: 'Polygon',
			freehandCondition: ol.events.condition.never,
			source: params.tmpVec,
		});
		this.tmpVec=params.tmpVec;
		this.addAsset = params.addAsset;
		this.setActive(false);
		this.onAddFeature=this.onAddFeature.bind(this);
		this.evKey=null;
	}
	setActive(active) {
		if (active === true){
			console.log('name: ', 'asset');
			this.evKey=this.tmpVec.on('addfeature', this.onAddFeature);
		}else{
			if(this.evKey!==null && this.evKey!==undefined){
				ol.Observable.unByKey(this.evKey);
			}
			this.evKey=null;
		}
		super.setActive(active);
	}
	onAddFeature(ev){
		console.log('AddAssetInteraction once');
		if (this.tmpVec.getFeatures().length >= 1 && true) {
			const feat = this.tmpVec.getFeatures()[this.tmpVec.getFeatures().length-1];
			while(this.tmpVec.getFeatures().length>1){
				this.tmpVec.removeFeature(this.tmpVec.getFeatures()[0]);
			}
			this.addAsset(feat.getGeometry().getCoordinates());
			this.added = true;
			
		}
	}
	
}



class AddNode extends ol.interaction.Draw {
	constructor(params) {	/** controlla interazione coi bordi dell'asset */
		super({
			type: 'Point',
			source: params.tmpVec,
			freehandCondition: ol.events.condition.never,
		});
		this.tmpVec=params.tmpVec;
		this.assetsFeats=params.assetsFeats;
		this.addNode=params.addNode;
		this.setActive(false);
		this.onAddFeature=this.onAddFeature.bind(this);
		this.evKey=null;
		this.added=false;
	}
	setActive(active) {
		if (active === true){
			console.log('name: ', 'nodo');
			this.activateEvt();
		}else{
			this.deactivateEvt();
			this.added=false;
		}
		super.setActive(active);
	}
	activateEvt(){
		this.evKey=this.tmpVec.on('addfeature', this.onAddFeature)
	}
	deactivateEvt(){
		if(this.evKey!==null && this.evKey!==undefined){
			ol.Observable.unByKey(this.evKey);
		}
		this.evKey=null;
	}
	onAddFeature(ev){
		console.log('AddNodeInteraction once');
		const tmpFeat = this.tmpVec.getFeatures();
		if (this.tmpVec.getFeatures().length >= 1 && true) {
			const feat = this.tmpVec.getFeatures()[this.tmpVec.getFeatures().length-1];
			while(this.tmpVec.getFeatures().length>1){
				this.tmpVec.removeFeature(this.tmpVec.getFeatures()[0]);
			}
			const coord = feat.getGeometry().getCoordinates();
			const ext = feat.getGeometry().getExtent();
			const inAsset = this.assetsFeats.getFeatures().some((el) => {
				if (el.getGeometry().intersectsExtent(ext)) {
					return true;
				}
			});
			if (inAsset === true) {
				this.addNode(coord);
				this.added = true;
			} else {
				this.tmpVec.removeFeature(this.tmpVec.getFeatures()[0]);
				this.tmpVec.clear();
			}
		}
	}
}
// d.on('drawstart', (e)=> {
// 	tmpVec.on('change', (e) => {
// 		console.log('c' + tmpVec.getFeatures().length)
// 	})
// })
// d.on('drawend', (e)=>{ })


class AddEdge extends ol.interaction.Select{
	constructor(params){
		super({
			addCondition: ol.events.condition.singleClick,
			removeCondition: ol.events.condition.singleClick,
			layers:[params.NodesLayer],
			hitTolerance: 24,
		});
		// this.assetsFeats= params.AssetsVec;
		this.addEdge= params.addEdge;
		super.setActive(false);
		this.onSelect=this.onSelect.bind(this);
		this.checkFeaturesNum=this.checkFeaturesNum.bind(this);
		this.on('select', this.onSelect);
		this.getFeatures().on('add', this.checkFeaturesNum);
	}
	checkFeaturesNum(ev){
		const f=this.getFeatures();
		while(f.getLength()>2){
			f.pop();
		}
	}
	onSelect(ev){
		if(this.getFeatures().getLength()>=2) {
			const feat1=this.getFeatures().item(0);
			const feat2=this.getFeatures().item(1);
			this.addEdge(feat1, feat2);
			// this.setActive(false);
			// this.getFeatures().clear();
		}
	}
}























class MoveNode extends ol.interaction.Translate{
	constructor(params){
		super({
			features: params.features
		});
		this.features = params.features;
		// this.updateAsset = params.updateAsset;
		// this.updateNode = params.updateNode;
		this.updateNodeCoords = params.updateNodeCoords;
		// this.proj2lonlat = params.proj2lonlat;
		// this.load = params.load;
		//hide oth layers
		this.startCoord=null;
		this.endCoord=null;
		this.setActive(false);
		
		this.onTranslateEnd=this.onTranslateEnd.bind(this)
		this.onTranslateStart=this.onTranslateStart.bind(this)
		this.on('translatestart', this.onTranslateStart);
		this.on('translateend', this.onTranslateEnd)
	}
	onTranslateStart(ev){
		this.startCoord=(ev.coordinate);
	}
	onTranslateEnd(ev){
		this.endCoord=(ev.coordinate);
		const feat=this.features.item(0);
		this.updateNodeCoords(this.startCoord, this.endCoord, feat);
		//show oth layers
		// load
		this.features.clear();
	}
}



export { DrawAsset, AddNode, AddEdge };
export { SelectAne, MoveNode };

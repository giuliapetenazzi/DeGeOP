//importazione librerie
import React from 'react'
import ReactDOM from 'react-dom'
//import ./DeGeOP/action/actionCreators/analysisActionCreator

//importazione codice prodotto da Zephyrus
import { MapWrapper } from '../mapComponents/mapWrapper'
import { InsertAssetSidebar } from '../sidebar/insertAssetSidebar'
import { ViewAssetSidebar } from '../sidebar/viewAssetSidebar'
import { InsertNodeSidebar } from '../sidebar/insertNodeSidebar'
import { ViewNodeSidebar } from '../sidebar/viewNodeSidebar'
import { InsertEdgeSidebar } from '../sidebar/insertEdgeSidebar'
import { ViewEdgeSidebar } from '../sidebar/viewEdgeSidebar'
import { HomeSidebar } from '../sidebar/homeSidebar'
import { Asset } from '../../store/process/asset'
import { Node } from '../../store/process/node'
import { MachineNode } from '../../store/process/machineNode'
import { QueueNode } from '../../store/process/queueNode'
import { SourceNode } from '../../store/process/sourceNode'
import { AssetActionCreator } from  '../../action/actionCreators/assetActionCreator'
import { NodeActionCreator } from  '../../action/actionCreators/nodeActionCreator'
import Dialog from 'react-toolbox/lib/dialog';

/*
Autori: Giulia Petenazzi e Jordan Gottardo
Data di creazione: 8 marzo 2017
*/


class DeGeOPView extends React.Component {	
//##############################################################################
//Costruttore
//##############################################################################
    constructor(props){
		super(props);
		this.state = {
			common: {
                showBlockingDialog: false,
				sidebarType:"EDIT_ASSET",
				fitFeature: null,
			},
			asset: {
                //asset
				uuid: null,
				name: "",
				description: "",
				type:"Calcestruzzo",
				ownership:"Appartiene all\'assicurando",
				surface: "",
				unitValue: "",
				displayColorPicker: false,
				color: {
				  r: "241",
				  g: "112",
				  b: "19",
				  a: "1",
				},
				coordinates: null,
                validationResults: {
                    name: "true",
                    description: "true",
                    surface: "true",
                    unitValue: "true",
                },
                validationPatterns: {
                    name: Asset.getNameValidation(),
                    description: Asset.getDescriptionValidation(),
                    surface: Asset.getSurfaceValidation(),
                    unitValue: Asset.getUnitValueValidation(),
                },
                isDisabled: "\"true\"",
			},
			
			node: {
				uuid: null,
				name: "node123",
				asset: null, //uuid dell'asset di appartenenza
                type: "Uscita",
				shape: null,
                capacity: "12.34",
                processingTime: "12.34",
                value: "12.34",
                leadTime: "12.34",
				coordinates: null,
                validationResults:{
                	name: true,
                    capacity: true,
                    processingTime: true,
                    value: true,
                    leadTime: true,
                },
                validationPatterns: {
                	name: Node.getNameValidation(),
                    capacity: QueueNode.getCapacityValidation(),
                    processingTime: MachineNode.getProcessingTimeValidation(),
                    value: MachineNode.getValueValidation(),
                    leadTime: SourceNode.getLeadTimeValidation(),
                },
                isDisabled: "\"true\"",
			},
			edge: {
				uuid: null,
				nodeStart: null,
				nodeEnd: null,
                isDisabled: "\"true\"",
			},
		};
	}
	
	
//##############################################################################
//Funzioni generiche
//##############################################################################
	//DDP funzione che setta lo stato di DeGeOPView con dei valori di default
	reset() {
		console,log("DeGeOPVIew::reset");
		//da fare
	}
	
	
	changeSidebarType = (sidebarType) => {
			this.setState({...this.state, common: {...this.state.common, sidebarType: sidebarType } });
			//if (sidebarType=="DEFAULT") {reset()};
			//SOLO PER TEST VELOCE DA CANCELLARE
			/*
			const { store } = this.context;
			const asset= store.getState().nodes[0];
			console.log("def"+JSON.stringify(asset));
			*/
	};
	/*Come interpretare il setState e lo spread
	Faccio setState:
		prendo this.state e lo spreaddo, mantenendo esattamente state com'è tranne per l'oggetto common
		common cambia facendo lo spread di common e rimanendo uguale tranne per il campo showBlockingDialog, che viene impostato
		come il flip del vecchio valore
	*/
	changeShowBlockingDialog= () => {
		console.log("changeShowBlockingDialog"+this.state.common.showBlockingDialog);
    	this.setState({...this.state, common: {...this.state.common, showBlockingDialog: !this.state.common.showBlockingDialog }});
  	};
  	
  	doDeleteAsset= () => {
		//let currentUuid = this.state.uuid;
		//const { store } = this.context;
		//store.dispatch(AssetActionCreator.deleteAsset(this.state.edge));
		console.log("deleteAsset");
        this.changeShowBlockingDialog();
        this.changeSidebarType("DEFAULT");
	};
	
	doDeleteNode= () => {
		//let currentUuid = this.state.uuid;
		//const { store } = this.context;
		//store.dispatch(AssetActionCreator.deleteNode(this.state.asset));
		console.log("deleteNode");
        this.changeShowBlockingDialog();
        this.changeSidebarType("DEFAULT");
	};
	
	doDeleteEdge= () => {
		//let currentUuid = this.state.uuid;
		//const { store } = this.context;
		//store.dispatch(AssetActionCreator.deleteEdge(this.state.edge));
		console.log("deleteEdge");
        this.changeShowBlockingDialog();
        this.changeSidebarType("DEFAULT");
	};

  	//BISOGNA DECIDERE se mettere const let o cagate varie
	dialogActionsAsset = [
    	{ label: "Annulla", onClick: this.changeShowBlockingDialog},
    	{ label: "Elimina", onClick: this.doDeleteAsset }
  	];
  	
  	  	//BISOGNA DECIDERE se mettere const let o cagate varie
	dialogActionsNode = [
    	{ label: "Annulla", onClick: this.changeShowBlockingDialog},
    	{ label: "Elimina", onClick: this.doDeleteNode }
  	];
  	
  	dialogActionsEdge = [
    	{ label: "Annulla", onClick: this.changeShowBlockingDialog},
    	{ label: "Elimina", onClick: this.doDeleteEdge }
  	];


	componentDidUpdate () {
		console.log("DeGeOPView::componentDidUpdate " + this.state.asset.name);
		if ( (this.state.common.sidebarType === "INSERT_ASSET") || (this.state.common.sidebarType === "EDIT_ASSET") ) {
            //Controllare validazioni su asset
            let initialD = this.state.asset.isDisabled;
            let v = this.state.asset.validationResults;
            let d; //valore a cui imposti disabled dopo
            if (v.name && v.description && v.surface && v.unitValue &&
                this.state.asset.name !== "" && this.state.asset.description !== "" &&
                this.state.asset.surface !== "" && this.state.asset.unitValue !== "" && this.state.asset.coordinates !== null && this.state.asset.coordinates !== undefined
            ) {
                //disabilitato falso
                d = "\"false\"";
            } else {
                //disabilitato true
                d = "\"true\"";
            }
            if (initialD !== d) {
                this.setState(
                    {...this.state, asset: {...this.state.asset, isDisabled: d}}
                );
            }
        }
        else if ( (this.state.common.sidebarType === "INSERT_NODE") || (this.state.common.sidebarType === "EDIT_NODE") ) {
		console.log("DeGeOPView::componentDidUpdate nodo " + this.state.node.coordinates);
            let initialD = this.state.node.isDisabled;
            //setto due shortcut
            let n = this.state.node;
            let v = this.state.node.validationResults;
            //dichiaro il valore a cui imposti disabled dopo
            let d;
            let genericV = n.name !== "" && v.name && n.type !== "" && n.coordinates !== null && n.coordinates !== undefined; // campi comuni validi
            //setterò specificV a true se i campi specifici (source, queue e machine) sono validi
            let specificVSource = n.type==="Sorgente" && n.leadTime !== "" && v.leadTime;
            let specificVQueue = n.type==="Coda" && n.capacity !== "" && v.capacity;
            let specificVMachine = n.type==="Macchina" && n.capacity !== "" && v.capacity && n.processingTime !== "" && v.processingTime && n.value !== "" && v.value;   
            let specificV = specificVSource || specificVQueue || specificVMachine;
            
            if (genericV && specificV  || genericV && n.type==="Risorsa" || genericV && n.type==="Uscita"){
                //disabilitato falso
                d = "\"false\"";
            } else {
                //disabilitato true
                d = "\"true\"";
            }
            //cambio lo stato solo se è cambiato qualcosa effettivamente
            if (initialD !== d) {
                this.setState(
                    {...this.state, node: {...this.state.node, isDisabled: d}}
                );
            }
            
		}
        else if ( (this.state.common.sidebarType === "INSERT_EDGE") || (this.state.common.sidebarType === "EDIT_EDGE") ) {
			let initialD = this.state.edge.isDisabled;
			let d;
			if (this.state.edge.nodeStart !== "" && this.state.edge.nodeEnd !== "") {
				//disabilitato falso
				d = "\"false\"";
			} else {
				//disabilitato true
				d = "\"true\"";
			}
			if (initialD !== d) {
				this.setState(
					{...this.state, edge: {...this.state.edge, isDisabled: d}}
				);
			}
		}
	};

	//handle change parametrica che gestisce il cambiamento degli stati
	handleChange = (element, key, value) => {
		console.log("DeGeOPView::handleChange");
		if(element!=="edge") {
			let re = new RegExp(this.state[element].validationPatterns[key], "i");
			let reValue = re.test(value.toString());
			this.setState(
				{...this.state, [element] : {...this.state[element], [key]: value, validationResults: {...this.state[element].validationResults, [key]:reValue} } }
			);
		} else {
			this.setState(
					{...this.state, [element]: {...this.state[element], [key]: value}}
			);
		}
		if (key==="uuid") {
			switch(element) {
			case "asset":
				this.updateAssetState();
				break;
			case "node":
				this.updateNodeState();
				break;
			case "edge":
				this.updateEdgeState();
				break;
			}
		}
	};

//##############################################################################
//Funzioni usate da solo da Asset
//##############################################################################

	//click su salva in edit asset
	assetSaveEditAction = () => {
		const { store } = this.context;
		store.dispatch(AssetActionCreator.editAsset(this.state.asset));
		console.log("DeGeOPView::assetSaveEditAction")
	};
	
	//click su salva in insert asset
	assetSaveInsertAction = () =>{
		const { store } = this.context;
		store.dispatch(AssetActionCreator.insertAsset(this.state.asset));
		console.log(this.state.name +this.state.description + "DeGeOPView::assetSaveInsertAction")
	};
	
	//colorPicker1
	handleColorClick = () => {
		this.setState({...this.state, asset: {...this.state.asset, displayColorPicker: !this.state.displayColorPicker} } );
	};

	//colorPicker2
	handleColorClose = () => {
        this.setState({...this.state, asset: {...this.state.asset, displayColorPicker: false } } );
	};

	//colorPicker3
	handleColorChange = (color) => {
        this.setState({...this.state, asset: {...this.state.asset, color: color.rgb } } );
		console.log("Chiamata handleColorChange"+color.rgb.r);
	};
	
	//funzione che setta lo stato dell'asset in DeGeOPView al momento del click di un certo asset sulla mappa in modo da poterne mostrare i dettagli
	updateAssetState() {
		console.log("DeGeOPView::updateAssetState()");
		const { store } = this.context;
		let assetStore = store.getState().assets.find( (el)=> {  return el.uuid===this.state.asset.uuid } );
		//let assetStore = store.getState().assets.find( (el)=> {  return el.name==="comune Mira" } );
		if (assetStore !== null && assetStore !== undefined) {
			console.log("Trovato assetStore in DeGeOPView::updateAssetState()"+JSON.stringify(assetStore));
			var tempAsset = {...this.state.asset, ...assetStore};
			tempAsset = {...tempAsset, displayColorPicker: false, validationResults: {...tempAsset.validationResults, name:"true", description:"true", surface:"true", unitValue:"true"}, isDisabled:"\"true\""};
			//console.log("ciao");
			this.setState({...this.state, asset:tempAsset}, ()=> {console.log("Stato dell'asset: " + JSON.stringify(this.state.asset));}  );
			/* VECCHIO
						this.setState({...this.state, asset:temp, asset:{...this.state.asset, displayColorPicker: false, validationResults: {...this.state.asset.validationResults, name:"true", description:"true", surface:"true", unitValue:"true"} }, isDisabled:"\"true\""}, ()=> {console.log(console.log("Stato dell'asset: " + JSON.stringify(this.state.asset)))}  );
			*/
		} else {
			console.log("Errore in DeGeOPView::updateAssetState()");
		}
	}


//##############################################################################
//Funzioni usate solo da node
//##############################################################################
//click su salva in insert node

	nodeSaveInsertAction = () =>{
		const { store } = this.context;
		store.dispatch(NodeActionCreator.insertNode(this.state.node));
		console.log("DeGeOPView::nodeSaveInsertAction")
	};
	
	nodeSaveEditAction = () =>{
		const { store } = this.context;
		store.dispatch(NodeActionCreator.editNode(this.state.node));
		console.log("DeGeOPView::nodeSaveEditAction")
	};
	
	//funzione che setta lo stato del nodo in DeGeOPView al momento del click di un certo nodo sulla mappa in modo da poterne mostrare i dettagli
	updateNodeState() {
		console.log("DeGeOPView::updateNodeState()");
		const { store } = this.context;
		let nodeStore = store.getState().nodes.find( (el)=> {  return el.uuid===this.state.node.uuid } );
		//let nodeStore = store.getState().nodes.find( (el)=> {  return el.name==="stampante" } );
		if (nodeStore !== null && nodeStore !== undefined) {
			console.log("Trovato nodeStore in DeGeOPView::updateNodeState()"+JSON.stringify(nodeStore));
			var tempNode = {...this.state.node, ...nodeStore};
			tempNode = {...tempNode, validationResults: {...this.state.node.validationResults, name:true, capacity:true, processingTime:true, value:true, leadTime:true}, isDisabled:"\"true\""};
			this.setState({...this.state, node:tempNode}, ()=> {console.log("Stato del nodo: "+JSON.stringify(this.state.node))}  );
			
			/* VECCHIO
			this.setState({...this.state, node:temp, node:{...this.state.node, validationResults: {...this.state.node.validationResults, name:true, capacity:true, processingTime:true, value:true, leadTime:true} }, isDisabled:"\"true\""}, ()=> {console.log("Stato del nodo: "+JSON.stringify(this.state.node))}  );
			*/
		} else {
			console.log("Errore in DeGeOPView::updateNodeState()");
		}
	}


	
//##############################################################################
//Funzioni usate solo da edge
//##############################################################################
//click su salva in insert edge

	edgeSaveInsertAction = () =>{
		const { store } = this.context;
		store.dispatch(EdgeActionCreator.insertEdge(this.state.edge));
		console.log("DeGeOPView::edgeSaveInsertAction")
	};
	
	edgeSaveEditAction = () =>{
		const { store } = this.context;
		store.dispatch(EdgeActionCreator.editEdge(this.state.edge));
		console.log("DeGeOPView::edgeSaveEditAction")
	};
	//funzione che setta lo stato dell'arco in DeGeOPView al momento del click di un certo arco sulla mappa in modo da poterne mostrare i dettagli
	updateEdgeState() {
		console.log("DeGeOPView::updateEdgeState()");
		const { store } = this.context;
		let edgeStore = store.getState().edges.find( (el)=> {  return el.uuid===this.state.edge.uuid } );
		if (edgeStore !== null && edgeStore !== undefined) {
			console.log("Trovato edgeStore in DeGeOPView::updateEdgeState()"+JSON.stringify(edgeStore));
			var tempEdge = {...this.state.edge, ...edgeStore};
			tempEdge = {...tempEdge, isDisabled:"\"true\""};
			this.setState({...this.state, edge:tempEdge}, ()=> {console.log("Stato dell'arco: "+JSON.stringify(this.state.edge))}  );
		} else {
			console.log("Errore in DeGeOPView::updateEdgeState()");
		}
	}

	
//##############################################################################
//SidebarFactory
//##############################################################################
	createInsertAssetSidebar() {
		return <InsertAssetSidebar
				 		title={"Aggiunta asset"}
				 		subtitle={"Disegna il sulla mappa, compila i dati e salva"}
						values={this.state.asset}
						handleChange={this.handleChange}
						handleColorClick={this.handleColorClick}
						handleColorClose={this.handleColorClose}
						handleColorChange={this.handleColorChange}
						emitAction={this.assetSaveInsertAction}
						changeSidebarType={this.changeSidebarType}
					/>;
	}
	
	createEditAssetSidebar() {
		return <InsertAssetSidebar
						values={this.state.asset}
						title={"Modifica asset"}
						subtitle={"Ridisegna il sulla mappa, compila i dati e salva"}
						handleChange={this.handleChange}
						handleColorClick={this.handleColorClick}
						handleColorClose={this.handleColorClose}
						handleColorChange={this.handleColorChange}
						emitAction={this.assetSaveEditAction}
						changeSidebarType={this.changeSidebarType}
					/>;
	}
	
	createViwAssetSidebar() {
		return 	<div>
				 	<ViewAssetSidebar
				 		values={this.state.asset}
						changeSidebarType={this.changeSidebarType}
						deleteElement={this.changeShowBlockingDialog}
						destinationEditSidebar={"EDIT_ASSET"}
					/>;
					<Dialog
					  	actions={this.dialogActionsAsset}
					  	active={this.state.common.showBlockingDialog}
					  	onEscKeyDown={this.changeShowBlockingDialog}
					  	onOverlayClick={this.changeShowBlockingDialog}
					  	title='Sei sicuro di voler cancellare questo asset?'
					>
          			<p>Attenzione: cancellando un asset, verranno cancellati i nodi in esso contenuti.</p>
        			</Dialog>
				</div>;
	}
	
	createInsertNodeSidebar() {
		return <InsertNodeSidebar
				 		title={"Aggiunta nodo"}
				 		subtitle={"Posiziona il nodo all'interno del perimetro di un asset, compila i dati e salva"}
						values={this.state.node}
						handleChange={this.handleChange}
						emitAction={this.nodeSaveInsertAction}
						changeSidebarType={this.changeSidebarType}
					/>;
	}
	
	createEditNodeSidebar() {
		return <InsertNodeSidebar
				 		title={"Modifica nodo"}
				 		subtitle={"Riposiziona il nodo all'interno del perimetro di un asset, compila i dati e salva"}
						values={this.state.node}
						handleChange={this.handleChange}
						emitAction={this.nodeSaveEditAction}
						changeSidebarType={this.changeSidebarType}
					/>;
	}
	
	createViewNodeSidebar() {
		return <div>
					<ViewNodeSidebar
						values={this.state.node}
						deleteElement={this.changeShowBlockingDialog}
						changeSidebarType={this.changeSidebarType}
						destinationEditSidebar="EDIT_NODE"
						/>
					<Dialog
						actions={this.dialogActionsNode}
					 	active={this.state.common.showBlockingDialog}
						onEscKeyDown={this.changeShowBlockingDialog}
						onOverlayClick={this.changeShowBlockingDialog}
						title='Sei sicuro di voler cancellare questo nodo?'
					></Dialog>;
				</div>;
	}
	
	createInsertEdgeSidebar() {
		return 	<InsertEdgeSidebar
				 		title={"Aggiunta arco"}
				 		subtitle={"Disegna sulla mappa e salva"}
						values={this.state.asset}
						handleChange={this.handleChange}
						emitAction={this.edgeSaveInsertAction}
						changeSidebarType={this.changeSidebarType}
					/>;
	}
	
	createEditEdgeSidebar() {
		return <InsertEdgeSidebar
						values={this.state.asset}
						title={"Modifica arco"}
						subtitle={"Ridisegna sulla mappa e salva"}
						handleChange={this.handleChange}
						emitAction={this.edgeSaveEditAction}
						changeSidebarType={this.changeSidebarType}
					/>;
	}
	
	createViewEdgeSidebar() {
		return 	<div>
					 <ViewEdgeSidebar
						values={this.state.edge}
						deleteElement={this.changeShowBlockingDialog}
						changeSidebarType={this.changeSidebarType}
						destinationEditSidebar="EDIT_EDGE"
					/>
					<Dialog
					  actions={this.dialogActionsEdge}
					  active={this.state.common.showBlockingDialog}
					  onEscKeyDown={this.changeShowBlockingDialog}
					  onOverlayClick={this.changeShowBlockingDialog}
					  title='Sei sicuro di voler cancellare questo arco?'
					></Dialog>
				</div>;
	}
						
	sidebarFactory () {
		//const { store } = this.context;
		let sidebarForRendering = null;
		//switch(store.getState().view.sidebar === 1) {
		switch(this.state.common.sidebarType) {
			case "DEFAULT":
				sidebarForRendering =
				 	<HomeSidebar />;
			break;
			case "INSERT_ASSET":
				sidebarForRendering = this.createInsertAssetSidebar();
				 	
			break;
			case "EDIT_ASSET":
				sidebarForRendering = this.createEditAssetSidebar();

			break;
			case "VIEW_ASSET":
				sidebarForRendering = this.createViwAssetSidebar();

			break;
			case "INSERT_NODE":
				sidebarForRendering = this.createInsertNodeSidebar();

			break;
			case "EDIT_NODE":
				sidebarForRendering = this.createEditNodeSidebar();

			break;
			case "VIEW_NODE":
				sidebarForRendering = this.createViewNodeSidebar();
					
			break;
			case "INSERT_EDGE":
				sidebarForRendering = this.createInsertEdgeSidebar();

			break;
			case "EDIT_EDGE":
				sidebarForRendering = this.createEditEdgeSidebar();
				 	
			break;
			case "VIEW_EDGE":
				sidebarForRendering = this.createViewEdgeSidebar();
			break;
			}
		return sidebarForRendering;
	}
//##############################################################################
//Render
//##############################################################################
  
	render() {
		//console.log("============================DeGeOPView::render" + this.state.common.sidebarType);
		const { store } = this.context;
		//store.subscribe(this.changeSidebarType);
		return (
		<div>
		    <MapWrapper
		      handleChange = { this.handleChange }
		      changeSidebarType = { this.changeSidebarType }
		      sidebarType = {this.state.common.sidebarType }
		      fitFeature = {this.state.common.fitFeature }
		    />
		    {this.sidebarFactory()}
		</div>
		);
	}
}

export { DeGeOPView };

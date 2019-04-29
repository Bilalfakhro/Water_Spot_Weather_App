import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_sheet1 extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Firebase (Cloud Firestore)'.
    
    item = {};
    this.items.push(item);
    item['temperature'] = "";
    item['document_key'] = "Lomma beach 2";
    item['userUID'] = "";
    item['feelTemp'] = "";
    item['coordinates'] = {"longitude":"13°03'32.3\"","latitude":"55°40'40.1\""};
    item['spotName'] = "Lomma beach, Sweden";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['userUID'] = "";
    item['document_key'] = "San Francisco, USA";
    item['coordinates'] = {"longitude":"37°46'02.4\"","latitude":"122°30'43.8\""};
    item['latitude'] = "122°30'43.8";
    item['longitude'] = "37°46'02.4";
    item['spotName'] = "San Francisco, USA";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "Trieste beach";
    item['temperature'] = "";
    item['latitude'] = "{\"longitude\":\"45°41'13.0\\\"\",\"latitude\":\"13°44'45.7\\\"\"}";
    item['feelTemp'] = "";
    item['userUID'] = "";
    item['spotName'] = "Trieste beach, Italy";
    item['coordinates'] = {"longitude":"45°41'13.0\"","latitude":"13°44'45.7\""};
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['userUID'] = "";
    item['document_key'] = "le07ZzEuXkqG91xBpCcu";
    item['latitude'] = "";
    item['longitude'] = "";
    item['spotName'] = "";
    item.key = key++;
  }

  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  
  addItem(item, options) {
    console.log("add to firebase: ", item);
      
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
      
    collection.add(item)
      .then((docRef) => {
        console.log("Firebase document added with id: ", docRef.id);
        item.document_key = docRef.id;
        //super.addItem(item, options);
      
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        this._fetchComplete(error, options);
      });
  }
  
  removeItem(item, options) {
    //super.removeItem(item, options);
    
    console.log("delete from firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.delete()
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  
  replaceItemByRowIndex(idx, item, options) {
    //super.replaceItemByRowIndex(idx, item, options);
    
    console.log("update in firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.update(item)
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  

}

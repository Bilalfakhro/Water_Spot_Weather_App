import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "favorite_text_367813";
    item['en'] = "Lomma, Sweden";
    
    item = {};
    this.items.push(item);
    item['key'] = "favorite_text_362981";
    item['en'] = "Trieste, Italy";
    
    item = {};
    this.items.push(item);
    item['key'] = "favorite_text_469660";
    item['en'] = "San Francisco, USA";
    
    item = {};
    this.items.push(item);
    item['key'] = "favorite_text_953503";
    item['en'] = "Sidney, Australia";
    
    item = {};
    this.items.push(item);
    item['key'] = "favorite_text2_916974";
    item['en'] = "21 C";
    
    item = {};
    this.items.push(item);
    item['key'] = "favorite_text2_572813";
    item['en'] = "0 C";
    
    item = {};
    this.items.push(item);
    item['key'] = "favorite_text2_976859";
    item['en'] = "15 C";
    
    item = {};
    this.items.push(item);
    item['key'] = "favorite_text2_508452";
    item['en'] = "8 C";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_textblock_74263";
    item['en'] = "Facebook";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_textblock_766451";
    item['en'] = "Gmail";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_textblock_877443";
    item['en'] = "email";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_82787";
    item['en'] = "Log in";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_433531";
    item['en'] = "Log in";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot_text3_427439";
    item['en'] = "Wind degrees:";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot_text2_902192";
    item['en'] = "Wind speed m/s :";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot_text4_131302";
    item['en'] = "13m/h";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot_windspeed_73939";
    item['en'] = "WE";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot_windderectiontext_384094";
    item['en'] = "Feels Like:";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot_feelsliketext_888810";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot_feelsliketext_197076";
    item['en'] = "Temprature C° :";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot_feelslike_434634";
    item['en'] = "24 c";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot2_windderection_755898";
    item['en'] = "10";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot2_windderectiontext_1027464";
    item['en'] = "Wind direction:";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot2_windspeed_274028";
    item['en'] = "1";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot2_windspeedtext_392080";
    item['en'] = "Wind speed m/s :";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot2_feelsliketext_413782";
    item['en'] = "Malmö";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot2_feelslike_38834";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot2_tempraturtext_299605";
    item['en'] = "Temprature C°:";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspot2_temprature_798725";
    item['en'] = "18";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspotloggedin_tempraturtext_115248";
    item['en'] = "Feels like C°:";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspotloggedin_temprature_172980";
    item['en'] = "18";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspotloggedin2_fellsliketemp_689705";
    item['en'] = "60";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspotloggedin2_feelsliketext_415154";
    item['en'] = "Feels like C°:";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspotloggedin2_windderection_559157";
    item['en'] = "S";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspotloggedin2_windderectiontext_953214";
    item['en'] = "Wind direction:";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspotloggedin2_windspeed_704742";
    item['en'] = "1.0";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspotloggedin2_windspeedtext_412644";
    item['en'] = "Wind speed m/s:";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspotloggedin2_spottext_328909";
    item['en'] = "Malmoe";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspotloggedin2_tempraturtext_687288";
    item['en'] = "Temprature C°:";
    
    item = {};
    this.items.push(item);
    item['key'] = "myspotloggedin2_temprature_198771";
    item['en'] = "18";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}

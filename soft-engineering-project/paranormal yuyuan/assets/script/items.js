// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var com = require('variables');
cc.Class({
    extends: cc.Component,

    properties: {
        key: cc.Node,
        fenda: cc.Node,
        coin: cc.Node,
        note1: cc.Node,
        note2: cc.Node,
        fendaint:cc.Node,
        phoneint:cc.Node,
        keyint:cc.Node,
        noteint:cc.Node,
        coinint:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    clickbtn(sender,str){
        if(str=='fenda'){
            this.fendaint.active=true;
        }
        if(str=='key'){
            this.keyint.active=true;
        }
        if(str=='phone'){
            this.phoneint.active=true;
        }
        if(str=='note'){
            this.noteint.active=true;
        }
        if(str=='coin'){
            this.coinint.active=true;
        }
        if(str=='likai'){
            this.fendaint.active=false;
            this.keyint.active=false;
            this.phoneint.active=false;
            this.coinint.active=false;
            this.noteint.active=false;
        }
    },
    start () {

    },

     update (dt) {
         if(com.key==1){
             this.key.active=true;
         }
         if(com.fenda==1){
             this.fenda.active=true;
         }
         if(com.coin==1){
             this.coin.active=true;
         }
         if(com.note1==1){
             this.note1.active=true;
         }
         if(com.note2==1){
             this.note2.active=true;
         }
         if(com.key==0){
            this.key.active=false;
        }
        if(com.fenda==0){
            this.fenda.active=false;
        }
        if(com.coin==0){
            this.coin.active=false;
        }
        if(com.note1==0){
            this.note1.active=false;
        }
        if(com.note2==0){
            this.note2.active=false;
        }
     },
});

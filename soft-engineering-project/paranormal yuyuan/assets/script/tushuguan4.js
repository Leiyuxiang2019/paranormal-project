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
    },

    onLoad () {
    },

    start () {
    },

    clikbotton:function(sender,str){
        if(str=='xishier'){
        cc.director.loadScene('tushuguan5');}
        if(str=='huit3'){
            cc.director.loadScene('tushuguan3');}


    },
    update (dt) {

    },
});
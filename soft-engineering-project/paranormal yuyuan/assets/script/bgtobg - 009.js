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
        bg11:cc.Node

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {

     },
    
    clikbotton:function(sender,str){

        cc.director.loadScene('S9');
        this.bg11.key.active=false;

    },
    start () {

    },

    // update (dt) {},
});

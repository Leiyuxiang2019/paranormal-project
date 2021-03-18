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
        diantis:cc.AudioClip,
    },

    onLoad () {
        cc.audioEngine.play(this.diantis,false,1);
    },

    start () {
    },

    clikbotton:function(){
        cc.director.loadScene('S6');


    },
    update (dt) {

    },
});

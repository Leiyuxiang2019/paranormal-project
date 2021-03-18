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
        yinseng:cc.AudioClip,
    },

    onLoad () {
        this.yin=cc.audioEngine.play(this.yinseng,true,1);
    },

    start () {
    },

    clikbotton:function(){
        cc.audioEngine.stop(this.yin);
        cc.director.loadScene('xi1');


    },
    update (dt) {

    },
});
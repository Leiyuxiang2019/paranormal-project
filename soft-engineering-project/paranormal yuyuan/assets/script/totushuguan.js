// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        diantis:cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.audioEngine.play(this.diantis,false,1);
    },
    clikbotton:function(){
        cc.director.loadScene('tushuguan1');


    },
    start () {

    },

    // update (dt) {},
});

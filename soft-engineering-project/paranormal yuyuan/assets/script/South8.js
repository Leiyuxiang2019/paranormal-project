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
        ghost:cc.AudioClip,

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.gh=cc.audioEngine.play(this.ghost,true,1);
     },
    
    clikbotton:function(sender,str){

            if(str=='zuo'){
            cc.audioEngine.stop(this.gh);
            cc.director.loadScene('S12');}
            if(str=='pao'){
            cc.audioEngine.stop(this.gh);
            cc.director.loadScene('S9');
            }

    },
    start () {

    },

    // update (dt) {},
});

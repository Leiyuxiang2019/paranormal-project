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
        Sound:cc.AudioClip,


    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {

     },
    
    clikbotton:function(sender,str){

        if(str=='back'){
        cc.director.loadScene('S9');}
        if(str=='open'){
            notwork.active=true;
            cc.audioEngine.play(this.Sound,false,1);
            
        }
    

    },
    start () {

    },

    // update (dt) {},
});

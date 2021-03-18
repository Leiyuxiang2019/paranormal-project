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
        // SOUND : cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        // this.mybgm=cc.audioEngine.play(this.SOUND,false,1);
        //  if(com.diantitishi==0){
        //      mirror.node.active = true;
        //      com.diantitishi=1;
        //  }
     },
    
    clikbotton:function(sender,str){
        if(str=='xi12'){
            cc.director.loadScene('xi1');
        }
        if(str=='sushe'){
            cc.director.loadScene('Dom');
        }
        if(str=='tushuguan'){
            cc.director.loadScene('tushuguan1')
        }
        if(str=='nanyilou'){
            cc.director.loadScene('S1')
        }
        
            // nogo.nexttext();



    },
    start () {

    },

    // update (dt) {},
});

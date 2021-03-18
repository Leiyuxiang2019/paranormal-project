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

        bg11: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
   
     },
    
    clikbotton:function(sender,str){
        if(str=='bg11tobg9'){
            cc.director.loadScene('S9');
        }
        if(str=='animation1'){
            var anim=this.bg11.getComponent(cc.Animation);
            if(com.key!=1){
                anim.play('bg11');
                com.key=1;}
        }

    },
    start () {

    },

    // update (dt) {},
});

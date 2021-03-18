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
        fenda:cc.Node,
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        if(com.fenda==1){
            this.fenda.active=false;
        }
    },
    clikbotton:function(sender,str) {
        if (str == 'animation1') {
            var anim = this.fenda.getComponent(cc.Animation);
            if (com.fenda != 1) {
                anim.play('fenda');
                com.fenda = 1;
            }
        }
    },
    start () {

    },

    // update (dt) {},
});
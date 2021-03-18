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
        zhitiao:cc.Node,
    },
    // LIFE-CYCLE CALLBACKS:
    //onLoad () {},
    clikbotton:function(sender,str) {
        if (str == 'tushuguan3') {
            cc.director.loadScene('tushuguan3');
        }
        if (str == 'animation1') {
            var anim = this.zhitiao.getComponent(cc.Animation);
            if (com.note1 != 1) {
                anim.play('zhitiao');
                com.note1 = 1;
            }
        }
    },
    start () {

    },

    // update (dt) {},
});

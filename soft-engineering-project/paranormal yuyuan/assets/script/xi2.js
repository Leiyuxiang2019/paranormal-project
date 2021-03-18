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
      fanmaiji:cc.Node,
        fanmaiji2:cc.Node,
        mobile:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    clikbotton:function(){
       this.fanmaiji.active=false;
       this.fanmaiji2.active=true;

        var anim = this.mobile.getComponent(cc.Animation);
        if (com.note2 != 1) {
            this.mobile.active=true;
            anim.play('mobile');
            com.note2 = 1;}
    },

    start () {

    },

    // update (dt) {},
});

var com = require('variables');
cc.Class({
    extends: cc.Component,

    properties: {
        lockin:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.lockin.active=false;
    },
    clikbotton:function(){
        if(com.key==1){
            cc.director.loadScene('mishi4');}
        else{
            this.lockin.active=true;
        }

    },
    start () {

    },

    // update (dt) {},
});

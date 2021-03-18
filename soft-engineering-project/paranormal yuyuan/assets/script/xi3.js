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
        if(com.fenda==1){
        cc.director.loadScene('mishi1');}
        else{
          this.lockin.active=true;
        }

    },
    start () {

    },

    // update (dt) {},
});

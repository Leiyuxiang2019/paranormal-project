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
     page: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.page.active=false;
        this.jug=0;
     },
    clikbotton:function(sender,str){
        if(str=='clik'){
            if(this.jug==0){
            this.page.active = true;
          this.jug=1;}
            else{
                this.page.active = false;
                this.jug=0;
            }
        }

    },
    start () {

    },

     //update (dt) {},
});

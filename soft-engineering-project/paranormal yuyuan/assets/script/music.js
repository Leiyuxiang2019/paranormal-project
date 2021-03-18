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
        s1:cc.Node,
        s2:cc.Node,
        s3:cc.Node,
        s4:cc.Node,
        s5:cc.Node,
        s6:cc.Node,
        success:cc.Node,
        Alice1:cc.AudioClip,
        Alice2:cc.AudioClip,
        Alice3:cc.AudioClip,
        Alice4:cc.AudioClip,
        Alice5:cc.AudioClip,
        Alice6:cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {

        this.success.active=false;
        this.jug=0;
     },

    clikbotton:function(sender,str) {
        if(str=='back')
        { cc.director.loadScene('mishi4');}

        if (str == '1') {
            cc.audioEngine.play(this.Alice1,false,1);
            if (this.jug == 0) {
                this.jug += 1;
                cc.log(str);
                cc.log(this.jug);
            } else {
                this.jug = 1;
            }
        }
        if (str == '3') {
            cc.audioEngine.play(this.Alice2,false,1);
            if (this.jug == 1) {
                this.jug += 1;
                cc.log(str);
                cc.log(this.jug);
            } else {
                this.jug = 0;
            }
        }
        if (str == '6') {
            cc.audioEngine.play(this.Alice3,false,1);
            if (this.jug == 2) {
                this.jug += 1;
                cc.log(str);
                cc.log(this.jug);
            } else {
                this.jug = 0;
            }
        }
        if (str == '5') {
            cc.audioEngine.play(this.Alice4,false,1);
            if (this.jug == 3) {
                this.jug += 1;
                cc.log(str);
                cc.log(this.jug);
            } else {
                this.jug = 0;
            }
        }
        if (str == '2') {
            cc.audioEngine.play(this.Alice5,false,1);
            if (this.jug == 4) {
                this.jug += 1;
                cc.log(str);
                cc.log(this.jug);
            } else {
                this.jug = 0;
            }
        }
        if (str == '4') {
            cc.audioEngine.play(this.Alice6,false,1);
            if (this.jug == 5) {
                this.jug += 1;
                cc.log(str);
                cc.log(this.jug);
            } else {
                this.jug = 0;
            }
        }
    },




    start () {

    },

     update (dt) {
        if(this.jug==6){
            this.success.active=true;
        }
     },
});

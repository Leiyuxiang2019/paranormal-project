
cc.Class({
    extends: cc.Component,

    properties: {
        Alice:cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.ali=cc.audioEngine.play(this.Alice,true,1);

    },
    clikbotton:function(sender,str){
        if(str=='light'){
            cc.audioEngine.stop(this.ali);
        cc.director.loadScene('mishi5');}


    },
    start () {

    },

    // update (dt) {},
});

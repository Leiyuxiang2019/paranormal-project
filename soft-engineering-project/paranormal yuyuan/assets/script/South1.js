
cc.Class({
    
    extends: cc.Component,

    properties: {
        chongming:cc.AudioClip,
       // data: 0,
    },
    onLoad(){
        this.fly=cc.audioEngine.play(this.chongming,true,1);
        //var noder = cc.find('dataNode').getComponent('sendmessage');
        //cc.game.addPersistRootNode(this.node);
    },
    

    start () {
        

    },
    clickBtn:function(sender,str){
        if(str == 'S1toS2'){
            cc.audioEngine.stop(this.fly);
             cc.director.loadScene('S2');
        }
    },

    // update (dt) {},
});

cc.Class({
    
    extends: cc.Component,

    properties: {
        domi:cc.AudioClip,
       // data: 0,
    },
    onLoad(){
        this.domit=cc.audioEngine.play(this.domi,true,1);
        //var noder = cc.find('dataNode').getComponent('sendmessage');
        //cc.game.addPersistRootNode(this.node);
    },
    

    start () {
        

    },
    clickBtn:function(sender,str){
        if(str == 'domtoS1'){
            cc.audioEngine.stop(this.domi);
             cc.director.loadScene('S1');
        }
    },

    // update (dt) {},
});
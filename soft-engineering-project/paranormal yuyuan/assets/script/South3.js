
cc.Class({
    
    extends: cc.Component,

    properties: {
       // data: 0,
    },
    onLoad(){
        //var noder = cc.find('dataNode').getComponent('sendmessage');
        //cc.game.addPersistRootNode(this.node);
    },
    

    start () {
        

    },
    clickBtn:function(sender,str){
        if(str == 'S3toS4'){
             cc.director.loadScene('S4');
        }
    },

    // update (dt) {},
});

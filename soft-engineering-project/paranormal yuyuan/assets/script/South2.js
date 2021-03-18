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
        if(str == 'S2toS3'){
             cc.director.loadScene('S3');
        }
        if(str == 'no'){
            nogo.active=true;
            // nogo.nexttext();
       }
    },

    // update (dt) {},
});
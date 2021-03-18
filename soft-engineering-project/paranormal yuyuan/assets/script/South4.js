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
        if(str == 'next'){
             cc.director.loadScene('S5');
        }
        if(str == 'no'){
            nogo.active=true;
            // nogo.nexttext();
       }
       if(str == 'back'){
        cc.director.loadScene('S3');
   }
    },

    // update (dt) {},
});
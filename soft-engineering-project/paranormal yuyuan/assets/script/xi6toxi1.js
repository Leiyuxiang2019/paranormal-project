

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    clikbotton:function(sender,str){

        if(str=='huixiyi'){
        cc.director.loadScene('xi1');}
        if(str=='huixisi'){
            cc.director.loadScene('xi4');}


    },
    start () {

    },

    // update (dt) {},
});

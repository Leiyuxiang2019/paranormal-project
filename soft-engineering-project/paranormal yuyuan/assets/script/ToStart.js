cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

    },

    ToStart: function(){
        cc.director.loadScene('Menu');
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

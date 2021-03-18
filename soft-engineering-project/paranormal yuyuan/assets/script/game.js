cc.Class({
    extends: cc.Component,

    properties: {
      MUS:cc.AudioClip,
    },
    onLoad(){
         this.fxxk=cc.audioEngine.play(this.MUS,true,1);
         cc.log('onload');
    },
    start () {
         cc.log('start');
    },
   
    clickBtn:function(sender,str){
     
        if(str == 'start'){
             cc.audioEngine.stop(this.fxxk);
             cc.director.loadScene('Stage');
             cc.log('xuanzeguanqia');
        }
        if(str == 'rule'){
          cc.audioEngine.stop(this.fxxk);
          cc.director.loadScene('Rule');
     }
    },
     update (dt) {


     },
});

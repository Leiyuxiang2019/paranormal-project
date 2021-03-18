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
        s7:cc.Node,
        s8:cc.Node,
        s9:cc.Node,
        s0:cc.Node,
        n1:cc.Node,
        n2:cc.Node,
        n3:cc.Node,
        n4:cc.Node,
        n5:cc.Node,
        n6:cc.Node,
        n7:cc.Node,
        n8:cc.Node,
        n9:cc.Node,
        n0:cc.Node,
        tip2:cc.Node,
        tip1:cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.s1.active=false;
         this.s2.active=false;
         this.s3.active=false;
         this.s4.active=false;
         this.s5.active=false;
         this.s6.active=false;
         this.s7.active=false;
         this.s8.active=false;
         this.s9.active=false;
         this.s0.active=false;
         this.n1.active=false;
         this.n2.active=false;
         this.n3.active=false;
         this.n4.active=false;
         this.n5.active=false;
         this.n6.active=false;
         this.n7.active=false;
         this.n8.active=false;
         this.n9.active=false;
         this.n0.active=false;
         this.shiwei=10;
         this.gewei=10;
         this.tip1.active=false;
         this.tip2.active=false;
     },
    clikbotton:function(sender,str){
        if(str=='cancle'){
            this.gewei=10;
            this.shiwei=10;
        }
        if(str=='comfirm'){
            cc.log(com.coin);
            if(com.coin!=0){
            com.coin=0;
            if(this.gewei==8){
                if(this.shiwei==3){
                    cc.director.loadScene('xi6');
                }
                else{this.tip2.active=true;}
            }else{
                this.tip2.active=true;}
            }else{
                this.tip1.active=true;
            }
        }
        if(str=='1'){
           if(this.gewei==10){
               this.gewei=1;
           }else {
               if (this.shiwei == 10) {
                   this.shiwei = this.gewei;
                   this.gewei = 1;
               }
           }
        }
        if(str=='2'){
            if(this.gewei==10){
                this.gewei=2;
            }else {
                if (this.shiwei == 10) {
                    this.shiwei = this.gewei;
                    this.gewei = 2;
                }
            }
        }
        if(str=='3'){
            if(this.gewei==10){
                this.gewei=3;
            }else {
                if (this.shiwei == 10) {
                    this.shiwei = this.gewei;
                    this.gewei = 3;
                }
            }
        }
        if(str=='4'){
            if(this.gewei==10){
                this.gewei=4;
            }else {
                if (this.shiwei == 10) {
                    this.shiwei = this.gewei;
                    this.gewei = 4;
                }
            }
        }
        if(str=='5'){
            if(this.gewei==10){
                this.gewei=5;
            }else {
                if (this.shiwei == 10) {
                    this.shiwei = this.gewei;
                    this.gewei = 5;
                }
            }
        }
        if(str=='6'){
            if(this.gewei==10){
                this.gewei=6;
            }else {
                if (this.shiwei == 10) {
                    this.shiwei = this.gewei;
                    this.gewei = 6;
                }
            }
        }
        if(str=='7'){
            if(this.gewei==10){
                this.gewei=7;
            }else {
                if (this.shiwei == 10) {
                    this.shiwei = this.gewei;
                    this.gewei = 7;
                }
            }
        }
        if(str=='8'){
            if(this.gewei==10){
                this.gewei=8;
            }else {
                if (this.shiwei == 10) {
                    this.shiwei = this.gewei;
                    this.gewei = 8;
                }
            }
        }
        if(str=='9'){
            if(this.gewei==10){
                this.gewei=9;
            }else {
                if (this.shiwei == 10) {
                    this.shiwei = this.gewei;
                    this.gewei = 9;
                }
            }
        }
        if(str=='0'){
            if(this.gewei==10){
                this.gewei=0;
            }else {
                if (this.shiwei == 10) {
                    this.shiwei = this.gewei;
                    this.gewei = 0;
                }
            }
        }

    },
    start () {

    },

     update (dt) { if(this.gewei==1){
         this.s1.active=true;
         this.s2.active=false;
         this.s3.active=false;
         this.s4.active=false;
         this.s5.active=false;
         this.s6.active=false;
         this.s7.active=false;
         this.s8.active=false;
         this.s9.active=false;
         this.s0.active=false;
     }
         if(this.gewei==2){
             this.s1.active=false;
             this.s2.active=true;
             this.s3.active=false;
             this.s4.active=false;
             this.s5.active=false;
             this.s6.active=false;
             this.s7.active=false;
             this.s8.active=false;
             this.s9.active=false;
             this.s0.active=false;
         }
         if(this.gewei==3){
             this.s1.active=false;
             this.s2.active=false;
             this.s3.active=true;
             this.s4.active=false;
             this.s5.active=false;
             this.s6.active=false;
             this.s7.active=false;
             this.s8.active=false;
             this.s9.active=false;
             this.s0.active=false;
         }
         if(this.gewei==4){
             this.s1.active=false;
             this.s2.active=false;
             this.s3.active=false;
             this.s4.active=true;
             this.s5.active=false;
             this.s6.active=false;
             this.s7.active=false;
             this.s8.active=false;
             this.s9.active=false;
             this.s0.active=false;
         }
         if(this.gewei==5){
             this.s1.active=false;
             this.s2.active=false;
             this.s3.active=false;
             this.s4.active=false;
             this.s5.active=true;
             this.s6.active=false;
             this.s7.active=false;
             this.s8.active=false;
             this.s9.active=false;
             this.s0.active=false;
         }
         if(this.gewei==6){
             this.s1.active=false;
             this.s2.active=false;
             this.s3.active=false;
             this.s4.active=false;
             this.s5.active=false;
             this.s6.active=true;
             this.s7.active=false;
             this.s8.active=false;
             this.s9.active=false;
             this.s0.active=false;
         }
         if(this.gewei==7){
             this.s1.active=false;
             this.s2.active=false;
             this.s3.active=false;
             this.s4.active=false;
             this.s5.active=false;
             this.s6.active=false;
             this.s7.active=true;
             this.s8.active=false;
             this.s9.active=false;
             this.s0.active=false;
         }
         if(this.gewei==8){
             this.s1.active=false;
             this.s2.active=false;
             this.s3.active=false;
             this.s4.active=false;
             this.s5.active=false;
             this.s6.active=false;
             this.s7.active=false;
             this.s8.active=true;
             this.s9.active=false;
             this.s0.active=false;
         }
         if(this.gewei==9){
             this.s1.active=false;
             this.s2.active=false;
             this.s3.active=false;
             this.s4.active=false;
             this.s5.active=false;
             this.s6.active=false;
             this.s7.active=false;
             this.s8.active=false;
             this.s9.active=true;
             this.s0.active=false;
         }
         if(this.gewei==0){
             this.s1.active=false;
             this.s2.active=false;
             this.s3.active=false;
             this.s4.active=false;
             this.s5.active=false;
             this.s6.active=false;
             this.s7.active=false;
             this.s8.active=false;
             this.s9.active=false;
             this.s0.active=true;
         }
         if(this.gewei==10){
             this.s1.active=false;
             this.s2.active=false;
             this.s3.active=false;
             this.s4.active=false;
             this.s5.active=false;
             this.s6.active=false;
             this.s7.active=false;
             this.s8.active=false;
             this.s9.active=false;
             this.s0.active=false;
         }
         if(this.shiwei==10){
             this.n1.active=false;
             this.n2.active=false;
             this.n3.active=false;
             this.n4.active=false;
             this.n5.active=false;
             this.n6.active=false;
             this.n7.active=false;
             this.n8.active=false;
             this.n9.active=false;
             this.n0.active=false;
         }
         if(this.shiwei==1){
             this.n1.active=true;
             this.n2.active=false;
             this.n3.active=false;
             this.n4.active=false;
             this.n5.active=false;
             this.n6.active=false;
             this.n7.active=false;
             this.n8.active=false;
             this.n9.active=false;
             this.n0.active=false;
         }
         if(this.shiwei==2){
             this.n1.active=false;
             this.n2.active=true;
             this.n3.active=false;
             this.n4.active=false;
             this.n5.active=false;
             this.n6.active=false;
             this.n7.active=false;
             this.n8.active=false;
             this.n9.active=false;
             this.n0.active=false;
         }
         if(this.shiwei==3){
             this.n1.active=false;
             this.n2.active=false;
             this.n3.active=true;
             this.n4.active=false;
             this.n5.active=false;
             this.n6.active=false;
             this.n7.active=false;
             this.n8.active=false;
             this.n9.active=false;
             this.n0.active=false;
         }
         if(this.shiwei==4){
             this.n1.active=false;
             this.n2.active=false;
             this.n3.active=false;
             this.n4.active=true;
             this.n5.active=false;
             this.n6.active=false;
             this.n7.active=false;
             this.n8.active=false;
             this.n9.active=false;
             this.n0.active=false;
         }
         if(this.shiwei==5){
             this.n1.active=false;
             this.n2.active=false;
             this.n3.active=false;
             this.n4.active=false;
             this.n5.active=true;
             this.n6.active=false;
             this.n7.active=false;
             this.n8.active=false;
             this.n9.active=false;
             this.n0.active=false;
         }
         if(this.shiwei==6){
             this.n1.active=false;
             this.n2.active=false;
             this.n3.active=false;
             this.n4.active=false;
             this.n5.active=false;
             this.n6.active=true;
             this.n7.active=false;
             this.n8.active=false;
             this.n9.active=false;
             this.n0.active=false;
         }
         if(this.shiwei==7){
             this.n1.active=false;
             this.n2.active=false;
             this.n3.active=false;
             this.n4.active=false;
             this.n5.active=false;
             this.n6.active=false;
             this.n7.active=true;
             this.n8.active=false;
             this.n9.active=false;
             this.n0.active=false;
         }
         if(this.shiwei==8){
             this.n1.active=false;
             this.n2.active=false;
             this.n3.active=false;
             this.n4.active=false;
             this.n5.active=false;
             this.n6.active=false;
             this.n7.active=false;
             this.n8.active=true;
             this.n9.active=false;
             this.n0.active=false;
         }
         if(this.shiwei==9){
             this.n1.active=false;
             this.n2.active=false;
             this.n3.active=false;
             this.n4.active=false;
             this.n5.active=false;
             this.n6.active=false;
             this.n7.active=false;
             this.n8.active=false;
             this.n9.active=true;
             this.n0.active=false;
         }
         if(this.shiwei==0){
             this.n1.active=false;
             this.n2.active=false;
             this.n3.active=false;
             this.n4.active=false;
             this.n5.active=false;
             this.n6.active=false;
             this.n7.active=false;
             this.n8.active=false;
             this.n9.active=false;
             this.n0.active=true;
         }
     },
});

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
        b1: cc.Node,
        b2: cc.Node,
        b3: cc.Node,
        b4: cc.Node,
        coin:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.book1=0;
        this.book2=0;
        this.book3=0;
        this.book4=0;
        this.comfirm1=0;
        this.comfirm2=0;
        this.comfirm3=0;
        this.comfirm4=0;
        this.x1=this.b1.getPosition();
        this.x2=this.b2.getPosition();
        this.x3=this.b3.getPosition();
        this.x4=this.b4.getPosition();
    },
    myst:function(){
        this.b1.on(cc.Node.EventType.TOUCH_END, function(event){
            var i=0;
            if(this.book1==0){
                if(this.book2==0){
                    if(this.book3==0){
                        if(this.book4==0){
                            i=1;
                        }
                    }
                }
            }
            if(i==1){
                this.book1=1;
                i=0;
            }
            else {if(this.book2==1){
                this.change(this.b2,this.b1);
                this.book1=0;
                this.book2=0;
                this.book4=0;
                this.book3=0;
            }

        if(this.book3==1){
                this.change(this.b3,this.b1);
            this.book1=0;
            this.book2=0;
            this.book4=0;
            this.book3=0;
            }

           if(this.book4==1){
                this.change(this.b4,this.b1);
               this.book1=0;
               this.book2=0;
               this.book4=0;
               this.book3=0;
            }
            }
        },this);
        this.b2.on(cc.Node.EventType.TOUCH_END, function(event){
            var k=0
            if(this.book1==0){
                if(this.book2==0){
                    if(this.book3==0){
                        if(this.book4==0){
                            k=1;
                        }
                    }
                }
            }
            if(k==1){
                this.book2=1;
                k=0;
            }
            else {if(this.book1==1){
                this.change(this.b2,this.b1);
                this.book1=0;
                this.book2=0;
                this.book4=0;
                this.book3=0;
            }

                if(this.book3==1){
                    this.change(this.b3,this.b2);
                    this.book1=0;
                    this.book2=0;
                    this.book4=0;
                    this.book3=0;
                }

                if(this.book4==1){
                    this.change(this.b4,this.b2);
                    this.book1=0;
                    this.book2=0;
                    this.book4=0;
                    this.book3=0;
                }
            }
        },this);
        this.b3.on(cc.Node.EventType.TOUCH_END, function(event){
            var l=0;
            if(this.book1==0){
                if(this.book2==0){
                    if(this.book3==0){
                        if(this.book4==0){
                            l=1;
                        }
                    }
                }
            }
            if(l==1){
                this.book3=1;
                l=0;
            }
            else {if(this.book1==1){
                this.change(this.b3,this.b1);
                this.book1=0;
                this.book2=0;
                this.book4=0;
                this.book3=0;
            }

                if(this.book2==1){
                    this.change(this.b3,this.b2);
                    this.book1=0;
                    this.book2=0;
                    this.book4=0;
                    this.book3=0;
                }

                if(this.book4==1){
                    this.change(this.b4,this.b3);
                    this.book1=0;
                    this.book2=0;
                    this.book4=0;
                    this.book3=0;
                }
            }
        },this);
        this.b4.on(cc.Node.EventType.TOUCH_END, function(event){
            var h=0;
            if(this.book1==0){
                if(this.book2==0){
                    if(this.book3==0){
                        if(this.book4==0){
                            h=1;
                        }
                    }
                }
            }
            if(h==1){
                this.book4=1;
                h=0;
            }
            else {if(this.book1==1){
                this.change(this.b4,this.b1);
                this.book1=0;
                this.book2=0;
                this.book4=0;
                this.book3=0;
            }

                if(this.book2==1){
                    this.change(this.b4,this.b2);
                    this.book1=0;
                    this.book2=0;
                    this.book4=0;
                    this.book3=0;
                }

                if(this.book3==1){
                    this.change(this.b4,this.b3);
                    this.book1=0;
                    this.book2=0;
                    this.book4=0;
                    this.book3=0;
                }
            }
        },this);
    },
    change:function(node1,node2){
        var node3=node1.getPosition();
        var node4=node2.getPosition();
        node1.setPosition(cc.v2(node4.x,node4.y));
        node2.setPosition(cc.v2(node3.x,node3.y));
    },
    start () {
     this.myst();
    },

     update (dt) {
         var a=this.b1.getPosition();
         var b=this.b2.getPosition();
         var c=this.b3.getPosition();
         var d=this.b4.getPosition();
         if(a.x==this.x4.x){
             if(b.x==this.x1.x){
                 if(c.x==this.x2.x){
                     if(d.x==this.x3.x){
                         var anim = this.coin.getComponent(cc.Animation);
                         if (com.coin != 1) {
                             anim.play('coin');
                             com.coin = 1;
                         }
                     }
                 }
             }
         }
     },
});

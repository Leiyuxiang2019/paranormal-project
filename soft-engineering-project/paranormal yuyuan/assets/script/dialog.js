let rolemap ={
    1:{
        name:'我',
        url:'role/myself'
    },
    2:{
        name:'室友A',
        url:'role/23'
    },
    3:{
        name:'室友B',
        url:'role/23'
    },
    
};

cc.Class({
    extends: cc.Component,

    properties: {
        picSprite: cc.Sprite,
        nameLabel: cc.Label,
        textLabel: cc.Label,
    },


    onLoad () {
        this.init([
            {role:1,content:'这里就是南一楼了，先进去看看吧。'},

            
        ]);
        window.dialog=this.node;
        this.settouch();
    },
    init(textDataArr){
        this.nowText=null;
        this.textEnd=true;
        this.tt=0;


        this.textIndex = -1;
        this.textDataArr = textDataArr;
        this.node.active = true;
        this.nexttext();
    },
    nexttext(){
        if(!this.textEnd)return;
        if(++this.textIndex<this.textDataArr.length){
            this.setTextData(this.textDataArr[this.textIndex]);
        }else{
            this.closeDialog();
        }
    },
    settouch(){
        this.node.on('touchstart',function(event){
            console.log('touchstart');
            this.nexttext();
        },this);
    },
    setTextData(textData){
        if(!this.textEnd)return;
        this.textEnd = false;


        this.nameLabel.string=rolemap[textData.role].name;
        this.textLabel.string='';
        this.nowText = textData.content;


        cc.loader.loadRes(rolemap[textData.role].url,cc.SpriteFrame,(err,texture)=>{
            this.picSprite.spriteFrame=texture;
        });
    },
    closeDialog(){
        this.node.active=false;
    },
    //start () {

    //},

    update (dt) {
        if(!this.nowText)return;
        this.tt+=dt;
        if(this.tt>=0.05){
            if(this.textLabel.string.length<this.nowText.length){
                this.textLabel.string = this.nowText.slice(0,this.textLabel.string.length+1);
            }else{
                this.textEnd = true;
                this.nowText = null;
            }
            this.tt=0;
        }

    },
});

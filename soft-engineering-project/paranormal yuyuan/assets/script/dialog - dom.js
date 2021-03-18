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
        url:'role/21'
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
            {role:1,content:'/*今天是我来华科报道的第一天。*/'},
            {role:1,content:'/*一路走下来环境还可以，宿舍条件也不错。*/'},
            {role:1,content:'/*只是，有一件事情让我很在意。*/'},
            {role:1,content:'/*已经是晚上了，4号床的室友还是没有出现，他会在哪呢？*/'},
            {role:1,content:'你们有人知道4号床的兄弟去哪了吗？'},
            {role:2,content:'不知道啊，不过他东西还在桌上呢，人肯定来了。'},
            {role:3,content:'我也没见过他，不知道他去忙什么了。'},
            {role:2,content:'你们有没有听说过，华科有一个恐怖的传说。'},
            {role:2,content:'每年入学的新生中，都会有一部分凭空消失。据说还没有人发现原因。'},
            {role:3,content:'好像计算机学院实验室那边阴气很重，到了晚上大家都不敢单独过去。'},
            {role:2,content:'噢噢我也听说过，我有一个朋友在那看见过不干净的东西。'},
            {role:1,content:'啊，还有这样的事。那我去南一楼找找他吧。'},
            
           // {role:1,content:'为什么这个电梯在自动运转呢？'},

           // {role:1,content:'咦，我不是在南一楼吗，怎么就到图书馆了。'},
            //{role:1,content:'那就先探索一下吧。'},

            
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

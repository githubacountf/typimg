const textLists = ['Hello World', 'This is my App', 'How are you?', 'Today is sunny', 'I love JavaScript!', 'Good morning', 'I am Japanese', 'Let it be', 'Samurai', 'Typing Game', 'Information Technology', 'I want to be a programmer', 'What day is today?', 'I want to build a web app', 'Nice to meet you', 'Chrome Firefox Edge Safari', 'machine learning', 'Brendan Eich', 'John Resig', 'React Vue Angular', 'Netscape Communications', 'undefined null NaN', 'Thank you very much', 'Google Apple Facebook Amazon', 'ECMAScript', 'console.log', 'for while if switch', 'var let const', 'Windows Mac Linux iOS Android', 'programming'];

let untyped=''
let typed=''
let score=0;
const untypedfield = document.getElementById("untyped");
const typedfield=document.getElementById("typed");
const wrap=document.getElementById("wrap");
const start=document.getElementById("start")
const count=document.getElementById("count")

const createText = () => {
    typed="";
    typedfield.textContent=typed;

    let num = Math.floor(Math.random() * textLists.length);
    untyped=textLists[num]
    untypedfield.textContent = textLists[num];
};

const keyPress = e =>{
    if(e.key!==untyped.substring(0,1)){
        wrap.classList.add("mistyped")
        setTimeout(()=>{
            wrap.classList.remove("mistyped");
        },100)
        return;
    }
    // console.log(e.key);
    score++;
    wrap.classList.remove("mistyped")
    typed+=untyped.substring(0,1)
    untyped=untyped.substring(1)
    // 最初の文字（インデックス 0 の文字）を除いた残りの部分を取り出す
    typedfield.textContent=typed;
    untypedfield.textContent=untyped
    
    if(untyped===""){
        createText();
    }
};
document.addEventListener("keypress",keyPress);
const gameover=id=>{
    clearInterval(id);
    // console.log("ゲーム終了!")
    const result=confirm(rankCheck(score));
    if(result==true){
        window.location.reload();
    }
}

const timer =()=>{
    let time=count.textContent;
    const id=setInterval(()=>{
        time--;
        count.textContent=time;
        if(time<=0){
            gameover(id);
        }
    },1000);
}
const rankCheck=score=>{
    let text=score+'文字打てました!'
    if (score<100){
        text="あなたのランクはCです。\nBランクまであと"+(100 - parseInt(score))+"文字です。";
    }else if(score<300){
        text="あなたのランクはBです。\nAランクまであと"+(200 - parseInt(score))+"文字です。";
    }else if(score>=300){
        text="あなたのランクはAです。\nおめでとうございます!`"
    }
    return score+"文字打てました!"+text+"\n[ok]リトライ/[キャンセル]終了";
}


start.addEventListener("click",()=>{
    timer()
    createText();
    start.style.display="none"
    document.addEventListener("keyPress",keyPress);
})
untypedfield.textContent="スタートボタンで開始";

// let text="Hello"
// text.substring(開始のインデックス[,終了インデックス]);

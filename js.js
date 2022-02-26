const containerEl=document.querySelector(".container");
const things=["n Aspiring coder."," Web developer."," Tinkerer.","n Explorer."," Good friend ;)"];
let thingsindex=0;
let charachterindex=0;
updatetext();
function updatetext(){
    charachterindex++;
    containerEl.innerHTML=`
    <h1>I am a${things[thingsindex].slice(0,charachterindex)}</h1>
`;

if(charachterindex===things[thingsindex].length)
{
    thingsindex++;
    charachterindex=0;
}
if(thingsindex===things.length)
{
    thingsindex=0;
}
setTimeout(updatetext,240);
}

let comp_score = 0 , user_score = 0;
let user_choice , comp_choice;
let choices = document.querySelectorAll(".choice");
let msg = document.getElementById("message");
let c_score_display = document.getElementById("computer_score");
let u_score_display = document.getElementById("player_score");
let options = ["Rock " ,"Paper" , "Scissors"];
let new_game = document.createElement("button");
new_game.innerText = "New Game";
new_game.setAttribute("id","new_game");
function getCompChoice(){
    let c = Math.floor(Math.random()*3);
    return c;
}
function updateScore(){
    u_score_display.innerText = user_score;
    c_score_display.innerText = comp_score;
}
function getWinner(num){
    document.body.append(new_game);
    let c = getCompChoice();
    if(num == c){
        msg.innerText = "It's a Draw 😐 , Computer chose "+options[c];
        return ; 
    }
    if((num+1)%3 == c){
        msg.innerText = "Computer Won 🥹 , Computer chose "+options[c];
        comp_score++;
        updateScore();
        return;
    }
    msg.innerText = "Congrats You Won!!!🥹  , Computer chose "+options[c];
    user_score++;
    updateScore();
}
new_game.onclick = function(){
    user_score = 0;
    comp_score = 0;
    msg.innerText = "Best of luck!😊";
    new_game.remove();
    updateScore();
}
// for(let i=0;i<3;i++){ //why not working???
//     // choices[i].addEventListener('click',getWinner(i));
//     choices[i].onclick = getWinner(i);
// }
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var thinks = ["Uderz mnie teraz jadem lub zmień się na niewidzialny na komendę, abyś mógł mnie ominąć. Słuchaj, wiem, jak bardzo tego chcesz, dzieciaku, ale jeszcze tego nie masz. Przykro mi.",
"Aaron, to Jeff. Słuchaj, chcę, żebyś do mnie zadzwonił, jeśli słyszałeś od Milesa. On ma A- ma dla ciebie miękkie miejsce i nie słyszeliśmy od niego, a wiesz, że nie wyciągnę ręki, gdyby to nie było ważne. Mam nadzieję, że jesteś dobry.",
"Moją ulubioną rzeczą w Peterze jest to, że sprawił, że wszyscy czuliśmy się potężni. Wszyscy mamy takie lub inne uprawnienia. Ale na swój własny sposób wszyscy jesteśmy Spider-Manem. I wszyscy na Ciebie liczymy.", 
"Kiedy czuję się samotny, jakby nikt nie rozumiał, przez co przechodzę, pamiętam moich przyjaciół, którzy to rozumieją. Nigdy nie myślałem, że będę w stanie zrobić cokolwiek z tych rzeczy, ale mogę. Każdy może nosić maskę. Możesz nosić maskę.",
"Prawdziwy Spider-Man nie mógł mnie nawet pokonać. Jesteś niczym! Zabrałeś moją rodzinę. A teraz upewnię się, że nigdy więcej nie zobaczysz swojego"];
var button = document.querySelector('.button');
console.log(button);
var think = document.querySelector('.think');
console.log(think);
button.onclick = function(){
    think.innerHTML = thinks[getRandomInt(thinks.length)];
}
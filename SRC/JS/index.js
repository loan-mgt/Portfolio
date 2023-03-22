console.log("loaded")
const commitCounter = document.querySelector(".commit_nb");
const tableDiv = document.querySelector(".back-table");
const loadingSplash = document.querySelector(".loading");
const skills = document.querySelectorAll(".sub-panel");
const skillBtns = document.querySelectorAll(".skill-title");
const bages = document.querySelectorAll(".d-badge");
const skillsHash = {
	"Développer": document.querySelector("#dev"),
	"Optimiser": document.querySelector("#opti"),
	"Administrer": document.querySelector("#admin"),
	"Gérer": document.querySelector("#manag"),
	"Conduire": document.querySelector("#drive"),
	"Collaborer": document.querySelector("#coll"),

}
let tableShadowPos = 0;

loadingSplash.style.zIndex = -2;
let commit = 0
addEventListener("scroll", (event) => {

	let scroll =
            (window.scrollY /
                (document.body.scrollHeight - window.innerHeight)) *
            100;
	scroll = Math.round(scroll);



	if (scroll>45 && scroll<60){
		tableDiv.classList.add("visible")

	}else{
		tableDiv.classList.remove("visible")
	}

});

for(const bage of bages){
	bage.addEventListener("click", (event) =>{
		console.log(event.target.innerText )
		window.location.hash = "";
		window.location.hash = "skill";
		const target = skillsHash[event.target.innerText ];
		console.log(target)
		
		showSkill(target.id);
		showActif(target);

		});
		

}


let count = 0
for (const btn of skillBtns){
	btn.id=count
	btn.addEventListener("click", (event) =>{
		showSkill(event.currentTarget.id)
		showActif(event.currentTarget)
		const newAngle = parseInt(tableShadowPos+2)*90 ;
		console.log(document.querySelector(':root').style.setProperty('--gradDirectionValue',newAngle+'deg'))
		for(const pan of document.querySelectorAll('.back-pan')){
			pan.classList.toggle('rotate')
		}
		tableShadowPos++
	})
	count++

}

function showActif(target){

	for(const skillbtns of skillBtns){
		skillbtns.classList.remove("actif")
	}

	target.classList.add("actif")
}

function showSkill(id){
	let countSkill = 0;
	for (const skill of skills){
		if (countSkill == id){
			skill.classList.add("actif");
		}else{
			skill.classList.remove("actif");
		}
		countSkill++;
	}
}




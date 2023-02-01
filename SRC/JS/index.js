console.log("loaded")
const commitCounter = document.querySelector(".commit_nb");
const tableDiv = document.querySelector(".back-table");
const loadingSplash = document.querySelector(".loading");
loadingSplash.style.zIndex = -2;
let commit = 0
addEventListener("scroll", (event) => {

	let scroll =
            (window.scrollY /
                (document.body.scrollHeight - window.innerHeight)) *
            100;
	scroll = Math.round(scroll);



	if (scroll>80){
		tableDiv.classList.add("visible")

	}else{
		tableDiv.classList.remove("visible")
	}

});







async function  getAllRepo(name) {
	let res = await fetch("https://api.github.com/users/"+name+"/repos")
	res = await  res.json()
	let repos = [];
	if (res.length>0){
		res.forEach((repo) =>{
			repos.push(repo["name"])
		});
	}
	return repos;
	
}

async function getCommit(user, owner, repo) {
  let page = 0
  let count = 0;
  let status =200;
  res_len = -1;
  while (res_len != 0 && status===200 ){
  	console.log("status", status)
  	try{
  	let res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?author=${user}&per_page=100&page=${page}`);
  	res = await res.json();
  	count += res.length;
  	res_len = res.length;

  	status = await res.status
  	} catch{
  		res_len = 0
  	}finally{
  		page++;
  	}
  }
  
  return count === undefined ? 0 : count  ;
}

async function updateCommit() {
	const  name = "qypol342";
	const repos = await getAllRepo(name)
	let commit = []
	for (var i = 0; i < repos.length; i++) {
		
		const tmp_commit = await getCommit(name,name,repos[i]);
		commit.push( tmp_commit);
	}

	console.log(commit)
}

async function updateCommitEl(el) {
	const  name = "qypol342";
	const repos = await getAllRepo(name)
	let commit = 0
	
	for (var i = 0; i < repos.length; i++) {
		commit += await getCommit(name,name,repos[i]) 
	}
	console.log("commit brefor tchou", commit)
	commit +=  await getCommit(name,'icepick4','TchouTchou'); 
	console.log("commit after tchou",commit)
	el.innerHTML = "+" +commit ;



	console.log(" final number",commit)
}


updateCommitEl(commitCounter)
.then(function() {console.log("end")})

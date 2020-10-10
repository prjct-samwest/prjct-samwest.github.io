(function (){

    let getJSON = function (url){

        let requestURL = url;
        let request = new XMLHttpRequest();

        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {

            let superHeroes = request.response;

            if (typeof superHeroes === "string") {
                superHeroes = JSON.parse(superHeroes);
            }

            printProjects(superHeroes);
        }

    }
    let printProjects = function (obj){

        let wrap = document.querySelector('.Projects');
        let projects = obj.projects;
        let html = '';

        for(let i=0; i<projects.length; i++){

            let project = projects[i];
            let name = project.name;
            let type = project.type;
            let description = project.description;
            let links = project.links;

            html +=
                '<section class="Project"><h2 class="Project-name">' + name + '</h2><div class="Project-genre">' + type + '</div><p class="Project-description">' + description + '</p>';

            if(links.length)
                html += '<ul class="Project-btns">';

            for(let j=0; j<links.length; j++){

                let link = links[j];
                let label = link[0];
                let url = link[1];

                html += '<li><a href="' + url + '">' + label + '</a></li>';

            }

            if(links.length)
                html += '</ul>';

            html +=
                '</section>';
        }

        wrap.innerHTML += '<div class="column">' + html + '</div>';

    }

    //getJSON('projects.json');

})();
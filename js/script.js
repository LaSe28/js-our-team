let container = document.querySelector('.team-container')
let card;  

let arrTeam = [
    {
        name : 'Wayne Barnett',
        profession : 'Founder & CEO',
        photo : 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        profession : 'Chief Editor',
        photo : 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        profession : 'Office Manager',
        photo : 'img/walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        profession : 'Social Media Menager',
        photo : 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        profession : 'Developer',
        photo : 'img/scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        profession : 'Graphic Designer',
        photo : 'img/barbara-ramos-graphic-designer.jpg'
    },
]

for (let i = 0; i < arrTeam.length; i++){
    for (let kay in arrTeam[i]){
        card =  
        `<div class="team-card">
            <div class="card-image">
                <img
                    src="${arrTeam[i]['photo']}"
                    alt="${arrTeam[i]['name']}"
                />
            </div>
            <div class="card-text">
                <h3>${arrTeam[i]['name']}</h3>
                <p>${arrTeam[i]['profession']}</p>
            </div>
        </div>`
    }
    container.innerHTML += card
}















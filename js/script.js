let container = document.querySelector('.team-container')
let card;
let inputName = document.querySelector('#name')
let inputRole = document.querySelector('#role')
let inputImage = document.querySelector('#image')
let btnAdd = document.querySelector('#addMemberButton')
let containerAlert = document.querySelector('#add-member')

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
                <img src="${arrTeam[i]['photo']}"alt="${arrTeam[i]['name']}"/>
            </div>
            <div class="card-text">
                <h3>${arrTeam[i]['name']}</h3>
                <p>${arrTeam[i]['profession']}</p>
            </div>
        </div>`
    }
    container.innerHTML += card
}


btnAdd.addEventListener('click', function(){
    setTimeout (addedNewMember, 1000)
    container.innerHTML = ''
    let newMember = {
        name : inputName.value,
        profession : inputRole.value,
        photo : inputImage.value,
    }
    arrTeam.push(newMember)
    for (let i = 0; i < arrTeam.length; i++){
        for (let kay in arrTeam[i]){
            card =  
            `<div class="team-card">
                <div class="card-image">
                    <img src="${arrTeam[i]['photo']}"alt="${arrTeam[i]['name']}"/>
                </div>
                <div class="card-text">
                    <h3>${arrTeam[i]['name']}</h3>
                    <p>${arrTeam[i]['profession']}</p>
                </div>
            </div>`
        }
        container.innerHTML += card
    }
})


function addedNewMember(){
    let message = document.createElement("div")
    message.style.height = '200px'
    message.style.width = '400px'
    message.style.backgroundColor = 'white'
    message.style.borderRadius = '1rem'
    message.style.margin = 'auto'
    message.style.position = 'fixed-top'
    message.style.zIndex = '5'
    message.style.textAlign = 'center'
    message.style.fontSize = '2rem'
    message.innerHTML = `${inputName.value} <br> è stato aggiunto al Team!`
    containerAlert.prepend(message) 
    setTimeout (hideMessage, 5000)
    function hideMessage(){
        message.style.display = 'none'
    }
}












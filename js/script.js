const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
    ];

    function createCard(name, role, image) {
    let div = 
    `<div class="team-card">
        <div class="card-image">
        <img
            src="img/${image}"
            lt="${name}"
        />
        </div>
        <div class="card-text">
            <h3>${name}</h3>
            <p>${role}</p>
        </div>
        </div>`

        return div;
}
    const cardContainer = document.querySelector('.team-container');
    for (let i = 0; i < team.length; i++) {
    const div = createCard(team[i].name,team[i].role,team[i].image);
    cardContainer.innerHTML += div;
}

    const formButton = document.getElementById('addMemberButton');
    formButton.addEventListener('click', function () {
    const nameValue = document.getElementById('name').value;
    const roleValue = document.getElementById('role').value;
    const imageValue = document.getElementById('image').value;

    if (nameValue != '' && roleValue != '' && imageValue != '') {
        const obj = {
        name: nameValue,
        role: roleValue,
        image: imageValue
        };
        team.push(obj);
        const div = createCard(nameValue, roleValue, imageValue);
        cardContainer.innerHTML += div;
    } else {
        console.log('Dati errati o mancanti');
    }
});
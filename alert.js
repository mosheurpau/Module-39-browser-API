// alert('ma is comming..');

const maComing = () => {
    alert('Ammu is comming. Open the book.');
}

const askPicnic = () => {
    const responce = confirm('Are you goning to pic nic?.');
    console.log(responce);
    if (responce === true) {
        alert('amake fee ta bkash kore de.');
    }
    else {
        alert('Doore giay mor!!!');
    }
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}
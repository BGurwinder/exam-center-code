userdata = [];

centerdata = [
  'jaito',
  'faridkot',
  'kotkapura', 'bathinda',
  'moga', 'punjab', 'haryana'
];

function random() {
  let center = Math.floor(Math.random() * centerdata.length);
  while (userdata.includes(center)) {
    center = Math.floor(Math.random() * centerdata.length);
  }
  return center;
}

function addUser(users) {
  let checkuser = userdata.filter((currentuser) => {
    return currentuser.email === users.email;
  });

  if (checkuser.length === 0) {
    const center = random(); // Generate center once
    users.center = center; // Assign center to user object
    userdata.push(users);
    display(); // Update the display
  } else {
    alert("User Exist!!");
  }
}
function display() {
    let container = document.getElementById('result');
    container.innerHTML = "";
  
    userdata.forEach((user) => {
      let userdiv = document.createElement('div');
      userdiv.classList.add('result1');
  
      let pname = document.createElement('p');
      pname.innerText = user.name;
  
      let pemail = document.createElement('p');
      pemail.innerText = user.email;
  
      let pcenter = document.createElement('p');
      pcenter.innerText = centerdata[user.center]; // Access the center name
  
      container.appendChild(userdiv);
      userdiv.appendChild(pname);
      userdiv.appendChild(pemail);
      userdiv.appendChild(pcenter);
    });
  }
  

function add() {
  let username = document.getElementById('name').value;
  let useremail = document.getElementById('email').value;
  let users = {
    name: username,
    email: useremail
  };
  addUser(users);
}

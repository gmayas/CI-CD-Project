import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

const fetchData = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_APP_API);
    const dataUsers = await response.json();
    const userList = document.createElement('div');
    dataUsers.map( (user) =>{ 
      userList.innerHTML += `
                              <div> 
                                <h3>${user.name}</h3>
                              </div>
                              `
    });
    const users = document.getElementById("users");
    if(users) {
      users.appendChild(userList);
    };
    
  }
  catch (e) {
    console.log(e);
    console.log("Error msg;", e);    
  };
};

fetchData();

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>🙂🖐 CI/CD Project. 🙂🖐</h1>
    <h2>Users Name:</h2>
    <div id="users"></div>
    <footer>
        <div>© 2024 Copyright: <a> GMayaS C:/> Desarrollo en Sistemas.</a></div>
    </footer>
  </div>
`;
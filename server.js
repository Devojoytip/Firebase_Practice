import firebaseConfig from './info';

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
let contactFormDB = firebase.database().ref("encompass-financial");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = getElementVal("name");
  let mobile = getElementVal("mobile");
  let email = getElementVal("email");
  let seekingHelpFor = getElementVal("seekingHelpFor");
  let herdFrom = getElementVal("herdFrom");
  let problemDesc = getElementVal("problemDesc");

  saveMessages(name,mobile, email, seekingHelpFor,herdFrom,problemDesc);
}

const saveMessages = (name,mobile, email, seekingHelpFor,herdFrom,problemDesc) => {
  let newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    mobile:mobile,
    email: email,
    seekingHelpFor:seekingHelpFor,
    herdFrom:herdFrom,
    problemDesc:problemDesc
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
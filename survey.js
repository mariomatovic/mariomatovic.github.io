const SCRIPT_URL = 'PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE';

document.addEventListener('DOMContentLoaded', () => {

  // Survey1 login button
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', () => loginSurvey('survey1'));

  // Survey2 login inline button
  window.loginSurvey = function(survey) {
    const company = document.getElementById(survey==='survey1'?'company':'company2').value.trim();
    const password = document.getElementById(survey==='survey1'?'password':'password2').value.trim();
    const loginError = document.getElementById(survey==='survey1'?'loginError':'loginError2');

    loginError.textContent = 'Checking...';

    fetch(SCRIPT_URL, {
      method:'POST',
      body: JSON.stringify({action:'checkPassword', company, password}),
    }).then(r=>r.json()).then(data=>{
      if(data.success){
        if(survey==='survey1'){
          document.getElementById('login').style.display='none';
          document.getElementById('survey1Form').style.display='block';
          setupForm('survey1Form','Survey1Responses',company);
        } else {
          document.getElementById('login2').style.display='none';
          document.getElementById('survey2Form').style.display='block';
          if(data.requireName) document.getElementById('nameField').style.display='block';
          setupForm('survey2Form','Survey2Responses',company);
        }
      } else {
        loginError.textContent='Invalid company or password.';
      }
    }).catch(err=>{
      console.error(err);
      loginError.textContent='Network error. Check deployment URL and permissions.';
    });
  };

  function setupForm(formId, sheetName, company) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const formData = new FormData(form);
      const obj = {};
      formData.forEach((val,key)=>obj[key]=val);
      fetch(SCRIPT_URL,{
        method:'POST',
        body: JSON.stringify({action:'submitSurvey', sheet:sheetName, responses:{Company:company,...obj}})
      }).then(r=>r.json()).then(data=>{
        if(data.success){
          form.reset();
          document.getElementById(formId==='survey1Form'?'submitMsg':'submitMsg2').textContent='Survey submitted successfully!';
        } else {
          document.getElementById(formId==='survey1Form'?'submitMsg':'submitMsg2').textContent='Failed to submit.';
        }
      }).catch(err=>{
        console.error(err);
        document.getElementById(formId==='survey1Form'?'submitMsg':'submitMsg2').textContent='Network error.';
      });
    });
  }

  window.setupForm = setupForm;
});

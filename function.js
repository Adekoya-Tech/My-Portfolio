const tablinks = document.getElementsByClassName("tab-links");
      const tabcontents = document.getElementsByClassName("tab-contents");
      function opentab(tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
      }
      // const sidemenu = document.getElementById("sidemenu");
      function showSidebar() {
  const sidebar = document.getElementById('sidemenu')
  sidebar.style.display = 'flex'

  }
  function hideSidebar(){
  const sidebar = document.getElementById("sidemenu");
  sidebar.style.display ='none'

  }

     const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_ehfnl1y";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

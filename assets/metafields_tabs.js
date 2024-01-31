window.addEventListener('load', (event) => {
  validateDataStrcuture(document.querySelector('#tab_specifications'));
  validateDataStrcuture(document.querySelector('.tab_accordition_mobile_container_content.specifications'));

  validateDataStrcuture(document.querySelector('#tab_talla'));
  validateDataStrcuture(document.querySelector('.tab_accordition_mobile_container_content.talla'));
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

function tabsMobile(e) {
  e.parentElement.classList.toggle('active');
}
document.getElementById('defaultOpen').click();

function validateDataStrcuture(e) {
  let currContent = e.outerHTML.split('>');
  let counterX = 1;
  let newUl = document.createElement('ul');
  currContent.forEach((x) => {
    let currValue = x.replace('\n', '').replace('<br', '').replace('</div', '').replace('<br>', '');
    if (counterX > 1 && counterX != currContent.length) {
      let newLi = document.createElement('li');
      newLi.innerText = currValue;
      newUl.appendChild(newLi);
    }
    counterX++;
  });

  let children = e.childNodes;
  for (const node of children) {
    e.removeChild(node);
  }

  e.appendChild(newUl);
}

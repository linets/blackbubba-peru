if (window.location.search.includes('d-active')) {
  document.querySelector('.drawer').classList.add('active');
}

function addToCart(e) {
  let variant = e.dataset.variant;

  let sectionsToUpdate = 'ajax-cart';

  let requestBody = {
    items: [
      {
        id: variant,
        quantity: 1,
      },
    ],
    sections: sectionsToUpdate,
  };

  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.sections); // prints HTML of the section
      window.location.href = window.location.pathname + '?d-active=true';
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  /*
    console.log(variant);
    jQuery.post('/cart/add.js', {
      quantity: 1,
      id: variant
    });
    */
}

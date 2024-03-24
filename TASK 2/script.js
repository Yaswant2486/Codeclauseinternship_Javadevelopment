document.querySelector('.nav__toggle').addEventListener('click', () => {
    document.querySelector('.nav__links').classList.toggle('showNav');
  });

  const checkinInput = document.querySelector('#checkin');
  const checkoutInput = document.querySelector('#checkout');
  function updateDate()
   {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
  
    const minDate = yyyy + '-' + mm + '-' + dd;
    checkinInput.setAttribute('min', minDate);
    checkoutInput.setAttribute('min', minDate);
  }
  checkinInput.addEventListener('change', () => {
    const checkinValue = new Date(checkinInput.value);
    checkoutInput.setAttribute('min', (checkinValue.getTime() + 86400000));
  });
  
  updateDate();
  document.querySelectorAll('a[href^="#"').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
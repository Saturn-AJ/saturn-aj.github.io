window.addEventListener('load', () => {
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      alert(`Welcome back! Your last order was: ${lastOrder}`);
    }
  });
  
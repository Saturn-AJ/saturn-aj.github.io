document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('findNearby');
  if (!btn) {
    console.error('Button not found');
    return;
  }

  document.getElementById('findNearby').addEventListener('click', () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
          localStorage.setItem('lastLocation', JSON.stringify({ latitude, longitude }));
        },
        (error) => alert('Location access denied or unavailable.')
      );
    } else {
      alert('Geolocation not supported on this device.');
    }
    });
  });
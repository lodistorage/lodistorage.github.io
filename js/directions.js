/**
 * Lodi Storage
 */

// Cross-platform navigation support
function openDirections() {
  // Location coordinates and label
  const lat = 41.039768;
  const lng = -82.003317;
  const label = 'Lodi Storage';
  const address = '118 Highland Dr, Lodi, OH 44254';
  
  // Detect iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  if (isIOS) {
    // Apple Maps format
    window.open(`https://maps.apple.com/?address=${encodeURIComponent(address)}&ll=${lat},${lng}&q=${encodeURIComponent(label)}`);
  } else {
    // Google Maps format (works on Android, desktop, etc.)
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=ChIJOxOzfdA30YkRhaq9JTL8IvE`);
  }
  
  return false; // Prevent default link behavior
}
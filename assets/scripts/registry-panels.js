window.addEventListener('DOMContentLoaded', () => {
  const divider = document.querySelector('.divider');
  let listPanel = document.querySelector('.list-panel');
  const main = document.querySelector('main');

  let isDragging = false;
  let initialX = 0;
  let panelWidth = 0;

  divider.addEventListener('mousedown', (event) => {
    isDragging = true;
    initialX = event.clientX;
    panelWidth = listPanel.offsetWidth;
  });

  document.addEventListener('mousemove', (event) => {
    if (isDragging) {
      const deltaX = event.clientX - initialX;
      const newWidth = panelWidth + deltaX;

      // Snap to 100%, 50%, or minimal width
      const snappedWidth = snapTo(newWidth, [0, panelWidth / 2, panelWidth]);

      listPanel.style.width = `${snappedWidth}px`;

    // Update class based on snapped width
    if (snappedWidth === panelWidth) {
      listPanel.classList.remove('half-width', 'minimal-width');
      listPanel.classList.add('full-width');
    } else if (snappedWidth === panelWidth / 2) {
      listPanel.classList.remove('full-width', 'minimal-width');
      listPanel.classList.add('half-width');
    } else {
      listPanel.classList.remove('full-width', 'half-width');
      listPanel.classList.add('minimal-width');
    }
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  function snapTo(value, targets) {
    let closestTarget = targets[0];
    let closestDistance = Math.abs(value - closestTarget);

    for (let i = 1; i < targets.length; i++) {
      const distance = Math.abs(value - targets[i]);
      if (distance < closestDistance) {
        closestTarget = targets[i];
        closestDistance = distance;
      }
    }

    return closestTarget;
  }


  let panelState = 'half'; // Initial state is half
  let startY = 0; // To track the initial touch point
  let endY = 0; // To track the end touch point

  // const listPanel = document.querySelector('.list-panel');
  const handle = document.querySelector('.handle');

  function handleSwipe() {
    const swipeDistance = startY - endY; // Calculate swipe distance
    if (swipeDistance > 30) {
      if (panelState === 'minimal') {
        listPanel.classList.remove('minimal');
        listPanel.classList.add('half');
        panelState = 'half';
      } else if (panelState === 'half') {
        listPanel.classList.remove('half');
        listPanel.classList.add('full');
        panelState = 'full';
      }
    }

    if (swipeDistance < -30) {
      if (panelState === 'full') {
        listPanel.classList.remove('full');
        listPanel.classList.add('half');
        panelState = 'half';
      } else if (panelState === 'half') {
        listPanel.classList.remove('half');
        listPanel.classList.add('minimal');
        panelState = 'minimal';
      }
    }
  }

  handle.addEventListener('touchstart', (event) => {
    console.log('touchstart',event);
    startY = event.touches[0].clientY; // Record the starting Y position
  });

  handle.addEventListener('touchend', (event) => {
    console.log('touchend',event);
    endY = event.changedTouches[0].clientY; // Record the ending Y position
    handleSwipe(); // Handle the swipe after touch ends
    map.invalidateSize();
  });

});

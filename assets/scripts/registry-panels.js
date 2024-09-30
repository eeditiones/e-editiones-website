function _applyClasses(endY, initialY, listPanel) {

  const diff = Math.abs(initialY - endY);
  console.log('diff', diff);
  if(diff <= 50) return;
  if (endY >= initialY) {
    if (listPanel.classList.contains('half')) {
      listPanel.classList.remove('half');
      listPanel.classList.add('minimal');
    }
    if (listPanel.classList.contains('full')) {
      listPanel.classList.remove('full');
      listPanel.classList.add('half');
    }

  }
  if (endY <= initialY) {
    if (listPanel.classList.contains('full')) {
      listPanel.classList.remove('full');
      listPanel.classList.add('half');
    }
    if (listPanel.classList.contains('half')) {
      listPanel.classList.remove('half');
      listPanel.classList.add('full');
    }
    if (listPanel.classList.contains('minimal')) {
      listPanel.classList.remove('minimal');
      listPanel.classList.add('half');
    }
  }

  listPanel.style.top = null;

}

window.addEventListener('DOMContentLoaded', () => {
  const divider = document.querySelector('.divider');
  const mapPanel = document.querySelector('#map');
  const listPanel = document.querySelector('#list-container');

  const main = document.querySelector('main');

  let isDragging = false;
  let initialX = 0;
  let initialY = 0;
  let panelWidth = 0;
  let panelHeight = 0;

  divider.addEventListener('mousedown', (event) => {
    initialX = event.clientX;
    initialY = event.clientY;
    panelWidth = listPanel.offsetWidth;
    panelHeight = listPanel.offsetHeight;
    isDragging=true;
  });

  document.addEventListener('mousemove', (event) => {
    if (isDragging) {
      listPanel.style.top = `${event.clientY}px`;
    }
  });

  document.addEventListener('mouseup', (event) => {
    isDragging = false;
    endY = event.clientY;
    console.log('initialY', initialY)
    console.log('endY', endY)
    // listPanel.style.top = null;
    _applyClasses(endY, initialY, listPanel);
    // listPanel.style.top = 'initial';
    // handleSwipe();
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
  const handle = document.querySelector('#header-container');

  function handleSwipe() {
    const swipeDistance = startY - endY; // Calculate swipe distance
    if (swipeDistance > 10) {
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

    if (swipeDistance < -10) {
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
    map.invalidateSize();
  }

  handle.addEventListener('touchstart', (event) => {
    console.log('touchstart',event);
    startY = event.touches[0].clientY; // Record the starting Y position
    isDragging=true;
  });
  handle.addEventListener('touchmove', (event) => {
    listPanel.style.top = `${event.touches[0].clientY}px`;

  });
  handle.addEventListener('touchend', (event) => {
    console.log('touchend',event);
    endY = event.changedTouches[0].clientY; // Record the ending Y position
    handleSwipe(); // Handle the swipe after touch ends
    map.invalidateSize();
    listPanel.style.top = null;
    isDragging=false;
  });

});

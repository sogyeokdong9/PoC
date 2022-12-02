'use strict';

(function() {
  // const classCardContainer = document.querySelector('#class-card-container');

  const list = [
    {
      'id': '00000001',
      'english': 'go',
      'korean': '가다',
      'cardClicked': false,
      'cardSaved': false,
      'heardSound': false,
      'countListening': 15, 
      'mp3': 'sound/go__gb_4.mp3',
      'ogg': 'sound/go__gb_4.ogg',
    },
    {
      'id': '00000002',
      'english': 'come',
      'korean': '오다',
      'cardClicked': false,
      'cardSaved': false,
      'heardSound': false,
      'countListening': 15,
      'mp3': 'sound/come__gb_1.mp3',
      'ogg': 'sound/come__gb_1.ogg',
    }
  ]

  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    const d = document.createElement('div'); 
    d.className = 'col';

    const dd = document.createElement('div');
    dd.className = 'card h-100';
    dd.setAttribute('data-idx', element.id);
    dd.setAttribute('data-clicked', element.cardClicked);

    const ddd = document.createElement('div');
    ddd.className = 'card-body';
    const dddd = document.createElement('div');
    dddd.className = 'd-grid gap-2 d-md-flex justify-content-md-between'

    const b = document.createElement('button');
    b.setAttribute('type', 'button');
    b.className = 'btn btn-primary'
    b.setAttribute('data-bs-toggle', 'button');
    b.setAttribute('data-saved', element.cardSaved);
    
    const i = document.createElement('i');
    i.className = 'bi bi-star'
    
    const bb = document.createElement('button');
    bb.setAttribute('type', 'button');
    bb.className = 'btn btn-primary'
    bb.setAttribute('data-bs-toggle', 'button');
    bb.setAttribute('data-heard', element.heardSound);
    
    const ii = document.createElement('i');
    ii.className = 'bi bi-play-circle-fill';
    const h5 = document.createElement('h5');
    
    h5.className='card-title mt-3 mb-5';
    h5.append(element.english);

    const f = document.createElement('figure');
    const fc = document.createElement('figcaption');
    fc.className='text-black-50 mb-1';
    fc.append('go pronunciation English:');
    const au = document.createElement('audio');
    au.setAttribute('controls', true);
    au.setAttribute('src', element.mp3);
    const a = document.createElement('a');
    a.setAttribute('href', element.mp3);
    a.append('Download audio')

    d.appendChild(dd);
    dd.appendChild(ddd);
    ddd.appendChild(dddd);
    dddd.appendChild(b);
    b.appendChild(i);
    dddd.appendChild(bb);
    bb.appendChild(ii);
    ddd.appendChild(h5);
    ddd.appendChild(f);
    f.appendChild(fc);
    f.appendChild(au);
    au.appendChild(a);

    document.querySelector('#class-card-container').appendChild(d);

  }

  const cards = document.querySelectorAll('.card');

  // button for
  console.log(cards.length);
  console.log(cards);
  console.log(cards[0].dataset.idx);
  console.log(cards[0].dataset.clicked);
  console.log(cards[0]);
  console.log(cards[0].children);
  console.log(cards[0].children[0]);
  console.log(cards[0].children[0].children);
  console.log(cards[0].children[0].children[0]);
  console.log(cards[0].children[0].children[0].lastElementChild);
  // text for
  console.log(cards[0].children[0].children[1].innerText);

  for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    let initText = element.children[0].children[1].innerText; 

    // element.addEventListener('mouseover', function(e) { 
    //   element.classList.add('border-primary');
    // });

    element.addEventListener('click', function(e) { 
      
      element.classList.toggle('text-bg-primary');
      if (element.dataset.clicked === 'false') {
        element.dataset.clicked = true;
        list[index].cardClicked = true;
        element.children[0].children[1].innerText = list[index].korean;
        console.table(list);
      } else {
        element.dataset.clicked = false;
        list[index].cardClicked = false;
        element.children[0].children[1].innerText = list[index].english;
        console.table(list);
      }
      document.querySelector('h1').style.color = 'white';
      document.body.style.backgroundColor = 'rgba(0,0,0)';
    });

    // element.addEventListener('mouseleave', function(e) { 
    //   element.classList.remove('border-primary');
    // });

  }

  // console.table(list);
})();
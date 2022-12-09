'use strict';

(function () {

  // const list = [
  //   {
  //     'id': '00000001',
  //     'english': 'go',
  //     'pronunciationKey': '/ɡəʊ/',
  //     'korean': '가다',
  //     'cardClicked': false,
  //     'cardSaved': false,
  //     'heardSound': false,
  //     'countListening': 0,
  //     'mp3': 'sound/go4.mp3',
  //     'ogg': 'sound/go4.ogg',
  //     'mp4': 'sound/go4.mp4',
  //     'date': '',
  //   }
  // ]
  class Card {
    constructor(id, english, pronunciationKey, korean, mp3, ogg, mp4) {
      this.id = id;
      this.english = english;
      this.pronunciationKey = pronunciationKey;
      this.korean = korean;
      this.mp3 = mp3;
      this.ogg = ogg;
      this.mp4 = mp4;
    }
    cardClicked = false;
    cardSaved = false;
    heardSound = false;
    countListening = 0;
    date = '';
  }

  const list = [
    new Card('00000001','go','/kʌm/','가다','sound/go.mp3','sound/go.ogg','sound/go.mp4'),
    new Card('00000002','day','/kʌm/','하루, 날; 낮','sound/go.mp3','sound/go.ogg','sound/go.mp4'),
    new Card('00000003','story','/kʌm/','이야기','sound/go.mp3','sound/go.ogg','sound/go.mp4'),
    new Card('00000004','student','/kʌm/','학생','sound/go.mp3','sound/go.ogg','sound/go.mp4'),
    new Card('00000005','big','/kʌm/','큰','sound/go.mp3','sound/go.ogg','sound/go.mp4'),
    new Card('00000006','here','/kʌm/','여기에, 이쪽으로','sound/go.mp3','sound/go.ogg','sound/go.mp4'),
    new Card('00000007','word','/kʌm/','단어, 낱말','sound/go.mp3','sound/go.ogg','sound/go.mp4'),
    new Card('00000008','music','/kʌm/','음악','sound/go.mp3','sound/go.ogg','sound/go.mp4'),
    new Card('00000009','like','/kʌm/','좋아하다; ~와 같이, ~처럼','sound/go.mp3','sound/go.ogg','sound/go.mp4'),
    new Card('00000010','in','/kʌm/','공간] ~(안)에서; [시간] ~에','sound/go.mp3','sound/go.ogg','sound/go.mp4'),
    new Card('00000011','room','/kʌm/','방','sound/go.mp3','sound/go.ogg','sound/go.mp4'),
    new Card('00000012','happy','/kʌm/','행복한, 기쁜','sound/go.mp3','sound/go.ogg','sound/go.mp4')
  ]

  // Deep copy of source object
  const clone = JSON.parse(JSON.stringify(list));

  // Create HTML elments(card) 
  for (let index = 0; index < clone.length; index++) {
    const element = clone[index];

    let card = `
    <div class="col">
      <div class="card h-100" data-idx="${element.id}" data-clicked="${element.cardClicked}">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-primary" data-bs-toggle="button" data-saved="${element.cardSaved}">
              <i class="bi bi-star"></i>
            </button>
            <button type="button" class="btn btn-primary" data-heard="${element.heardSound}">
              <i class="bi bi-play-circle-fill"></i>
            </button>
          </div>
          <h5 class="card-title mt-3 mb-5">${element.english}</h5>
          <figure>
            <figcaption class="text-black-50 mb-2">${element.pronunciationKey}</figcaption>
            <audio controls="true" hidden="true">
              <source src="${element.mp3}" type="audio/mpeg">
              <source src="${element.ogg}" type="audio/ogg">
              <p>Your browser doesn't support HTML5 audio. Here is a <a href="${element.mp4}">link to download the audio</a> instead.</p>
            </audio>
          </figure>
        </div>
      </div>
    </div>`;

    document.querySelector('#class-card-container').innerHTML += card;
  }

  const cards = document.querySelectorAll('.card');

  // cards
  for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    let initText = element.children[0].children[1].innerText;

    element.addEventListener('click', function (e) {

      element.classList.toggle('text-bg-primary');
      if (element.dataset.clicked === 'false') {
        element.dataset.clicked = true;
        clone[index].cardClicked = true;
        element.children[0].children[1].innerText = clone[index].korean;
      } else {
        element.dataset.clicked = false;
        clone[index].cardClicked = false;
        element.children[0].children[1].innerText = clone[index].english;
      }
      document.querySelector('h1').style.color = 'white';
      document.body.style.backgroundColor = 'rgba(0,0,0)';
    });

  }

  // 🏹 Favorites, Playback, Translate
  const audioElements = document.querySelectorAll('audio');
  const saveButtons = document.querySelectorAll('.card-body > div > button:first-child');
  const playButtons = document.querySelectorAll('.card-body > div > button:last-child');

  for (let index = 0; index < playButtons.length; index++) {
    const playButton = playButtons[index];
    const saveButton = saveButtons[index];
    const audioElement = audioElements[index];

    playButton.addEventListener("click", handlePlayButton, false);

    // playAudio();
    async function playAudio() {
      try {
        await audioElement.play();
        playButton.classList.add("playing");
        playButton.children[0].className = "bi bi-pause-circle-fill";
      } catch (err) {
        playButton.classList.remove("playing");
        playButton.children[0].className = "bi bi-play-circle-fill";
      }
    }

    function handlePlayButton(event) {
      playButton.dataset.heard = true;
      clone[index].heardSound = true;
      clone[index].countListening += 1;

      if (audioElement.paused) {
        playAudio();
        playButton.children[0].className = "bi bi-play-circle-fill";
      } else {
        audioElement.pause();
        playButton.classList.remove("playing");
        playButton.children[0].className = "bi bi-play-circle-fill";
      }
      event.stopPropagation();
    }

    audioElement.addEventListener('play', function () {
      playButton.children[0].className = "bi bi-pause-circle-fill";
    });

    audioElement.addEventListener('ended', (event) => {
      playButton.children[0].className = "bi bi-play-circle-fill";
    });

    saveButton.addEventListener("click", handleSaveButton, false);

    function handleSaveButton(event) {
      document.querySelector('.table-responsive').style.display = 'block';
      const koreadDateFormat = new Intl.DateTimeFormat("ko", { dateStyle: 'full', timeStyle: 'medium' }).format(new Date());

      !clone[index].cardSaved ? updateCardView(true, 'bi bi-star-fill') : updateCardView(false, 'bi bi-star');;
      !clone[index].cardSaved ? updateCardModel(true, `${koreadDateFormat}`) : updateCardModel(false, `${koreadDateFormat}`);

      addBookmark();
      event.stopPropagation();
    }

    function updateCardModel(b, d) {
      clone[index].cardSaved = b;
      clone[index].date = d;
    }

    function updateCardView(b, n) {
      saveButton.dataset.saved = b;
      saveButton.children[0].className = n;
    }

  }

  function addBookmark() {
    remove_children('.table-responsive .table tbody');
    const saveCards = clone.filter(function(card) {
      return card.cardSaved == true;
    });

    for (let index = 0; index < saveCards.length; index++) {
      const element = saveCards[index];

      let row =`
      <tr class="bg-info p-2 text-white">
        <th scope="col">${index + 1}</th>
        <td class="text-nowrap">${element.english}</td>
        <td class="text-nowrap">${element.korean}</td>
        <td>${element.cardSaved}</td>
        <td class="text-nowrap">${element.date}</td>
      </tr>
      `

      document.querySelector('.table-responsive tbody').innerHTML += row;
    }
  }

  function remove_children(target) {
    const parent = document.querySelector(target);
    parent.innerHTML = "";
  }

})();
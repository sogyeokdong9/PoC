
'use strict';

(function () {

  /**
   * <!-- @description: Navbar --> 
   * <!-- haeder: navigation --> 
   * <!-- haeder: brand --> 
   * <!-- haeder: menu --> 
   * <!-- haeder: extra menu -->
   * 🪀 EOD means End of Document
   */


  /**
   * <!-- @description: Card --> 
   * <!-- main: Card: Container --> 
   * <!-- main: Card: Action('click') - Change (flip) the card. --> 
   * <!-- main: Card: Favorite Button --> 
   * <!-- main: Card: Action('click') - Change (add/remove) favorites. --> 
   * <!-- main: Card: Action('click') - Favorites: Toasts --> 
   * <!-- main: Card: Action('click') - Table: user --> 
   * <!-- main: Card: Playback Button --> 
   * <!-- main: Card: Action('click') - Change (play/stop) the sound. --> 
   * <!-- main: Card: English Text --> 
   * <!-- main: Card: Korean Text --> 
   * <!-- main: Card: Pronunciation Text --> 
   * <!-- main: Card: 🥷🏿 Audio --> 
   */


  // const list = [
  //   {
  //     'id': '00000001',
  //     'english': 'go',
  //     'partOfSpeech': 'verb',
  //     'pronunciationKey': '/&#609;əʊ/',
  //     'korean': '가다',
  //     'mp3': '/classCard/sound/go.mp3',
  //     'ogg': '/classCard/sound/go.ogg',
  //     'mp4': '/classCard/sound/go.mp4',
  //     'isPlay': false,                      📌
  //     'isFavorite': false,                  📌
  //     'isFlip': false,                      📌
  //     'play': 0,                            📌
  //     'clicks' = 0;                         📌
  //     'playDate': [],                       📌
  //     'favoriteDate': [],                   📌
  //     'flipDate': [],                       📌
  //   }
  // ]

  // 💿 Data source (list) and deep copied data copy (copy)

  const account = 'user';

  const setExposePartsSpeech = true;
  class Card {
    constructor(id, english, partOfSpeech, pronunciationKey, korean, mp3, ogg, mp4) {
      this.id = id;
      this.english = english;
      this.partOfSpeech = partOfSpeech;
      this.pronunciationKey = pronunciationKey;
      this.korean = korean;
      this.mp3 = mp3;
      this.ogg = ogg;
      this.mp4 = mp4;
    }
    isPlay = false;
    isFavorite = false;
    isFlip = false;
    play = 0;
    clicks = 0;
    playDate = [];
    favoriteDate = [];
    flipDate = [];
  }

  const obj = [
    new Card('00000001', 'go', 'verb', '/kʌm/', '가다', '/classCard/sound/go.mp3', '/classCard/sound/go.ogg', '/classCard/sound/go.mp4'),
    new Card('00000002', 'day', 'noun', '/de&#618;/', '하루, 날; 낮', '/classCard/sound/go.mp3', '/classCard/sound/go.ogg', '/classCard/sound/go.mp4'),
    new Card('00000003', 'story', 'noun', '/&#712;stɔ&#720;ri/', '이야기', '/classCard/sound/go.mp3', '/classCard/sound/go.ogg', '/classCard/sound/go.mp4'),
    new Card('00000004', 'student', 'noun', '/&#712;stju&#720;dnt/', '학생', '/classCard/sound/go.mp3', '/classCard/sound/go.ogg', '/classCard/sound/go.mp4'),
    new Card('00000005', 'big', 'adjective', '/b&#618;&#609;/', '큰', '/classCard/sound/go.mp3', '/classCard/sound/go.ogg', '/classCard/sound/go.mp4'),
    new Card('00000006', 'here', 'adverb', '/h&#618;ə(r)/', '여기에, 이쪽으로', '/classCard/sound/go.mp3', '/classCard/sound/go.ogg', '/classCard/sound/go.mp4'),
    new Card('00000007', 'word', 'noun', '/wɜ&#720;d/', '단어, 낱말', '/classCard/sound/go.mp3', '/classCard/sound/go.ogg', '/classCard/sound/go.mp4'),
    new Card('00000008', 'music', 'noun', '/&#712;mju&#720;z&#618;k/', '음악', '/classCard/sound/go.mp3', '/classCard/sound/go.ogg', '/classCard/sound/go.mp4')
    // new Card('00000009','like','/la&#618;k/','좋아하다; ~와 같이, ~처럼','/classCard/sound/go.mp3','/classCard/sound/go.ogg','/classCard/sound/go.mp4'),
    // new Card('00000010','in','/&#618;n/','공간] ~(안)에서; [시간] ~에','/classCard/sound/go.mp3','/classCard/sound/go.ogg','/classCard/sound/go.mp4'),
    // new Card('00000011','room','/ru&#720;m/,  /rʊm/','방','/classCard/sound/go.mp3','/classCard/sound/go.ogg','/classCard/sound/go.mp4'),
    // new Card('00000012','happy','/&#712;hæpi/','행복한, 기쁜','/classCard/sound/go.mp3','/classCard/sound/go.ogg','/classCard/sound/go.mp4')
  ]

  // Deep copy of source object
  const copy = JSON.parse(JSON.stringify(obj));


  // 💿 Create HTML Elements(card & tr) 

  for (let index = 0; index < copy.length; index++) {
    const element = copy[index];

    let exposePartsSpeech = setExposePartsSpeech ?
      `<small class="ms-1 text-dark" data-parent="speech">${element.partOfSpeech}</small>` : null;

    let card = `
    <div class="col">
      <div class="card h-100 transition-all" data-idx="${element.id}" data-clicked="${element.isFlip}">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-primary p-0" data-bs-toggle="button" data-saved="${element.isFavorite}">
              <i class="bi bi-star"
              data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Favorites"></i> <span class="visually-hidden">Favorites</span>
            </button>
            <button type="button" class="btn btn-primary p-0" data-heard="${element.isPlay}">
              <i class="bi bi-play-circle-fill"
              data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Playback"></i> <span class="visually-hidden">Playback</span>
            </button>
          </div>
          <h5 class="card-title mt-3 mb-5">${element.english}${exposePartsSpeech}</h5>
          <figure>
            <figcaption class="text-black-50 mb-2">${element.pronunciationKey}</figcaption>
            <audio controls="true" hidden>
              <source src="${element.mp3}" type="audio/mpeg">
              <source src="${element.ogg}" type="audio/ogg">
              <p>Your browser doesn't support HTML5 audio. Here is a <a href="${element.mp4}">link to download the audio</a> instead.</p>
            </audio>
          </figure>
        </div>
      </div>
    </div>`;
    document.querySelector('#card-container').innerHTML += card;
  }

  // Tooltip

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  generatedCardTable();

  // 💿 Event Handlers: card, favorites, playback, audio

  const cards = document.querySelectorAll('.card');
  const audios = document.querySelectorAll('audio');
  const favorites = document.querySelectorAll('.card-body > div > button:first-child');
  const playbacks = document.querySelectorAll('.card-body > div > button:last-child');

  for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    const playback = playbacks[index];
    const favorite = favorites[index];
    const audio = audios[index];

    // card

    card.addEventListener("click", handleFlipCard, false);

    function handleFlipCard(event) {
      copy[index].clicks += 1;

      const koreanDate = new Intl.DateTimeFormat("ko", { dateStyle: 'full', timeStyle: 'medium' }).format(new Date());
      copy[index].flipDate.push(koreanDate);

      card.classList.toggle('text-bg-primary');

      copy[index].isFlip = !copy[index].isFlip ? true : false;

      if (card.dataset.clicked === 'false') {
        card.dataset.clicked = true;
        copy[index].isFlip = true;
        card.children[0].children[1].innerText = copy[index].korean;
        card.style.transform = "scaleY(-1) scaleY(-1)";

      } else {
        card.dataset.clicked = false;
        copy[index].isFlip = false;
        card.children[0].children[1].innerText = copy[index].english;
        card.style.transform = "scaleY(1) scaleY(1)";
      }
      card.children[0].children[1].style.transform += "scale(1.125)";

      // let bigger = copy[index].clicks * 2 + 16 + 'px';
      // card.children[0].children[1].style.fontSize = bigger;

      // handlePlayButton();
      generatedCardTable();

    }

    // favorites

    favorite.addEventListener("click", handleSaveButton, false);

    function handleSaveButton(event) {
      document.querySelector('.table-responsive').style.display = 'block';
      const koreanDate = new Intl.DateTimeFormat("ko", { dateStyle: 'full', timeStyle: 'medium' }).format(new Date());

      let toastHtml = `
      <div id="liveToast" class="toast align-items-center text-bg-dark border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
          Added '<b>${copy[index].english}</b>' to your favorites.
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
      `;

      document.querySelector('.toast-container').innerHTML = toastHtml;


      if (!copy[index].isFavorite) {
        copy[index].isFavorite = true;
        copy[index].favoriteDate.push(koreanDate);
        favorite.dataset.saved = true;
        favorite.children[0].className = 'bi bi-star-fill';
        // Displayed only for saving favorites.
        const toastLiveExample = document.getElementById('liveToast')
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show();
      } else {
        copy[index].isFavorite = false;
        copy[index].favoriteDate.push(koreanDate);
        favorite.dataset.saved = false;
        favorite.children[0].className = 'bi bi-star';
      }
      generatedCardTable();
      event.stopPropagation();
    }

    // playback

    playback.addEventListener("click", handlePlayButton, false);

    async function playAudio() {
      try {
        await audio.play();
        playback.classList.add("playing");
        playback.children[0].className = "bi bi-pause-circle-fill";
      } catch (err) {
        playback.classList.remove("playing");
        playback.children[0].className = "bi bi-play-circle-fill";
      }
    }

    function handlePlayButton(event) {
      if (audio.paused) {
        playAudio();
        playback.children[0].className = "bi bi-play-circle-fill";
      } else {
        audio.pause();
        playback.classList.remove("playing");
        playback.children[0].className = "bi bi-play-circle-fill";
      }
      event.stopPropagation();
    }

    // sound

    audio.addEventListener('play', function () {
      playback.children[0].className = "bi bi-pause-circle-fill";
    });

    audio.addEventListener('ended', (event) => {
      playback.dataset.heard = true;
      copy[index].isPlay = true;
      copy[index].play += 1;

      const koreanDate = new Intl.DateTimeFormat("ko", { dateStyle: 'full', timeStyle: 'medium' }).format(new Date());
      copy[index].playDate.push(koreanDate);
      playback.children[0].className = "bi bi-play-circle-fill";
      generatedCardTable();
    });

  }

  // 💿 Generate Card Table

  function generatedCardTable() {

    remove_children('#thead-container');
    remove_children('#tbody-container');

    function isAdmin() {
      return account === 'admin' ? true : false;
    }

    let id = isAdmin() ?
      `<th scope="col" class="d-none d-xxl-table-cell">ID</th>` : `<!-- @user: omit -->`;
    let favoriteCangeTime = isAdmin() ?
      `<th scope="col" class="d-none d-xxl-table-cell"> <span class="visually-hidden">Favorite Change </span>Time </th>` : `<!-- @user: omit -->`;
    let playeCount = isAdmin() ?
      `<th scope="col" class="d-none d-xxl-table-cell"> <span class="visually-hidden">Play </span>Count </th>` : `<!-- @user: omit -->`;
    let playedTime = isAdmin() ?
      `<th scope="col" class="d-none d-xxl-table-cell"> <span class="visually-hidden">Played </span>Time </th>` : `<!-- @user: omit -->`;
    let fliped = isAdmin() ?
      `<th scope="col" class="d-none d-xxl-table-cell">Fliped</th>` : `<!-- @user: omit -->`;
    let flipCount = isAdmin() ?
      `<th scope="col" class="d-none d-xxl-table-cell"> <span class="visually-hidden">Flip </span>Count </th>` : `<!-- @user: omit -->`;
    let flipChangeTime = isAdmin() ?
      `<th scope="col" class="d-none d-xxl-table-cell"> <span class="visually-hidden">Flip Change </span>Time </th>` : `<!-- @user: omit -->`;

    let theadTr = `
      <tr class="text-start">
        <th scope="col" class="text-nowrap">#</th>
        ${id}
        <th scope="col" class="text-nowrap"><i class="bi bi-star-fill"></i> <span class="visually-hidden">Favorited</span></th>
        ${favoriteCangeTime}
        <th scope="col" class="text-nowrap">English</th>
        <th scope="col" class="text-nowrap">Pronunciation</th>
        <th scope="col" class="text-nowrap">Part of speech</th>
        <th scope="col" class="text-nowrap">Korean</th>
        <th scope="col" class="text-nowrap"><i class="bi bi-play-circle-fill"></i> <span class="visually-hidden">Played</span></th>
        ${playeCount}
        ${playedTime}
        ${fliped}
        ${flipCount}
        ${flipChangeTime}
      </tr>
    `

    document.querySelector('.table-responsive thead').innerHTML += theadTr;

    for (let index = 0; index < copy.length; index++) {
      const element = copy[index];

      let isFlip = element.isFlip ?
        `<tr class="table-primary text-start">` : `<tr class="text-start">`;
      let isFavorite = element.isFavorite ?
        `<i class="bi bi-star-fill"></i>` : `<i class="bi bi-star"></i>`;
      let isPlay = element.isPlay ?
        `<i class="bi bi-play-circle-fill"></i>` : `<i class="bi bi-play-circle"></i>`;

      let id = isAdmin() ?
        `<td class="d-none d-xxl-table-cell">${element.id}</td>` : `<!-- @user: omit -->`;
      let favoriteCangeTime = isAdmin() ?
        `<td class="d-none d-xxl-table-cell text-nowrap">${element.favoriteDate.at(-1)}</td>` : `<!-- @user: omit -->`;
      let playeCount = isAdmin() ?
        `<td class="d-none d-xxl-table-cell">${element.play}</td>` : `<!-- @user: omit -->`;
      let playedTime = isAdmin() ?
        `<td class="d-none d-xxl-table-cell text-nowrap">${element.playDate.at(-1)}</td>` : `<!-- @user: omit -->`;
      let fliped = isAdmin() ?
        `<td class="d-none d-xxl-table-cell">${element.isFlip}</td>` : `<!-- @user: omit -->`;
      let flipCount = isAdmin() ?
        `<td class="d-none d-xxl-table-cell">${element.clicks}</td>` : `<!-- @user: omit -->`;
      let flipChangeTime = isAdmin() ?
        `<td class="d-none d-xxl-table-cell text-nowrap">${element.flipDate.at(-1)}</td>` : `<!-- @user: omit -->`;

      let tbodyTr = `
      ${isFlip}
        <th scope="col">${index + 1}</th>
        ${id}
        <td><button type="button" class="btn p-0 btn-link" data-bs-toggle="button" disabled>${isFavorite}</button></td>
        ${favoriteCangeTime}
        <td class="text-nowrap">${element.english}</td>
        <td class="text-nowrap">${element.pronunciationKey}</td>
        <td class="text-nowrap">${element.partOfSpeech}</td>
        <td class="text-nowrap">${element.korean}</td>
        <td><button type="button" class="btn p-0 btn-link" data-bs-toggle="button" disabled>${isPlay}</button></td>
        ${playeCount}
        ${playedTime}
        ${fliped}
        ${flipCount}
        ${flipChangeTime}
      </tr>
      `

      document.querySelector('.table-responsive tbody').innerHTML += tbodyTr;

      console.table(copy);
    }
  }


  /**
   * <!-- @description: Event 🥷🏿🥷🏻-->
   * <!-- main: Event: Container -->
   * <!-- main: Event: Collapse``Do you already know all the words?  -->
   * <!-- main: Event: .collapse hides/show content(🥷🏿🥷🏻)  -->
   * <!-- main: Event: Collapse``✓ If you click the button, the card is not exposed, and if you again click it, it is exposed again.  -->
   * <!-- main: Event: Collapse``✓ I know everything, card1, ✓card1 ... ... ✓cardN -->
   * <!-- main: Event: Collapse``X Close(🥷🏻) -->
   */


  /**
   * <!-- @description: Table --> 
   * <!-- main: Table_Card Index -->
   * <!-- main: Table: Table for user confirmation -->
   * <!-- user: English/Pronunciation/Played/Korean/Favorited -->
   * <!-- main: Table: Table for admin confirmation -->
   * <!-- admin: ① All Information -->
   * <!-- admin: ② Change Favorites (Add/Remove): History (Count, Time) -->
   * <!-- admin: ③ Change Playback (Played): History (Count, Time) -->
   * <!-- admin: ④ Change Fliped (Card): History (Count, Time) -->
   */


  // <!-- haeder: extra menu -->

  // 🔵 Part of speech

  // document.querySelector('#part-of-speech').addEventListener('click', function () {
  //   const partOfSpeeches = document.querySelectorAll('small[data-parent="speech"');
  //   if (this.classList.contains('active')) {
  //     this.children[0].className = 'bi bi-tag';
  //     setExposure(partOfSpeeches, 'none');
  //   } else {
  //     console.log(this.className);
  //     this.children[0].className = 'bi bi-tag-fill';
  //     setExposure(partOfSpeeches, '');
  //   }
  // });

  // function setExposure(target, value) {
  //   for (const iterator of target) {
  //     iterator.style.display = value;
  //   }
  // }


  function remove_children(target) {
    const parent = document.querySelector(target);
    parent.innerHTML = "";
  }

})();

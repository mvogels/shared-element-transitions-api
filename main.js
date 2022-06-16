import './style.css'

const listView = document.querySelector('.list');
const detailView =  document.querySelector('.detail');

let isDetail = false;
let currentThumbImg = null;
let currentDetailImg = null;

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (e) => navigate(e, link));
});

async function navigate(e, link) {
  e.preventDefault();

  if (!document.createDocumentTransition) {
    toggleView();
    return;
  }

  if (!currentThumbImg) {
    currentThumbImg = link.querySelector('img');
  }

  currentDetailImg = detailView.querySelector('img');

  if (currentThumbImg) {
    currentThumbImg.style.pageTransitionTag = 'article-img';
  }

  const transition = document.createDocumentTransition();
  await transition.start(() => toggleView());

  if (!isDetail) {
    currentThumbImg.style.pageTransitionTag = '';
    currentThumbImg = null;
  }
}

function toggleView() {
    if (isDetail) {
      listView.style.display = 'grid';
      detailView.style.display = 'none';
    } else {
      listView.style.display = 'none';
      detailView.style.display = 'block';
    }

    isDetail = !isDetail;
}
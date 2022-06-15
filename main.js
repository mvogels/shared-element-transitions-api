import './style.css'

const listView = document.querySelector('.list');
const detailView =  document.querySelector('.detail');
let isDetail = false;

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (e) => navigate(e));
});

async function navigate(e) {
  e.preventDefault();

  if (!document.createDocumentTransition) {
    toggleView();
    return;
  }

  const transition = document.createDocumentTransition();
  await transition.start(() => toggleView());
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
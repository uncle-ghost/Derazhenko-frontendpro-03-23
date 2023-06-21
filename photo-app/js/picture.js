const template = document.getElementById('picture');
const pictures = document.querySelector('.pictures');

/* --- v1 --- */
// photoObj.forEach(photo => {
//   let clonedTemp = template.content.cloneNode(true)
//   clonedTemp.querySelector('.picture__img').src = photo.url
//   clonedTemp.querySelector('.picture__likes').innerHTML = photo.likes
//   clonedTemp.querySelector('.picture__comments').innerHTML = photo.comments
//
//   pictures.append(clonedTemp)
// })

/* --- v2 --- */
let fragment = document.createDocumentFragment();

photos.forEach(photo => {
  let clonedTemp = template.content.cloneNode(true)
  clonedTemp.querySelector('.picture__img').src = photo.url
  clonedTemp.querySelector('.picture__likes').innerHTML = photo.likes
  clonedTemp.querySelector('.picture__comments').innerHTML = photo.message.length

  fragment.append(clonedTemp)
})

pictures.append(fragment)


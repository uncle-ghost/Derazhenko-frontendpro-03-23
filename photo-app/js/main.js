const likes = {min: 15, max: 200},
      arrayLength = 25,
      comments = [
        'Все відмінно!',
        'Загалом все непогано. Але не всі.',
        'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
        'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
        'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
        'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
      ],
      names = ['Андрій', 'Артур', 'Альберт', 'Броніслав', 'Володимир', 'Василь', 'Вільгельм', 'Гаврило', 'Георгій', 'Герман', 'Денис', 'Дмитро', 'Дарій', 'Едуард', 'Еммануїл', 'Євген', 'Єлизар', 'Жерар', 'Захар', 'Ілля', 'Іван', 'Інокентій', 'Йосип', 'Кирило', 'Крістіан', 'Лаврентій', 'Леон', 'Микола', 'Михайло', 'Митрофан', 'Назар', 'Олександр', 'Омелян', 'Павло', 'Роман', 'Родіон', 'Степан', 'Сергій', 'Тимофій', 'Тихон', 'Федір', 'Фома', 'Юліан', 'Ярослав', 'Яків']

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min + 1;
}

function getCommentsCount(count) {
  const newCommentBase = [...comments],
      newComments = []
  for (let i = 1; i <= count; i++) {
    let id = getRandomNumber(0, newCommentBase.length - 1)
    newComments.push(newCommentBase[id])
    newCommentBase.splice(id, 1)
  }

  return newComments
}

function createComments(i) {
  return {
    id: getRandomNumber(0, 999),
    avatar: `img/avatar-${i+1}.svg`,
    name: names[getRandomNumber(0, names.length - 1)],
    message: getCommentsCount(getRandomNumber(0, 2))
  }
}

function getPhotoObj(i) {
  return {
    id: i+1,
    url: `photos/${i+1}.jpg`,
    description: `photo-${i+1}`,
    likes: getRandomNumber(likes.min, likes.max),
    message: createComments()
  }
}

const photos = new Array(arrayLength).fill(null).map((_, i) => getPhotoObj(i))

console.log(photos)

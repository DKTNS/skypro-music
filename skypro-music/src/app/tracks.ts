const apiUrl = " https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all/";

export async function getTracks() {
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error("Ошибка получения данных");
  }
  return res.json();
}

// Описание запроса	Пример
// Получить все треки	GET - /catalog/track/all/
// Получить трек по id	GET - /catalog/track/<id>/
// Просмотреть избранное *	GET - /catalog/track/favorite/all/
// Добавить трек в избранное по id *	POST - /catalog/track/<id>/favorite/
// Удалить трек из избранного по id *	DELETE - /catalog/track/<id>/favorite/
// Создать подборкy *	POST - /catalog/selection
// Просмотреть подборки	GET - /catalog/selection/all
// Просмотреть подборку по id	GET - /catalog/selection/<id>/
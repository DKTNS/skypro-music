const apiUrl = "https://skypro-music-api.skyeng.tech/catalog/track/all/";

export async function getTracks() {
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error("Ошибка получения данных");
  }
  return res.json();
}


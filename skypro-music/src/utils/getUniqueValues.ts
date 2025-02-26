export function getUniqueValues<T, K extends keyof T>(
  items: T[], //массив объектов типа T. Тип T является обобщенным, что означает,
  //что он может быть любым типом, включая пользовательские типы данных.
  field: K //ключ объекта, по которому будут извлекаться уникальные значения. Тип K ограничен keyof T,
  //что означает, что он может быть только одним из ключей типа T.
): string[] {
  /* Функция создает новый экземпляр Set, который будет использоваться для хранения уникальных значений. 
    Set - это объект, который позволяет хранить уникальные значения любого типа. */
  const uniqueValues = new Set<string>();
  //функция проходит по каждому элементу в массиве items с помощью метода forEach
  items.forEach((item) => {
    //Для каждого элемента она добавляет значение, соответствующее ключу field, в Set
    uniqueValues.add(String(item[field]));
  });
  //После прохода по всем элементам массива функция
  //возвращает массив уникальных значений, преобразованный из Set с помощью Array.from()
  return Array.from(uniqueValues);
}

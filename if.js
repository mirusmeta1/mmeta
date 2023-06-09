function startFileDownload() {
  // Создаем ссылку на файл, который вы хотите загрузить
  var fileUrl = 'in.apk';

  // Создаем элемент <a> с ссылкой на файл
  var downloadLink = document.createElement('a');
  downloadLink.href = fileUrl;

  // Устанавливаем имя файла для загрузки (опционально)
  downloadLink.download = 'in.apk';

  // Симулируем клик по ссылке для начала загрузки файла
  downloadLink.click();
}

// Вызываем функцию при загрузке страницы
window.onload = startFileDownload;

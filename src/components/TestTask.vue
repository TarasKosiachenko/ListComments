<template>
  <div class="test">
    <div class="context">
      <div class="target">
        <h3>Вывести список комментариев на странице</h3>
        <p>Навигация по страницам</p>
        <ul>
          <li>1. Показать еще</li>
          <li>2. Пагинация</li>
        </ul>
        <h3>Создать форму для отправки комментариев</h3>
        <p>Поля формы</p>
        <ul>
          <li>1. name имя</li>
          <li>2. text комментарий</li>
        </ul>
        <p>Все поля обязательные для заполнения</p>
      </div>
      <div class="logics">
        <h3>Логика</h3>
        <ul>
          <li>
            при клике на кнопку “Показать еще” подгружать следующие комментарии
          </li>
          <li>
            после подгрузки комментариев в пагинации страница становятся
            активной
          </li>
          <li>
            если больше нет комментариев, кнопка “Показать еще” должна быть
            скрыта
          </li>
          <li>
            при клике на страницу комментариев контент асинхронно меняется
          </li>
          <li>должно быть сообщение о результате отправки данных</li>
          <li>
            после добавления комментария обновляется пагинация если находимся на
            последней странице обновить данные комментариев
          </li>
        </ul>
      </div>
      <div class="api">
        <h3>API</h3>
        <h5>METHODS:</h5>
        <ul>
          <li>GET https://jordan.ashton.fashion/api/goods/30/comments</li>
          <li>Список комментариев</li>
          <li>POST https://jordan.ashton.fashion/api/goods/30/comments</li>
          <li>Отправка комментария</li>
          <li>Отправка данных в формате JSON</li>
        </ul>
      </div>
      <div class="more">
        <h5>Важно</h5>
        <ul>
          <li>1. Сборка с помощью webpack</li>
          <li>2. Верстка страницы должна адаптивна</li>
          <li>3. Стили, использовать черно-белую тему</li>
          <li>4. Валидация формы с подсказками</li>
          <li>5. Разработка должна быть компонентной</li>
          <li>6. Для работы с API использовать Fetch API</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestTask",
};
</script>

<style scoped>
.test {
  margin: 20px;
}
.context {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-align: left;
}
.context h3 {
  padding-left: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
}
</style>

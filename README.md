# Full Stack Electron/NodeJS developer

### **Задача 1**

[Ссылка на руководство по использованию](https://github.com/ChugunovRoman/ChillGamingTestTask/blob/master/desktop/README.md)

Требуется создать десктоп-приложение на **Electron** под платформу **Windows** с использованием **Vue/React** на выбор.

Реализовать **CRUD** с использованием **SQLite**:

*  Добавление нового пользователя:
    *  Имя пользователя
    *  Фамилия пользователя
    *  Дата рождения по **3** полям (выпадающими списками каждый)
        *  День
        *  Месяц (При изменении месяца, день должен очищаться в случае если такого дня не существует в месяце)
        *  Год (от **1970** по текущий включительно)
*  Редактирование пользователей (все поля, включая даты рождения) с учетом всех правил в пункте «Добавление нового пользователя»
*  Удаление пользователей с всплывающим окном подтверждения
*  Общий список пользователей

Закрытие приложения должно сохранять все данные в хранилище и подгружать его при повторном запуске.

Предоставить:
*  Исходный код приложения
*  Собранный бинарник приложения под **Windows**

Результат загрузить на **GitHub**


### **Задача 2**

[Ссылка на руководство по использованию](https://github.com/ChugunovRoman/ChillGamingTestTask/blob/master/api/README.md)

Требуется создать базовое **REST API**.

Метод: **POST**

*  Принимает в себя **JSON** из списка числовых значений. Например: `[ 2, 5, 10, 15, 20 ]`
*  Сами числа могут быть произвольными как по значению, так и по их количеству.
*  Возвращать **JSON** список с посчитанным числом Фибоначчи для каждого полученного.
*  Подсчёт чисел Фибоначчи реализовать вручную.
*  **API** должно быть асинхронным.
*  В случае отправки невалидного запроса в сторону **API**, возвращать **403 Forbidden**
*  В случае успеха, возвращать **JSON** список и код ответа **200**

Предоставить:

*  Исходный код приложения на **GitHub**
*  **Docker**-образ приложения на **DockerHub** с указанием используемого порта

# Задача 2 - REST API

### Использование

Чтобы запустить данное приложение, необходимо скачать и запустить контейнер с данным приложением.
Скачать контейнер:

```bash
docker pull 4tqrgqe5yrgfd/chillgaming_testtask:0.1.0
```

Запустить:

```bash
docker run -p 3000:3000 4tqrgqe5yrgfd/chillgaming_testtask:0.1.0
```

После запуска, API будет доступно по адресу `http://localhost:3000`

Данное API имеет один роут: `POST http://localhost:3000/fibonacci`

И документацию по API: `http://localhost:3000/documentation`

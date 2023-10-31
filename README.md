# Инструкция по запуску:

### 1) Создаем виртуальное окружение

python3 -m venv env

### 2) Активируем его

source env/bin/activate

### 3) Устанавливаем библиотеки Python

pip install -r requirements.txt

### 4) Переходим в Django проект

### 4) Выполняем миграции

python3 manage.py migrate

### 5) Загружаем данные в БД

python3 manage.py loaddata seeds/employees/seed.json

### 6) Переходим в папку safeboard_react

cd safeboard_react

### 7) Устанавливаем библиотеки

npm install

### 8) Билдим приложения для DRF

npm run build

### 9) Возвращаемся в главную папку проекта

cd ..

### 10) Запускаем приложение

python3 manage.py runserver

### 11) Открываем в браузере

http://127.0.0.1:8000/

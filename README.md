# Инструкция по запуску:

### 1) Создаем виртуальное окружение

python3 -m venv env

### 2) Активируем его

source env/bin/activate

### 3) Устанавливаем библиотеки Python

pip install -r requirements.txt

### 4) Переходим в Django проект

cd kaspersky

### 5) Выполняем миграции

python3 manage.py migrate

### 6) Загружаем данные в БД

python3 manage.py loaddata seeds/employees/seed.json

### 7) Переходим в папку safeboard_react

cd safeboard_react

### 8) Устанавливаем библиотеки

npm install

### 9) Билдим приложения для DRF

npm run build

### 10) Возвращаемся в главную папку проекта

cd ..

### 11) Запускаем приложение

python3 manage.py runserver

### 12) Открываем в браузере

http://127.0.0.1:8000/

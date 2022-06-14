#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка приложения
npm run build

#переход в каталог сборки
cd dist

# инициализация репозитория
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/K0t0pulta/vue-shop.git master:gh-pages

cd -


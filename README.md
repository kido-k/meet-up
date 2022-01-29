# セットアップ
## コンテナを起動する
docker-compose up -d

## コンテナに入って起動準備
docker-compose exec app /bin/bash
cd /work
yarn install

## viteの起動
yarn dev
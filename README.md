<p align="center"><a href="https://expressjs.com" target="_blank"><img src="https://image.pngaaa.com/668/4547668-middle.png" width="400"></a></p>


## Cài đặt và sử dụng Base Node JWT

#### Cài đặt docker

```
cd ~/path/to/project

docker-compose up -d --build
```

#### Run Nodejs
```
docker exec -it node_base /bin/sh

cp .env.example .env

cd databases

sequelize db:migrate

sequelize db:seed:all

npm run dev
```

#### Chạy thử
```
Tạo request POST tới URL:

http://127.0.0.1:8000/api/auth/login

admin:
email: admin@caerux.cms
password: 00000000

user:
email: user@caerux.cms
password: 00000000
```

#### Thư viện
1. [Sequelize](https://sequelize.org/v7)
2. [JWT](https://jwt.io)

## Happy coding !!!

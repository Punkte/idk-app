
FROM node:15.14.0-buster as app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN node node_modules/esbuild/install.js

RUN npm run build 


FROM nginx

EXPOSE 80

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

COPY  --from=app /app/dist  .

CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
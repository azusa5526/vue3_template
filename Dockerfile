FROM node:18.14.0 AS pre
COPY package.json package-lock.json ./
RUN npm version --allow-same-version --no-git-tag-version 1.0.0

FROM node:18.14.0 AS builder
WORKDIR /app
COPY --from=pre package.json package-lock.json ./
RUN npm ci --no-optional
COPY . .
RUN npm run build

FROM nginx
ENV TZ=Asia/Taipei
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezon
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ /usr/share/nginx/html
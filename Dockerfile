FROM node:20.9.0 as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the React app
RUN npm run build

FROM node:20.9.0
WORKDIR /usr/src/app
RUN npm install -g serve
COPY --from=builder /usr/src/app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
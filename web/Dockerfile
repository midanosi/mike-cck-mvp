FROM node:20.9-alpine AS sveltekit-build

WORKDIR /web
COPY package*.json .
RUN rm -rf node_modules
RUN rm -rf build
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine AS run

WORKDIR /web
COPY --from=build /web/package.json ./package.json
COPY --from=build /web/build ./build
RUN npm install --production
EXPOSE 3000
ENTRYPOINT [ "node", "build" ]

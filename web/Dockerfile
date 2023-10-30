# ----- BUILD
FROM node:20.9-alpine AS sveltekit-build

WORKDIR /app
COPY package*.json .
RUN rm -rf node_modules
RUN rm -rf build
RUN npm install
COPY . .
RUN npm run build



# ----- RUN
FROM node:20.9-alpine AS run
WORKDIR /app
# COPY --from=sveltekit-build /app/package.json ./package.json
# COPY --from=sveltekit-build /app/build ./build
COPY --from=sveltekit-build /app/build build/
COPY --from=sveltekit-build /app/node_modules node_modules/
COPY package.json .
RUN npm install --production
EXPOSE 3000
ENTRYPOINT [ "node", "build" ]

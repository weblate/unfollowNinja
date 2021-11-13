# -- For workers only, this does not launch the API
FROM node:16
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./
RUN pnpm install --frozen-lockfile --prod

# Bundle app source
COPY src src
COPY *.json ./
COPY *.js ./
RUN pnpm build

COPY tests tests
COPY locales locales
COPY .env .env

CMD [ "node", "./dist/workers.js" ]

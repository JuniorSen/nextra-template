FROM node:16
WORKDIR /

COPY . ./

# building the app
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

# Running the app
CMD [ "pnpm", "start" ]
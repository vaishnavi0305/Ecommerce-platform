FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

HEALTHCHECK --interval=30s --timeout=10s \
CMD wget --no-verbose --tries=1 --spider http://localhost:3004/health || exit 1

EXPOSE 3004

CMD ["node", "index.js"]

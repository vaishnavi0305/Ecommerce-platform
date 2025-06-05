FROM node:18-alpine
WORKDIR /app
COPY package*.json
RUN npm install

COPY . .

HEALTHCHECK --interval=30s --timeout=10s \
	CMD wget --no-verbose --tries=1 --spider http://localhost:5002/health || exit 1

EXPOSE 5002

CMD["node", "src/index.js"]

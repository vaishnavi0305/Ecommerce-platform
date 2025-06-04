FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3002

# ✅ Add Docker healthcheck — THIS is where it goes
HEALTHCHECK --interval=30s --timeout=10s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3002/health || exit 1

CMD ["node","index.js"]

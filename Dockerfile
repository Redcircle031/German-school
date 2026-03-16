FROM node:20-alpine
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Copy all source files
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start with npm start
CMD ["npm", "run", "start"]

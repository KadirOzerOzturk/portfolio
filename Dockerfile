# 1. Base image
FROM node:18

# 2. Çalışma dizini
WORKDIR /app

# 3. Dosyaları kopyala
COPY . .

# 4. Bağımlılıkları yükle
RUN npm install

# 5. 3000 portunu dışa aç
EXPOSE 3000

# 6. React development sunucusunu başlat
CMD ["npm", "start"]

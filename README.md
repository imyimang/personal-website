用 React.js + Tailwind.css + Vite 製作的個人網站

https://website-chi-seven-95.vercel.app/

> [!NOTE]  
> 這個專案只是為了讓我能方便部屬在vercel上，內容會隨時更改


## 部屬
用nginx部屬網站到外網

### Ubuntu
下載 node.js / npm
```bash
sudo npm install nodejs -y
sudo npm install npm -y
```

下載專案
```bash
git clone https://github.com/imyimang/personal-website.git
```

進入專案資料夾
```bash
cd personal-website
```

安裝庫
```bash
npm install
```

構建網站
```bash
npm run dev
```

現在網站已經運行在localhost上

安裝nginx
```bash
sudo apt install nginx
```
建立配置文件
```bash
sudo vim /etc/nginx/sites-available/mywebsite
```

輸入
```nginx
server {
    listen 80;  # 外網要用的端口

    server_name your_domain_or_ip;  # 用您的域名或IP替換

    location / {
        proxy_pass http://localhost:5137;  # 要轉發的網站
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

連結目錄
```bash
sudo ln -s /etc/nginx/sites-available/mywebsite /etc/nginx/sites-enabled/
```

重新加載nginx
```bash
sudo systemctl reload nginx
```
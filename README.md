# Huong dan sua portfolio

Ban chi can sua 2 noi chinh:

1. Noi dung: `content/portfolio-data.js`
   - Doi ten, title, mo ta, contact trong `profile`.
   - Doi cau typewriter trong `hero.phrases`.
   - Them/bot skill trong `skills.items`.
   - Doi thanh phan tram trong `softSkills.items`.
   - Them/bot project trong `projects.items`.

2. Hinh anh: `assets/images/`
   - Dat anh dai dien trong thu muc nay.
   - Ten file anh hien tai la `nhu-huy.jpg`.
   - Neu ban muon dung ten file khac, doi lai `hero.portrait.src` trong `content/portfolio-data.js`.

Khong can sua HTML cho cac thay doi noi dung thong thuong. `index.html` hien chi giu bo khung, JavaScript se tu render noi dung tu file data.

## Cach chay web local

Chay trong terminal:

```powershell
cd "E:\project\web-portfolio"
python start.py
```

Neu may khong nhan lenh `python`, dung:

```powershell
py start.py
```

File `start.py` se tu chon port con trong, tat cache, va mo trinh duyet. Terminal se in ra link local dang duoc dung, vi du:

```text
http://127.0.0.1:4174/
```

Neu port `4174` dang ban, script co the dung `4175`, `4176`, ... Hay mo dung link duoc in trong terminal.

De tat server, bam `Ctrl + C` trong terminal.

Sau khi sua `content/portfolio-data.js`, luu file va refresh trinh duyet. Server nay da tat cache, nen noi dung moi se hien ngay.

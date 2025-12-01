# Backend API Felhasználók és Feladatok Kezelésére

Ez egy egyszerű backend alkalmazás, amely Node.js és az Express keretrendszer segítségével készült. Az adatbázis-műveleteket a Sequelize ORM kezeli, és az adatokat egy SQLite adatbázisban tárolja.

## Funkcionalitás

Az API lehetővé teszi a felhasználók és a hozzájuk rendelt feladatok alapvető CRUD (Create, Read, Delete) műveleteinek elvégzését.

- **Felhasználók:** Létrehozhatók, listázhatók és törölhetők. Minden felhasználónak egyedi email címe van.
- **Feladatok:** Létrehozhatók, listázhatók és törölhetők. Minden feladat egy adott felhasználóhoz van rendelve.

## Telepítés és Futtatás

### Előfeltételek
- [Node.js](https://nodejs.org/)
- npm (a Node.js-sel együtt települ)

### Telepítés
1. Klónozd a repository-t.
2. Telepítsd a szükséges csomagokat:
   ```bash
   npm install
   ```

### Futtatás
Az alkalmazás elindításához futtasd a következő parancsot:
```bash
npm start
```
A szerver a `http://localhost:3000` címen fog futni. A `nodemon` segítségével a szerver automatikusan újraindul minden kódbeli változtatás után.

## API Végpontok (Endpoints)

### Gyökér
- `GET /`: Egyszerű üdvözlő üzenetet ad vissza, amellyel ellenőrizhető, hogy a szerver fut-e.
  - **Válasz:** `{"message":"A szerver sikeresen fut!"}`

### Felhasználók (`/users`)
- `POST /users`: Létrehoz egy új felhasználót.
  - **Request Body:** `{ "email": "teszt@example.com", "name": "Teszt Felhasználó" }`
  - **Sikeres válasz (201):** A létrehozott felhasználó adatai.

- `GET /users`: Visszaadja az összes felhasználót.
  - **Sikeres válasz (200):** Egy tömb, amely a felhasználói objektumokat tartalmazza.

- `DELETE /users/:id`: Töröl egy felhasználót a megadott `id` alapján.
  - **Sikeres válasz (200):** Törlési megerősítő üzenet.

### Feladatok (`/tasks`)
- `POST /tasks`: Létrehoz egy új feladatot. A `userId`-nak egy létező felhasználóra kell hivatkoznia.
  - **Request Body:** `{ "title": "Bevásárlás", "description": "Tej, kenyér, tojás", "userId": 1 }`
  - **Sikeres válasz (201):** A létrehozott feladat adatai.

- `GET /tasks`: Visszaadja az összes feladatot, a hozzájuk tartozó felhasználói adatokkal együtt.
  - **Sikeres válasz (200):** Egy tömb, amely a feladat objektumokat tartalmazza, beágyazott `User` objektummal.

- `DELETE /tasks/:id`: Töröl egy feladatot a megadott `id` alapján.
  - **Sikeres válasz (200):** Törlési megerősítő üzenet.
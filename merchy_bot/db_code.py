import sqlite3
import asyncio


class db:
    def __init__(self, datebase_file):
        self.connection = sqlite3.connect(database=datebase_file)
        self.cursor = self.connection.cursor()

    async def addNewUser(self, id_user, id_telegram, email, password, admin=False):
        with self.connection:
            return self.cursor.execute(
                "INSERT INTO 'users' ('id', 'id_telegram', 'admin', 'email', 'password') VALUES (?, ?, ?, ?, ?)",
                (id_user, id_telegram, admin, email, password))

    def getUserID(self, id_telegram):
        with self.connection:
            return self.cursor.execute("SELECT id FROM 'users' WHERE id_telegram = ?", (id_telegram,)).fetchall()

    def getUserEmail(self, id_telegram):
        with self.connection:
            return self.cursor.execute("SELECT email FROM 'users' WHERE id_telegram = ?", (id_telegram,)).fetchall()

    def getUserPassword(self, id_telegram):
        with self.connection:
            return self.cursor.execute("SELECT password FROM 'users' WHERE id_telegram = ?", (id_telegram,)).fetchall()

    async def getStatusAdmin(self, id_telegram):
        with self.connection:
            return await self.cursor.execute("SELECT admin FROM 'users' WHERE id_telegram = ?", (id_telegram,)).fetchall()

    def getStatus(self, id_telegram):
        with self.connection:
            return len(
                self.cursor.execute("SELECT id FROM 'users' WHERE id_telegram = ?", (id_telegram,)).fetchall()) != 0

    async def deleteUser(self, id_telegram):
        with self.connection:
            return self.cursor.execute("DELETE FROM 'users' WHERE id_telegram = ?", (id_telegram,))

    async def close(self):
        self.connection.close()

import Database from "better-sqlite3";

const db = new Database("tasks.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        done BOOLEAN
    );
`);

const result = db.prepare("SELECT COUNT(*) AS count FROM tasks").get();

if (result.count === 0) {
  const insertTask = db.prepare(`
        INSERT INTO tasks (title, done)
        VALUES (?, ?)
    `);

  insertTask.run("Learn SQLite", 0);
  insertTask.run("Build Task API", 0);
  insertTask.run("Test Persistence", 0);
}

export default db;

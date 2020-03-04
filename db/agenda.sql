BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Department" (
	"id"	TEXT NOT NULL UNIQUE,
	"description"	TEXT NOT NULL,
	"createdAt"	TEXT,
	"updatedAt"	TEXT,
	"deletedAt"	TEXT,
	"deleted"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "Assignment" (
	"contact"	INTEGER NOT NULL UNIQUE,
	"department"	INTEGER NOT NULL UNIQUE,
	"createdAt"	INTEGER,
	"updatedAt"	INTEGER,
	"deletedAt"	INTEGER,
	"deleted"	INTEGER,
	PRIMARY KEY("contact","department"),
	FOREIGN KEY("contact") REFERENCES "Contact"("id")
);
CREATE TABLE IF NOT EXISTS "Contact" (
	"id"	TEXT NOT NULL UNIQUE,
	"firstName"	TEXT NOT NULL,
	"lastName"	TEXT NOT NULL,
	"email"	TEXT NOT NULL,
	"gender"	TEXT NOT NULL,
	"birthDate"	TEXT NOT NULL,
	"phoneNumber"	TEXT NOT NULL,
	"address"	TEXT NOT NULL,
	"role"	TEXT NOT NULL,
	"notes"	TEXT NOT NULL,
	"createdAt"	TEXT,
	"updatedAt"	TEXT,
	"deletedAt"	TEXT,
	"deleted"	INTEGER,
	PRIMARY KEY("id")
);
INSERT INTO "Contact" ("id","firstName","lastName","email","gender","birthDate","phoneNumber","address","role","notes","createdAt","updatedAt","deletedAt","deleted") VALUES ('cd95f47a-4d91-443a-a31b-12575347a47f','algo','algo','algo','algo','01/02/1998','algo','algo','algo','algo','algo',NULL,NULL,NULL);

COMMIT;

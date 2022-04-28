BEGIN;

DROP TABLE IF EXISTS "user";

CREATE TABLE IF NOT EXISTS "user" (
    "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT Now(),
    "uptaded_at" TIMESTAMPTZ
);

COMMIT;
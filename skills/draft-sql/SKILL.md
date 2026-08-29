# Draft SQL

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Draft SQL”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

The owner needs SQL explained or written from a schema in the repo, as a draft only — never executed as a write against a live database.


## 2. Required inputs and access

- Schema source (migration files, schema.rb, SQL dump, or attached DDL)
- The question or the change they want expressed in SQL
- Rule that live writes are forbidden

## 3. Sequence of work

1. Read the named schema. Quote tables and columns you will use. If a table is missing, stop.
2. Prefer a SELECT that answers the question. Label destructive SQL as DRAFT — DO NOT RUN.
3. Explain what the statement does, what it locks, and what it can destroy.
4. Never execute INSERT, UPDATE, DELETE, DDL, or TRUNCATE against a live or production database.

## 4. How to validate the result

Every column exists in the schema you read. Writes are labeled unrun. No connection string or password appears in the draft.


## 5. What to return

Draft SQL, explanation, risk notes, and an action log of schema files read.


## 6. What requires approval

Do not run writes against a live database. Do not change production data. Even a production SELECT waits for an explicit ask.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.

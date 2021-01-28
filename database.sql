CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- favorite table
CREATE TABLE "favorite" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR (150) NOT NULL,
	"title" VARCHAR (60) NOT NULL,
	"category_id" INT
);

--populate favorite with some static data
INSERT INTO "favorite" ("url", "title", "category_id")
VALUES ('https://giphy.com/gifs/test-gw3IWyGkC0rsazTi', 'test GIF', 2), 
('https://giphy.com/gifs/latenightseth-seth-meyers-lnsm-yNs2a0jRkYxy6191B2','Fail Seth Meyers GIF by Late Night with Seth Meyers', 3), 
('https://giphy.com/gifs/school-college-test-12vJgj7zMN3jPy','motivational high school GIF', 5); 

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

--GET
SELECT * FROM "category";

--POST

--PUT

--DELETE

--GET ONE
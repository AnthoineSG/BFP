
BEGIN;

INSERT INTO "user" ("firstname", "lastname", "email", "password")
VALUES
('jean', 'naimar', 'detou', '123456'),
('lui', 'aussi', 'vraiment', '123456'),
('serieu', 'cnul', 'jaipa', '123456'),
('dinspi', 'pourdes', 'nom', '123456');


INSERT INTO "function" ("name")
VALUES
('manger'),
('bouger'),
('dormir'),
('doucher'),
('assoir');

INSERT INTO "category" ("name")
VALUES
('mobiliers'),
('couverts'),
('meubles'),
('nouritures'),
('autre');

INSERT INTO "place" ("name")
VALUES
('chambre'),
('cuisine'),
('salon'),
('bureau'),
('toilette'),
('salle de bain'),
('balcon'),
('couloir'),
('escalier'),
('jardin'),
('grenier');

INSERT INTO "product" ("name", "user_id", "function_id")
VALUES
('fourchette', 1, 1),
('lit', 2, 3),
('chaise', 1, 5),
('chaussure', 4, 2),
('savon', 4, 4),
('couteau', 3, 1),
('voiture', 3, 2),
('canape', 1, 5),
('tele', 3, 3),
('assiette', 4, 1),
('couverture', 2, 3);

INSERT INTO "product_has_category" ("product_id", "category_id")
VALUES
( 1, 2),
( 2, 1),
( 3, 3),
( 4, 5),
( 5, 5),
( 6, 2),
( 7, 5),
( 8, 1),
( 9, 1),
( 10, 2),
( 11, 5);

INSERT INTO "product_has_place" ("product_id", "place_id")
VALUES
( 1, 2),
( 2, 1),
( 3, 4),
( 4, 8),
( 5, 6),
( 6, 2),
( 7, 10),
( 8, 3),
( 9, 3),
( 10, 2),
( 11, 1);

COMMIT;
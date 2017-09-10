CREATE TABLE IF NOT EXISTS characters(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, json TEXT);
CREATE TABLE IF NOT EXISTS skills(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, rating INTEGER, attribute INTEGER);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Athletics', 
    'Running, jumping, swimming and acrobatics.', 1, 1);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Close Combat',
    'Armed melee combat, unarmed melee combat, and martial arts.', 1, 1);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Projectile Weapons',
    'Bows, crossbows,throwing weapons and certain other attacks.', 1, 1);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Firearms',
    'Pistols, shotguns, submachine guns and rifles.', 1, 1);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Heavy Weapons',
    'Machine guns, assault cannons, missle launchers and grenade launchers.', 1, 1);
                                                
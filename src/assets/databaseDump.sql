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
INSERT INTO skills(name, description, rating, attribute) VALUES ('Vehicle Weapons',
    'Vehicle-mounted weapons, drone-mounted weapons, and pintle mounts.', 1, 1);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Stealth',
    'Sneaking, palming, and pickpocketing.', 1, 1);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Piloting (Ground)',
    'Cars, trucks, bikes, even tanks. Wheeled and tracked drones too.', 1, 1);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Piloting (Other)',
    'Boats, planes, and pretty much anything that moves on something besides ground.', 1, 1);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Escape Artist',
    'Escape bindings, contortionism, and shaking a tail.', 1, 1);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Conjuring',
    'Summoning and banishing spirits. Magicians only. Cannot use untrained.', 1, 2);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Sorcery',
    'Spellcasting, ritual spellcasting, enchanting, and counterspelling. Magicians only. Cannot use untrained.', 1, 2);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Astral Combat',
    'Astral/spirit combat. Astral plane only. Magician only.', 1, 2);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Survival',
    'Wilderness survival, navigation, and fasting.', 1, 2);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Close Combat',
    'When attacking spirits only.', 1, 2);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Biotech',
    'First aid, medicine, and cybertechnology.', 1, 3);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Hacking',
    'Computer hacking and cybercombat.', 1, 3);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Electronics',
    'Computer hardware and software, cyberdeck repair.', 1, 3);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Engineering',
    'Auto repair, aircraft repair, and boat repair.', 1, 3);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Tasking',
    'Summoning sprites, threading complex forms, and other matrix tasks. Technomancers only. Cannot use untrained.', 1, 3);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Tracking',
    'Physical tracking, matrix tracking and shadowing.', 1, 3);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Con',
    'Con artistry, acting, performance, and ettiquette.', 1, 4);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Intimidation',
    'Influence, interrogation, and torture.', 1, 4);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Negotiation',
    'Bargaining, contracts, and diplomacy.', 1, 4);
INSERT INTO skills(name, description, rating, attribute) VALUES ('Disguise',
    'Camoflage, cosmetics, costuming, and digital alteration.', 1, 4);
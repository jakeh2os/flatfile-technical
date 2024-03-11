-- Insert sections
INSERT INTO sections(title) VALUES ('Backlog');
INSERT INTO sections(title) VALUES ('Ready for Development');
INSERT INTO sections(title) VALUES ('In Progress');
INSERT INTO sections(title) VALUES ('In Review');
INSERT INTO sections(title) VALUES ('Done');

-- Insert cards
INSERT INTO cards(title, section_id, description, assignee, url) VALUES ('Card drag/drop', (SELECT id FROM sections WHERE title='Backlog'), 'card1 drag/drop description','jake1','www.stuff1.com');
INSERT INTO cards(title, section_id, description, assignee, url) VALUES ('Card details', (SELECT id FROM sections WHERE title='Backlog'), 'card2 drag/drop description','jake2','www.stuff2.com');
INSERT INTO cards(title, section_id, description, assignee, url) VALUES ('Multiple boards', (SELECT id FROM sections WHERE title='Backlog'), 'card3 drag/drop description','jake3','www.stuff3.com');
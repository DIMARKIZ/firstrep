var Enemy1;                  // виды врагов
var Enemy2;
        Enemy1 = game.add.group();                          // описание первого врага
		Enemy1.enableBody = true;
		Enemy1.physicsBodyType = Phaser.Physics.ARCADE;
		Enemy1.createMultiple(5, 'troll1');
		Enemy1.setAll('anchor.x', 0.5);
		Enemy1.setAll('anchor.y', 0.5);
		Enemy1.setAll('scale.x', 0.5);
		Enemy1.setAll('scale.y', 0.5);
		Enemy1.setAll('angle', 180);
		Enemy1.setAll('outOfBoundsKill', true);
		Enemy1.setAll('checkWorldBounds', true);
		Enemy1.forEach(function(enemy){
			enemy.damageAmount = 10; 
			enemy.body.setSize(enemy.width * 3 / 4, enemy.height * 3 / 4);  // более точное столкновение
		});
		
		game.time.events.add(1000, launchEnemy1);                        // старт метеоритов
		
		Enemy2 = game.add.group();                        // описание второго врага
		Enemy2.enableBody = true;
		Enemy2.physicsBodyType = Phaser.Physics.ARCADE;
		Enemy2.createMultiple(30, 'troll2');
		Enemy2.setAll('anchor.x', 0.5);
		Enemy2.setAll('anchor.y', 0.5);
		Enemy2.setAll('scale.x', 0.5);
		Enemy2.setAll('scale.y', 0.5);
		Enemy2.setAll('angle', 180);
		Enemy2.forEach(function(enemy){
			enemy.damageAmount = 40;
			enemy.body.setSize(enemy.width * 3 / 4, enemy.height * 3 / 4);  // более точное столкновение
		});
		
		game.time.events.add(100, launchEnemy2);
		
		Enemy2evilBullets = game.add.group();                             // описание пуль второго врага
		Enemy2evilBullets.enableBody = true;
		Enemy2evilBullets.physicsBodyType = Phaser.Physics.ARCADE;
		Enemy2evilBullets.createMultiple(30, 'evilBullet');
		Enemy2evilBullets.callAll('crop', null, {x: 90, y: 0, width: 90, height: 70});
		Enemy2evilBullets.setAll('alpha', 0.9);
		Enemy2evilBullets.setAll('anchor.x', 0.5);
		Enemy2evilBullets.setAll('anchor.y', 0.5);
		Enemy2evilBullets.setAll('outOfBoundsKill', true);
		Enemy2evilBullets.setAll('checkWorldBounds', true);
		Enemy2evilBullets.forEach(function(enemy){
			enemy.body.setSize(20, 20);
		});
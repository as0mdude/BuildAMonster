class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.l_legX =260;
        this.l_legY =500;

        this.r_legX =350;
        this.r_legY =500;


        this.l_armX =220;
        this.l_armY =400;

        this.r_armX =380;
        this.r_armY =400;

        this.mouthX = 300;
        this.mouthY = 400;

        this.l_headX = 220
        this.l_headY = 300

        this.r_headX = 380
        this.r_headY = 300

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_blue.png");
        my.sprite.l_leg = this.add.sprite(this.l_legX, this.l_legY, "monsterParts", "leg_blueA.png");
        my.sprite.l_leg.setScale(-1, 1);
        my.sprite.r_leg = this.add.sprite(this.r_legX, this.r_legY, "monsterParts", "leg_blueA.png");
        my.sprite.l_arm = this.add.sprite(this.l_armX, this.l_armY, "monsterParts", "arm_blueE.png");
        my.sprite.l_arm.setScale(-1, 1);
        my.sprite.r_arm = this.add.sprite(this.r_armX, this.r_armY, "monsterParts", "arm_blueE.png");
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.l_head = this.add.sprite(this.l_headX, this.l_headY, "monsterParts", "detail_green_antenna_large.png");
        my.sprite.l_head.setScale(-1, 1);
        my.sprite.r_head = this.add.sprite(this.r_headX, this.r_headY, "monsterParts", "detail_green_antenna_large.png");
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.input.keyboard.addKey('A').isDown) {
            // Move the entire monster left
            this.bodyX -= 1; // Adjust the body X position
            this.l_legX -= 1; // Adjust the left leg X position
            this.r_legX -= 1; // Adjust the right leg X position
            this.l_armX -= 1; // Adjust the left arm X position
            this.r_armX -= 1; // Adjust the right arm X position
            this.mouthX -= 1; // Adjust the mouth X position
            this.l_headX -= 1; // Adjust the right arm X position
            this.r_headX -= 1;
            
            
        }

        if (this.input.keyboard.addKey('D').isDown) {
            // Move the entire monster left
            this.bodyX += 1; // Adjust the body X position
            this.l_legX += 1; // Adjust the left leg X position
            this.r_legX += 1; // Adjust the right leg X position
            this.l_armX += 1; // Adjust the left arm X position
            this.r_armX += 1; // Adjust the right arm X position
            this.mouthX += 1; // Adjust the mouth X position\
            this.l_headX += 1;
            this.r_headX += 1;
            
        }

        if (this.input.keyboard.addKey('S').isDown) {
            
            my.sprite.mouth.setTexture("monsterParts", "mouthA.png");
        }else if(this.input.keyboard.addKey('F').isDown){
            my.sprite.mouth.setTexture("monsterParts", "mouth_closed_fangs.png");
        }else{
            my.sprite.mouth.setTexture("monsterParts", "mouth_closed_happy.png");
        }

        
        
        my.sprite.body.x = this.bodyX;
        my.sprite.eye.x = this.bodyX;
        my.sprite.l_leg.x = this.l_legX;
        my.sprite.r_leg.x = this.r_legX;
        my.sprite.l_arm.x = this.l_armX;
        my.sprite.r_arm.x = this.r_armX;
        my.sprite.mouth.x = this.mouthX;
        my.sprite.l_head.x = this.l_headX;
        my.sprite.r_head.x = this.r_headX;

        my.sprite.body.y = this.bodyY;
        my.sprite.eye.y = this.bodyY;
        my.sprite.l_leg.y = this.l_legY;
        my.sprite.r_leg.y = this.r_legY;
        my.sprite.l_arm.y = this.l_armY;
        my.sprite.r_arm.y = this.r_armY;
        my.sprite.r_head.y = this.r_headY;
        my.sprite.l_head.y = this.l_headY;


       
    }

}
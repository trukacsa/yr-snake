class Snake {
    constructor(length, tiles) {
        this.length = length;
        this.tiles = tiles;
        this.direction = 1;
        this.pos = 0;
        this.start = [];
        this.body = [];
        this.generateSnake();
        this.startWatch();
    }

    startWatch() {
        var self = this;
        setInterval(function () {
            self.move();
        }, 100);
    }

    move() {
        switch (this.direction) {
            case 0: this.pos -= Math.sqrt(this.tiles.length);
                break;
            case 1:
                this.body.unshift(this.body[0] + 1);
                this.tiles[this.body.pop()].setEmpty();
                break;
            case 2: this.pos += Math.sqrt(this.tiles.length);
                break;
            default: this.pos--;
        }

        for (var i = 0; i < this.body.length; i++) {
            this.tiles[this.body[i]].setSnake();
        }

    }

    generateSnake() {
        this.pos = this.tiles.length / 2 + this.length;
        for (var i = 0; i < (this.length); i++) {
            this.tiles[this.pos - i].setSnake();
            this.body.push(this.pos - i);
        }
    }
}
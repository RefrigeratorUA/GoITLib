    'use strict';
    function parseGuess(guess) {
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
        if (guess === null || guess.length !== 2) {
            alert("Ты - лошара! Введи корректные координаты!");
        } else {
            var str = guess.toUpperCase();
            var firstChar = str.charAt(0);
            var row;
            if (!isNaN(firstChar)) {
                row = firstChar;
            } else {
                row = alphabet.indexOf(firstChar);
            }
            var column = guess.charAt(1);
            if (isNaN(row) || isNaN(column)) {
                alert("Блядь, ну опять не верные координаты!");
            } else if (row < 0 || row >= model.boardSize || column >= model.boardSize ) {
                alert("Сука, ты размер поля видишь?");
            } else {
                return row + column;
            }
        }
        return null;
    };
    function handleFireButton() {
        var guessInput = document.getElementById("guessInput");
        var guess = guessInput.value;
        controller.processGuess(guess);
        guessInput.value = "";
        guessInput.focus();
    };
    function init() {
        var fireButton = document.getElementById("fireButton");
        var guessInput = document.getElementById("guessInput");
        var table = document.getElementById("grid");
        fireButton.onclick = handleFireButton;
        guessInput.onkeypress = function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                handleFireButton();
                return false;
            }
        };
        table.onclick = function(event) {
            var target = event.target;
            var guessInput = document.getElementById("guessInput");
            while (target !== table) {
                if (target.tagName === "TD") {
                    guessInput.value = target.id;
                    handleFireButton();
                    return false;
                }
                target = target.parentNode;
            }
        };
        model.generateShipLocations();
    };
    var view = {
        clearTimer: undefined,
        displayMessage: function(msg) {
            function clearMsg() {
                messageArea.innerHTML = "";
            }
            var messageArea = document.getElementById("messageArea");
            clearTimeout(this.clearTimer);
            clearMsg();
            messageArea.innerHTML = msg;
            this.clearTimer = setTimeout(clearMsg, 4000);
        },
        displayMiss: function(location) {
            var cell = document.getElementById(location);
            cell.setAttribute("class", "miss");
        },
        displayHit: function(location) {
            var cell = document.getElementById(location);
            cell.setAttribute("class", "hit");
        }
    };
    var model = {
        boardSize: 7,
        numShips: 3,
        shipLength: 3,
        shipsSunk: 0,
        direction: -1,
        ships: [{ locations: [0, 0, 0], hits: ["", "", ""], direction: -1 },
                { locations: [0, 0, 0], hits: ["", "", ""], direction: -1 },
                { locations: [0, 0, 0], hits: ["", "", ""], direction: -1 }],
        fire: function(guess) {
            for (var i = 0; i < this.numShips; i++) {
                var ship = this.ships[i];
                var index = ship.locations.indexOf(guess);
                if (index >= 0) {
                    ship.hits[index] = "hit";
                    view.displayHit(guess);
                    view.displayMessage("Попал, мерзавец!");
                    if (this.isSunk(ship)) {
                        view.displayMessage("Бляяя! Мы потеряли корабль!");
                        this.shipsSunk++;
                    }
                    return true;
                }
            }
            view.displayMiss(guess);
            view.displayMessage("Тварь косорылая!")
            return false;
        },
        isSunk: function(ship) {
            for (var i = 0; i < this.shipLength; i++) {
                if (ship.hits[i] !== "hit") {
                    return false;
                }
            }
            return true;
        },
        generateShipLocations: function() {
            var locations;
            for (var i = 0; i < this.numShips; i++) {
                do {
                    locations = this.generateShip();
                } while (this.collision(locations));
                this.ships[i].locations = locations;
                this.ships[i].direction = this.direction;
            }
        },
        generateShip: function() {
            this.direction = Math.floor(Math.random() * 2);
            var row, col;
            if (this.direction === 1) {
                row = Math.floor(Math.random() * this.boardSize);
                col = Math.floor(Math.random() * (this.boardSize - 3));
            } else {
                row = Math.floor(Math.random() * (this.boardSize - 3));
                col = Math.floor(Math.random() * this.boardSize);
            }
            var newShipLocations = [];
            for (var i = 0; i < this.shipLength; i++) {
                if (this.direction === 1) {
                    newShipLocations.push(row + "" + (col + i));
                } else {
                    newShipLocations.push((row + i) + "" + col);
                }
            }
            return newShipLocations;
        },
        collision: function(locations) {
            for (var i = 0; i < this.numShips; i++) {
                var ship = this.ships[i];
                for (var j = 0; j < locations.length; j++) {
                    var coord = "" + locations[j];
                    var coordY = +coord.charAt(0);
                    var coordX = +coord.charAt(1);
                    for (var k = 0; k < ship.locations.length; k++) {
                        var poss = "" + ship.locations[k];
                        var possY = +poss.charAt(0);
                        var possX = +poss.charAt(1);
                        var possYMinus = possY - 1;
                        var possYPlus = possY + 1;
                        var possXMinus = possX - 1;
                        var possXPlus = possX + 1;
                        if (coordY == possYMinus || coordY == possY || coordY == possYPlus) {
                            if (coordX == possXMinus || coordX == possX || coordX == possXPlus) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        }
    };
    var controller = {
        guesses: 0,
        processGuess: function(guess) {
            if (model.shipsSunk !== model.numShips) {
                var location = parseGuess(guess);
                if (location) {
                    this.guesses++;
                    var hit = model.fire(location);
                    if (hit && model.shipsSunk === model.numShips) {
                        view.displayMessage("Ты убил все мои корабли, гад! А произвел ты " + this.guesses + " выстрелов.");
                    }
                }
            }
        }
    };
    window.onload = init;

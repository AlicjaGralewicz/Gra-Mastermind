import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-szablon',
  templateUrl: './szablon.component.html',
  styleUrls: ['./szablon.component.scss']
})
export class SzablonComponent implements OnInit {

  selectedColor: number;
  x: number;
  y: number;
  p: string;
  p1: string;
  hidValue: boolean
  color;

  arrayMainBalls = [1, 2, 3, 4, 5, 6, 7, 8]

  newGameArray = [];

  gameBoard: number[][] = [];
  gameBoardResult: number[][] = [];

  private LICZBA_TUR = 9;
  numerRundy: number = 1;


  constructor() { }

  ngOnInit(): void {
   
    } 

  
  startGame() {
    this.newGameArray = [];
    this.gameBoard = [];
    this.gameBoardResult = [];

    while(this.newGameArray.length < 4){

      let newNum: number = (Math.floor(Math.random() * 8 + 1)) 
      if(!this.newGameArray.includes(newNum)){
        this.newGameArray.push(newNum)
      }
    
    }
    for (let i = 0; i < this.LICZBA_TUR; i++) {
      this.gameBoard.push([...Array(4)]);
      this.gameBoardResult.push([...Array(4)])
    }
   
    this.hidValue = true
    console.log(this.newGameArray);
    
  }

  onSelectColor(colorNumber: number) {
    this.selectedColor = colorNumber;

    if (colorNumber == 1) {
      this.color = 'czerwony'
    }
    if (colorNumber == 2) {
      this.color = 'zielony'
    }
    if (colorNumber == 3) {
      this.color = 'żółty'
    }
    if (colorNumber == 4) {
      this.color = 'brązowy'
    }
    if (colorNumber == 5) {
      this.color = 'granatowy'
    }
    if (colorNumber == 6) {
      this.color = 'pomarańczowy'
    }
    if (colorNumber == 7) {
      this.color = 'różowy'
    }
    if (colorNumber == 8) {
      this.color = 'szary'
    }
    this.p = 'Wybrano kolor: ' + this.color;
  }

  onSelectCell(x: number, y: number) {
    if (x === this.numerRundy - 1) {
      this.gameBoard[x][y] = this.selectedColor;
    }
  }


  onCheck() {
    if (this.gameBoard[this.numerRundy - 1][0] &&
      this.gameBoard[this.numerRundy - 1][1] &&
      this.gameBoard[this.numerRundy - 1][2] &&
      this.gameBoard[this.numerRundy - 1][3]) {
      this.onKulki()
      this.numerRundy++;
      console.log(this.newGameArray);
    }

  }

  onKulki() {
    this.gameBoard[this.numerRundy - 1].forEach((value: number, index: number) => {
      if (value === this.newGameArray[index]) {
        this.gameBoardResult[this.numerRundy - 1][index] = 3
      } else if (this.newGameArray.includes(value)) {
        this.gameBoardResult[this.numerRundy - 1][index] = 2
      } else {
        this.gameBoardResult[this.numerRundy - 1][index] = 1
      }

    })

    this.gameBoardResult[this.numerRundy - 1].sort((a, b) => b - a)

    let isWin: boolean = true;

    this.gameBoardResult[this.numerRundy - 1].forEach((value: number) => {
      if (value !== 3) {
        isWin = false;
      }
    });

    if (isWin) {
      this.p1 = "Wygrana !!!"
    } else if (this.numerRundy == 9) {
      this.p1 = "Przegrana !!!"
    }
  }

}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: any[]; //Is an array of 9 squares representing the board.
  xIsNext = false; //Is False when the 2nd player is next.
  winner = null; //Stores the winner, T if tie, or XO if there is no winner yet.
  numMoves = 0;
  tied = false;
  constructor() { this.squares = [];}

  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
    this.numMoves = 0;
    this.tied = false;
  }
  getPlayer() {
    return this.xIsNext ? 'X' : 'O';
  }
  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares.splice(idx, 1, this.getPlayer());
      this.xIsNext = !this.xIsNext;
      this.numMoves = this.numMoves + 1;
    }
    this.winner = this.calculateWinner();
  }
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    if (this.numMoves == 9) {
      this.tied = true;
    }
    return null;
  }
}

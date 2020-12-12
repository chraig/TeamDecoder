import { Component, OnInit, ViewChild, ElementRef, NgZone } from "@angular/core";


@Component({
    selector: 'MoveRect',
    templateUrl: "./playground.component.html",
    styleUrls: ["./playground.component.scss"]
})

export class PlaygroundComponent implements OnInit {
    title = 'tns-ng-template';

    @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
    ctx: CanvasRenderingContext2D;
    requestId;
    interval;
    squares: Square[] = [];

    constructor(private ngZone: NgZone) {
        // Use the component constructor to inject providers.
    }
  
    ngOnInit() {
        // Init your component properties here.
      this.ctx = this.canvas.nativeElement.getContext('2d');
      this.ctx.fillStyle = 'blue';

      this.ngZone.runOutsideAngular(() => this.tick());
      setInterval(() => {
        this.tick();
      }, 200);
    }

    tick() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.squares.forEach((square: Square) => {
        square.moveRight();
      });
      this.requestId = requestAnimationFrame(() => this.tick);
    }
  
    play() {
      const square = new Square(this.ctx);
      this.squares = this.squares.concat(square);
    }
  
    ngOnDestroy() {
      clearInterval(this.interval);
      cancelAnimationFrame(this.requestId);
    }
  }  

  export class Square {
    private color = 'red';
    private x = 0;
    private y = 0;
    private z = 30;
  
    constructor(private ctx: CanvasRenderingContext2D) {}
  
    moveRight() {
      this.x++;
      this.draw();
    }
  
    private draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.z * this.x, this.z * this.y, this.z, this.z);
    }
  }
  
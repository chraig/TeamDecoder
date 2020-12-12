export class ActivePlayer {
    private _nr: string;
    private _color: string = "rgba(58, 48, 85, 0.85)";
    private _x: number = 0;
    private _y: number = 0;

    constructor(private ctx: CanvasRenderingContext2D, private nr: number, private color: string) {

        this._nr = nr.toString();
        this._color = color;
        this.ctx.font = "Open Sans 40px";  // does this work?
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
    }

    positionOnPitch(player: Player, sequence_index: number = 0) {
        if (sequence_index <= player.player_sequence.length) {
            this._x = player.player_sequence[sequence_index].x;
            this._y = player.player_sequence[sequence_index].y;
        }
        this.draw();
    }

    private draw() {
        // this.ctx.beginPath();
        this.ctx.fillStyle = this._color;  //inside of circle
        // this.ctx.strokeStyle = "blue"; // frame-only circle
        // this.ctx.lineWidth = 10;  // frame-only circle

        this.ctx.arc(this._x, this._y, 10, 0, Math.PI / 180 * 360);
        this.ctx.fill();  // stroke() for frame-only circle

        this.ctx.beginPath();  // necessary for enabling text on circle 
        this.ctx.fillStyle = "white"; // circle text color
        this.ctx.fillText(this._nr, this._x, this._y);
        this.ctx.fill();  // fill text
    }
}

export interface SequenceItems {
    x: number;
    y: number;
}

export interface Player {
    player_key: number;
    player_name: string;
    player_number: number;
    player_type: string;
    player_sequence: Array<SequenceItems>;
    player_activated: ActivePlayer;
}

export interface Pitch {
    x: number;
    y: number;
}

export interface Colors {
    primary: string;
    secondary: string;
    selected: string;
}

export interface Team {
    colors: Colors;
    name: string;
    players: Array<Player>;
}

export interface MatchSequence {
    pitch: Pitch;
    sequence_timestamps: Array<Date>;
    teams: Array<Team>;
}

export class PitchAlignments {
    /*
    Pitch alignments:

    Reasoning:
        * pitches vary in sizein accordance to FIFA rules
        * depiction of player positions must adapt therefore
        
    Alignment specifications:
        * central aspect: distance between goals for calculating proportional position values
        * -> length factor _x_factor = x_max_target_pitch[px] / x_max_source_pitch[m]
        
        * target pitch calculation by length factor shifts centering regarding width
        * -> correction value _y_correction = (y_max_target_pitch[px] - (y_max_source_pitch[m] * _x_factor) ) / 2
    */

    private _x_factor: number = 0;      // factor to align positions according to field length
    private _y_correction: number = 0;  // correction offset for aligning to width center

    constructor() { }

    public calculatePitchAlignmentAttributes(x_max_target: number, x_max_source: number, y_max_target: number, y_max_source: number) {
        this._x_factor = x_max_target / x_max_source;
        this._y_correction = (y_max_target - y_max_source * this._x_factor) / 2;
    }

    public calculatePlayerPositions(players: Player[]) {
        players.forEach(player => {
            player.player_sequence.forEach(position => {
                position.x = position.x * this._x_factor;
                position.y = position.y * this._x_factor + this._y_correction;
            })
        });
        return players;
    }
}

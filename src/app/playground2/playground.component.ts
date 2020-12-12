import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, SkipSelf } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// login necessities
import { LoginService } from '@src/app/services/login/login.service';
import { Subscription } from 'rxjs';

import { ActivePlayer, MatchSequence, PitchAlignments } from "@src/app/playground2/match-sequence-data";


@Component({
    selector: 'MoveRect',
    templateUrl: "./playground.component.html",
    styleUrls: ["./playground.component.scss"]
})

export class PlaygroundComponent implements OnInit {

    private _userLoggedIn: boolean = false;
    private _subscription: Subscription;

    public _title = 'SequenceObserver';

    // field canvas variables
    @ViewChild('field_canvas', { static: true }) _field_canvas: ElementRef<HTMLCanvasElement>;
    private _fieldCtx: CanvasRenderingContext2D;
    private _fieldImg = new Image();

    // playback interval for displaying game sequences (set later)
    private _intervalId;
    private _animationFrameId;
    private _animationInterval: number = 100;

    // sequence data
    private _matchSequence: MatchSequence = null;
    private _sequenceIdx: number = 0;
    private _sequenceLen: number = 0;

    // pitch data
    private _pitch_alignments: PitchAlignments = null;

    _isPlaying: boolean = false;

    constructor(private loginService: LoginService, private httpClient: HttpClient, private ngZone: NgZone) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // get the current value
        this._subscription = this.loginService.getLoggedIn().subscribe(value => {
            this._userLoggedIn = value;
        });

        // define field canvas properties
        this._fieldCtx = this._field_canvas.nativeElement.getContext('2d');
        this._fieldCtx.canvas.width = 660;
        this._fieldCtx.canvas.height = 413.19;
        this._sequenceIdx = 0;
        this._animationInterval = 100;

        // load field image into canvas after acquired from path
        this._fieldImg.onload = () => {
            this._fieldCtx.drawImage(this._fieldImg, 0, 0, this._fieldCtx.canvas.width,
                this._fieldCtx.canvas.height);
        }
        this._fieldImg.src = "assets/images/Soccer_field.svg";
    }

    private tick() {
        // redraw the pitch for clearing old player indicators
        this._fieldCtx.drawImage(this._fieldImg, 0, 0, this._fieldCtx.canvas.width, this._fieldCtx.canvas.height);

        // position all active players on the pitch
        this._sequenceIdx = (this._sequenceIdx + 1) < this._sequenceLen ? ++this._sequenceIdx : 0;
        // add activePlayer objects to component
        this._matchSequence.teams.forEach(team => {
            team.players.forEach((player, idx) => {
                player.player_activated.positionOnPitch(team.players[idx], this._sequenceIdx);
            });
        });

        // the animation frame is handled by the browser and updates animations before repaints
        // better than setInterval/setTimeout alone as of browser optim., frame rate handling, only running when visible
        this._animationFrameId = requestAnimationFrame(() => this.tick.bind(this));
    }

    loadMatchSequence() {
        this.stop();
        this._sequenceIdx = 0;

        this.httpClient.get<MatchSequence>("assets/files/test_matchsequence.json").subscribe((data: MatchSequence) => {
            // apply team data to component variable
            this._matchSequence = data;

            this._sequenceLen = data.sequence_timestamps.length;

            this._pitch_alignments = new PitchAlignments();
            this._pitch_alignments.calculatePitchAlignmentAttributes(this._fieldCtx.canvas.width, data.pitch.x, this._fieldCtx.canvas.height, data.pitch.y);

            // team color selection
            this._matchSequence.teams[0].colors.selected = this._matchSequence.teams[0].colors.primary;
            this._matchSequence.teams[1].colors.selected = (this._matchSequence.teams[1].colors.primary != this._matchSequence.teams[0].colors.selected) ? this._matchSequence.teams[1].colors.primary : this._matchSequence.teams[1].colors.secondary;

            // add activePlayer objects to component
            this._matchSequence.teams.forEach(team => {
                team.players = this._pitch_alignments.calculatePlayerPositions(team.players);
                team.players.forEach(player => {
                    const activePlayer = new ActivePlayer(this._fieldCtx, player.player_number, team.colors.selected);
                    player.player_activated = activePlayer;
                });
            });

            // run canvas rendering
            this.ngZone.runOutsideAngular(() => this.tick());
        })
    }

    play() {
        if (this._matchSequence != null) {
            this.ngZone.runOutsideAngular(() => this.tick());
            this._intervalId = setInterval(() => {
                this.tick();
            }, this._animationInterval);
            this._isPlaying = true;
        }
    }

    stop() {
        clearInterval(this._intervalId);
        cancelAnimationFrame(this._animationFrameId);
        this._isPlaying = false;
    }

    togglePlay() {
        if (!this._isPlaying) {
            this.play();
        }
        else {
            this.stop();
        }
    }

    ngOnDestroy() {
        clearInterval(this._intervalId);
        cancelAnimationFrame(this._animationFrameId);

        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}

/*
Player movement

* normal seqence speed should feature player movement in real time
* how many sample points are needed for having a smooth transition of player indicators? -> AWS Bundesliga
* interpolate sample points in time if necessary
* time interpolation must at least support normal interval points, i.e. 100ms -> 10 steps/s
 */
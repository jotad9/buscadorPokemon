import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'search-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncerSubscripcion?: Subscription;
  private debouncer: Subject<string> = new Subject<string>();

  @Input() public placeholder: string='';
  @Input() public initialValue: string = '';
  @Output() public onValue= new EventEmitter<string>();
  @Output() public onDebounce= new EventEmitter<string>();

  emitValue(value:string):void{
    this.onValue.emit(value);

  }
  //Debouncing
  onKeyPress(term: string): void {
    this.debouncer.next(term);
  }

  ngOnInit(): void {
    this.debouncerSubscripcion=this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit(value);
    });
  }
  ngOnDestroy(): void {
    this.debouncerSubscripcion?.unsubscribe();
  }

}

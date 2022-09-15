import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.services';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListModule } from './photo-list.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardMockService } from 'src/app/shared/components/photo-board/services/photo-board-mock.services';

describe(PhotoListComponent.name + ' Mock Provider', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientModule
      ],
      providers: [{
        provide: PhotoBoardService,
        useClass: PhotoBoardMockService
      }],
      declarations: [ PhotoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`(D) Should display board when data arrives`, () => {
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).withContext('Shold display board').not.toBeNull();
    expect(loader).withContext('Shold not display loader').toBeNull();
  });
});

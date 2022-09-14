import { PhotoBoardModule } from './photo-board.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from './photo-board.component';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { buildPhotoList } from './test/build-photo-list';

describe(PhotoBoardComponent.name, () => {

  let fixture: ComponentFixture<PhotoBoardComponent>;
  let componet: PhotoBoardComponent;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    componet = fixture.componentInstance;
  });

  it(`Should display rows and columns when (@Input photos) has value`, () => {
    componet.photos = buildPhotoList();
    fixture.detectChanges();
    const change: SimpleChanges = {
      photos: new SimpleChange([], componet.photos, true)
    }
    componet.ngOnChanges(change);
    expect(componet.rows.length).withContext('Number of rows').toBe(2);
    expect(componet.rows[0].length).withContext('Number of columns from the first row').toBe(4);

    expect(componet.rows[1].length).withContext('Number of columns from the second row').toBe(4);
  });
})

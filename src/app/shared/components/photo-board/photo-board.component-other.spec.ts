import { PhotoBoardModule } from './photo-board.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from './photo-board.component';
import { Photo } from './interfaces/photo';
import { Component, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let i = 0; i < 8; i++) {
    photos.push({
      id: i+1,
      description: '',
      url: ''
    });
  }

  return photos;
}

describe(PhotoBoardComponent.name + ' - others', () => {

  let fixture: ComponentFixture<PhotoBoardTestComponent>;
  let componet: PhotoBoardTestComponent;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    componet = fixture.componentInstance;
  });

  it(`Should display rows and columns when (@Input photos) has value`, () => {
    componet.photos = buildPhotoList();
    fixture.detectChanges();

    expect(componet.board.rows.length).withContext('Number of rows').toBe(2);
    expect(componet.board.rows[0].length).withContext('Number of columns from the first row').toBe(4);

    expect(componet.board.rows[1].length).withContext('Number of columns from the second row').toBe(4);
  });
});


@Component({
  template: `
    <app-photo-board [photos]="photos">
    </app-photo-board>
  `
})
class PhotoBoardTestComponent {
  @ViewChild(PhotoBoardComponent) public board: PhotoBoardComponent;
  public photos: Photo[] = [];
}
